<script>
	import { twMerge } from 'tailwind-merge';

	import { ArrowRight } from '$lib/components/icons';
</script>

<div
	{...$$restProps}
	class={twMerge('mt-[100vh] bg-aubergine px-6 py-12 lg:px-16 lg:py-20', $$props.class)}
>
	<div class="mx-auto flex min-h-screen w-fit flex-col justify-center gap-x-20 gap-y-8">
		<h1
			class="flex max-w-4xl flex-col gap-4 text-center font-mali text-xl font-semibold text-white md:text-left md:text-5xl"
		>
			<span> BangMod Hackathon 2024 </span>
			<span> คืออะไร ? </span>
		</h1>
		<div class="flex w-full max-w-4xl justify-center text-white md:justify-end">
			<span class="font-thin hidden md:block">
				<ArrowRight class="w-12" />
			</span>
			<p class="text-md max-w-5xl text-center font-light md:text-start md:text-2xl">
				โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ BangMod Hackathon 2024
				เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนต้น และตอนปลาย
				รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม
				โดยใช้ภาษาซี ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันในรูปแบบทีม
				ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม
				และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย
			</p>
		</div>
	</div>
</div>
