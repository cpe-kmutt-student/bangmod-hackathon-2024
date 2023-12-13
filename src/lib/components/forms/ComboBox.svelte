<script lang="ts">
	import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { twJoin, twMerge } from 'tailwind-merge';

	import { ChevronDown } from '$lib/components/icons';

	export let open: boolean = false;
	export let items: unknown[] = [];
	export let maxItems: number = 30;
	export let value: unknown = undefined;
	export let errors: string[] | undefined = undefined;
	export let required: boolean = false;

	export let filter: (query: string, item: unknown) => boolean = (query: string, item: unknown) => {
		if (query) {
			return (item as string).includes(query);
		} else {
			return true;
		}
	};

	$: filteredItem = items.filter((item) => filter(value as string, item)).slice(0, maxItems);

	let parentElement: Element;
	let popupElement: HTMLElement;
	let cleanup: () => void;

	const updatePosition = () => {
		computePosition(parentElement, popupElement, {
			placement: 'bottom',
			middleware: [flip(), offset(6), shift({ padding: 5 })]
		}).then(({ x, y }) => {
			Object.assign(popupElement.style, {
				left: `${x}px`,
				top: `${y}px`,
				width: `${parentElement.clientWidth}px`
			});
		});
	};

	$: if (parentElement && popupElement) {
		if (cleanup) cleanup();
		cleanup = autoUpdate(parentElement, popupElement, updatePosition);
	}

	onDestroy(() => {
		cleanup?.();
	});

	const closePopup = () => {
		if (cleanup) cleanup();
		open = false;
	};

	const openPopup = () => {
		open = true;
	};

	const borderClasses = {
		base: 'border-iron-300 focus-within:border-iron-800 focus-within:border-2',
		red: 'border-scarlet-800 focus-within:border-scarlet-900 focus-within:border-2'
	};

	const colorClasses = {
		base: 'bg-[#fff9ed] text-asphalt',
		red: 'bg-[#fff9ed] text-scarlet-800 placeholder-scarlet-800'
	};

	const defaultClasses = {
		base: 'w-full flex items-center gap-3 h-9 rounded border p-2 disabled:cursor-not-allowed'
	};

	$: inputClass = twJoin(
		defaultClasses.base,
		errors
			? twJoin(colorClasses.red, borderClasses.red)
			: twJoin(colorClasses.base, borderClasses.base)
	);
</script>

<label class={twMerge('flex flex-col gap-y-2', $$props.class)}>
	<span class={errors ? 'text-scarlet-800' : 'text-asphalt'}>
		<slot />
		{#if required}
			<span class="text-scarlet-800">*</span>
		{/if}
	</span>
	<span class={inputClass} bind:this={parentElement}>
		<input
			{...$$restProps}
			on:blur={closePopup}
			on:focusout={closePopup}
			on:change
			on:click
			on:contextmenu
			on:focus={openPopup}
			on:keydown
			on:keypress
			on:keyup
			on:mouseover
			on:mouseenter
			on:mouseleave
			on:paste
			on:input
			autocomplete="off"
			class="peer w-full font-light outline-none bg-[#fff9ed]"
			bind:value
		/>
		<ChevronDown
			class={twJoin(
				'mr-1 transition duration-100 peer-focus:rotate-180',
				errors ? 'stroke-scarlet-800' : 'stroke-asphalt'
			)}
		/>
	</span>
</label>
{#if open}
	<div
		bind:this={popupElement}
		transition:fly={{ y: -6, duration: 200 }}
		class="absolute flex max-h-56 z-50 flex-col divide-y overflow-y-auto rounded border bg-soapstone"
	>
		<slot name="list">
			{#each filteredItem as item}
				<button
					class="h-9 w-full grow px-2 text-left hover:bg-iron-100"
					on:mousedown={() => (value = item)}
				>
					{item}
				</button>
			{:else}
				<div class="h-9 px-2 flex items-center w-full">Not found</div>
			{/each}
		</slot>
	</div>
{/if}
