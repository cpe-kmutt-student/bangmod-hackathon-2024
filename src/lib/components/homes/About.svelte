<script>
	import { twMerge } from 'tailwind-merge';
</script>

<div
	{...$$restProps}
	class={twMerge(
		'mt-[100vh] bg-aubergine px-6 py-12 lg:px-16 lg:py-20',
		$$props.class
	)}
>
	<div class="flex flex-col w-fit justify-center mx-auto min-h-screen gap-x-20 gap-y-8">
		<h1 class="font-mali flex flex-col gap-4 text-center text-xl font-semibold text-white md:text-left md:text-5xl max-w-4xl">
		<span>
			BangMod Hackathon 2024
		</span>
			<span>
			คืออะไร ?
		</span>
		</h1>
		<div class="flex w-full max-w-4xl justify-center md:justify-end">
			<p class="text-md max-w-5xl text-center md:text-end font-light text-white md:text-2xl">
				→ โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ BangMod Hackathon 2024
				เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนต้น และตอนปลาย
				รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม
				โดยใช้ภาษาซี ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันในรูปแบบทีม
				ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม
				และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย
			</p>

		</div>
	</div>
</div>
