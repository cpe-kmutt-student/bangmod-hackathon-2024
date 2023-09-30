<script lang="ts">
	import Autocomplete from '../autocomplete/autocomplete.svelte';
	import type { AutocompleteOption } from '../autocomplete/types';
	import { addressPrepare, getAddress } from './address';

	let province = '';
	let district = '';
	let subdistrict = '';
	let zipcode = '';

	$: address = addressPrepare(getAddress({ province, district, subdistrict, zipcode }));

	$: provinceList = address?.province;
	$: districtList = address?.district;
	$: subdistrictList = address?.subdistrict;
	$: zipcodeList = address?.zipcode;

	function updateAddress() {
		provinceList = address.province;
		districtList = address.district;
		subdistrictList = address.subdistrict;
		zipcodeList = address.zipcode;
	}

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!province || !district || !subdistrict || !zipcode) {
			throw new Error('Missing fields');
		}

		alert(JSON.stringify({ province, district, subdistrict, zipcode }));
	}
</script>

<form on:submit={onSubmit} autocomplete="off">
	<Autocomplete
		name="province"
		emptyState="ไม่มีชื่อจังหวัดนี้"
		placeholder="จังหวัด"
		bind:value={province}
		options={provinceList}
		on:blur={() => {
			updateAddress();
		}}
	/>
	<Autocomplete
		name="district"
		emptyState="ไม่มีชื่ออำเภอ/เขตนี้"
		placeholder="อำเภอ / เขต"
		bind:value={district}
		options={districtList}
		on:blur={() => {
			updateAddress();
		}}
	/>
	<Autocomplete
		name="subdistrict"
		emptyState="ไม่มีชื่อตำบลนี้"
		placeholder="ตำบล"
		bind:value={subdistrict}
		options={subdistrictList}
		on:blur={() => {
			updateAddress();
		}}
	/>
	<Autocomplete
		name="province"
		emptyState="ไม่มีชื่อรหัสไปรษณีย์นี้"
		placeholder="รหัสไปรษณีย์"
		bind:value={zipcode}
		options={zipcodeList}
		on:blur={() => {
			updateAddress();
		}}
	/>
	<button type="submit">Submit</button>
</form>
