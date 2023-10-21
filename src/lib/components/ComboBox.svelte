<script lang="ts">
	import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	let inputElement: Element;
	let popupElement: HTMLElement;

	const updatePosition = () => {
		computePosition(inputElement, popupElement, {
			placement: 'bottom',
			middleware: [flip(), offset(6), shift({ padding: 5 })]
		}).then(({ x, y }) => {
			Object.assign(popupElement.style, {
				left: `${x}px`,
				top: `${y}px`
			});
		});
	};

	let cleanup: () => void;

	$: if (inputElement && popupElement) {
		if (cleanup) cleanup();

		cleanup = autoUpdate(inputElement, popupElement, updatePosition);
	}

	onDestroy(() => {
		cleanup?.();
	});

	const openPopup = () => {
		open = true;
	};

	const handleDocumentClick = (ev: MouseEvent) => {
		if (ev.target != inputElement && ev.target != popupElement) {
			open = false;
		}
	};

	const defaultInputClass: string = 'w-80';

	export let open: boolean = false;
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	export let value: any = undefined;
</script>

<svelte:document on:click={handleDocumentClick} />

<!-- TODO: Make tab navigation working -->
<!-- TODO: Change popup content from slot to reduce repetition -->
<div>
	<input
		{...$$restProps}
		bind:this={inputElement}
		bind:value
		class={twMerge(defaultInputClass, $$props.class)}
		on:focus={openPopup}
		on:input
	/>
	{#if open}
		<div
			bind:this={popupElement}
			transition:fly={{ y: -6, duration: 200 }}
			class="absolute flex max-h-56 w-80 flex-col overflow-y-auto bg-slate-200"
		>
			<slot />
		</div>
	{/if}
</div>
