<script>
	import { twMerge } from 'tailwind-merge';

	import { ArrowRight } from '$lib/components/icons';
	import { IceCreamRibbon } from '$lib/components/vectors';

	const qualifications = [
		'รับสมัครเป็นทีม ทีมละ 2-3 คน',
		'ผู้สมัครต้องเป็นนักเรียน ระดับชั้นมัธยมศึกษาตอนต้น, มัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษา ในระดับปวช. หรือเทียบเท่า',
		'อาจารย์ที่ปรึกษาทีม 1 คน โดยอาจารย์ที่ปรึกษาต้องเป็น อาจารย์ที่สอนในสถานศึกษานั้น ๆ',
		'แต่ละสถานศึกษาสามารถส่งผู้เข้าแข่งขันได้มากที่สุด 2 ทีม'
	];

	const teacher_files = [
		'บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)',
		'เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์, บัตรข้าราชการครูและบุคลากรทางการศึกษา)'
	];

	const student_files = [
		'บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)',
		'ปพ.7 ของผู้เข้าแข่งขันฉบับจริง',
		'รูปถ่ายนักเรียนผู้เข้าแข่งขัน'
	];
</script>

<div {...$$restProps} class={twMerge('py-8 lg:py-16 pt-20 bg-sandy flex flex-col gap-14', $$props.class)}>
	<!-- <IceCreamRibbon /> -->
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24">
		<h3 class="text-4xl md:text-5xl font-medium text-burgundy tracking-wide md:basis-1/3 font-mali">คุณสมบัติผู้สมัคร</h3>
		<div class="h-[0.2rem] bg-burgundy w-full"></div>
		<div class="w-full flex justify-center">
			<div class="w-full max-w-5xl flex flex-col items-center gap-8 lg:flex-row gap-x-10 lg:justify-around">
				<div class="bg-white border-2 border-black w-fit flex justify-center items-center">
					<img src="/sunday_team.svg" alt="">
				</div>
				<div class="flex flex-col gap-y-2 lg:gap-y-8 text-xl max-w-xl">
					{#each qualifications as qualify}
						<ul class="flex list-disc">
							<li class="">{qualify}</li>
						</ul>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24">
		<h3 class="text-4xl md:text-5xl font-medium text-burgundy tracking-wide md:basis-1/3 font-mali">เอกสารที่ใช้ในการรับสมัคร</h3>
		<div class="h-[0.2rem] bg-burgundy w-full"></div>
		<div class="w-full flex justify-center">
			<div class="w-full max-w-5xl flex flex-col items-center gap-8 lg:flex-row gap-x-10 lg:justify-around">
				<div class="bg-white border-2 p-2 border-black w-fit flex justify-center items-center">
					<img src="/sunday_teacher.svg" alt="">
				</div>
				<div class="flex flex-col gap-y-2 lg:gap-y-8 text-xl max-w-xl">
					<h2 class="font-bold tracking-wide">อาจารย์ที่ปรึกษา</h2>
					{#each teacher_files as teacher_file}
						<ul class="flex list-disc">
							<li class="">{teacher_file}</li>
						</ul>
					{/each}
				</div>
			</div>
		</div>

		<div class="w-full flex justify-center">
			<div class="w-full max-w-5xl flex flex-col items-center gap-8 lg:flex-row gap-x-10 lg:justify-around">
				<div class="bg-white border-2 border-black w-fit flex justify-center items-center">
					<img src="/sunday_student.svg" alt="">
				</div>
				<div class="flex flex-col gap-y-2 lg:gap-y-8 text-xl max-w-xl">
					<h2 class="font-bold tracking-wide">นักเรียน</h2>
					{#each student_files as student_file}
						<ul class="flex list-disc">
							<li class="">{student_file}</li>
						</ul>
					{/each}
				</div>
			</div>
		</div>

	</div>
	<!-- <IceCreamRibbon class="mt-20" /> -->
</div>
