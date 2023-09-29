<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { AutocompleteOption } from './types';

	type AutocompleteEvent = {
		selection: AutocompleteOption;
	};

	const dispatch = createEventDispatcher<AutocompleteEvent>();

	export let input: unknown = undefined;
	export let options: AutocompleteOption[] = [];
	export let limit: number | undefined = undefined;

	export let emptyState = 'No Results Found.';

	export let regionNav = '';
	export let regionList = 'list-nav';
	export let regionItem = '';
	export let regionButton = 'w-full';
	export let regionEmpty = 'text-center';

	$: listedOptions = options;

	function filterOptions(): AutocompleteOption[] {
		let _options = [...listedOptions];
		_options = _options.filter((option) => {
			const inputFormatted = String(input).toLowerCase().trim();
			let optionFormatted = JSON.stringify([option.label, option.value]).toLowerCase();
			if (optionFormatted.includes(inputFormatted)) return option;
		});
		return _options;
	}

	function onSelection(option: AutocompleteOption) {
		dispatch('selection', option);
	}

	$: optionsFiltered = input ? filterOptions() : [];
	$: sliceLimit = limit !== undefined ? limit : optionsFiltered.length;

	$: classesBase = `${$$props.class ?? ''}`;
	$: classesNav = `${regionNav}`;
	$: classesList = `${regionList}`;
	$: classesItem = `${regionItem}`;
	$: classesButton = `${regionButton}`;
	$: classesEmpty = `${regionEmpty}`;
</script>

<div class="autocomplete {classesBase} z-50" data-testid="autocomplete">
	{#if optionsFiltered.length > 0}
		{#if optionsFiltered[0].value != input}
			<nav class="autocomplete-nav {classesNav}">
				<ul class="autocomplete-list {classesList}">
					{#each optionsFiltered.slice(0, sliceLimit) as option (option)}
						<li class="autocomplete-item {classesItem}">
							<button
								class="autocomplete-button w-full {classesButton}"
								type="button"
								on:click={() => onSelection(option)}
								on:click
								on:keypress
							>
								{@html option.label}
							</button>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	{:else}
		<div class="autocomplete-empty {classesEmpty}">{emptyState}</div>
	{/if}
</div>
