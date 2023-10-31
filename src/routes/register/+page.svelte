<script lang="ts">

	import { fade } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';

	import {
		AddressInput,
		CheckBox,
		ComboBox,
		DatePicker,
		FileInput,
		Input
	} from '$lib/components/forms';
	import { Spinner } from '$lib/components/icons';
	import { consent, verify } from '$lib/stores/consent';
	import { formContent } from '$lib/utils/store';

	import type { ActionData, PageData } from './$types';

	import { browser } from '$app/environment';

	$: if (browser) window.localStorage.form = JSON.stringify($formContent);

	let student_number = 2;
	let submitting = false;

	export let data: PageData;

	const { enhance, errors } = superForm(data.form, {
		onSubmit: () => (submitting = true),
		onResult: () => (submitting = false)
	});

	const teacherNamePrefixItems = ['นาย', 'นาง', 'นางสาว'];
	const namePrefixItems = ['นาย', 'นางสาว'];
	const educationLevelItems = [
		'มัธยมศึกษาปีที่ 4',
		'มัธยมศึกษาปีที่ 5',
		'มัธยมศึกษาปีที่ 6',
		'ประกาศนียบัตรวิชาชีพชั้นปีที่ 1',
		'ประกาศนียบัตรวิชาชีพชั้นปีที่ 2',
		'ประกาศนียบัตรวิชาชีพชั้นปีที่ 3',
		'เทียบเท่ามัธยมศึกษาตอนปลาย'
	];

	export let form: ActionData;

	$: errorModal = form && form.error;
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div
	class="text-md relative mx-auto mb-12 mt-12 w-[95%] max-w-screen-lg border border-asphalt text-sm text-asphalt md:mt-20"
