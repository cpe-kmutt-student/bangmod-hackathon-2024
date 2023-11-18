<script lang="ts">
	import {
		About,
		Award,
		Contact,
		Hero,
		Qualification,
		Scope,
		Timeline
	} from '$lib/components/homes';
	import { Hamburger } from '$lib/components/icons';
	import { Cookies01, Eclairs01, IceCream02, Jelly, Macarons01, Pretzel } from '$lib/components/vectors';

	const sections = [
		{
			section: 'home',
			title: 'หน้าแรก'
		},
		{
			section: 'about',
			title: 'รายละเอียด'
		},
		{
			section: 'qualification',
			title: 'คุณสมบัติ'
		},
		{
			section: 'award',
			title: 'รางวัล'
		},
		{
			section: 'timeline',
			title: 'ไทม์ไลน์'
		},
		{
			section: 'scope',
			title: 'ขอบเขตเนื้อหา'
		},
		{
			section: 'contact',
			title: 'ติดต่อสอบถาม'
		}
	];

	let nav = false;
</script>

<svelte:head>
	<title>Bangmod Hackathon 2024</title>
</svelte:head>

<nav>
	<div class="fixed z-50 flex w-full items-center text-white">
		<div class="hidden w-full items-center justify-around md:flex">
			{#each sections as { section, title }}
				<a
					href={`#${section}`}
					class="flex w-full justify-center bg-[#774B4D] py-4 hover:bg-aubergine/50"
					on:click={() => {
						if (section === 'home') {
							document.body.scrollIntoView();
						}
					}}
				>
					{title}
				</a>
			{/each}
			<a href="register" class="flex w-full justify-center bg-[#69273c] py-4 hover:bg-aubergine/50">
				สมัคร
			</a>
		</div>
		<div class="flex w-full items-center justify-end bg-[#774B4D] md:hidden">
			<button
				class="md:hidden"
				aria-label="open hamburger"
				on:click={() => {
					nav = !nav;
				}}
			>
				<Hamburger />
			</button>
			{#if nav}
				<div class="r-0 fixed top-12 flex w-full flex-col items-center justify-center bg-[#774B4D]">
					{#each sections as { section, title }}
						<a
							href={`#${section}`}
							class="flex w-full justify-center bg-[#774B4D] py-2 hover:bg-aubergine/50"
							on:click={() => {
								if (section === 'home') {
									document.body.scrollIntoView();
								}
							}}
						>
							{title}
						</a>
					{/each}
					<a
						href="register"
						class="flex w-full justify-center bg-[#69273c] py-2 hover:bg-aubergine/50"
					>
						สมัคร
					</a>
				</div>
			{/if}
		</div>
	</div>
</nav>
<Hero id="home" />
<About class="z-10" id="about" />
<div class="clipping relative">
	<Qualification class="-z-10" id="qualification" />
	<Award id="award" />
	<Macarons01 class="absolute -left-10 -top-10 rotate-6 lg:-left-20 lg:-top-20" />
	<IceCream02 class="absolute -right-10 -top-10 lg:-right-10 lg:-top-14" />
	<Eclairs01 class="absolute -bottom-12 left-8 -scale-x-100 lg:-bottom-20 lg:left-10" />
	<Jelly class="absolute -right-16 top-2/3 rotate-12 -scale-x-100" />
	<Cookies01 class="absolute -left-20 lg:-left-28 top-[40%] -rotate-[25deg]" />
	<Cookies01 class="absolute -left-20 lg:-left-28 top-[55%] rotate-[20deg]" />
	<Pretzel class="absolute -right-20 top-1/3 -rotate-12 -scale-x-100"/>
</div>
<Timeline id="timeline" />
<Scope id="scope" />
<Contact id="contact" />
<footer class="flex justify-between bg-sandy px-8 py-2 font-latin font-light lg:px-16">
	<span>©2023 BangMod Hackathon 2024</span>
	<button
		on:click={() => {
			document.body.scrollIntoView();
		}}
	>
		Back to the top ↑
	</button>
</footer>

<style>
	.clipping {
		clip-path: inset(0 0 0 0);
	}
</style>
