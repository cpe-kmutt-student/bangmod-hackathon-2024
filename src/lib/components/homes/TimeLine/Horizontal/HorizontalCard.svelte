<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	export let title: string;
	export let startTime: Date;
	export let endTime: Date;

	export let small: boolean | undefined = undefined;
	export let showStart: boolean = true;

	const currentTime = new Date();
	const isCurrentEvent = startTime <= currentTime && currentTime <= endTime;
</script>

<div class="col-span-5 -mx-3 flex h-24 flex-col rounded-xl bg-white px-2 pt-2">
	<div
		class={twJoin(
			'h-12 rounded-lg p-2 text-center text-white',
			isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]'
		)}
	>
		<div class={twJoin('flex h-full items-center justify-center', small ? 'text-xs' : 'text-sm')}>
			{title}
		</div>
	</div>
	<div
		class={twJoin(
			'm-auto text-sm font-extrabold',
			isCurrentEvent ? 'text-pink-500' : 'text-[#6C30A4]'
		)}
	>
		{(showStart ? startTime : endTime).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})}
	</div>
</div>
