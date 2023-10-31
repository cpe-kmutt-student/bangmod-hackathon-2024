import * as path from 'node:path';

import { build } from 'esbuild';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { glob } from 'glob';

/**
 * @param {import('@sveltejs/kit').Adapter} adapter
 */
export function nodeCompat(adapter) {
	return {
		name: `${adapter.name} & node compat`,
		/**
		 * @param {import('@sveltejs/kit').Builder} builder
		 */
		async adapt(builder) {
			const build_dir = builder.getBuildDirectory('node-compat');

			builder.rimraf(build_dir);

			const server_dir = builder.getServerDirectory();
			const sources = await glob(path.join(server_dir, '**/*.js'), {
				nodir: true
			});

			await build({
				platform: 'browser',
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
