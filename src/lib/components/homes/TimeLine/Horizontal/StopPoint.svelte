<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	export let startTime: Date;
	export let endTime: Date;

	const currentTime = new Date();
	const isCurrentEvent = startTime <= currentTime && currentTime <= endTime;
</script>

<div class="col-span-1 mx-auto h-4 w-4 flex-none rounded-full bg-white">
	<div class="flex h-full w-full items-center justify-center">
		<div
			class={twJoin('h-2.5 w-2.5 rounded-full', isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]')}
		></div>
	</div>
</div>
