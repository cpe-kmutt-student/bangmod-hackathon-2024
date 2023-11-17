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
<About id="about" />
<Qualification id="qualification" />
<Award id="award" />
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
