<svg
	id="rotatingText"
	viewBox="0 0 200 200"
	class="rotatingText w-[800px] fill-black/50 sm:w-[1000px] md:w-[1200px] lg:w-[1500px]"
>
	<defs>
		<path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0" />
	</defs>
	<text>
		<textPath xlink:href="#circle" class="font-circle text-xs font-light">
			... BMH2024 - BMH2024 - BMH2024 - BMH2024 - BMH2024 - BMH2024 - BMH2024 ...
		</textPath>
	</text>
</svg>

<style>
	.rotatingText {
		animation-name: rotate-circle;
		animation-duration: 50s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes rotate-circle {
		to {
			transform: rotate(1turn);
		}
	}
</style>
