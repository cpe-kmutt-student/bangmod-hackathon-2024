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

	const sections = {
		home: 'หน้าแรก',
		about: 'รายละเอียด',
		qualification: 'คุณสมบัติ',
		award: 'รางวัล',
		timeline: 'ไทม์ไลน์',
		scope: 'ขอบเขตเนื้อหา',
		contact: 'ติดต่อสอบถาม'
	};
	let nav = 0;
	$: nav = nav % 2;
</script>

<svelte:head>
	<title>Bangmod Hackathon 2024</title>
</svelte:head>

<nav>
	<div class="fixed z-50 flex w-full items-center text-white">
		<div class="hidden w-full items-center justify-around md:flex">
			{#each Object.entries(sections) as [section, name]}
				<a
					href={`#${section}`}
					class="flex w-full justify-center bg-[#774B4D] py-4 hover:bg-aubergine/50"
					on:click={() => {
						if (section === 'home') {
							document.body.scrollIntoView();
						}
					}}>{name}</a
				>
			{/each}
			<a href="register" class="flex w-full justify-center bg-[#69273c] py-4 hover:bg-aubergine/50"
				>สมัคร</a
			>
		</div>
		<div class="flex w-full items-center justify-end bg-[#774B4D] md:hidden">
			<button
				class="md:hidden"
				aria-label="open hamburger"
				on:click={() => {
					nav += 1;
				}}
			>
				<svg
					class="m-2 h-8 w-8"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			</button>
			{#if nav === 1}
				<div class="r-0 fixed top-12 flex w-full flex-col items-center justify-center bg-[#774B4D]">
					{#each Object.entries(sections) as [section, name]}
						<a
							href={`#${section}`}
							class="flex w-full justify-center bg-[#774B4D] py-2 hover:bg-aubergine/50">{name}</a
						>
					{/each}
					<a
						href="register"
						class="flex w-full justify-center bg-[#69273c] py-2 hover:bg-aubergine/50">สมัคร</a
					>
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
