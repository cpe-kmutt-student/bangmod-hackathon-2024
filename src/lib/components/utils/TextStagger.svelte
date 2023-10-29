<script lang="ts">
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let textElement: HTMLElement;
	let ready = false;

	onMount(() => {
		const splitTexts = new SplitType(textElement);
		splitTexts.chars?.forEach((i, index) => {
			i.style.setProperty('animation-delay', `${index * 20}ms`)
		})

		ready = true;
	});
</script>

<div
	bind:this={textElement}
	{...$$restProps}
	class={twMerge(ready ? 'opacity-100' : 'opacity-0', $$props.class)}
>
	<slot />
</div>

<style>
  :global(.char) {
		animation-name: floatUp;
		animation-duration: 400ms;
		animation-iteration-count: 1;
    animation-fill-mode: both;
	}

	@keyframes floatUp {
		from {
			transform: rotate(5deg) translateY(50px);
			opacity: 0;
		}
		to {
      transform: rotate(0deg) translateY(0px);
      opacity: 1;
		}
  }
</style>
