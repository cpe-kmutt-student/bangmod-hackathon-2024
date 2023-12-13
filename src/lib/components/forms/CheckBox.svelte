<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	import { Check } from '../icons';

	export let checked: boolean | undefined = undefined;
	export let errors: string[] | undefined = undefined;

	export let required: boolean = false;

	const borderClasses = {
		base: 'border-[#47537C] focus:border-iron-800 focus:border-2',
		red: 'border-scarlet-800 focus:border-scarlet-900 focus:border-2'
	};

	const colorClasses = {
		base: 'bg-soapstone text-asphalt',
		red: 'bg-soapstone text-scarlet-800 placeholder-scarlet-800'
	};

	const defaultClasses = {
		base: 'w-full h-full appearance-none border rounded peer disabled:cursor-not-allowed checked:border-asphalt'
	};

	$: inputClass = twJoin(
		defaultClasses.base,
		errors
			? twJoin(colorClasses.red, borderClasses.red)
			: twJoin(colorClasses.base, borderClasses.base)
	);
</script>

<div class={$$props.class}>
	<label class="flex gap-2">
		<span class="relative h-6 w-6 shrink-0">
			<input
				{...$$restProps}
				type="checkbox"
				on:blur
				on:change
				on:click
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
				class={inputClass}
				bind:checked
			/>
			<span class="absolute inset-0 hidden items-center justify-items-center peer-checked:flex">
				<Check class="m-auto stroke-asphalt" />
			</span>
		</span>
		<span class={errors ? 'text-scarlet-800' : 'text-asphalt'}>
			<slot />
			{#if required}<span class="text-scarlet-800">*</span>{/if}
		</span>
	</label>
</div>
