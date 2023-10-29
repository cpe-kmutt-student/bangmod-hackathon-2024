<script lang="ts">
	import { fly } from 'svelte/transition'

	import "../app.pcss"

	export let data
</script>

{#key data.url}
	<div
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
		class='w-full'
	>
		<slot />
	</div>
{/key}