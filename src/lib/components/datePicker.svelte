<script>
	export let label = 'Label';
	export let date = new Date().toISOString().slice(0, 10);
</script>

<div class="datePicker">
	<label for="date">{label}</label>
	<input
		type="date"
		id="date"
		bind:value={date}
		on:change={() => console.log(date)}
		max={new Date().toISOString().slice(0, 10)}
	/>
</div>
