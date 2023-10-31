<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
	import Card from '$lib/components/homes/Utils/Card.svelte';
</script>

<section
	use:inview={{ rootMargin: '-10%' }}
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
			<Card src="qualification/team.svg">
				<p class="text-purple-700">รับสมัครเป็นทีม</p>
				<p class="text-purple-700">ทีมละ 2-3 คน</p>
			</Card>
			<Card src="qualification/student.svg">
				<p class="text-purple-700">
					ผู้สมัครต้องเป็นนักเรียนระดับชั้นมัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษาในระดับ ปวช.
					หรือเทียบเท่า
				</p>
			</Card>
		</div>
		<div class="flex flex-wrap justify-center">
			<Card src="/qualification/teacher.svg">
				<p class="text-purple-700">อาจารย์ที่ปรึกษาทีม 1 คน</p>
				<p class="text-purple-700">
					โดยอาจารย์ที่ปรึกษาต้องสอนในสถานศึกษาเดียวกันกับผู้เข้าแข่งขัน
				</p>
			</Card>
			<Card src="qualification/school.svg">
				<p class="text-purple-700">
					แต่ละสถานศึกษาสามารถ<br />
					ส่งผู้เข้าแข่งขันได้ 1 ทีม<br />
					ต่อ 1 สถานศึกษาเท่านั้น
				</p>
			</Card>
		</div>
	</div>

	<div class="flex h-full w-full justify-center pt-24">
		<span
			class="mx-auto mb-8 w-fit rounded-xl bg-yellow-600 px-8 py-4 text-2xl font-bold text-white shadow-xl"
		>
			เอกสารที่ใช้ในการรับสมัคร
		</span>
	</div>

	<div class="flex flex-col items-center justify-center gap-8">
		<span
			class="mx-auto w-fit rounded-xl bg-blue-600/50 px-8 py-4 text-2xl font-bold text-white shadow-xl"
		>
			อาจารย์ที่ปรึกษา
		</span>
		<div class="flex flex-wrap justify-center">
			<Card class="w-[22rem]" src="qualification/idcard.svg">
				<p class="text-purple-700">
					บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา<br />
					หรือบัตรประจำตัวสำหรับบุคคล<br />
					ที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
				</p>
			</Card>
			<Card class="w-[22rem]" src="qualification/teacher_docs.svg">
				<p class="text-purple-700">
					เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์
					ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์,
					บัตรข้าราชการครูและบุคลากรทางการศึกษา)
				</p>
			</Card>
		</div>

		<span
			class="mx-auto w-fit rounded-xl bg-blue-600/50 px-8 py-4 text-2xl font-bold text-white shadow-xl"
		>
			นักเรียน
		</span>
		<div class="flex flex-wrap justify-center">
			<Card src="qualification/idcard.svg">
				<p class="text-purple-700">
					บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคล ที่ไม่ได้ถือสัญชาติไทย
					(เฉพาะด้านหน้า)
				</p>
			</Card>
			<Card src="qualification/student_docs.svg">
				<p class="text-purple-700">ปพ.7 ของผู้เข้าแข่งขันฉบับจริง</p>
			</Card>
			<Card src="qualification/portrait.svg">
				<p class="text-purple-700">รูปถ่ายนักเรียนผู้เข้าแข่งขัน</p>
			</Card>
		</div>
	</div>
</section>
