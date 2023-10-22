<script>
	import { twMerge } from 'tailwind-merge';
</script>

<svg
	{...$$restProps}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1"
	stroke="currentColor"
	class={twMerge('h-6 w-6', $$props.class)}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M16.7 5.8H7.3c-.8 0-1.4.6-1.4 1.4v9.4c0 .8.6 1.4 1.4 1.4h9.4c.8 0 1.4-.6 1.4-1.4V7.2c0-.8-.6-1.4-1.4-1.4Zm-2-1.3v2.7M9.3 4.5v2.7M5.9 9.9h12.2"
	/>
</svg>