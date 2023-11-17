<script>
	import { twMerge } from 'tailwind-merge';

	const staffs = [
		{ name: 'เฟิร์ท', phone: '061-628-7673' },
		{ name: 'เจร', phone: '095-928-3465' },
		{ name: 'เบค', phone: '086-980-6454' }
	];
</script>

<div
	{...$$restProps}
	class={twMerge('flex flex-col bg-sandy px-12 font-mali md:px-24', $$props.class)}
>
	<div class="flex w-full flex-col justify-center gap-y-8 pb-16">
		<h3 class="text-4xl font-medium tracking-wide text-burgundy md:basis-1/3 md:text-5xl">
			ติดต่อเรา
		</h3>
		<div class="h-[0.2rem] w-full bg-burgundy"></div>
		<div class="flex justify-center">
			<div class="flex max-w-[1024px] flex-col gap-12">
				<div class="text-md flex font-bold md:text-xl">
					<div class="flex gap-2 border border-black bg-white">
						<div class="flex items-center justify-center">
							<img src="/fb_logo.png" alt="facebook logo" class="p-4" />
						</div>
						<div class="flex w-full items-center p-2">BANGMOD HACKATHON 2024</div>
					</div>
					<a href="https://www.facebook.com/BangmodHackathon">
						<div
							class="flex h-full items-center justify-center whitespace-nowrap border-l border-black bg-aubergine p-2 py-8 text-sm text-white hover:opacity-90 md:min-w-[11rem] md:text-lg lg:min-w-[14rem] xl:min-w-[16rem]"
						>
							CHAT NOW
						</div>
					</a>
				</div>

				<div class="flex w-full border border-black bg-white text-xl font-bold md:text-xl">
					<div class="flex h-full items-center justify-center border-r border-black">
						<div class="p-4">
							<img
								src="/tel_logo.png"
								alt="telephone logo"
								class="max-w-28 max-h-28 w-16 md:w-24"
							/>
						</div>
					</div>
					<div class="flex w-full flex-col divide-y">
						{#each staffs as { name, phone }}
							<div class="flex w-full border-black">
								<span class="flex w-full items-center justify-center text-sm md:text-lg">
									{phone}
								</span>
								<span
									class="flex h-full min-w-[4rem] items-center justify-center whitespace-nowrap border-l border-black bg-[#47537C] py-8 text-sm text-white md:min-w-[11rem] md:text-lg lg:min-w-[14rem] xl:min-w-[16rem]"
								>
									{name}
								</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="bg-[#47537C]">
	<div
		class="container mx-auto py-8 text-center font-mali text-sm leading-loose text-white md:text-xl"
	>
		ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ <br /> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
		<br />ชั้น 10 อาคารวิศววัฒนะ 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
	</div>
</div>
