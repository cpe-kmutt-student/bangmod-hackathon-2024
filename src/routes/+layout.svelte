<script lang="ts">
	import '../app.pcss';

	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#key data.url}
	<div
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
		class="w-full"
	>
		<slot />
	</div>
{/key}

<style>
	div {
		position: absolute;
		inset: 0;
	}
</style>
