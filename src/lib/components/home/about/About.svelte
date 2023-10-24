<script lang="ts">
	import CircleLine from './CircleLine.svelte';
	import Table from './Table.svelte';
</script>

<div class="relative snap-start bg-soapstone">
	<div
		class="relative block min-h-screen grid-cols-1 overflow-clip p-14 lg:grid lg:grid-cols-3 lg:gap-20"
	>
		<img
			class="absolute -right-32 -top-44 md:-right-[20rem] md:-top-[25rem] lg:-right-[40rem] lg:-top-[50rem] lg:scale-90"
			src="/about/about-1.png"
			alt=""
		/>
		<img
			class="absolute hidden md:-bottom-[30rem] md:-left-[5rem] md:block lg:-bottom-[50rem] lg:-left-[12rem] lg:scale-75"
			src="/about/about-pudding.png"
			alt=""
		/>

		<!-- Title -->
		<div class="flex flex-col">
			<p class="font-decorate text-[10vw] text-azul-600 lg:text-[8.5vw]">About</p>
		</div>

		<!-- Detail -->
		<div class="z-10 col-span-2">
			<div class="mb-6 hyphens-auto font-light lg:text-2xl lg:leading-[3rem]" lang="th">
				<p>โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024</p>
				<p>เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย</p>
				<p>รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียนโปรแกรม</p>
				<p>
					โดยใช้ ภาษา <span class="text-[#FB7500]">C หรือ C++</span>
					ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันระหว่างโรงเรียนในรูปแบบทีม
				</p>
				<p>
					ซึ่งแต่ละโรงเรียนสามารถส่งได้
					<span class="text-[#FB7500]">โรงเรียนละ 1 ทีม ทีมละ 2-3 คน</span>
				</p>
				<p>
					พร้อม <span class="text-[#FB7500]">อาจารย์ที่ปรึกษาทีมละ 1 คน</span>
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
			<img class="" src="/about/about-image-2.png" alt="" />
			<img class="" src="/about/about-image-3.png" alt="" />
			<img class="" src="/about/about-image-4.png" alt="" />
		</div>
	</div>
</div>
