<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
	import Card from '$lib/components/homes/Utils/Card.svelte';
</script>

<section
	use:inview={{rootMargin: '-10%'}}
	on:inview_enter={() => ($currentSection = Section.Qualification)}
	class="flex flex-col items-center justify-around py-12 lg:py-24"
>
	<div id="qualification-section" class="flex h-full w-full justify-center pt-24">
		<span
			class="mx-auto mb-8 w-fit rounded-xl bg-yellow-600 px-8 py-4 text-2xl font-bold text-white shadow-xl"
		>
			คุณสมบัติผู้สมัคร
		</span>
	</div>
	<div class="flex flex-row flex-wrap justify-center">
		<div class="flex flex-wrap justify-center">
			<Card src="qualification/team.webp">
				<p class="text-purple-700">รับสมัครเป็นทีม</p>
				<p class="text-purple-700">ทีมละ 2-3 คน</p>
			</Card>
			<Card src="qualification/student.webp">
				<p class="text-purple-700">
					ผู้สมัครต้องเป็นนักเรียนระดับชั้นมัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษาในระดับ ปวช.
					หรือเทียบเท่า
				</p>
			</Card>
		</div>
		<div class="flex flex-wrap justify-center">
			<Card src="/qualification/teacher.webp">
				<p class="text-purple-700">อาจารย์ที่ปรึกษาทีม 1 คน</p>
				<p class="text-purple-700">โดยอาจารย์ที่ปรึกษาต้องสอนในสถานศึกษานั้น ๆ</p>
			</Card>
			<Card src="qualification/school.webp">
				<p class="text-purple-700">แต่ละสถานศึกษาสามารถ ส่งผู้เข้าแข่งขันได้มากที่สุด 1 ทีม</p>
			</Card>
		</div>
	</div>

	<div class="mb-8 mt-9 rounded-3xl bg-white p-3 md:p-10">
		<div
			class="mx-auto flex justify-center rounded-xl bg-[#7c81be] py-4 font-bold text-white shadow-xl md:text-2xl"
		>
			เอกสารที่ต้องใช้ในการสมัคร
		</div>
		<ul class="ml-2 list-decimal p-3 leading-loose text-purple-700 md:space-y-3 md:p-5 md:text-xl">
			<li>รูปนักเรียนขนาด 1.5 นิ้ว</li>
			<li>สำเนาบัตรประชาชนหรือบัตรนักเรียนของผู้เข้าแข่งขัน (พร้อมเซ็นรับรองสำเนาถูกต้อง)</li>
			<li>ปพ.7 ของผู้เข้าแข่งขันตัวจริง</li>
			<li>
				เอกสารหรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์,
				บัตรข้าราชการครูและบุคลากรทางการศึกษา)
			</li>
		</ul>
	</div>
</section>
