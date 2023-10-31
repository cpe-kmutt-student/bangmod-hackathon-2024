<script>
	import { twMerge } from 'tailwind-merge';
</script>

<svg
	{...$$restProps}
	class={twMerge('h-6 w-6', $$props.class)}
	fill="none"
	preserveAspectRatio="xMidYMid meet"
	stroke="currentColor"
	stroke-width="1"
	viewBox="0 0 22.2 23.3"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="m11 23 10.5-11.4L11 .3M0 11.6h21.5" />
</svg>
