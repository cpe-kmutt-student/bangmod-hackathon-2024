<script lang="ts">
	import AddressDB from '$lib/addressDB';
	import type { address } from '$lib/addressDB';
	import ComboBox from '$lib/components/ComboBox.svelte';

	let current_address: address = {
		sub_district: '',
		district: '',
		province: '',
		zipcode: ''
	};

	let resultAddresses: address[] = [];

	const searchSubDistrict = (query: string) => {
		resultAddresses = AddressDB.filter((i) => i.sub_district.includes(query)).slice(0, 10);
	};

	const searchDistrict = (query: string) => {
		resultAddresses = AddressDB.filter((i) => i.district.includes(query)).slice(0, 10);
	};

	const searchProvince = (query: string) => {
		resultAddresses = AddressDB.filter((i) => i.province.includes(query)).slice(0, 10);
	};

	const searchZipcode = (query: string) => {
		resultAddresses = AddressDB.filter((i) => i.zipcode.includes(query)).slice(0, 10);
	};

	const addressStringify = (Address: address) => {
		return `${Address.sub_district} > ${Address.district} > ${Address.province} > ${Address.zipcode}`;
	};
</script>

<!-- TODO: Need a lot of refactorings -->
<div class="flex flex-col space-y-2">
	<label class="flex flex-row text-slate-800 dark:text-slate-200">
		<span class="grow">ตำบล</span>
		<ComboBox
			class="text-slate-800"
			type="text"
			name="sub_district"
			bind:value={current_address.sub_district}
			on:input={() => searchSubDistrict(current_address.sub_district)}
		>
			{#each resultAddresses as resultAddress}
				<button
					class="border-b-2 border-b-amber-950 text-slate-800"
					on:click={() => {
						current_address = JSON.parse(JSON.stringify(resultAddress))
					}}
				>
					{addressStringify(resultAddress)}
				</button>
			{/each}
		</ComboBox>
	</label>
	<label class="flex flex-row text-slate-800 dark:text-slate-200">
		<span class="grow">อำเภอ</span>
		<ComboBox
			class="text-slate-800"
			type="text"
			name="district"
			bind:value={current_address.district}
			on:input={() => searchDistrict(current_address.district)}
		>
			{#each resultAddresses as resultAddress}
				<button
					class="border-b-2 border-b-amber-950 text-slate-800"
					on:click={() => {
						current_address = JSON.parse(JSON.stringify(resultAddress))
					}}
				>
					{addressStringify(resultAddress)}
				</button>
			{/each}
		</ComboBox>
	</label>
	<label class="flex flex-row text-slate-800 dark:text-slate-200">
		<span class="grow">จังหวัด</span>
		<ComboBox
			class="text-slate-800"
			type="text"
			name="province"
			bind:value={current_address.province}
			on:input={() => searchProvince(current_address.province)}
		>
			{#each resultAddresses as resultAddress}
				<button
					class="border-b-2 border-b-amber-950 text-slate-800"
					on:click={() => {
						current_address = JSON.parse(JSON.stringify(resultAddress))
					}}
				>
					{addressStringify(resultAddress)}
				</button>
			{/each}
		</ComboBox>
	</label>
	<label class="flex flex-row text-slate-800 dark:text-slate-200">
		<span class="grow">รหัสไปรษณีย์</span>
		<ComboBox
			class="text-slate-800"
			type="text"
			name="zipcode"
			bind:value={current_address.zipcode}
			on:input={() => searchZipcode(current_address.zipcode)}
		>
			{#each resultAddresses as resultAddress}
				<button
					class="border-b-2 border-b-amber-950 text-slate-800"
					on:click={() => {
						current_address = JSON.parse(JSON.stringify(resultAddress))
					}}
				>
					{addressStringify(resultAddress)}
				</button>
			{/each}
		</ComboBox>
	</label>
</div>
