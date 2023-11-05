<script>
	import { twJoin, twMerge } from 'tailwind-merge';

	const timelines = [
		{
			name: 'เปิดรับสมัคร',
			tabs: [
				{
					name: 'DATE',
					detail: '31 OCTOBER 2023',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'ปิดรับสมัคร',
			tabs: [
				{
					name: 'DATE',
					detail: '25 NOVEMBER 2023',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'การแข่งขันรอบคัดเลือก 36 ทีม',
			tabs: [
				{
					name: 'TYPE',
					detail: 'ONLINE',
					color: 'butternut',
					font: ''
				},
				{
					name: 'DATE',
					detail: '25 DECEMBER 2023',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'ประกาศผล',
			tabs: [
				{
					name: 'DETAIL',
					detail: 'ผู้ผ่านการแข่งขันรอบคัดเลือก 36 ทีม',
					color: 'lupine',
					font: 'font-sans'
				},
				{
					name: 'DATE',
					detail: '29 DECEMBER 2023',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'การแข่งขันรอบคัดเลือก 12 ทีม',
			tabs: [
				{
					name: 'TYPE',
					detail: 'ONSITE',
					color: 'butternut',
					font: ''
				},
				{
					name: 'DATE',
					detail: '19 JANUARY 2024',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'การแข่งขันรอบคัดเลือก 2 ทีม',
			tabs: [
				{
					name: 'TYPE',
					detail: 'ONSITE',
					color: 'butternut',
					font: ''
				},
				{
					name: 'DATE',
					detail: '19 JANUARY 2024',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'การแข่งขันรอบชิงชนะเลิศ',
			tabs: [
				{
					name: 'TYPE',
					detail: 'ONSITE',
					color: 'butternut',
					font: ''
				},
				{
					name: 'DATE',
					detail: '19 JANUARY 2024',
					color: 'azul-600',
					font: ''
				}
			]
		},
		{
			name: 'ประกาศผลรางวัลการแข่งขัน',
			tabs: [
				{
					name: 'TYPE',
					detail: 'ONSITE',
					color: 'butternut',
					font: ''
				},
				{
					name: 'DATE',
					detail: '19 JANUARY 2023',
					color: 'azul-600',
					font: ''
				}
			]
		}
	];
</script>

<div
	{...$$restProps}
	class={twMerge(
		'grid divide-x divide-asphalt border-y border-asphalt md:grid-cols-4 bg-sandy',
		$$props.class
	)}
>
	<div class="col-span-1 flex items-center justify-center">
		<h2
			class="mt-4 font-decorate text-7xl leading-loose text-lupine md:mt-0 md:-rotate-90 md:text-8xl md:leading-none"
		>
			timeline
		</h2>
	</div>
	<div class="font-light md:col-span-3">
		{#each timelines as timeline, idx}
			<div>
				<h3 class="my-3 px-2 text-5xl">{timeline.name}</h3>
				<div
					class={twJoin(
						'flex flex-col divide-y divide-asphalt border-asphalt',
						idx + 1 >= timelines.length ? 'border-t' : 'border-y'
					)}
				>
					{#each timeline.tabs as tab}
						<div class="flex w-full font-latin text-2xl">
							<div class="w-24 shrink-0 bg-{tab.color} text-center text-soapstone">{tab.name}</div>
							<div class={twJoin('px-8', `text-${tab.color}`, tab.font)}>{tab.detail}</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
