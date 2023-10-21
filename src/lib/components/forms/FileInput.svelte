<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';

	import { Upload } from '../icons';

	let inputElement: HTMLInputElement;

	export let value: undefined | string = undefined;
	export let errors: string[] | undefined = undefined;
	export let files: FileList | undefined = undefined;
	export let required: boolean = false;

	const keydownHandle = (ev: KeyboardEvent) => {
		if ([' ', 'Enter'].includes(ev.key)) {
			ev.preventDefault();
			inputElement.click();
		}
	};

	const dropHandle = (ev: DragEvent) => {
		ev.preventDefault();
		if (ev.dataTransfer?.files) {
			inputElement.files = ev.dataTransfer?.files;
		} else {
			alert('More than 1 file is dropped!');
		}
	};

	const dragOverHandle = (ev: DragEvent) => {
		ev.preventDefault();
	};

	const borderClasses = {
		base: 'border-iron-300 focus:border-iron-800 focus:border-2',
		red: 'border-scarlet-800 focus:border-scarlet-900 focus:border-2'
	};

	const colorClasses = {
		base: 'bg-soapstone text-asphalt',
		red: 'bg-soapstone text-scarlet-800 placeholder-scarlet-800'
	};

	const defaultClasses = {
		base: 'flex flex-row items-center h-9 rounded-full py-1 pl-4 pr-1 border disabled:cursor-not-allowed focus:outline-none'
	};

	$: inputClass = twJoin(
		defaultClasses.base,
		errors
			? twJoin(colorClasses.red, borderClasses.red)
			: twJoin(colorClasses.base, borderClasses.base)
	);
</script>

<label class={twMerge('flex flex-col gap-1 font-light lg:flex-row', $$props.class)}>
	<span
		class={twJoin(errors ? 'text-scarlet-800' : 'text-asphalt', 'basis-1/2')}
	>
		<slot />
		{#if required}<span class="text-scarlet-800">*</span>{/if}
	</span>
	<span
		role="button"
		class={inputClass}
		tabindex="0"
		on:keydown={keydownHandle}
		on:focus
		on:blur
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:dragenter
		on:dragleave
		on:dragover={dragOverHandle}
		on:drop={dropHandle}
	>
		<input
			{...$$restProps}
			class="pointer-events-none w-full file:hidden"
			type="file"
			bind:this={inputElement}
			bind:files
			bind:value
			on:change
			on:click
		/>
		<span
			class={twJoin(
				"flex h-7 items-center justify-center gap-2 rounded-full px-4 font-latin text-sm text-soapstone",
				errors ? 'bg-scarlet-800' : 'bg-asphalt'
			)}
		>
			<Upload />
			UPLOAD
		</span>
	</span>
</label>
