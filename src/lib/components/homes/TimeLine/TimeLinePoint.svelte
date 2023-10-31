<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	export let startTime: Date;
	export let endTime: Date;

	const currentTime = new Date();
	const isCurrentEvent = startTime <= currentTime && currentTime <= endTime;
</script>

<div class="relative flex h-5 w-5 items-center justify-center rounded-full bg-white">
	<div
		class={twJoin('absolute h-3 w-3 rounded-full', isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]')}
	></div>
</div>
