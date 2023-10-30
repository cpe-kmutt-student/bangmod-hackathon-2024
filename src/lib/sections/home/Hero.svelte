<script>
	import { twMerge } from 'tailwind-merge';

	import { ArrowDown } from '$lib/components/icons';
	import Marquee from '$lib/components/utils/Marquee.svelte';
	import IceCream01 from '$lib/components/vectors/Ice-cream01.svelte';
	import Macarons02 from '$lib/components/vectors/Macarons02.svelte';
	import Pretzel from '$lib/components/vectors/Pretzel.svelte';
	import Cookies02 from '$lib/components/vectors/Cookies02.svelte';
	import Custard from '$lib/components/vectors/Custard.svelte';
	import { Confetti } from 'svelte-confetti';
	// import Circle from '$lib/components/vectors/Circle.svg';
</script>

<div {...$$restProps} class={twMerge('flex h-fit min-h-screen text-asphalt', $$props.class)}>
	<div
		class="pointer-events-none fixed -z-[200] flex h-full w-full justify-center overflow-hidden opacity-80"
	>
		<Confetti
			x={[-10, 10]}
			y={[0, 0.1]}
			delay={[1000, 2000]}
			infinite
			duration={1000}
			amount={50}
			fallDistance="100vh"
			colorArray={["url(https://www.svgrepo.com/show/221249/circle-oval.svg)", "url(https://github.githubassets.com/favicons/favicon-dark.png)"]} 
		/>
	</div>
	<div
		class="flex min-h-full min-w-[36px] basis-14 flex-col items-center justify-center gap-y-2 bg-saddle px-1 py-2 sm:basis-28 md:px-2 lg:shrink-0"
	>
		<div class="w-full basis-12 animate-sweep border border-soapstone p-0.5 sm:basis-16">
			<div class="h-full w-full border border-soapstone" />
		</div>
		<div class="w-full flex-1 animate-sweep border border-soapstone p-0.5">
			<div class="h-full w-full border border-soapstone" />
		</div>
		<div class="w-full basis-12 animate-sweep border border-soapstone p-0.5 sm:basis-16">
			<div class="h-full w-full border border-soapstone" />
		</div>
	</div>
	<div class="flex h-full min-h-screen flex-col">
		<div class="flex grow-0 flex-col items-center justify-center bg-saddle py-2">
			<div class="w-full basis-12 animate-sweep-center border border-soapstone p-0.5 sm:basis-16">
				<Marquee class="h-full w-full border border-soapstone bg-azul-600">
					<span class="min-w-0 overflow-hidden font-latin text-xl text-white">
						Welcome to BangMod Hackathon 2024 official website
					</span>
					<span class="min-w-0 overflow-hidden text-xl text-lupine">●</span>
				</Marquee>
			</div>
		</div>
		<div class="flex grow flex-col font-latin text-azul-600">
			<h1
				class="origin-top-left animate-rotate border-b border-saddle px-2 pt-4 text-center text-4xl font-thin leading-none opacity-0 fill-mode-forwards sm:text-[5.8vw] md:text-start"
			>
				BANGMOD HACKATHON 2024
			</h1>
			<span
				class="mt-4 origin-top-left animate-rotate border-b border-saddle px-2 text-4xl font-thin leading-none text-beer opacity-0 delay-200 fill-mode-forwards sm:text-[5vw]"
			>
				APPLICATIONS WILL OPEN
			</span>
			<span
				class="mt-4 origin-top-left animate-rotate border-b border-saddle px-2 text-4xl font-extralight leading-none opacity-0 delay-200 delay-400 fill-mode-forwards sm:text-[5vw]"
			>
				FROM 31 OCTOBER
			</span>
			<span
				class="mt-4 origin-top-left animate-rotate border-b border-saddle px-2 text-end text-4xl font-extralight leading-none opacity-0 delay-200 delay-600 fill-mode-forwards sm:text-[5vw]"
			>
				TILL 25 NOVEMBER
			</span>
			<a
				class="w-full animate-rotate border-y-2 border-scarlet-800 text-center text-4xl font-medium leading-none text-soapstone opacity-0 delay-1000 fill-mode-forwards sm:text-[6vw]"
				href="/register"
			>
				<div
					class="flex h-full w-full items-center justify-center gap-10 bg-butternut hover:bg-butternut/80"
				>
					<ArrowDown class="animate-bounce-left z-20 h-9 w-9 sm:h-16 sm:w-16" />REGISTER HERE! <ArrowDown
						class="animate-bounce-right z-20 h-9 w-9 sm:h-16 sm:w-16"
					/>
				</div>
			</a>
			<div class="relative mt-4 flex flex-col items-center justify-center">
				<p class="text-center font-latin text-lg font-light">SCROLL DOWN<br />FOR MORE DETAILS</p>
				<ArrowDown class="absolute -bottom-20 h-9 w-9 animate-bounce-down sm:h-16 sm:w-16" />
			</div>
		</div>
		<div class="flex grow-0 basis-16 sm:basis-20">
			<div class="basis-1/3 bg-saddle py-2 pr-2 sm:basis-5/12">
				<div class="h-full w-full animate-sweep border border-soapstone p-0.5">
					<div class="h-full w-full border border-soapstone" />
				</div>
			</div>
			<div class="grow"></div>
			<div class="basis-1/3 bg-saddle py-2 pl-2 sm:basis-5/12">
				<div class="h-full w-full animate-sweep-back border border-soapstone p-0.5">
					<div class="h-full w-full border border-soapstone" />
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex min-h-full min-w-[36px] basis-14 flex-col items-center justify-center gap-y-2 bg-saddle px-1 py-2 sm:basis-28 md:px-2 lg:shrink-0"
	>
		<div class="w-full basis-12 animate-sweep-back border border-soapstone p-0.5 sm:basis-16">
			<div class="h-full w-full border border-soapstone" />
		</div>
		<div class="w-full flex-1 animate-sweep-back border border-soapstone p-0.5">
			<div class="h-full w-full border border-soapstone" />
		</div>
		<div class="w-full basis-12 animate-sweep-back border border-soapstone p-0.5 sm:basis-16">
			<div class="h-full w-full border border-soapstone" />
		</div>
	</div>
	<div class="absolute -z-[100] h-full w-full">
		<IceCream01
			class="animate-metronome-reverse absolute bottom-40 left-10 -z-10 h-[25%] w-[25%] rotate-12"
		/>
		<Macarons02
			class="animate-metronome-reverse absolute bottom-32 right-32 -z-10 h-[25%] w-[25%] -rotate-12"
		/>
		<Pretzel
			class="animate-metronome absolute bottom-32 left-64 -z-10 h-[25%] w-[25%] -rotate-12"
		/>
		<Cookies02
			class="animate-metronome absolute bottom-[30rem] right-96 -z-10 h-[15%] w-[15%] rotate-12 xl:bottom-[34rem]"
		/>
		<Custard
			class="animate-metronome-reverse absolute bottom-[27rem] right-32 -z-10 h-[25%] w-[25%] -rotate-12 xl:bottom-[34rem]"
		/>
	</div>
</div>
