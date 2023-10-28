<script>
	import { twMerge } from 'tailwind-merge';

	import { TrophyHonored, TrophySecond, TrophyThird, TrophyWinner } from '$lib/components/vectors';

	const awards = [
		{
			name: 'WINNER',
			badge: TrophyWinner,
			reward: 'รางวัลชนะเลิศ\n30,000 บาท\nพร้อมโล่รางวัลประกาศเกียรติคุณ'
		},
		{
			name: 'FIRST RUNNER-UP',
			badge: TrophySecond,
			reward: 'รางวัลรองชนะเลิศอันดับ 1\n15,000 บาท\nพร้อมโล่รางวัลประกาศเกียรติคุณ'
		},
		{
			name: 'SECOND RUNNER-UP',
			badge: TrophyThird,
			reward: 'รางวัลรองชนะเลิศอันดับ 2\n5,000 บาท\nพร้อมโล่รางวัลประกาศเกียรติคุณ'
		},
		{
			name: 'HONORABLE MENTION',
			badge: TrophyHonored,
			reward: 'รางวัลชมเชย\nจำนวน 2 รางวัล\nรางวัลละ 2,000 บาท'
		}
	];
</script>

<div {...$$restProps} class={twMerge('pt-8 lg:pt-16', $$props.class)}>
	<h2 class="mb-12 text-center font-decorate text-7xl leading-normal text-lupine md:text-8xl">
		Awards
	</h2>
	<hr class="border-asphalt" />
	<div class="flex flex-col p-4 md:flex-row">
		{#each awards as award}
			<div class="flex basis-1/4 flex-col items-center p-4">
				<h3 class="text-center font-latin text-3xl">{award.name}</h3>
				<svelte:component this={award.badge} class="my-8 h-full w-full" />
				<p class="self-start whitespace-pre-line text-xl font-light">
					{award.reward}
				</p>
			</div>
		{/each}
	</div>
</div>
