<script>
	import { twMerge } from 'tailwind-merge';

	import { TrophySecond, TrophyThird, TrophyWinner } from '$lib/components/vectors';

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
		}
	];
</script>

<div {...$$restProps} class={twMerge('min-h-screen bg-sandy pt-16', $$props.class)}>
	<div class="mx-12 flex h-full flex-col justify-center gap-y-8 md:mx-24">
		<h3 class="font-mali text-4xl font-medium tracking-wide text-burgundy md:text-5xl">รางวัล</h3>
		<div class="h-[0.2rem] w-full bg-burgundy"></div>
		<div class="flex w-full justify-center">
			<div class="flex flex-col gap-4 md:flex-row">
				{#each awards as award}
					<div class="flex h-[30%] flex-col items-center md:h-full">
						<svelte:component this={award.badge} class="h-full w-full" />
						<h3 class="text-center text-2xl font-bold">{award.name}</h3>
						<p class="self-start whitespace-pre-line text-center text-xl font-light">
							{award.reward}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
