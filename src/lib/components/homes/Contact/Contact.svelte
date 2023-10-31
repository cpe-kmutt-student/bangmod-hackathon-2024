<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
</script>

<section
	use:inview={{rootMargin: '-10%'}}
	on:inview_enter={() => ($currentSection = Section.Contact)}
	id="contact-section"
	class="flex h-screen flex-col items-center justify-center py-24 pb-52"
>
	<div>
		<div class="mb-12 py-4 text-center text-5xl font-bold text-white sm:text-6xl">
			<h1 class="whitespace-nowrap">NEED HELP?</h1>
		</div>

		<div class="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0">
			<div class="flex flex-row">
				<div class="px-4 py-3 md:px-6">
					<img
						class="w-[6rem] max-w-none rounded-full border-[10px] border-gray-300"
						src="fb-icon.webp"
						alt=""
					/>
				</div>
				<div class="flex flex-col justify-center space-y-2">
					<div class="text-xl font-bold text-white">BANGMOD HACKATHON 2024</div>
					<a
						class="mt-2 w-fit rounded-lg bg-[#db9116] px-4 py-1 text-sm text-white"
						href="https://www.facebook.com/BangmodHackathon"
						target="_blank"
					>
						CHAT NOW
					</a>
				</div>
			</div>
			<div class="flex flex-row">
				<div class="px-4 py-3 md:px-6 xl:pl-24">
					<img
						class="w-[6rem] max-w-none rounded-full border-[10px] border-gray-300"
						src="tel-icon.webp"
						alt=""
					/>
				</div>
				<div class="flex flex-col w-3/4 lg:w-1/2 justify-center text-white">
					<div class="flex">
						<a href="tel:0616287673" class="min-w-auto basis-2/3 pr-2 whitespace-nowrap">061-628-7673</a>
						<span class="whitespace-nowrap">(พี่เฟิร์ท)</span>
					</div>
					<div class="flex">
						<a href="tel:0959283465" class="min-w-auto basis-2/3 pr-3 whitespace-nowrap">095-928-3465</a>
						<span class="whitespace-nowrap">(พี่เจน)</span>
					</div>
					<div class="flex">
						<a href="tel:0987103020" class="min-w-auto basis-2/3 pr-2.5 whitespace-nowrap">098-710-3020</a>
						<span class="whitespace-nowrap">(พี่น้ำตาล)</span>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-12 text-center font-bold text-white">
			<p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
			<p>ชั้น 10 อาคารวิศววัฒนะ 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
		</div>
	</div>
</section>
