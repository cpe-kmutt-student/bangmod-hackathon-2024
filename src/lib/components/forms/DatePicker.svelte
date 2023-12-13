<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	import { Calendar } from '../icons';

	export let value: undefined | string | Date = undefined;
	export let errors: string[] | undefined = undefined;

	export let required: boolean = false;

	const borderClasses = {
		base: 'border-iron-300 focus-within:border-iron-800 focus-within:border-2',
		red: 'border-scarlet-800 focus-within:border-scarlet-900 focus-within:border-2'
	};

	const colorClasses = {
		base: 'bg-[#fff9ed] text-asphalt',
		red: 'bg-[#fff9ed] text-scarlet-800 placeholder-scarlet-800'
	};

	const defaultClass =
		'relative flex items-center h-9 w-full rounded border p-2 font-light disabled:cursor-not-allowed';

	$: inputClass = twJoin(
		defaultClass,
		errors
			? twJoin(colorClasses.red, borderClasses.red)
			: twJoin(colorClasses.base, borderClasses.base)
	);

	let dateInput: HTMLInputElement;

	const setDate = () => {
		value = (dateInput.value as string).replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1');
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
			<input
				{...$$restProps}
				autocomplete="off"
				type="text"
				on:blur
				on:change
				on:click={() => {
					dateInput.showPicker();
				}}
				on:contextmenu
				on:focus
				on:keydown
				on:keypress
				on:keyup
				on:mouseover
				on:mouseenter
				on:mouseleave
				on:paste
				on:input
				class="h-full w-full outline-none bg-[#fff9ed]"
				bind:value
			/>
			<input
				class="pointer-events-none absolute top-0 h-full w-full opacity-0 bg-[#fff9ed]"
				type="date"
				tabindex="-1"
				on:input={setDate}
				bind:this={dateInput}
			/>
			<Calendar class={errors ? 'stroke-scarlet-800' : 'stroke-asphalt'} />
		</span>
	</label>
</div>
