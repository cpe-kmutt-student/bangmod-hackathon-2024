<!--suppress XmlInvalidId -->
<!-- Noted that, this is just the example form and should adjust style to match exactly with figma design -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let student_number = 1;
	let consent: boolean;
	let verify: boolean;

	export let form: ActionData;

	let PDPA_checkbox: HTMLInputElement;
	let verify_checkbox: HTMLInputElement;

	// Fix when page return from FormAction and checkbox is not bind with variable properly
	$: if (form && PDPA_checkbox && verify_checkbox) {
		PDPA_checkbox.checked = consent;
		verify_checkbox.checked = verify;
	}

	const fileSizeLimitHandle = (ev: Event) => {
		const input = ev.target as HTMLInputElement
		const files = input.files
		const TWO_MB = 2097152
		if (files && files[0].size > TWO_MB){
			input.value = ""
			alert("File is larger than 2MB")
		}
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>
<form
	class="relative mx-4 mb-12 mt-12 border border-stone-950 text-stone-950 md:mx-12 md:mt-16 lg:mt-24"
	method="POST"
	enctype="multipart/form-data"
	use:enhance
>
	<h1
		class="absolute left-1/2 top-0 w-fit -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-center font-['Homemade_Apple'] text-3xl md:px-8 md:text-5xl lg:text-7xl"
	>
		Registration
	</h1>

	<div class="m-4 md:mx-20 lg:mx-36 xl:mx-52">
		<div class="mx-auto mt-20 h-96 w-56 bg-zinc-300" />
		<div class="text-md mt-8 space-y-4">
			<h2 class="my-16 text-center text-xl font-medium">รายละเอียดเกี่ยวกับทีม</h2>
			<div class="flex flex-col space-y-2">
				<label for="name">ชื่อทีม <span class="text-red-700">*</span></label>
				<input
					id="name"
					name="name"
					class="h-9 rounded border p-2 {form?.error && Object.hasOwn(form.error, 'name')
						? 'border-red-600'
						: 'border-zinc-300'}"
				/>
			</div>
			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
				<div class="flex flex-col space-y-2 lg:col-span-3">
					<label for="school_name">โรงเรียน <span class="text-red-700">*</span></label>
					<input
						id="school_name"
						name="school_name"
						class="h-9 rounded border p-2 {form?.error && Object.hasOwn(form.error, 'school_name')
							? 'border-red-600'
							: 'border-zinc-300'}"
					/>
				</div>
				<div class="col-auto flex flex-col space-y-2">
					<label for="team_number">จำนวนสมาชิก <span class="text-red-700">*</span></label>
					<input
						type="number"
						min="1"
						max="1"
						id="team_number"
						class="h-9 rounded border border-zinc-300 p-2"
						bind:value={student_number}
					/>
				</div>
			</div>
		</div>
	</div>

	<hr class="mx-12 mt-16 border-stone-950" />

	<div class="m-4 md:mx-20 lg:mx-36 xl:mx-52">
		<div class="text-md mt-8 space-y-4">
			<h2 class="my-16 text-center text-xl font-medium">ข้อมูลเกี่ยวกับที่ปรึกษา</h2>
			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-5 xl:grid-cols-7">
				<div class="flex flex-col space-y-2">
					<label for="teacher_prefix">คำนำหน้าชื่อ <span class="text-red-700">*</span></label>
					<input
						id="teacher_prefix"
						name="teacher_prefix"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2 lg:col-span-2 xl:col-span-3">
					<label for="teacher_firstname">
						ชื่อจริง (ภาษาไทย) <span class="text-red-700">*</span>
					</label>
					<input
						id="teacher_firstname"
						name="teacher_firstname"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2 lg:col-span-2 xl:col-span-3">
					<label for="teacher_lastname">
						นามสกุล (ภาษาไทย) <span class="text-red-700">*</span>
					</label>
					<input
						id="teacher_lastname"
						name="teacher_lastname"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
			</div>
			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-3">
				<div class="flex flex-col space-y-2">
					<label for="teacher_phone">เบอร์โทรศัพท์ <span class="text-red-700">*</span></label>
					<input
						id="teacher_phone"
						name="teacher_phone"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="teacher_email">อีเมล <span class="text-red-700">*</span></label>
					<input
						id="teacher_email"
						name="teacher_email"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="teacher_line">
						ช่องทางการติดต่ออื่น ๆ <span class="text-red-700">*</span>
					</label>
					<input
						id="teacher_line"
						name="teacher_line"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
			</div>
			<div class="flex flex-col space-y-2">
				<label for="teacher_address">ที่อยู่ปัจจุบัน <span class="text-red-700">*</span></label>
				<input
					id="teacher_address"
					name="teacher_address"
					class="h-9 rounded border border-zinc-300 p-2"
				/>
			</div>
			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
				<div class="flex flex-col space-y-2">
					<label for="teacher_sub_district">ตำบล / แขวง <span class="text-red-700">*</span></label>
					<input
						id="teacher_sub_district"
						name="teacher_sub_district"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="teacher_district">อำเภอ / เขต <span class="text-red-700">*</span></label>
					<input
						id="teacher_district"
						name="teacher_district"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="teacher_province">จังหวัด <span class="text-red-700">*</span></label>
					<input
						id="teacher_province"
						name="teacher_province"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="teacher_zipcode">รหัสไปรษณีย์ <span class="text-red-700">*</span></label>
					<input
						id="teacher_zipcode"
						name="teacher_zipcode"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
			</div>
			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-5">
				<div class="flex flex-col space-y-2 lg:col-span-3">
					<label for="teacher_allergies">อาหารที่แพ้ / ประเภทอาหาร (เช่น มังสวิรัติ, ฮาลาล)</label>
					<input
						id="teacher_allergies"
						name="teacher_allergies"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="flex flex-col space-y-2 lg:col-span-2">
					<label for="teacher_drug">ยาที่แพ้</label>
					<input
						id="teacher_drug"
						name="teacher_drug"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
			</div>
			<div class="flex flex-col space-y-2">
				<label for="teacher_disease">โรคประจําตัว / วิธีปฐมพยาบาลเมื่อเกิดอาการ</label>
				<input
					id="teacher_disease"
					name="teacher_disease"
					class="h-9 rounded border border-zinc-300 p-2"
				/>
			</div>
			<div>เอกสารประกอบการสมัคร</div>
			<ol class="list-decimal space-y-8 font-light">
				<li class="ml-3 pl-2">
					<div class="grid lg:grid-cols-2">
						<label for="teacher_citizen_card" class="font-light">
							บัตรประชาชนอาจารย์ที่ปรึกษาพร้อมเซ็นกํากับหรือบัตรประจําตัวคนที่ไม่ได้ถือสัญชาติไทย
							(เฉพาะด้านหน้า)
							<span class="text-red-700">*</span>
						</label>
						<input
							type="file"
							id="teacher_citizen_card"
							name="teacher_citizen_card"
							accept="application/pdf,image/jpeg,image/png,image/webp,image/avif"
							class="h-9 rounded-3xl border border-zinc-300 p-2"
							on:change={fileSizeLimitHandle}
						/>
					</div>
				</li>
				<li class="ml-3 pl-2">
					<div class="grid lg:grid-cols-2">
						<label for="teacher_verify" class="font-light">
							เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจําสถาบันการศึกษา
							(บัตรประจําตัวครูอาจารย์, บัตรข้าราชการครูและบุคลากรทางการศึกษา)
							<span class="text-red-700">*</span>
						</label>
						<input
							type="file"
							id="teacher_verify"
							name="teacher_verify"
							accept="application/pdf,image/jpeg,image/png,image/webp,image/avif"
							class="h-9 rounded-3xl border border-zinc-300 p-2"
							on:change={fileSizeLimitHandle}
						/>
					</div>
				</li>
			</ol>
		</div>
	</div>

	<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
	{#each Array(student_number) as _, idx}
		<hr class="m-16 mx-12 border-stone-950" />

		<div class="m-4 md:mx-20 lg:mx-36 xl:mx-52">
			<div class="text-md mt-8 space-y-4">
				<h2 class="my-16 text-center text-xl font-medium">
					ข้อมูลเกี่ยวกับผู้เข้าแข่งขันท่านที่ {idx + 1}
				</h2>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-6">
					<div class="flex flex-col space-y-2">
						<label for="name_prefix">คำนำหน้าชื่อ <span class="text-red-700">*</span></label>
						<input
							id="name_prefix"
							name="students[{idx}][name_prefix]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2 lg:col-span-2">
						<label for="firstname">
							ชื่อจริง (ภาษาไทย) <span class="text-red-700">*</span>
						</label>
						<input
							id="firstname"
							name="students[{idx}][firstname]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2 lg:col-span-2">
						<label for="lastname">
							นามสกุล (ภาษาไทย) <span class="text-red-700">*</span>
						</label>
						<input
							id="lastname"
							name="students[{idx}][lastname]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="nickname">ชื่อเล่น <span class="text-red-700">*</span></label>
						<input
							id="nickname"
							name="students[{idx}][nickname]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
					<div class="flex flex-col space-y-2">
						<label for="date_of_birth">
							วัน / เดือน / ปีเกิด <span class="text-red-700">*</span>
						</label>
						<input
							id="date_of_birth"
							type="date"
							name="students[{idx}][date_of_birth]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="race">เชื้อชาติ <span class="text-red-700">*</span></label>
						<input
							id="race"
							name="students[{idx}][race]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="nationality">
							สัญชาติ <span class="text-red-700">*</span>
						</label>
						<input
							id="nationality"
							name="students[{idx}][nationality]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="religion">ศาสนา <span class="text-red-700">*</span></label>
						<input
							id="religion"
							name="students[{idx}][religion]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-2">
					<div class="flex flex-col space-y-2">
						<label for="phone">เบอร์โทรศัพท์ <span class="text-red-700">*</span></label>
						<input
							id="phone"
							name="students[{idx}][phone]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="level">ระดับชั้นปี <span class="text-red-700">*</span></label>
						<input
							id="level"
							name="students[{idx}][level]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-2">
					<div class="flex flex-col space-y-2">
						<label for="teacher_email">อีเมล <span class="text-red-700">*</span></label>
						<input
							id="email"
							type="email"
							name="students[{idx}][email]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="teacher_line">
							ช่องทางการติดต่ออื่น ๆ <span class="text-red-700">*</span>
						</label>
						<input
							id="line"
							name="students[{idx}][line]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="address">ที่อยู่ปัจจุบัน <span class="text-red-700">*</span></label>
					<input
						id="address"
						name="students[{idx}][address]"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
					<div class="flex flex-col space-y-2">
						<label for="sub_district">ตำบล / แขวง <span class="text-red-700">*</span></label>
						<input
							id="sub_district"
							name="students[{idx}][sub_district]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="teacher_district">อำเภอ / เขต <span class="text-red-700">*</span></label>
						<input
							id="district"
							name="students[{idx}][district]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="teacher_province">จังหวัด <span class="text-red-700">*</span></label>
						<input
							id="province"
							name="students[{idx}][province]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="teacher_zipcode">รหัสไปรษณีย์ <span class="text-red-700">*</span></label>
						<input
							id="zipcode"
							name="students[{idx}][zipcode]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-5">
					<div class="flex flex-col space-y-2 lg:col-span-3">
						<label for="allergies">อาหารที่แพ้ / ประเภทอาหาร (เช่น มังสวิรัติ, ฮาลาล)</label>
						<input
							id="allergies"
							name="students[{idx}][allergies]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
					<div class="flex flex-col space-y-2 lg:col-span-2">
						<label for="drug">ยาที่แพ้</label>
						<input
							id="drug"
							name="students[{idx}][drug]"
							class="h-9 rounded border border-zinc-300 p-2"
						/>
					</div>
				</div>
				<div class="flex flex-col space-y-2">
					<label for="disease">โรคประจําตัว / วิธีปฐมพยาบาลเมื่อเกิดอาการ</label>
					<input
						id="disease"
						name="students[{idx}][disease]"
						class="h-9 rounded border border-zinc-300 p-2"
					/>
				</div>
				<div>เอกสารประกอบการสมัคร</div>
				<ol class="list-decimal space-y-8 font-light">
					<li class="ml-3 pl-2">
						<div class="grid lg:grid-cols-2">
							<label for="image" class="font-light">
								รูปถ่ายนักเรียนผู้เข้าแข่งขัน
								<span class="text-red-700">*</span>
							</label>
							<input
								type="file"
								id="image"
								name="students[{idx}][image]"
								accept="application/pdf,image/jpeg,image/png,image/webp,image/avif"
								class="h-9 rounded-3xl border border-zinc-300 p-2"
								on:change={fileSizeLimitHandle}
							/>
						</div>
					</li>
					<li class="ml-3 pl-2">
						<div class="grid lg:grid-cols-2">
							<label for="citizen_card" class="font-light">
								บัตรประชาชนผู้เข้าแข่งขันพร้อมเซ็นกํากับ<br />
								หรือบัตรประจําตัวคนซึ่งไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
								<span class="text-red-700">*</span>
							</label>
							<input
								type="file"
								id="citizen_card"
								name="students[{idx}][citizen_card]"
								accept="application/pdf,image/jpeg,image/png,image/webp,image/avif"
								class="h-9 rounded-3xl border border-zinc-300 p-2"
								on:change={fileSizeLimitHandle}
							/>
						</div>
					</li>
					<li class="ml-3 pl-2">
						<div class="grid lg:grid-cols-2">
							<label for="student_card" class="font-light">
								บัตรนักเรียน
								<span class="text-red-700">*</span>
							</label>
							<input
								type="file"
								id="student_card"
								name="students[{idx}][student_card]"
								accept="application/pdf,image/jpeg,image/png,image/webp,image/avif"
								class="h-9 rounded-3xl border border-zinc-300 p-2"
								on:change={fileSizeLimitHandle}
							/>
						</div>
					</li>
					<li class="ml-3 pl-2">
						<div class="grid lg:grid-cols-2">
							<label for="student_certificate" class="font-light">
								ปพ.7 ของผู้เข้าแข่งขันตัวจริง
								<span class="text-red-700">*</span>
							</label>
							<input
								type="file"
								id="student_certificate"
								name="students[{idx}][student_certificate]"
								accept="application/pdf,image/jpeg,image/png,image/webp,image/avif"
								class="h-9 rounded-3xl border border-zinc-300 p-2"
								on:change={fileSizeLimitHandle}
							/>
						</div>
					</li>
				</ol>
			</div>
		</div>
	{/each}

	<hr class="m-16 mx-12 border-stone-950" />

	<div class="m-4 md:mx-20 lg:mx-36 xl:mx-52">
		<h2 class="mb-6">กรุณากดยืนยัน</h2>
		<p class="mb-6 font-light">
			กรณีมีข้อสงสัย หรือพบปัญหาโปรดติดต่อที่เพจ BangMod Hackathon 2024 ถ้าหาก 1
			โรงเรียนมีการส่งมากกว่า 1 ทีม จะยึดจากทีมที่ส่งข้อมูลก่อน และมีความถูกต้องของข้อมูลที่ครบถ้วน
		</p>
		<div class="grid gap-y-4 font-light lg:grid-cols-3">
			<div class="flex gap-2">
				<input
					id="PDPA_consent"
					class="h-6 w-6 shrink-0 bg-white"
					type="checkbox"
					bind:checked={consent}
					bind:this={PDPA_checkbox}
				/>
				<label for="PDPA_consent">ยินยอมการนําข้อมูลส่วนตัวไปใช้</label>
			</div>
			<div class="flex gap-2 lg:col-span-2">
				<input
					id="verify_data"
					class="h-6 w-6 shrink-0 bg-white"
					type="checkbox"
					bind:checked={verify}
					bind:this={verify_checkbox}
				/>
				<label for="verify_data">
					รับรองว่าข้อมูลทั้งหมดเป็นความจริง
					หากทีมงานตรวจสอบแล้วพบว่าข้อมูลไม่ตรงตามเงื่อนไขจะขอใช้อํานาจในการตัดสิทธิ์
				</label>
			</div>
		</div>

		<button
			type="submit"
			disabled={!verify || !consent}
			class="mx-auto my-20 flex items-center gap-12 rounded-full border border-blue-600 px-32 py-2 text-blue-600 enabled:hover:bg-blue-600 enabled:hover:text-white disabled:border-zinc-300 disabled:text-zinc-300"
		>
			ยืนยันการกรอกข้อมูล
		</button>
	</div>
</form>
