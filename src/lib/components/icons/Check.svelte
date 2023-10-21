<script lang="ts">
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
</script>
<svg
	{...$$restProps}
	transition:fade={{ duration: 100 }}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1"
	stroke="currentColor"
	class={twMerge("h-6 w-6", $$props.class)}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M 19.2 7 L 9.3 16.9 4.8 12.4"></path>
</svg>
