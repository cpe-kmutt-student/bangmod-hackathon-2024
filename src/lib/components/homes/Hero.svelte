<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	import { CircularText } from '$lib/components/utils';
	import { Icon } from '$lib/components/vectors';
</script>

<div
	{...$$restProps}
	class={twMerge('fixed z-[-10] flex h-screen w-full bg-sandy text-white', $$props.class)}
>
	<h1
		class="absolute flex h-full w-full items-center justify-center text-clip text-center text-[3rem] font-bold tracking-wide text-transparent md:text-[5rem]"
	>
		<span class="absolute -z-10">
			<CircularText />
		</span>
		<Icon />
	</h1>
</div>
