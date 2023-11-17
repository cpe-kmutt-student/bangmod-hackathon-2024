<script>
	import { twMerge } from 'tailwind-merge';

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

<div
	{...$$restProps}
	class={twMerge('flex flex-col gap-14 bg-sandy py-8 pt-20 lg:py-16', $$props.class)}
>
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24">
		<h3 class="font-mali text-4xl font-medium tracking-wide text-burgundy md:basis-1/3 md:text-5xl">
			คุณสมบัติผู้สมัคร
		</h3>
		<div class="h-[0.2rem] w-full bg-burgundy"></div>
		<div class="flex w-full justify-center">
			<div
				class="flex w-full max-w-5xl flex-col items-center gap-8 gap-x-10 lg:flex-row lg:justify-around"
			>
				<div class="flex w-fit items-center justify-center border-2 border-black bg-white">
					<img src="/sunday_team.svg" alt="" />
				</div>
				<div class="flex max-w-xl flex-col gap-y-2 text-xl lg:gap-y-8">
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
		<h3 class="font-mali text-4xl font-medium tracking-wide text-burgundy md:basis-1/3 md:text-5xl">
			เอกสารที่ใช้ในการรับสมัคร
		</h3>
		<div class="h-[0.2rem] w-full bg-burgundy"></div>
		<div class="flex w-full justify-center">
			<div
				class="flex w-full max-w-5xl flex-col items-center gap-8 gap-x-10 lg:flex-row lg:justify-around"
			>
				<div class="flex w-fit items-center justify-center border-2 border-black bg-white p-2">
					<img src="/sunday_teacher.svg" alt="" />
				</div>
				<div class="flex max-w-xl flex-col gap-y-2 text-xl lg:gap-y-8">
					<h2 class="font-bold tracking-wide">อาจารย์ที่ปรึกษา</h2>
					{#each teacher_files as teacher_file}
						<ul class="flex list-disc">
							<li class="">{teacher_file}</li>
						</ul>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex w-full justify-center">
			<div
				class="flex w-full max-w-5xl flex-col items-center gap-8 gap-x-10 lg:flex-row lg:justify-around"
			>
				<div class="flex w-fit items-center justify-center border-2 border-black bg-white">
					<img src="/sunday_student.svg" alt="" />
				</div>
				<div class="flex max-w-xl flex-col gap-y-2 text-xl lg:gap-y-8">
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
</div>
