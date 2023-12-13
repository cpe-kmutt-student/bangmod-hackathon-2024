<script lang="ts">
	import '../app.pcss';

	import { fade } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#key data.url}
	<div
		transition:fade
		class="w-full h-full overflow-x-hidden"
	>
		<slot />
	</div>
{/key}
