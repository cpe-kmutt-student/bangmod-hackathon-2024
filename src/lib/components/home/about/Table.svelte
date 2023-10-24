<script lang="ts">
	export let date: string;
	export let position: string;
	export let month: string;
	export let filter: string;
</script>

<div class="grid grid-cols-2 font-light lg:text-2xl py-3">
	<div class="font-latin text-3xl">{date}</div>
	<div class="justify-self-end text-[#CCAA4B] font-latin">{position}</div>
	<div class="">{month}</div>
	<div class="justify-self-end">{filter}</div>
</div>
