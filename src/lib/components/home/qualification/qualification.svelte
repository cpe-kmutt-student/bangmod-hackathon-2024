<script lang="ts">
	const quali_data = [
		'รับสมัครผู้เข้าแข่งขันเป็นทีม ทีมละ 2-3 คน',
		'ผู้เข้าแข่งขันต้องเป็นนักเรียนที่กำลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลาย หรือนักศึกษาอาชีวศึกษาในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือเทียบเท่า',
		'ต้องมีอาจารย์ที่ปรึกษาทีมละ 1 คน โดยอาจารย์ที่ปรึกษาต้องสอนในสถานศึกษาเดียวกันกับผู้เข้าแข่งขัน',
		'แต่ละสถานศึกษาสามารถ ส่งผู้เข้าแข่งขันได้ 1 ทีมต่อ 1 สถานศึกษาเท่านั้น'
	];

	const student_doc_data = [
		'บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)',
		'ปพ.7 ของผู้เข้าแข่งขันฉบับจริง',
		'รูปถ่ายนักเรียนผู้เข้าแข่งขัน'
	];

	const teacher_doc_data = [
		'บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)',
		'เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์, บัตรข้าราชการครูและบุคลากรทางการศึกษา)'
	];
</script>

<div class="relative min-h-fit min-w-fit">
	<div class="min-h-fit min-w-fit">
		<div class="bg-topics">
			<h1 class="px-10 py-10 text-center font-decorate text-7xl text-topic">
				Application qualification
			</h1>
		</div>
	</div>
	<div class="image-container"></div>
	<div
		class="grid-cols-flow grid-rows-flow grid gap-2 py-4 text-xs sm:text-sm md:text-xl xl:text-2xl"
	>
		{#each quali_data as detail, i}
			<div class="grid grid-cols-9">
				{#if i == 0}
					<h2 class="col-span-3 text-center text-azul-700">คุณสมบัติผู้สมัคร</h2>
				{/if}
				<div class="col-span-1 col-start-4">
					<img src="/qualification/arrow.svg" alt="arrow" class="inline h-3 md:h-6" />
				</div>
				<div class="col-span-4 col-start-5">
					<h2 class="inline">{detail}</h2>
				</div>
			</div>
		{/each}
	</div>
	<div class="my-2 border-t border-black"></div>
	<div
		class="grid-cols-flow grid-rows-flow grid gap-2 py-4 text-xs sm:text-sm md:text-xl xl:text-2xl"
	>
		{#each teacher_doc_data as detail, i}
			{#if i == 0}
				<div class="grid grid-cols-9">
					<h2 class="col-span-3 text-center text-orange-500">เอกสารที่ต้องใช้ในการสมัคร</h2>
					<div class="col-span-4 col-start-5 py-2">
						<h2 class="inline text-amber-800">อาจารย์</h2>
					</div>
				</div>
			{/if}
			<div class="grid grid-cols-9">
				<div class="col-span-1 col-start-4">
					<img src="/qualification/arrow2.svg" alt="arrow2" class="inline h-3 md:h-6" />
				</div>
				<div class="col-span-4 col-start-5">
					<h2 class="inline">
						{detail}
					</h2>
				</div>
			</div>
		{/each}
		<div class="grid grid-cols-9">
			<div class="col-span-4 col-start-5 my-2 border-t border-black"></div>
		</div>
		{#each student_doc_data as detail, i}
			{#if i == 0}
				<div class="grid grid-cols-9">
					<div class="col-span-4 col-start-5 py-2">
						<h2 class="inline text-amber-800">นักเรียน</h2>
					</div>
				</div>
			{/if}
			<div class="grid grid-cols-9">
				<div class="col-span-1 col-start-4">
					<img src="/qualification/arrow2.svg" alt="arrow2" class="inline h-3 md:h-6" />
				</div>
				<div class="col-span-4 col-start-5">
					<h2 class="inline">
						{detail}
					</h2>
				</div>
			</div>
		{/each}
	</div>
	<div class="image-container"></div>
</div>

<style>
	.image-container {
		display: inline-block;
		background-image: url('/qualification/Icecream.png');
		background-repeat: repeat-x;
		background-size: auto 3vh;
		min-width: 100%;
		min-height: 3vh;
	}

	@media (min-width: 640px) {
		.image-container {
			display: inline-block;
			background-image: url('/qualification/Icecream.png');
			background-repeat: repeat-x;
			background-size: auto 5vh;
			min-width: 100%;
			min-height: 5vh;
		}
	}

	.bg-topics {
		display: inline-block;
		background-image: url('/qualification/dec.svg');
		background-size: auto 10vh;
		background-repeat: repeat-x;
		height: 100%;
		width: 100%;
	}
</style>
