<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let value: string | undefined = '';
	export let files: FileList | undefined = undefined;
	export let defaultClass: string | undefined =
		'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';

	let input: HTMLInputElement;

	const keydownHandle = (ev: KeyboardEvent) => {
		if ([' ', 'Enter'].includes(ev.key)) {
			ev.preventDefault();
			input.click();
		}
	};

	const dropHandle = (ev: DragEvent) => {
		ev.preventDefault();
		if (ev.dataTransfer?.files && ev.dataTransfer?.files.length <= 1){
			files = ev.dataTransfer?.files
		} else {
			alert("More than 1 file is dropped!")
		}
	};

	const dragOverHandle = (ev: DragEvent) => {
		ev.preventDefault();
	};

	const removeAllFile = (ev: MouseEvent) => {
		ev.preventDefault();
		files = undefined;
	};
</script>

<button
	class={twMerge(defaultClass, $$props.class)}
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
	type="button"
>
	<label
		class="relative flex h-full w-full flex-col items-center justify-center text-sm text-slate-800 dark:text-slate-200"
		tabIndex="0"
	>
		<input
			{...$$restProps}
			bind:value
			bind:files
			bind:this={input}
			on:change
			on:click
			type="file"
			class="hidden h-full w-full"
		/>
		{#if files && files.length > 0}
			{#each files as file}
				<span>{file.name}<br /></span>
			{/each}
			<button class="absolute right-1 top-1 text-red-400" on:click={removeAllFile}>Delete</button>
		{:else}
			<svg
				aria-hidden="true"
				class="mb-3 h-10 w-10 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/>
			</svg>
			<span class="font-semibold">Click to upload</span> or drag and drop
		{/if}
	</label>
</button>
