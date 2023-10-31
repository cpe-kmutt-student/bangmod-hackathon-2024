<script lang="ts">
	import {twMerge} from "tailwind-merge";

	export let src: string | undefined = undefined;
</script>

<div {...$$restProps} class={twMerge("m-2 flex w-[14rem] flex-col rounded-3xl bg-white px-4 py-10 shadow-2xl", $$props.class)}>
	<div class="mx-auto w-2/3">
		<img class="h-36 object-scale-down" alt="" {src} />
	</div>

	<div class="mt-4 flex h-full flex-col items-center text-center">
		<slot />
	</div>
</div>
