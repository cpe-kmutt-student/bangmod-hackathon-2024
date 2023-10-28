<script>
	import { twMerge } from 'tailwind-merge';
</script>

<div {...$$restProps} class={twMerge("min-h-screen bg-red-400", $$props.class)}>
	<h1>Scope</h1>
</div>