>
	<h1
		class="absolute left-1/2 top-0 w-fit -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-center font-decorate text-4xl tracking-tight md:px-8 md:text-5xl"
	>
		Registration
	</h1>
	<form method="POST" enctype="multipart/form-data" use:enhance>
		<fieldset class="m-4 mx-auto mt-12 w-3/4 max-w-[48rem] space-y-5">
			<legend class="my-12 text-center text-2xl font-medium"> รายละเอียดเกี่ยวกับทีม</legend>
			<Input type="text" name="name" errors={$errors.name} bind:value={$formContent.name} required>
				ชื่อทีม
			</Input>
			<div class="flex flex-col gap-x-8 gap-y-4 lg:flex-row">
				<Input
					type="text"
					class="flex-auto lg:basis-10/12"
					name="school_name"
					errors={$errors.school_name}
					bind:value={$formContent.school_name}
					required
				>
					โรงเรียน
				</Input>
				<Input
					type="number"
					class="flex-auto lg:basis-3/12"
					min="2"
					max="3"
					bind:value={student_number}
					required
				>
					จำนวนสมาชิก
				</Input>
			</div>
		</fieldset>

		<hr class="mx-24 my-20 border-asphalt" />

		<fieldset class="m-4 mx-auto w-3/4 max-w-[48rem] space-y-5">
			<legend class="my-12 text-center text-2xl font-medium">ข้อมูลเกี่ยวกับที่ปรึกษา</legend>
			<div class="flex flex-col gap-x-8 gap-y-4 lg:flex-row 2xl:gap-x-12">
				<ComboBox
					name="teacher_prefix"
					class="flex-auto lg:basis-44"
					errors={$errors.teacher_prefix}
					items={teacherNamePrefixItems}
					bind:value={$formContent.teacher_prefix}
					required
				>
					คำนำหน้าชื่อ
				</ComboBox>
				<Input
					type="text"
					class="flex-auto lg:basis-5/12"
					name="teacher_firstname"
					errors={$errors.teacher_firstname}
					bind:value={$formContent.teacher_firstname}
					placeholder="ขยัน"
					required
				>
					ชื่อจริง (ภาษาไทย)
				</Input>
				<Input
					type="text"
					class="flex-auto lg:basis-5/12"
					name="teacher_lastname"
					errors={$errors.teacher_lastname}
					bind:value={$formContent.teacher_lastname}
					placeholder="หมั่นเพียร"
					required
				>
					นามสกุล (ภาษาไทย)
				</Input>
			</div>
			<div class="flex flex-col gap-x-8 gap-y-4 lg:flex-row 2xl:gap-x-12">
				<Input
					type="tel"
					class="flex-auto lg:basis-1/3"
					name="teacher_phone"
					errors={$errors.teacher_phone}
					bind:value={$formContent.teacher_phone}
					placeholder="0900000000"
					required
				>
					เบอร์โทรศัพท์
				</Input>
				<Input
					type="email"
					class="flex-auto lg:basis-1/3"
					name="teacher_email"
					errors={$errors.teacher_email}
					bind:value={$formContent.teacher_email}
					placeholder="khayan@email.com"
					required
				>
					อีเมล
				</Input>
				<Input
					name="teacher_contact"
					class="flex-auto lg:basis-1/3"
					errors={$errors.teacher_contact}
					bind:value={$formContent.teacher_contact}
					placeholder="Line: khayan123 หรือ Facebook: ขยัน หมั่นเพียร"
					required
				>
					ช่องทางการติดต่ออื่น ๆ
				</Input>
			</div>
			<Input
				name="teacher_address"
				errors={$errors.teacher_address}
				bind:value={$formContent.teacher_address}
			>
				ที่อยู่ปัจจุบัน <span class="text-red-700">*</span>
			</Input>

			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
				<AddressInput
					name={{
						sub_district: 'teacher_sub_district',
						district: 'teacher_district',
						province: 'teacher_province',
						zipcode: 'teacher_zipcode'
					}}
					errors={{
						sub_district: $errors.teacher_sub_district,
						district: $errors.teacher_district,
						province: $errors.teacher_province,
						zipcode: $errors.teacher_zipcode
					}}
					bind:value={$formContent.teacher_address_detail}
					required
				/>
			</div>
			<div class="grid gap-x-8 gap-y-4 lg:grid-cols-5">
				<Input
					class="lg:col-span-3"
					name="teacher_allergies"
					bind:value={$formContent.teacher_allergies}
				>
					อาหารที่แพ้ / ประเภทอาหาร (เช่น มังสวิรัติ, ฮาลาล)
				</Input>
				<Input class="lg:col-span-2" name="teacher_drug" bind:value={$formContent.teacher_drug}
					>ยาที่แพ้</Input
				>
			</div>
			<Input name="teacher_disease" bind:value={$formContent.teacher_disease}
				>โรคประจําตัว / วิธีปฐมพยาบาลเมื่อเกิดอาการ</Input
			>
			<div>เอกสารประกอบการสมัคร</div>
			<div class="space-y-8 font-light">
				<FileInput
					name="teacher_citizen_card"
					accept="application/pdf"
					errors={$errors?.teacher_citizen_card}
					required
				>
					1. บัตรประชาชนอาจารย์ที่ปรึกษาพร้อมเซ็นกํากับหรือบัตรประจําตัวคนที่ไม่ได้ถือสัญชาติไทย
					(เฉพาะด้านหน้า)
				</FileInput>
				<FileInput
					name="teacher_verify"
					accept="application/pdf"
					errors={$errors?.teacher_verify}
					required
				>
					2. เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจําสถาบันการศึกษา
					(บัตรประจําตัวครูอาจารย์, บัตรข้าราชการครูและบุคลากรทางการศึกษา)
				</FileInput>
			</div>
		</fieldset>

		<!--	eslint-disable-next-line @typescript-eslint/no-unused-vars-->
		{#each { length: student_number } as _, idx}
			<hr class="mx-24 my-20 border-asphalt" />

			<fieldset class="m-4 mx-auto mt-0 w-3/4 max-w-[48rem] space-y-4">
				<legend class="mb-12 mt-0 text-center text-2xl font-medium">
					ข้อมูลเกี่ยวกับผู้เข้าแข่งขันท่านที่ {idx + 1}
				</legend>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-6">
					<ComboBox
						name="students[{idx}].name_prefix"
						errors={$errors?.students?.[idx].name_prefix}
						bind:value={$formContent.students[idx].name_prefix}
						items={namePrefixItems}
						required
					>
						คำนำหน้าชื่อ
					</ComboBox>
					<Input
						class="lg:col-span-2"
						name="students[{idx}].firstname"
						errors={$errors?.students?.[idx].firstname}
						bind:value={$formContent.students[idx].firstname}
						required
					>
						ชื่อจริง (ภาษาไทย)
					</Input>
					<Input
						class="lg:col-span-2"
						name="students[{idx}].lastname"
						errors={$errors?.students?.[idx]?.lastname}
						bind:value={$formContent.students[idx].lastname}
						required
					>
						นามสกุล (ภาษาไทย)
					</Input>
					<Input
						name="students[{idx}].nickname"
						errors={$errors?.students?.[idx].nickname}
						bind:value={$formContent.students[idx].nickname}
						required
					>
						ชื่อเล่น
					</Input>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
					<DatePicker
						name="students[{idx}].date_of_birth"
						errors={$errors?.students?.[idx].date_of_birth}
						bind:value={$formContent.students[idx].date_of_birth}
						placeholder="31/01/2008"
						required
					>
						วัน / เดือน / ปีเกิด
					</DatePicker>
					<Input
						name="students[{idx}].race"
						errors={$errors?.students?.[idx].race}
						bind:value={$formContent.students[idx].race}
						required
					>
						เชื้อชาติ
					</Input>
					<Input
						name="students[{idx}].nationality"
						errors={$errors?.students?.[idx].nationality}
						bind:value={$formContent.students[idx].nationality}
						required
					>
						สัญชาติ
					</Input>
					<Input
						name="students[{idx}].religion"
						errors={$errors?.students?.[idx].religion}
						bind:value={$formContent.students[idx].religion}
						required
					>
						ศาสนา
					</Input>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-2">
					<Input
						type="tel"
						name="students[{idx}].phone"
						errors={$errors?.students?.[idx].phone}
						bind:value={$formContent.students[idx].phone}
						required
					>
						เบอร์โทรศัพท์
					</Input>
					<ComboBox
						items={educationLevelItems}
						name="students[{idx}].level"
						errors={$errors?.students?.[idx].level}
						bind:value={$formContent.students[idx].level}
						required
					>
						ระดับชั้นปี
					</ComboBox>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-2">
					<Input
						type="email"
						name="students[{idx}].email"
						errors={$errors?.students?.[idx].email}
						bind:value={$formContent.students[idx].email}
						required
					>
						อีเมล
					</Input>
					<Input
						name="students[{idx}].contact"
						errors={$errors?.students?.[idx].contact}
						bind:value={$formContent.students[idx].contact}
						placeholder="Line: khayan123 หรือ Facebook: ขยัน หมั่นเพียร"
						required
					>
						ช่องทางการติดต่ออื่น ๆ
					</Input>
				</div>
				<Input
					name="students[{idx}].address"
					errors={$errors?.students?.[idx].address}
					bind:value={$formContent.students[idx].address}
					required
				>
					ที่อยู่ปัจจุบัน
				</Input>

				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-4">
					<AddressInput
						name={{
							sub_district: `students[${idx}].sub_district`,
							district: `students[${idx}].district`,
							province: `students[${idx}].province`,
							zipcode: `students[${idx}].zipcode`
						}}
						errors={{
							sub_district: $errors?.students?.[idx].sub_district,
							district: $errors.students?.[idx].district,
							province: $errors?.students?.[idx].province,
							zipcode: $errors?.students?.[idx].zipcode
						}}
						bind:value={$formContent.students[idx].address_detail}
						required
					/>
				</div>
				<div class="grid gap-x-8 gap-y-4 lg:grid-cols-5">
					<Input
						class="lg:col-span-3"
						name="students[{idx}].allergies"
						errors={$errors?.students?.[idx].allergies}
						bind:value={$formContent.students[idx].allergies}
					>
						อาหารที่แพ้ / ประเภทอาหาร (เช่น มังสวิรัติ, ฮาลาล)
					</Input>
					<Input
						class="lg:col-span-2"
						name="students[{idx}].drug"
						errors={$errors?.students?.[idx].drug}
						bind:value={$formContent.students[idx].drug}
					>
						ยาที่แพ้
					</Input>
				</div>
				<Input
					name="students[{idx}].disease"
					errors={$errors?.students?.[idx].disease}
					bind:value={$formContent.students[idx].disease}
				>
					โรคประจําตัว / วิธีปฐมพยาบาลเมื่อเกิดอาการ
				</Input>

				<div>เอกสารประกอบการสมัคร</div>
				<ol class="list-decimal space-y-8 font-light">
					<li class="ml-3 pl-2">
						<FileInput
							name="students[{idx}].image"
							accept="application/pdf"
							errors={$errors?.students?.[idx].image}
							required
						>
							รูปถ่ายนักเรียนผู้เข้าแข่งขัน
						</FileInput>
					</li>
					<li class="ml-3 pl-2">
						<FileInput
							name="students[{idx}].citizen_card"
							accept="application/pdf"
							errors={$errors?.students?.[idx].citizen_card}
							required
						>
							บัตรประชาชนผู้เข้าแข่งขันพร้อมเซ็นกํากับ<br />
							หรือบัตรประจําตัวคนซึ่งไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
						</FileInput>
					</li>
					<li class="ml-3 pl-2">
						<FileInput
							name="students[{idx}].student_card"
							accept="application/pdf"
							errors={$errors?.students?.[idx].student_card}
							required
						>
							บัตรนักเรียน
						</FileInput>
					</li>
					<li class="ml-3 pl-2">
						<FileInput
							name="students[{idx}].student_certificate"
							accept="application/pdf"
							errors={$errors?.students?.[idx].student_certificate}
							required
						>
							ปพ.7 ของผู้เข้าแข่งขันตัวจริง
						</FileInput>
					</li>
				</ol>
			</fieldset>
		{/each}

		<hr class="mx-12 my-20 border-asphalt md:mx-24" />

		<fieldset class="m-4 mx-auto mb-8 w-3/4 max-w-[48rem] space-y-5">
			<p class="mb-6 font-light">
				กรณีมีข้อสงสัย หรือพบปัญหาโปรดติดต่อที่เพจ
				<a href="https://www.facebook.com/BangmodHackathon/">BangMod Hackathon 2024</a>
				ถ้าหาก 1 โรงเรียนมีการส่งมากกว่า 1 ทีม จะยึดจากทีมที่ส่งข้อมูลก่อน และมีความถูกต้องของข้อมูลที่ครบถ้วน
			</p>
			<div class="grid gap-y-4 font-light lg:grid-cols-3">
				<CheckBox bind:checked={$consent}>ยินยอมการนําข้อมูลส่วนตัวไปใช้</CheckBox>
				<CheckBox class="lg:col-span-2" bind:checked={$verify}
					>รับรองว่าข้อมูลทั้งหมดเป็นความจริง
					หากทีมงานตรวจสอบแล้วพบว่าข้อมูลไม่ตรงตามเงื่อนไขจะขอใช้อํานาจในการตัดสิทธิ์
				</CheckBox>
			</div>

			<button
				type="submit"
				disabled={!$verify || !$consent || submitting}
				class="mx-auto my-32 flex items-center gap-12 rounded-full border border-azul-600 px-12 py-2 text-azul-600 enabled:hover:bg-azul-600 enabled:hover:text-white disabled:border-iron-300 disabled:text-iron-300 sm:px-20"
			>
				{#if submitting}
					<Spinner class="h-6 w-6" />
				{/if}
				<span class="h-6">ยืนยันการกรอกข้อมูล</span>
			</button>
		</fieldset>
	</form>
</div>
{#if errorModal}
	<div transition:fade class="fixed left-1 top-1 max-h-full w-fit max-w-[15rem] md:left-5 md:top-5">
		<!-- Modal content -->
		<div class="relative rounded-lg bg-white shadow">
			<!-- Modal header -->
			<div class="flex items-start justify-between rounded-t border-b p-4">
				<h3 class="text-md font-semibold text-scarlet-800 md:text-xl">Error occur !</h3>
				<button
					type="button"
					class="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
					on:click={() => (errorModal = false)}
				>
					<svg
						class="h-3 w-3 stroke-scarlet-800"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<!-- Modal body -->
			<div class="space-y-6 p-6">
				<p class="whitespace-pre-line text-base font-light leading-relaxed text-asphalt">
					{form.error}
				</p>
			</div>
		</div>
	</div>
{/if}
