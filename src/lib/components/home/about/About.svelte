<script lang="ts">
	import Table from './Table.svelte';
	import Star from '../../decor/Star.svelte';
	import Circle from '../../decor/Circle.svelte';
	import CircleSolid from '../../decor/CircleSolid.svelte';
</script>

<div class="relative bg-soapstone">
	<div
		class="relative block min-h-screen grid-cols-1 overflow-clip p-14 lg:grid lg:grid-cols-3 lg:gap-20"
	>
		<img
			class="absolute -right-32 -top-44 bg-cover md:-right-80 md:-top-[25rem] lg:-right-[40rem] lg:-top-[50rem] lg:scale-90"
			src="/about/about-1.png"
			alt=""
		/>
		<img
			class="absolute hidden bg-cover md:-bottom-[30rem] md:-left-20 md:block lg:-bottom-[50rem] lg:-left-48 lg:scale-75"
			src="/about/about-pudding.png"
			alt=""
		/>
		<div class="absolute hidden md:-left-8 md:bottom-24 md:block lg:bottom-28 lg:left-8">
			<Star class="scale-75 stroke-azul-600" />
		</div>
		<div class="absolute hidden md:bottom-52 md:left-64 md:block lg:bottom-60 lg:left-96">
			<Star class="scale-75  stroke-[#CCAA4B]" />
		</div>
		<div class="absolute hidden md:bottom-4 md:left-[28rem] md:block lg:bottom-12 lg:left-[38rem]">
			<Star class="scale-75  stroke-orange-500" />
		</div>
		<div class="absolute right-12 hidden md:top-[24rem] md:block lg:top-[37rem]">
			<Star class="scale-75  stroke-orange-500" />
		</div>
		<div class="absolute left-4 top-40 lg:left-10 lg:top-60">
			<Circle />
		</div>
		<div class="absolute -right-2 top-[15rem] lg:top-[25rem]">
			<Circle />
		</div>
		<div class="absolute right-32 top-[21rem] lg:left-80 lg:top-[30rem]">
			<Circle />
		</div>
		<div class="absolute bottom-32 right-4 md:bottom-52 md:right-56 lg:bottom-48 lg:left-[55rem]">
			<Circle />
		</div>
		<div class="absolute right-8 top-32 md:right-32 lg:top-72">
			<CircleSolid />
		</div>
		<div class="absolute bottom-[25rem] left-8 md:left-32 lg:bottom-[30rem]">
			<CircleSolid class="bg-orange-500" />
		</div>
		<div class="absolute bottom-6 right-40 md:bottom-32 md:right-20 lg:bottom-64 lg:right-[40rem]">
			<CircleSolid />
		</div>

		<!-- Title -->
		<div class="flex flex-col lg:mt-6">
			<p class="font-decorate text-4xl text-azul-600 md:text-6xl lg:text-[7vw]">About</p>
		</div>

		<!-- Detail -->
		<div class="z-10 col-span-2">
			<div class="mb-6 hyphens-auto font-light lg:text-2xl lg:leading-[3rem]" lang="th">
				<p>โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024</p>
				<p>เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย</p>
				<p>รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียนโปรแกรม</p>
				<p>
					โดยใช้ ภาษา <span class="text-moonstone-500">C หรือ C++</span>
					ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันระหว่างโรงเรียนในรูปแบบทีม
				</p>
				<p>
					ซึ่งแต่ละโรงเรียนสามารถส่งได้
					<span class="text-moonstone-500">โรงเรียนละ 1 ทีม ทีมละ 2-3 คน</span>
				</p>
				<p>
					พร้อม <span class="text-moonstone-500">อาจารย์ที่ปรึกษาทีมละ 1 คน</span>
				</p>
				<p>โดยอาจารย์ที่ปรึกษาจะต้องสอนอยู่ในสถานศึกษาเดียวกันกับนักเรียน</p>
				<p>ซึ่งกิจกรรมนี้จะช่วยทําให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ</p>
				<p>ในการเขียนโปรแกรม และฝึกการทํางานร่วมกันเป็นทีมอีกด้วย</p>
				<p>โดยโครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024</p>
				<p>
					<span class="text-azul-600">เปิดรับสมัครตั้งแต่วันที่ 31 ต.ค. 66 - 25 พ.ย. 66 </span> และการแข่งขันแบ่งออกเป็น
					4 รอบดังนี้
				</p>
			</div>

			<!-- Breaf time table -->
			<div class="relative grid gap-x-4 md:grid-cols-2">
				<div class="col-span-2 grid gap-x-4 border-b border-asphalt md:grid-cols-2">
					<div class=" border-t border-asphalt">
						<Table date="25" filter="คัดเหลือ 36 ทีม" month="ธันวาคม 2566" position="ONLINE" />
					</div>
					<span></span>
				</div>
				<div class="col-span-2 grid gap-x-4 md:grid-cols-2">
					<span></span>
					<div class=" border-b border-asphalt">
						<Table date="19" filter="คัดเหลือ 12 ทีม" month="มกราคม 2566" position="ONSITE" />
					</div>
				</div>
				<div class="col-span-2 grid gap-x-4 md:grid-cols-2">
					<span></span>
					<div class="border-b border-asphalt">
						<Table date="19" filter="คัดเหลือ 2 ทีม" month="มกราคม 2566" position="ONSITE" />
					</div>
				</div>
				<div class="col-span-2 grid gap-x-4 md:grid-cols-2">
					<span></span>
					<div class=" border-b border-asphalt">
						<Table date="19" filter="คัดเหลือ 1 ทีม" month="มกราคม 2566" position="ONSITE" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Images -->
	<div class="flex flex-col gap-4 pb-8 md:gap-8">
		<img class="" src="/about/about-image-1.png" alt="" />
		<div class="grid gap-4 md:grid-cols-3">
			<img class="bg-cover" src="/about/about-image-2.png" alt="" />
			<img class="bg-cover" src="/about/about-image-3.png" alt="" />
			<img class="bg-cover" src="/about/about-image-4.png" alt="" />
		</div>
	</div>
</div>
