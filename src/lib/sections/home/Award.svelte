<script>
	import { twMerge } from 'tailwind-merge';

	import { TrophyHonored, TrophySecond, TrophyThird, TrophyWinner } from '$lib/components/vectors';

	const awards = [
		{
			name: 'รางวัลชนะเลิศ',
			badge: TrophyWinner,
			reward: '30,000 บาท\nพร้อมโล่รางวัลประกาศเกียรติคุณ'
		},
		{
			name: 'รางวัลรองชนะเลิศอันดับ 1',
			badge: TrophySecond,
			reward: '15,000 บาท\nพร้อมโล่รางวัลประกาศเกียรติคุณ'
		},
		{
			name: 'รางวัลรองชนะเลิศอันดับ 2',
			badge: TrophyThird,
			reward: '5,000 บาท\nพร้อมโล่รางวัลประกาศเกียรติคุณ'
		},
		// {
		// 	name: 'HONORABLE MENTION',
		// 	badge: TrophyHonored,
		// 	reward: 'รางวัลชมเชย\nจำนวน 2 รางวัล\nรางวัลละ 2,000 บาท'
		// }
	];
</script>

<div {...$$restProps} class={twMerge('pt-8 lg:pt-16 bg-sandy h-screen', $$props.class)}>
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24 h-full">
		<h3 class="text-5xl font-medium text-burgundy tracking-wide">รางวัล</h3>
		<div class="h-[0.2rem] bg-burgundy w-full"></div>
		<div class="w-full flex justify-center">
			<div class="flex flex-col md:flex-row gap-4">
				{#each awards as award}
					<div class="flex flex-col items-center">
						<svelte:component this={award.badge} class="h-full w-full pb-4" />
						<h3 class="text-center text-2xl font-bold">{award.name}</h3>
						<p class="self-start whitespace-pre-line text-xl font-light text-center">
							{award.reward}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	

	
</style>