<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	import {Section, currentSection} from "$lib/components/homes/Navbar/navbar";
	import NavElement from '$lib/components/homes/Navbar/NavElement.svelte';
	

	let isLate = false;
	let navbar = true;
	$currentSection = Section.Hero;
</script>

<div class="md:h-30 fixed z-50 h-16 w-full">
	<div
		class="static z-10 m-0 flex h-full w-full items-center justify-between bg-[#3E245D]/70 p-0 px-5 backdrop-blur-md md:hidden md:bg-transparent"
	>
		<span class="w-10 rounded-md p-2" />
		<a href="/" class="h-20 p-2">
			<img src="logo.webp" alt="bangmod hackathon 2023 logo" class="h-[100%] w-auto" />
		</a>
		<button class="rounded-md p-2" on:click={() => (navbar = !navbar)}>
			{#if navbar}
				<div
					class="b relative flex h-[1rem] w-[1.3125rem] flex-col items-center justify-center md:justify-between"
				>
					<div
						class="absolute h-0 w-[1.3125rem] rotate-45 rounded-md border-t-[0.2rem] border-white"
					/>
					<div
						class="absolute h-0 w-[1.3125rem] rotate-[-45deg] rounded-md border-t-[0.2rem] border-white"
					/>
				</div>
			{:else}
				<div class="b flex h-[1rem] w-[1.3125rem] flex-col items-center justify-between">
					<div class="h-0 w-[1.3125rem] rounded-md border-t-[0.13rem] border-white" />
					<div class="h-0 w-[1.3125rem] rounded-md border-t-[0.13rem] border-white" />
					<div class="h-0 w-[1.3125rem] rounded-md border-t-[0.13rem] border-white" />
				</div>
			{/if}
		</button>
	</div>

	<div class="static mx-4 my-2 hidden items-center justify-center md:flex">
		<a href="/" class="h-20">
			<img src="logo.webp" alt="bangmod hackathon 2023 logo" class="mr-8 h-[100%] w-auto" />
		</a>
		<nav
			class="flex h-10 w-full max-w-2xl rounded-md bg-gradient-to-r from-[#DB9116] p-0 text-white drop-shadow"
		>
			<NavElement
				content="รายละเอียด"
				href="#information-section"
				class={twJoin(
					'rounded-l-md border-l-[0.01px] border-white/20',
					$currentSection === Section.Info ? 'bg-white text-black' : ''
				)}
			/>
			<NavElement
				class={$currentSection === Section.Qualification ? 'bg-white text-black' : ''}
				content="คุณสมบัติ"
				href="#qualification-section"
			/>
			<NavElement
				class={$currentSection === Section.Reward ? 'bg-white text-black' : ''}
				content="รางวัล"
				href="#reward-section"
			/>
			<NavElement
				class={$currentSection === Section.Timeline ? 'bg-white text-black' : ''}
				content="ไทม์ไลน์"
				href="#timeline-section"
			/>
			<NavElement
				class={$currentSection === Section.Scope ? 'bg-white text-black' : ''}
				content="ขอบเขตเนื้อหา"
				href="#scope-section"
			/>
			<NavElement
				class={$currentSection === Section.Contact ? 'bg-white text-black' : ''}
				content="ติดต่อสอบถาม"
				href="#contact-section"
			/>
			{#if isLate}
				<button
					class="flex flex-auto cursor-not-allowed items-center justify-center rounded-r-md border-[0.01px] border-white bg-[#DB9116]"
					disabled
				>
					ปิดรับสมัคร
				</button>
			{:else}
				<a
					class="flex flex-auto items-center justify-center rounded-r-md border-[0.01px] border-white bg-[#DB9116]"
					href="/register"
				>
					สมัคร
				</a>
			{/if}
		</nav>
	</div>
	{#if navbar}
		<div class="static flex items-center justify-center md:hidden">
			<nav
				class="flex h-[20rem] w-full flex-col bg-[#3E245D]/70 p-0 pb-5 text-white backdrop-blur-md"
			>
				<NavElement content="รายละเอียด" href="#information-section" />
				<NavElement content="คุณสมบัติ" href="#qualification-section" />
				<NavElement content="รางวัล" href="#reward-section" />
				<NavElement content="ไทม์ไลน์" href="#timeline-section" />
				<NavElement content="ขอบเขตเนื้อหา" href="#scope-section" />
				<NavElement content="ติดต่อสอบถาม" href="#contact-section" />
				{#if isLate}
					<button
						class="m-2 mx-20 flex flex-auto items-center justify-center rounded-md border-[0.01px] border-white bg-[#8B69AE]"
						disabled
					>
						ปิดรับสมัคร
					</button>
				{:else}
					<a
						class="m-2 mx-20 flex flex-auto items-center justify-center rounded-md border-[0.01px] border-white bg-[#8B69AE]"
						href="/register"
					>
						สมัคร
					</a>
				{/if}
			</nav>
		</div>
	{/if}
</div>
