<script lang="ts">
	import Autocomplete from '../autocomplete/autocomplete.svelte';
	import type { AutocompleteOption } from '../autocomplete/types';
	import { twMerge } from 'tailwind-merge';
	import { addressPrepare, getAddress } from './address';
	// import { ddress } from './address';

	let province = '';
	let district = '';
	let subdistrict = '';
	let zipcode = '';

	let provinceList: AutocompleteOption[] = [];
	let districtList: AutocompleteOption[] = [];
	let subdistrictList: AutocompleteOption[] = [];
	let zipcodeList: AutocompleteOption[] = [];

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!province || !district || !subdistrict || !zipcode) {
			throw new Error('Missing fields');
		}

		alert(JSON.stringify({ province, district, subdistrict, zipcode }));
	}

	let option: AutocompleteOption[] = [
		{ label: '1', value: '1' },
		{ label: '1222', value: '1222' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' },
		{ label: '1', value: '1' }
	];
</script>

<form on:submit={onSubmit}>
	<Autocomplete
		name="test"
		emptyState="ไม่มี"
		placeholder="testt"
		bind:value={province}
		options={option}
	/>
	<button type="submit">Submit</button>
</form>
