<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
	import Card from '$lib/components/homes/Utils/Card.svelte';
</script>

<section
	use:inview
	on:inview_enter={() => ($currentSection = Section.Reward)}
	id="reward-section"
	class="flex min-h-screen flex-col items-center justify-center py-12 lg:py-24"
>
	<h2
		class="mx-auto mb-8 w-fit rounded-xl bg-yellow-600 px-16 py-4 text-2xl font-bold text-white shadow-xl"
	>
		รางวัล
	</h2>
	<div class="flex flex-row flex-wrap justify-center">
		<div class="flex flex-wrap justify-center">
			<Card src="reward/champion.webp">
				<h3 class="font-bold text-purple-900 lg:text-base">รางวัลชนะเลิศ</h3>
				<p class="text-purple-900">30,000 บาท</p>
				<p class="text-purple-900">พร้อมโล่รางวัลประกาศเกียรติคุณ</p>
			</Card>
			<Card src="reward/first-medal.webp">
				<h3 class="font-bold text-purple-900 lg:text-base">รางวัลรองชนะเลิศอันดับ 1</h3>
				<p class="text-purple-900">15,000 บาท</p>
				<p class="text-purple-900">พร้อมโล่รางวัลประกาศเกียรติคุณ</p>
			</Card>
		</div>
		<div class="flex flex-wrap justify-center">
			<Card src="reward/second-medal.webp">
				<h3 class="font-bold text-purple-900 lg:text-base">รางวัลรองชนะเลิศอันดับ 2</h3>
				<p class="text-purple-900">5,000 บาท</p>
				<p class="text-purple-900">พร้อมโล่รางวัลประกาศเกียรติคุณ</p>
			</Card>
			<Card src="reward/bronze-medal.webp">
				<h3 class="font-bold text-purple-900 lg:text-base">รางวัลชมเชย 2 รางวัล</h3>
				<p class="text-purple-900">รางวัลละ 2,000 บาท</p>
			</Card>
		</div>
	</div>
</section>
