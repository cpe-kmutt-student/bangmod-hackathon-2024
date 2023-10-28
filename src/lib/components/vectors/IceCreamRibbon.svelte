<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	import IceCreamCone from '$lib/components/vectors/IceCreamCone.svelte';
	import IceCreamConeRotate from '$lib/components/vectors/IceCreamConeRotate.svelte';

	export let repeat: number = 20;
	let innerWidth: number;

	$: if (innerWidth) {
		repeat = Math.floor(innerWidth / 41);
	}
</script>

<svelte:window bind:innerWidth />
{#if innerWidth}
	<div class={twMerge('mb-16 flex items-center justify-center overflow-hidden', $$props.class)}>
		<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
		{#each Array(repeat) as _, idx}
			{#if idx % 2 === 0}
				<div class="w-10">
					<IceCreamCone class="m-0 w-12 p-0 " />
				</div>
			{:else}
				<div class="w-10">
					<IceCreamConeRotate class="m-0 w-12 p-0" />
				</div>
			{/if}
		{/each}
	</div>
{:else}
	<hr class="my-20 w-full lg:my-32" />
{/if}
