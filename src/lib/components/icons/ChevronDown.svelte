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
	stroke-width="1.5"
	stroke="currentColor"
	class={twMerge("h-6 w-6", $$props.class)}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
