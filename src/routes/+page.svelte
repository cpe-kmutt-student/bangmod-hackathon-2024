<script lang="ts">
	import { About, Award, Hero, Qualification, Timeline } from '$lib/sections/home';
	import Contact from '$lib/sections/home/Contact.svelte';
	import Scope from '$lib/sections/home/Scope.svelte';
</script>

<svelte:head>
	<title>Bangmod Hackathon 2024</title>
</svelte:head>

<Hero id='home' />
<About />
<Qualification />
<Award />
<Timeline />
<Scope/>
<Contact/>
<footer class='flex px-8 lg:px-16 pb-16 font-latin font-light justify-between'>
	<span>©2023 BangMod Hackathon 2024</span>
	<a href='#home'>Back to the top ↑</a>
</footer>