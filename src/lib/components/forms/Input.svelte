<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	export let value: undefined | string | number = undefined;
	export let errors: string[] | undefined = undefined;

	export let required: boolean = false;

	const borderClasses = {
		base: 'border-iron-300 focus:border-iron-800 focus:border-2 invalid:border-scarlet-800 invalid:focus:border-scarlet-900',
		red: 'border-scarlet-800 focus:border-scarlet-900 focus:border-2'
	};

	const colorClasses = {
		base: 'bg-soapstone text-asphalt invalid:text-scarlet-800 invalid:placeholder-scarlet-800',
		red: 'bg-soapstone text-scarlet-800 placeholder-scarlet-800'
	};

	const defaultClass =
		'h-9 w-full peer rounded border p-2 disabled:cursor-not-allowed focus:outline-none font-light';

	$: inputClass = twJoin(
		defaultClass,
		errors
			? twJoin(colorClasses.red, borderClasses.red)
			: twJoin(colorClasses.base, borderClasses.base)
	);
</script>

<div class={$$props.class}>
	<label class="flex flex-col-reverse gap-y-2">
		<input
			{...$$restProps}
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
			bind:value
		/>
		<span
			class={twJoin(
				errors ? 'text-scarlet-800' : 'text-asphalt',
				'peer-invalid:text-scarlet-800'
			)}
		>
			<slot />
			{#if required}<span class="text-scarlet-800">*</span>{/if}
		</span>
	</label>
</div>
