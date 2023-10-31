<script>
	import HorizontalCard from '$lib/components/homes/TimeLine/Horizontal/HorizontalCard.svelte';
	import StopPoint from '$lib/components/homes/TimeLine/Horizontal/StopPoint.svelte';

	const timeLines = [
		{
			title: 'เปิดรับสมัคร',
			small: false,
			showStart: true,
			startTime: new Date('31 Oct 2023 00:00:00 GMT+0700'),
			endTime: new Date('25 Nov 2023 23:59:59 GMT+0700')
		},
		{
			title: 'ปิดรับสมัคร',
			small: false,
			showStart: false,
			startTime: new Date('20 Nov 2023 00:00:00 GMT+0700'),
			endTime: new Date('25 Nov 2023 23:59:59 GMT+0700')
		},
		{
			title: 'การแข่งขันรอบคัดเลือก (Online)',
			small: true,
			showStart: true,
			startTime: new Date('25 Dec 2023 00:00:00 GMT+0700'),
			endTime: new Date('25 Dec 2023 23:59:59 GMT+0700')
		},
		{
			title: 'ประกาศผลผู้ผ่านการคัดเลือก',
			small: true,
			showStart: true,
			startTime: new Date('29 Dec 2023 00:00:00 GMT+0700'),
			endTime: new Date('18 Jan 2024 23:59:59 GMT+0700')
		},
		{
			title: 'การแข่งขันรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ (On-Site)',
			small: true,
			showStart: true,
			startTime: new Date('19 Jan 2024 00:00:00 GMT+0700'),
			endTime: new Date('19 Jan 2024 23:59:59 GMT+0700')
		},
		{
			title: 'ประกาศผลผู้ผ่านการคัดเลือกรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ',
			small: true,
			showStart: true,
			startTime: new Date('19 Jan 2024 00:00:00 GMT+0700'),
			endTime: new Date('19 Jan 2024 23:59:59 GMT+0700')
		}
	];

	let upperCards = timeLines.filter((_, idx) => idx % 2 === 0);
	let lowerCards = timeLines.filter((_, idx) => idx % 2 === 1);
</script>

<div class="grid-cols-28 grid">
	<div class="col-span-1" />
	{#each upperCards as card}
		<HorizontalCard
			title={card.title}
			startTime={card.startTime}
			endTime={card.endTime}
			small={card.small}
			showStart={card.showStart}
		/>
		<div class="col-span-3" />
	{/each}
</div>
<div class="grid-cols-28 grid items-center">
	<div class="col-span-3 mr-2 h-2 w-full rounded-lg bg-white" />
	{#each timeLines as timeLine}
		<StopPoint startTime={timeLine.startTime} endTime={timeLine.endTime} />
		<div class="col-span-3 mr-2 h-2 w-full rounded-lg bg-white" />
	{/each}
</div>
<div class="grid-cols-28 grid">
	<div class="col-span-5" />
	{#each lowerCards as card}
		<HorizontalCard
			title={card.title}
			startTime={card.startTime}
			endTime={card.endTime}
			small={card.small}
			showStart={card.showStart}
		/>
		<div class="col-span-3" />
	{/each}
</div>
