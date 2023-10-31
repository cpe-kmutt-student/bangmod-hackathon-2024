<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
	import HorizontalTimeline from '$lib/components/homes/TimeLine/Horizontal/HorizontalTimeline.svelte';
	import TimeLineCard from '$lib/components/homes/TimeLine/TimeLineCard.svelte';
	import TimeLinePoint from '$lib/components/homes/TimeLine/TimeLinePoint.svelte';
</script>

<section
	use:inview={{rootMargin: '-10%'}}
	on:inview_enter={() => ($currentSection = Section.Timeline)}
	id="timeline-section"
	class="flex h-full flex-col items-center justify-center py-12 md:h-screen lg:py-24"
>
	<div
		class="mx-auto mb-8 w-fit rounded-xl bg-yellow-600 px-8 py-4 text-center text-base font-bold text-white shadow-xl lg:text-2xl"
	>
		ไทม์ไลน์
	</div>

	<div class="hidden flex-col space-y-2 md:flex">
		<HorizontalTimeline />
	</div>

	<div class="relative h-full w-full place-items-center md:hidden">
		<div class="absolute flex h-full w-full items-center justify-center">
			<div class="h-full w-2 rounded-xl bg-white lg:h-3 lg:w-full"></div>
		</div>

		<div class="grid grid-cols-9 lg:grid-cols-1 lg:grid-rows-5">
			<div class="lg:col-span-none col-span-4 lg:row-span-2">
				<TimeLineCard
					title="เปิดรับสมัคร"
					startTime={new Date('24 Oct 2022 00:00:00 GMT+0700')}
					endTime={new Date('10 Dec 2022 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-1 items-center place-self-center lg:row-span-1">
				<TimeLinePoint
					startTime={new Date('24 Oct 2022 00:00:00 GMT+0700')}
					endTime={new Date('10 Dec 2022 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-4 lg:row-span-2"></div>
		</div>

		<div class="grid grid-cols-9 lg:grid-cols-1 lg:grid-rows-5">
			<div class="lg:col-span-none col-span-4 lg:row-span-2"></div>
			<div class="lg:col-span-none col-span-1 place-self-center lg:row-span-1">
				<TimeLinePoint
					startTime={new Date('11 Dec 2022 00:00:00 GMT+0700')}
					endTime={new Date('19 Dec 2022 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-4 lg:row-span-2">
				<TimeLineCard
					title="ปิดรับสมัคร"
					startTime={new Date('11 Dec 2022 00:00:00 GMT+0700')}
					endTime={new Date('19 Dec 2022 23:59:59 GMT+0700')}
				/>
			</div>
		</div>

		<div class="grid grid-cols-9 lg:col-span-2 lg:grid-cols-1 lg:grid-rows-5">
			<div class="lg:col-span-none col-span-4 lg:row-span-2">
				<TimeLineCard
					title="การแข่งขันรอบคัดเลือก(Online)"
					startTime={new Date('24 Dec 2022 00:00:00 GMT+0700')}
					endTime={new Date('24 Dec 2022 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-1 place-self-center lg:row-span-1">
				<TimeLinePoint
					startTime={new Date('24 Dec 2022 00:00:00 GMT+0700')}
					endTime={new Date('24 Dec 2022 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-4 lg:row-span-2"></div>
		</div>

		<div class="grid grid-cols-9 lg:col-span-2 lg:grid-cols-1 lg:grid-rows-5">
			<div class="lg:col-span-none col-span-4 lg:row-span-2"></div>
			<div class="lg:col-span-none col-span-1 place-self-center lg:row-span-1">
				<TimeLinePoint
					startTime={new Date('25 Dec 2022 00:00:00 GMT+0700')}
					endTime={new Date('18 Jan 2023 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-4 lg:row-span-2">
				<TimeLineCard
					title="ประกาศผลผู้ที่ผ่านการคัดเลือกรอบแรก"
					startTime={new Date('25 Dec 2022 00:00:00 GMT+0700')}
					endTime={new Date('18 Jan 2023 23:59:59 GMT+0700')}
				/>
			</div>
		</div>

		<div class="grid grid-cols-9 lg:col-span-2 lg:grid-cols-1 lg:grid-rows-5">
			<div class="lg:col-span-none col-span-4 lg:row-span-2">
				<TimeLineCard
					title="การแข่งขันรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ (On-site)"
					startTime={new Date('19 Jan 2023 00:00:00 GMT+0700')}
					endTime={new Date('19 Jan 2023 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-1 place-self-center lg:row-span-1">
				<TimeLinePoint
					startTime={new Date('19 Jan 2023 00:00:00 GMT+0700')}
					endTime={new Date('19 Jan 2023 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-4 lg:row-span-2"></div>
		</div>

		<div class="grid grid-cols-9 lg:col-span-2 lg:grid-cols-1 lg:grid-rows-5">
			<div class="lg:col-span-none col-span-4 lg:row-span-2"></div>
			<div class="lg:col-span-none col-span-1 place-self-center lg:row-span-1">
				<TimeLinePoint
					startTime={new Date('19 Jan 2023 00:00:00 GMT+0700')}
					endTime={new Date('19 Jan 2023 23:59:59 GMT+0700')}
				/>
			</div>
			<div class="lg:col-span-none col-span-4 lg:row-span-2">
				<TimeLineCard
					title="ประกาศผลผู้ผ่านการคัดเลือกรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ"
					startTime={new Date('19 Jan 2023 00:00:00 GMT+0700')}
					endTime={new Date('19 Jan 2023 23:59:59 GMT+0700')}
				/>
			</div>
		</div>
	</div>
</section>
