<script lang="ts">
	import arrow from '$lib/assets/arrow.svg';
	import arrow2 from '$lib/assets/arrow2.svg';
</script>

<div class="min-w-fit">
	<div class=" min-h-fit">
		<div class="bg-topics">
			<h1 class="text-topic px-10 py-10 text-center font-decorate text-7xl">
				Application qualification
			</h1>
		</div>
	</div>
	<div class="image-container"></div>

	<div
		class="grid-cols-flow grid-rows-flow grid gap-2 py-4 text-xs sm:text-sm md:text-xl xl:text-2xl"
	>
		<div class="grid grid-cols-9">
			<h2 class="col-span-3 text-center text-azul-700">คุณสมบัติผู้สมัคร</h2>
			<div class="col-span-1 col-start-4">
				<img src={arrow} alt="arrow" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">รับสมัครผู้เข้าแข่งขันเป็นทีม ทีมละ 2-3 คน</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow} alt="arrow" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">
					ผู้เข้าแข่งขันต้องเป็นนักเรียนที่กำลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลาย
					หรือนักศึกษาอาชีวศึกษาในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือเทียบเท่า
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow} alt="arrow" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">
					ต้องมีอาจารย์ที่ปรึกษาทีมละ 1 คน
					โดยอาจารย์ที่ปรึกษาต้องสอนในสถานศึกษาเดียวกันกับผู้เข้าแข่งขัน
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow} alt="arrow" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">
					แต่ละสถานศึกษาสามารถ ส่งผู้เข้าแข่งขันได้ 1 ทีมต่อ 1 สถานศึกษาเท่านั้น
				</h2>
			</div>
		</div>
	</div>
	<div class="my-2 border-t border-black"></div>
	<div
		class="grid-cols-flow grid-rows-flow grid gap-2 py-4 text-xs sm:text-sm md:text-xl xl:text-2xl"
	>
		<div class="grid grid-cols-9">
			<h2 class="col-span-3 text-center text-orange-500">เอกสารที่ต้องใช้ในการสมัคร</h2>
			<div class="col-span-4 col-start-5 py-2">
				<h2 class="inline text-amber-800">อาจารย์</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow2} alt="arrow2" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">
					บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย
					(เฉพาะด้านหน้า)
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow2} alt="arrow2" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">
					เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์,
					บัตรข้าราชการครูและบุคลากรทางการศึกษา)
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-4 col-start-5 my-2 border-t border-black"></div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-4 col-start-5 py-2">
				<h2 class="inline text-amber-800">นักเรียน</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow2} alt="arrow2" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">
					บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย
					(เฉพาะด้านหน้า)
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow2} alt="arrow2" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">ปพ.7 ของผู้เข้าแข่งขันฉบับจริง</h2>
			</div>
		</div>
		<div class="grid grid-cols-9">
			<div class="col-span-1 col-start-4">
				<img src={arrow2} alt="arrow2" class="inline h-3 md:h-6" />
			</div>
			<div class="col-span-4 col-start-5">
				<h2 class="inline">รูปถ่ายนักเรียนผู้เข้าแข่งขัน</h2>
			</div>
		</div>
	</div>

	<div class="image-container"></div>
</div>

<style>
	.image-container {
		display: inline-block;
		background-image: url('$lib/assets/Icecream.png');
		background-repeat: repeat-x;
		background-size: auto 3vh;
		min-width: 100%;
		min-height: 3vh;
		margin: 1.5rem auto;
	}

	@media (min-width: 640px) {
		.image-container {
			display: inline-block;
			background-image: url('$lib/assets/Icecream.png');
			background-repeat: repeat-x;
			background-size: auto 5vh;
			min-width: 100%;
			min-height: 5vh;
			margin: 1.5rem auto;
		}
	}

	.bg-topics {
		display: inline-block;
		background-image: url('$lib/assets/dec.svg');
		background-size: auto 10vh;
		background-repeat: repeat;
		height: 100%;
		width: 100%;
	}
</style>
