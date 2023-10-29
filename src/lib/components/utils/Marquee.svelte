<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let ready = false;
	let marqueeWidth: number;
	let repeat: number = 1;

	onMount(() => {
		ready = true;
	});

	$: repeat = Math.floor(marqueeWidth / 450) || 1;
</script>
<svelte:window bind:innerWidth={marqueeWidth}/>
<div class={twMerge('flex gap-4 overflow-hidden select-none max-w-full', $$props.class)} role='banner'>
	{#if ready}
		<div
			class="shrink-0 flex items-center justify-around min-w-full gap-4 animate-marquee"
		>
			<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
			{#each Array(repeat) as _}
				<slot />
			{/each}
		</div>
		<div
			class="shrink-0 flex items-center justify-around min-w-full gap-4 animate-marquee"
			aria-hidden="true"
		>
			<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
			{#each Array(repeat) as _}
				<slot />
			{/each}
		</div>
	{/if}
</div>
