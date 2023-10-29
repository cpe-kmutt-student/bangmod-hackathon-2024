<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	import { Calendar } from '../icons';

	export let value: undefined | string | Date = undefined;
	export let errors: string[] | undefined = undefined;

	export let required: boolean = false;

	const borderClasses = {
		base: 'border-iron-300 focus-within:border-iron-800 focus-within:border-2',
		red: 'border-scarlet-800 focus-within:border-scarlet-900 focus-within:border-2'
	};

	const colorClasses = {
		base: 'bg-soapstone text-asphalt',
		red: 'bg-soapstone text-scarlet-800 placeholder-scarlet-800'
	};

	const defaultClass =
		'relative flex items-center h-9 w-full rounded border p-2 font-light disabled:cursor-not-allowed ';

	$: inputClass = twJoin(
		defaultClass,
		errors
			? twJoin(colorClasses.red, borderClasses.red)
			: twJoin(colorClasses.base, borderClasses.base)
	);

	let dateInput: HTMLInputElement;

	const setDate = () => {
		value = (dateInput.value as string).replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1');
		console.log(value);
	};
</script>

<!-- This uses very hacky method -->
<div class={$$props.class}>
	<label class="flex flex-col gap-y-2">
		<span class={errors ? 'text-scarlet-800' : 'text-asphalt'}>
			<slot />
			{#if required}<span class="text-scarlet-800">*</span>{/if}
		</span>
		<span class={inputClass}>
			<Flatpickr
				{...$$restProps}
				options={{ dateFormat: 'd/m/Y' }}
				on:change={setDate}
				class="absolute left-1 h-full w-[90%] p-2 focus:outline-none"
			/>
			<Calendar
				class={errors
					? 'absolute right-1  stroke-scarlet-800'
					: 'absolute right-1   stroke-asphalt'}
			/>
		</span>
	</label>
</div>
