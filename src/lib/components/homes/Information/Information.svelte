<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
</script>

<section
	use:inview={{rootMargin: '-10%'}}
	on:inview_enter={() => ($currentSection = Section.Info)}
	id="information-section"
	class="flex h-screen flex-col items-center justify-center py-12 text-white md:flex-row md:space-x-8 lg:py-24"
>
	<div class="mb-8 w-fit rounded-xl bg-yellow-600 px-16 py-4 text-xl font-bold md:hidden">
		รายละเอียด
	</div>

	<div class="mx-auto mb-4 w-2/4 md:mb-0 md:w-1/3">
		<img class="rounded-[2.5rem] bg-white p-3" src="bmh-old-photo.webp" alt="" />
	</div>

	<div class="flex w-full flex-col md:w-3/4">
		<div class="hidden w-fit rounded-xl bg-yellow-600 px-8 py-4 text-xl font-bold md:block">
			Bangmod Hackathon 2024 คืออะไร ?
		</div>
		<p class="mt-4 text-center text-sm leading-8 tracking-wider md:text-left">
			โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024
			เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย รวมถึงนักศึกษาอาชีวศึกษาในระดับ
			ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม โดยใช้ภาษา C หรือ C++
			ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันในรูปแบบทีม ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่
			ๆ ในการเขียนโปรแกรม และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย
		</p>
	</div>
</section>
