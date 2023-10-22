<script lang="ts">
	import { ComboBox } from '$lib/components/forms';
	import ThaiAddress from '$lib/data/thai_address.json';

	type Error = string[] | undefined;

	export let errors: {
		sub_district: Error;
		district: Error;
		province: Error;
		zipcode: Error;
	} = {
		sub_district: undefined,
		district: undefined,
		province: undefined,
		zipcode: undefined
	};

	export let name: {
		sub_district: string | undefined;
		district: string | undefined;
		province: string | undefined;
		zipcode: string | undefined;
	} = {
		sub_district: '',
		district: '',
		province: '',
		zipcode: ''
	};

	export let required: boolean | undefined;

	type Address = {
		sub_district: string;
		district: string;
		province: string;
		zipcode: string;
	};

	export let value: Address = {
		sub_district: '',
		district: '',
		province: '',
		zipcode: ''
	};

	let resultAddress: Address[] = [];

	const addressFilter = (field: keyof Address) => {
		resultAddress =
			value[field] != ''
				? ThaiAddress.filter((i) => i[field].includes(value[field])).slice(0, 20)
				: [];
	};

	const addressStringify = (address: Address) => {
		return `${address.sub_district}, ${address.district}, ${address.province}, ${address.zipcode}`;
	};

	const fields: (keyof Address)[] = ['sub_district', 'district', 'province', 'zipcode'];

	const label: Address = {
		sub_district: 'ตำบล / แขวง',
		district: 'อำเภอ / เขต',
		province: 'จังหวัด',
		zipcode: 'รหัสไปรษณีย์'
	};
</script>

{#each fields as field}
	<ComboBox
		on:input={() => addressFilter(field)}
		bind:value={value[field]}
		name={name[field]}
		errors={errors[field]}
		{required}
	>
		{label[field]}
		<svelte:fragment slot="list">
			{#each resultAddress as item}
				<button
					class="min-h-[2.25rem] w-full shrink-0 grow px-2 text-left font-light hover:bg-iron-100"
					on:mousedown={() => (value = JSON.parse(JSON.stringify(item)))}
				>
					{addressStringify(item)}
				</button>
			{:else}
				<div class="h-9 px-2 flex items-center w-full font-light">ไม่พบ</div>
			{/each}
		</svelte:fragment>
	</ComboBox>
{/each}
