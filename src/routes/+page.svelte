<script lang="ts">
	import { About, Award, Hero, Qualification, Timeline } from '$lib/sections/home';
	import Contact from '$lib/sections/home/Contact.svelte';
	import Scope from '$lib/sections/home/Scope.svelte';

	const sections = {
		top: "หน้าแรก",
		about: "รายละเอียด",
		qualification: "คุณสมบัติ",
		award: "รางวัล",
		timeline: "ไทม์ไลน์",
		scope: "ขอบเขตเนื้อหา",
		contact: "ติดต่อสอบถาม",
	};
</script>

<svelte:head>
	<title>Bangmod Hackathon 2024</title>
</svelte:head>

<nav>
	<div class='fixed z-50 bg-[#803049bd] w-full flex items-center text-white'>
		<div class='flex w-full items-center justify-around'>
			{#each Object.entries(sections)  as [section, name]}
				<a href={`#${section}`} class='py-4 w-full flex justify-center hover:bg-aubergine/50'>{name}</a>
			{/each}
			<a href="register" class='py-4 w-full flex justify-center bg-[#803049bd] hover:bg-aubergine/50 text-xl'>สมัคร</a>
		</div>
	</div>
</nav>
<Hero id='home' />
<About id='about' />
<Qualification id='qualification' />
<Award id='award' />
<Timeline id='timeline' />
<Scope id='scope' />
<Contact id='contact' />
<footer class='flex px-8 lg:px-16 pb-16 font-latin font-light justify-between'>
	<span>©2023 BangMod Hackathon 2024</span>
	<a href='#home'>Back to the top ↑</a>
</footer>