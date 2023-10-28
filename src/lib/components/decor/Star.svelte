<script lang="ts">
	import { twMerge } from 'tailwind-merge';
</script>

<!-- <div class={twMerge('stroke-orange-500', $$restProps.class)} {...$$restProps}> -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	width="100"
	height="100"
	viewBox="0 0 100 100"
	fill="none"
	class={twMerge('stroke-orange-500 overflow-visible', $$restProps.class)}
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M50.4035 50.4032L99.8328 71.0346L100 70.634L50.5634 49.9996L100 29.3652L99.8328 28.9647L50.4045 49.5956L71.0355 0.167192L70.6349 0L50.0003 49.4371L29.3657 1.25349e-05L28.9651 0.167204L49.5962 49.5959L0.167194 28.9646L1.80455e-06 29.3652L49.4364 49.9995L0 70.634L0.167193 71.0346L49.5972 50.4028L28.9656 99.8328L29.3661 100L50.0003 50.564L70.6345 100L71.035 99.8328L50.4035 50.4032Z"
		fill="black param(fill)"
		stroke-width="1 param(outline-width)"
		stroke="#000 param(outline)"
	/>
</svg>
<!-- </div> -->
