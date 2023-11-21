<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';

	const timelines = [
		{
			name: 'เปิดรับสมัคร',
			type: 'ONLINE',
			date: '31 OCTOBER 2023'
		},
		{ name: 'ปิดรับสมัคร', type: 'ONLINE', date: '15 DECEMBER 2023' },
		{ name: 'ประกาศรายชื่อผู้มีสิทธิเข้าร่วมการแข่งขัน', type: 'ONLINE', date: '25 DECEMBER 2023' },
		{ name: 'การแข่งขันรอบคัดเลือก 36 ทีม', type: 'ONSITE', date: '13 JANUARY 2024' },
		{
			name: 'ประกาศผล ผู้ผ่านการแข่งขันรอบคัดเลือก 36 ทีม',
			type: 'ONLINE',
			date: '18 JANUARY 2024'
		},
		{
			name: 'การแข่งขันรอบคัดเลือก 12 ทีม',
			type: 'ONSITE',
			date: '29 JANUARY 2024'
		},
		{
			name: 'การแข่งขันรอบคัดเลือก 2 ทีม',
			type: 'ONSITE',
			date: '29 JANUARY 2024'
		},
		{
			name: 'การแข่งขันรอบชิงชนะเลิศ & \nประกาศผลการแข่งขัน',
			type: 'ONSITE',
			date: '29 JANUARY 2024'
		}
	];

	const isDatePassed = (dateString: string) => new Date(dateString) < new Date();
</script>

<!-- lg mobile
xl-desktop -->
<div {...$$restProps} class={twMerge('min-h-screen bg-aubergine pt-16', $$props.class)}>
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24">
		<h3 class="font-mali text-4xl font-medium tracking-wide text-white md:basis-1/3 md:text-5xl">
			ไทม์ไลน์
		</h3>
		<div class="h-[0.2rem] w-full bg-white"></div>
	</div>
	<div class="flex items-center justify-center py-16">
		<div
			class="relative hidden justify-evenly lg:-left-12 lg:flex 2xl:-left-20 2xl:w-5/6 2xl:max-w-[2240px]"
		>
			<div
				class="absolute bottom-2/4 left-0 h-1.5 bg-froly lg:w-[110%] 2xl:-left-6 2xl:w-[93vw] 2xl:max-w-[2400px]"
			>
				<div class="triangle border-froly"></div>
			</div>
			{#each timelines as timeline, idx}
				<span
					class={twJoin(
						'relative flex h-[36rem] lg:w-28 xl:w-32 2xl:w-5/6 2xl:min-w-[10rem] 2xl:max-w-[1rem]',
						idx % 2 === 0 ? 'top-0' : 'bottom-0'
					)}
				>
					<span
						class={twJoin(
							'absolute flex h-72 items-center lg:w-48 xl:w-56 2xl:w-[19rem]',
							idx % 2 === 0 ? 'self-start' : 'self-end'
						)}
					>
						<span
							class={twJoin(
								'relative flex w-full flex-col items-center justify-evenly rounded-xl border border-froly',
								isDatePassed(timeline.date) ? 'bg-sandy' : 'bg-[#47537C] text-sandy'
							)}
						>
							<span
								class={twJoin(
									'absolute w-1.5 bg-froly lg:left-24 xl:left-28 2xl:left-36',
									idx % 2 === 0
										? 'lg:-bottom-20 lg:h-20 2xl:-bottom-[4.5rem] 2xl:h-[4.5rem]'
										: 'lg:-top-[5.5rem] lg:h-[5.5rem] xl:-top-20 xl:h-20'
								)}
							/>
							<span
								class="flex items-center pt-4 text-center font-mali text-base lg:min-h-[56px] lg:px-1 lg:text-sm xl:min-h-[64px] xl:px-2 xl:text-base 2xl:min-h-[72px] 2xl:px-4 2xl:text-xl"
							>
								{timeline.name}
							</span>
							<span
								class="flex h-16 w-full items-center justify-center pb-4 lg:text-base xl:text-lg 2xl:text-2xl"
							>
								{timeline.date}
							</span>
						</span>
					</span>
				</span>
			{/each}
		</div>

		<div class="mx-12 flex w-full flex-col gap-4 lg:hidden">
			{#each timelines as timeline, idx}
				<span class="flex flex-col">
					<span class="w-2/3 self-center">
						<span
							class={twJoin(
								'relative flex w-full flex-col items-center justify-evenly rounded-xl border border-froly p-2 hover:shadow-md',
								isDatePassed(timeline.date)
									? 'bg-sandy hover:bg-red-200 focus:bg-red-200'
									: 'bg-[#47537C] text-sandy hover:bg-[#8592be] hover:text-black'
							)}
						>
							<span
								class={twJoin(
									'absolute w-1.5 bg-froly lg:left-24 xl:left-28 2xl:left-36',
									idx % 2 === 0
										? 'lg:-bottom-20 lg:h-20 2xl:-bottom-[4.5rem] 2xl:h-[4.5rem]'
										: 'lg:-top-[5.5rem] lg:h-[5.5rem] xl:-top-20 xl:h-20 '
								)}
							/>
							<span
								class="flex items-center pt-4 text-center font-mali text-lg font-bold"
							>
								{timeline.name}
							</span>
							<span class="flex h-16 w-full items-center justify-center pb-4">
								{timeline.date}
							</span>
						</span>
						<span
							class={twJoin(
								'flex items-center justify-center pt-4 text-white',
								idx + 1 === timelines.length ? 'hidden' : ''
							)}
						>
							⇣
						</span>
					</span>
				</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.triangle {
		position: absolute;
		right: -1rem;
		top: -1rem;
		width: 0;
		height: 0;
		border-top: 1.25rem solid transparent;
		border-left: 2.5rem solid #ff869e; /* Adjust color as needed */
		border-bottom: 1.25rem solid transparent;
	}
</style>
