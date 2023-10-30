<script lang="ts">
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let textElement: HTMLElement;
	let ready = false;

	export let baseDelay = 0;

	onMount(() => {
		const splitTexts = new SplitType(textElement);
		splitTexts.chars?.forEach((element, index) => {
			element.style.setProperty('animation-delay', `${(index * 20) + baseDelay}ms`)
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
			transform: rotate(5deg) translateY(2rem);
			opacity: 0;
		}
		to {
      transform: rotate(0deg) translateY(0px);
      opacity: 1;
		}
  }
</style>
