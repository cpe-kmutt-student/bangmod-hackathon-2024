import * as path from 'node:path';

import type { Adapter, Builder } from '@sveltejs/kit';
import { build } from 'esbuild';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { glob } from 'glob';

export function nodeCompat(adapter: Adapter) {
	return {
		name: `${adapter.name} & node compat`,
		async adapt(builder: Builder) {
			const build_dir = builder.getBuildDirectory('node-compat');

			builder.rimraf(build_dir);

			const server_dir = builder.getServerDirectory();
			const sources = await glob(path.join(server_dir, '**/*.js'), {
				nodir: true
			});

			await build({
				conditions: ['worker', 'workerd', 'browser'],
				entryPoints: sources,
				outdir: build_dir,
				format: 'esm',
				bundle: true,
				loader: {
					'.wasm': 'copy'
				},
				external: ['cloudflare:*'],
				plugins: [
					nodeModulesPolyfillPlugin({
						globals: {
							process: true,
							Buffer: true
						}
					})
				]
			});

			builder.getServerDirectory = () => build_dir;

			adapter.adapt(builder);
		}
	};
}
