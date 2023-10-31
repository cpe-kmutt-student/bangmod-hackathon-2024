<script lang="ts">
	import {
		Contact,
		Hero,
		Information,
		Navbar,
		Qualification,
		Reward,
		Scope,
		TimeLine
	} from '$lib/components/homes';
</script>

<svelte:head>
	<title>Bangmod Hackathon 2024</title>
</svelte:head>


<div on:scroll={()=>console.log("Document")} class="h-full w-full overflow-x-hidden">
	<Navbar />

	<Hero />

	<div class="h-full w-full">
		<div
			class="relative z-30 bg-gradient-to-b from-[#3E245D] via-[#B04F9C] to-[#40245E] md:mt-[5.75rem]"
		>
			<div class="container mx-auto w-full space-y-48 py-24">
				<Information />
				<Qualification />
				<Reward />
				<TimeLine />
				<Scope />
				<Contact />
			</div>
		</div>
	</div>
</div>
