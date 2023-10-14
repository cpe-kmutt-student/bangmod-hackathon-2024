<script>
	export let date = '';
</script>

<input
	class="w-full rounded-md border p-2"
	type="date"
	id="date"
	bind:value={date}
	max={new Date().toISOString().slice(0, 10)}
/>
