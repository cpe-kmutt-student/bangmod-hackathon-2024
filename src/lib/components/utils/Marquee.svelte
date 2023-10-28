<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export let repeat: number = 1;

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>
<!-- TODO:Need to fix text overlap when using in small width -->
<div class={twMerge('relative flex min-w-0 overflow-hidden', $$props.class)} role="banner">
	{#if ready}
		<div
			class="absolute inset-0 flex min-w-0 animate-marquee items-center justify-around overflow-hidden whitespace-nowrap"
		>
			<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
			{#each Array(repeat) as _}
				<slot />
			{/each}
		</div>
		<div
			class="absolute inset-0 flex min-w-0 animate-marquee2 items-center justify-around overflow-hidden whitespace-nowrap"
		>
			<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
			{#each Array(repeat) as _}
				<slot />
			{/each}
		</div>
	{/if}
</div>
