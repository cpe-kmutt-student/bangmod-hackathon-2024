<script>
	import { twMerge } from 'tailwind-merge';

	import IceCream from '$lib/components/vectors/IceCream.svelte';
</script>

<div {...$$restProps} class={twMerge('flex w-full flex-col lg:flex-row bg-sandy', $$props.class)}>
	<div class="flex w-full flex-col px-8 pt-4 md:px-16">
		<h1 class="my-16 text-center font-decorate text-6xl lg:text-8xl leading-loose text-lupine lg:text-start">
			get in touch
		</h1>
		<div class="grid w-full gap-y-16 text-3xl lg:grid-cols-2 mb-12">
			<div class="space-y-4">
				<h2 class="font-latin text-azul-600">PHONE NUMBER</h2>
				<div class="flex flex-col gap-y-2 text-2xl font-light">
					<div class='flex'>
						<div class='basis-1/3'>พี่เฟิร์ท</div>
						<div class="font-latin">061 - 628 - 7673</div>
					</div>
					<div class='flex'>
						<div class='basis-1/3'>พี่เจน</div>
						<div class="font-latin">095 - 928 - 3465</div>
					</div>
					<div class='flex'>
						<div class='basis-1/3'>พี่น้ำตาล</div>
						<div class="font-latin">098 - 710 - 3020</div>
					</div>
				</div>
			</div>
			<div class="space-y-4">
				<h2 class="font-latin text-azul-600">Facebook</h2>
				<a class="font-latin text-2xl font-light" href="https://www.facebook.com/BangmodHackathon/">
					BangMod Hackathon 2024
				</a>
			</div>
			<div class="space-y-4 lg:col-span-2">
				<h2 class="font-latin text-azul-600">ADDRESS</h2>
				<p class="text-2xl font-light">
					ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
					<br />ชั้น 10 อาคารวิศววัฒนะ 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
				</p>
			</div>
		</div>
		<div class='flex'>
			<span class='font-latin font-light text-xl'>BangMod Hackathon 2024</span>
		</div>
	</div>
	<div class="flex w-full basis-1/3 items-center justify-center px-16 py-16 pt-36">
		<IceCream class="h-1/2 w-1/2 lg:h-full lg:w-full" />
	</div>
</div>
<hr class='border-zinc-300 m-8 lg:m-16'/>

