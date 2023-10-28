<script>
	import { twMerge } from 'tailwind-merge';

	import { ArrowRight } from '$lib/components/icons';
	import { IceCreamRibbon } from '$lib/components/vectors';

	const qualifications = [
		'รับสมัครผู้เข้าแข่งขันเป็นทีม ทีมละ 2-3 คน',
		'ผู้เข้าแข่งขันต้องเป็นนักเรียนที่กำลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลาย หรือนักศึกษาอาชีวศึกษาในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือเทียบเท่า',
		'ต้องมีอาจารย์ที่ปรึกษาทีมละ 1 คน โดยอาจารย์ที่ปรึกษาต้องสอนในสถานศึกษาเดียวกันกับผู้เข้าแข่งขัน',
		'แต่ละสถานศึกษาสามารถ ส่งผู้เข้าแข่งขันได้ 1 ทีมต่อ 1 สถานศึกษาเท่านั้น'
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

<div {...$$restProps} class={twMerge('py-8 lg:py-16', $$props.class)}>
	<h2 class="mb-16 text-center font-decorate text-4xl leading-normal text-lupine lg:text-8xl">
		Applicant qualifications
	</h2>
	<IceCreamRibbon />
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24 md:flex-row">
		<h3 class="text-3xl text-azul-600 md:basis-1/3">คุณสมบัติผู้สมัคร</h3>
		<div class="flex basis-2/3 flex-col gap-y-12 text-xl font-light">
			{#each qualifications as qualify}
				<div class="flex">
					<div class="basis-1/6 md:basis-1/4">
						<ArrowRight class="stroke-azul-600" />
					</div>
					<p class="basis-5/6 md:basis-3/4">{qualify}</p>
				</div>
			{/each}
		</div>
	</div>
	<hr class="my-14 w-full border-asphalt" />
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24 md:flex-row">
		<h3 class="basis-1/3 text-3xl text-butternut">เอกสารที่ต้องใช้ในการสมัคร</h3>
		<div class="flex basis-2/3 flex-col gap-y-12 text-xl font-light">
			<div class="flex md:justify-end">
				<h4 class="basis-3/4 text-2xl text-saddle">อาจารย์</h4>
			</div>
			{#each teacher_files as teacher_file}
				<div class="flex">
					<div class="basis-1/6 md:basis-1/4">
						<ArrowRight class="stroke-butternut" />
					</div>
					<p class="basis-5/6 md:basis-3/4">
						{teacher_file}
					</p>
				</div>
			{/each}
			<div class="flex justify-end">
				<hr class="basis-full border-butternut md:basis-3/4" />
			</div>
			<div class="flex md:justify-end">
				<h4 class="basis-3/4 text-2xl text-saddle">นักเรียน</h4>
			</div>
			{#each student_files as student_file}
				<div class="flex">
					<div class="basis-1/6 md:basis-1/4">
						<ArrowRight class="stroke-butternut" />
					</div>
					<p class="basis-5/6 md:basis-3/4">
						{student_file}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<IceCreamRibbon class="mt-20" />
</div>
