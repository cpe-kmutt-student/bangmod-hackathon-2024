<script>
	import { twMerge } from 'tailwind-merge';
</script>

<div {...$$restProps} class={twMerge("flex flex-col gap-x-20 px-6 py-12 lg:flex-row lg:px-16 lg:py-20", $$props.class)}>
	<h2
		class="basis-1/3 self-center font-decorate text-5xl leading-normal text-azul-600 lg:self-start lg:text-8xl xl:text-9xl"
	>
		About
	</h2>
	<div class="basis-2/3 space-y-2 pt-2 text-lg font-light leading-loose lg:text-[1.5rem]">
		<p>
			โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024<br />
			เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช.
			หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียนโปรแกรม โดยใช้
			<span class="whitespace-nowrap text-butternut">ภาษา C หรือ C++</span>
			ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันระหว่างโรงเรียนในรูปแบบทีม ซึ่งแต่ละโรงเรียนสามารถส่งได้
			<span class="text-butternut">โรงเรียนละ&nbsp;1&nbsp;ทีม ทีมละ&nbsp;2-3&nbsp;คน</span> พร้อม
			<span class="whitespace-nowrap text-butternut">อาจารย์ที่ปรึกษาทีมละ 1 คน</span>
		</p>
		<p>
			โดยอาจารย์ที่ปรึกษาจะต้องสอนอยู่ในสถานศึกษาเดียวกันกับนักเรียน
			ซึ่งกิจกรรมนี้จะช่วยทําให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม
			และฝึกการทํางานร่วมกันเป็นทีมอีกด้วย
		</p>
		<p>
			โดยโครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024
			<span class="text-azul-600"
				>เปิดรับสมัครตั้งแต่วันที่ 31&nbsp;ต.ค.&nbsp;66 - 25&nbsp;พ.ย.&nbsp;66</span
			>
			และการแข่งขันแบ่งออกเป็น 4 รอบ ดังนี้
		</p>
		<div class="flex flex-col">
			<div class="flex border-b border-asphalt">
				<div class="mt-4 flex basis-1/2 border-t border-asphalt py-4 font-light leading-snug">
					<div class="basis-1/2">
						<span class="font-latin text-4xl">25</span><br />
						ธันวาคม 2023
					</div>
					<div class="basis-1/2 text-end">
						<span class="font-latin leading-10 text-lupine">ONLINE</span><br />
						คัดเหลือ 36&nbsp;ทีม
					</div>
				</div>
			</div>
			<div class="flex flex-row-reverse">
				<div class="flex basis-1/2 flex-col self-end">
					<div class="flex border-b border-asphalt py-4 font-light leading-snug">
						<div class="basis-1/2">
							<span class="font-latin text-4xl">19</span><br />
							ธันวาคม 2023
						</div>
						<div class="basis-1/2 text-end">
							<span class="font-latin leading-10 text-lupine">ONSITE</span><br />
							คัดเหลือ 12&nbsp;ทีม
						</div>
					</div>
					<div class="flex border-b border-asphalt py-4 font-light leading-snug">
						<div class="basis-1/2">
							<span class="font-latin text-4xl">19</span><br />
							ธันวาคม 2023
						</div>
						<div class="basis-1/2 text-end">
							<span class="font-latin leading-10 text-lupine">ONSITE</span><br />
							คัดเหลือ 2&nbsp;ทีม
						</div>
					</div>
					<div class="flex border-b border-asphalt py-4 font-light leading-snug">
						<div class="basis-1/2">
							<span class="font-latin text-4xl">19</span><br />
							ธันวาคม 2023
						</div>
						<div class="basis-1/2 text-end">
							<span class="font-latin leading-10 text-lupine">ONSITE</span><br />
							คัดเหลือ 1&nbsp;ทีม
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mb-8 flex w-full flex-col gap-y-4">
	<img alt="นักเรียนกำลังช่วยกันนั่งคิดวิธีแก้โจทย์ปัญหาเการเขียนโปรแกรม" src="/Image_1.webp" />
	<div class="grid gap-4 md:grid-cols-3">
		<img
			class="object-contain"
			alt="นักเรียนกำลังช่วยกันนั่งคิดวิธีแก้โจทย์ปัญหาเการเขียนโปรแกรม"
			src="/Image_4.webp"
		/>
		<img
			class="object-contain"
			alt="นักเรียนกำลังช่วยกันนั่งคิดวิธีแก้โจทย์ปัญหาเการเขียนโปรแกรม"
			src="/Image_2.webp"
		/>
		<img
			class="object-contain"
			alt="นักเรียนกำลังช่วยกันนั่งคิดวิธีแก้โจทย์ปัญหาเการเขียนโปรแกรม"
			src="/Image_3.webp"
		/>
	</div>
</div>
