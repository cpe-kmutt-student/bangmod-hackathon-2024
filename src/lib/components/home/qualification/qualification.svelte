<script lang="ts">
	import Star from '$lib/components/decor/Star.svelte';
	import Circle from '$lib/components/decor/Circle.svelte';
	import CircleSolid from '$lib/components/decor/CircleSolid.svelte';
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

<div class="relative snap-start">
	<div class="relative block min-h-screen grid-cols-1 overflow-clip">
		<div class="absolute hidden md:left-1 md:top-0 md:block lg:left-[5rem] lg:top-0">
			<Star class="scale-25 stroke-azul-600" />
		</div>
		<div class="absolute hidden md:right-[7rem] md:top-12 md:block lg:right-[15rem] lg:top-20">
			<Star class="scale-25 stroke-[#CCAA4B]" />
		</div>
		<div class="absolute hidden md:left-[7rem] md:top-[14rem] md:block lg:left-[15rem] lg:top-60">
			<Star class="scale-25 stroke-[#CCAA4B]" />
		</div>
		<div
			class="absolute hidden md:bottom-[10rem] md:right-[3rem] md:block lg:bottom-[10rem] lg:right-[5rem]"
		>
			<Star class="scale-25 stroke-[#CCAA4B]" />
		</div>
		<div>
			<Circle
				class="absolute hidden md:left-[10rem] md:top-5 md:block md:scale-75 lg:left-[20rem] lg:top-2 lg:scale-90"
			/>
		</div>
		<div>
			<Circle
				class="absolute hidden md:right-[7rem] md:top-5 md:block md:scale-75 lg:right-[15rem] lg:top-[1rem] lg:scale-90"
			/>
		</div>
		<div>
			<Circle
				class="absolute hidden md:left-[3rem] md:top-[11rem] md:block md:scale-75 lg:left-[7rem] lg:top-52 lg:scale-90"
			/>
		</div>
		<div>
			<Circle
				class="absolute hidden md:bottom-[22rem] md:right-[7rem] md:block md:scale-75 lg:bottom-[20rem] lg:right-[15rem] lg:scale-90"
			/>
		</div>
		<div>
			<CircleSolid
				class="absolute hidden md:bottom-[17rem] md:right-[3rem] md:block md:scale-75 lg:bottom-[20rem] lg:right-[7rem] lg:block lg:scale-90"
			/>
		</div>
		<div>
			<CircleSolid
				class="absolute hidden md:left-[14rem] md:top-[14rem] md:block md:scale-75 lg:left-[20rem] lg:top-64 lg:block lg:scale-90"
			/>
		</div>
		<div>
			<CircleSolid
				class="absolute hidden md:left-[5rem] md:top-[6rem] md:block md:scale-75 lg:bottom-[15rem] lg:right-[5rem] lg:block lg:gap-y-10"
			/>
		</div>
		<div>
			<CircleSolid
				class="absolute hidden md:right-[3rem] md:top-[3rem] md:block md:scale-75 lg:right-[10rem] lg:top-[5rem] lg:block lg:scale-90"
			/>
		</div>

		<h1
			class="px-10 py-10 text-center font-decorate text-[#CCAA4B] sm:text-3xl md:text-5xl lg:text-7xl"
		>
			Application qualification
		</h1>
		<div class="image-container"></div>
		<div
			class="grid-cols-flow grid-rows-flow relative grid h-fit min-w-fit gap-y-2 py-4 text-xs sm:text-sm md:gap-y-5 md:text-xl lg:gap-y-10 xl:text-2xl"
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
						<p class="inline">{detail}</p>
					</div>
				</div>
			{/each}
			<img
				src="/qualification/cupcake.png"
				alt="cupcake"
				class="absolute hidden md:-left-[5rem] md:top-10 md:block md:scale-75 lg:bottom-0 lg:left-0"
			/>
		</div>
		<div class="my-2 border-t border-black"></div>
		<div
			class="grid-cols-flow grid-rows-flow relative grid w-screen gap-y-2 py-10 text-xs sm:text-sm md:gap-y-5 md:text-xl lg:gap-y-10 xl:text-2xl"
		>
			{#each teacher_doc_data as detail, i}
				{#if i == 0}
					<div class="relative grid grid-cols-9">
						<h2 class="col-span-3 text-center text-orange-500">เอกสารที่ต้องใช้ในการสมัคร</h2>
						<div class="col-span-4 col-start-5 py-2">
							<h3 class="inline text-amber-800">อาจารย์</h3>
						</div>
					</div>
				{/if}
				<div class="grid grid-cols-9">
					<div class="col-span-1 col-start-4">
						<img src="/qualification/arrow2.svg" alt="arrow2" class="inline h-3 md:h-6" />
					</div>
					<div class="col-span-4 col-start-5">
						<p class="inline">
							{detail}
						</p>
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
							<h3 class="inline text-amber-800">นักเรียน</h3>
						</div>
					</div>
				{/if}
				<div class="grid grid-cols-9">
					<div class="col-span-1 col-start-4">
						<img src="/qualification/arrow2.svg" alt="arrow2" class="inline h-3 md:h-6" />
					</div>
					<div class="col-span-4 col-start-5">
						<p class="inline">
							{detail}
						</p>
					</div>
				</div>
			{/each}
			<img
				src="/qualification/cupcake2.png"
				alt="cupcake"
				class="absolute hidden md:-bottom-14 md:-right-24 md:block md:scale-50 lg:-bottom-14 lg:-right-10"
			/>
		</div>
		<div class="image-container"></div>
	</div>
</div>

<style>
	.image-container {
		display: inline-block;
		background-image: url('/qualification/Icecream.png');
		background-repeat: repeat-x;
		background-size: auto 2vh;
		min-width: 100%;
		min-height: 2vh;
	}

	@media (min-width: 640px) {
		.image-container {
			display: inline-block;
			background-image: url('/qualification/Icecream.png');
			background-repeat: repeat-x;
			background-size: auto 3vh;
			min-width: 100%;
			min-height: 3vh;
		}
	}

	@media (min-width: 1024px) {
		.image-container {
			display: inline-block;
			background-image: url('/qualification/Icecream.png');
			background-repeat: repeat-x;
			background-size: auto 5vh;
			min-width: 100%;
			min-height: 5vh;
		}
	}
</style>
