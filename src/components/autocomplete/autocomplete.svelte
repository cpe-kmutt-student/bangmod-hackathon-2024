<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { AutocompleteOption } from './types';
	import Options from './options.svelte';
	import { createEventDispatcher } from 'svelte';

	export let value: string;
	export let placeholder = 'Search';
	export let name = 'name';
	export let options: AutocompleteOption[] = [];
	export let emptyState = '';
	export let showOptions = false;

	let key = '';

	const dispatch = createEventDispatcher();

	function delay(callback: () => void, time = 100) {
		setTimeout(callback, time);
	}

	function onFlavorSelection(event: CustomEvent<AutocompleteOption>): void {
		value = event.detail.label;
		dispatch('select', event);
		showOptions = false;
	}

	function blurHandler() {
		if (key != 'Tab') return delay(() => (showOptions = false));
	}
</script>

<div class="relative">
	<input
		class={twMerge('z-10 h-8 w-full rounded-md px-2 text-slate-600 placeholder:text-slate-400')}
		type="search"
		bind:value
		{name}
		{placeholder}
		autocomplete="off"
		on:abort
		on:blur={blurHandler}
		on:change
		on:keydown={(e) => (key = e.key)}
		on:focus={() => (showOptions = true)}
		{...$$restProps}
	/>
	{#if showOptions}
		<div class="absolute top-6 z-10 mt-4 w-full">
			<Options
				bind:input={value}
				on:selection={onFlavorSelection}
				{options}
				{emptyState}
				regionNav={twMerge('')}
				regionList={twMerge('overflow-auto max-h-40 bg-white rounded-md text-slate-300')}
				regionItem={twMerge('bg-slate-600 hover:bg-slate-700 east-in-out duration-100')}
				regionEmpty={twMerge('bg-white rounded-md bg-slate-600 text-slate-300 p-1')}
				regionButton={twMerge('')}
			/>
		</div>
	{/if}
</div>
