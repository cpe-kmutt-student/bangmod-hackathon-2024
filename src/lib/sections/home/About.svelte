<script>
	import { twMerge } from 'tailwind-merge';
</script>

<div
	{...$$restProps}
	class={twMerge(
		'mt-[100vh] flex min-h-screen flex-col justify-center gap-y-8 gap-x-20 bg-aubergine px-6 py-12 lg:px-16 lg:py-20',
		$$props.class
	)}
>
	<h1 class="text-5xl text-white">BangMod Hackathon 2024 คืออะไร ?</h1>
	<div class="w-full flex justify-end">
		<p class="text-2xl text-white font-light max-w-4xl text-end">
			โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ BangMod Hackathon 2024
			เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนต้น และตอนปลาย
			รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม โดยใช้ภาษาซี
			ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันในรูปแบบทีม ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ
			ในการเขียนโปรแกรม และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย
		</p>
	</div>
</div>
