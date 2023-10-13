<script lang="ts">
	export let checked: boolean | undefined = undefined;
</script>

<input
	{...$$restProps}
	bind:checked={checked}
	type="checkbox"
	class="disabled:border-steel-400 disabled:bg-steel-400 peer relative h-6 w-6 shrink-0 appearance-none rounded-sm border border-stone-950 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
/>
<svg
	class="pointer-events-none absolute m-1 hidden h-4 w-4 peer-checked:block"
	width="18"
	height="13"
	viewBox="0 0 18 13"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M17 1L6 12L1 7" stroke="#0D0D02" stroke-linecap="square" stroke-linejoin="round" />
</svg>
