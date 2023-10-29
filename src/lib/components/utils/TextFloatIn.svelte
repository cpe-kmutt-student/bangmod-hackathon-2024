<script lang="ts">
	import { onMount } from 'svelte';
    import gsap from 'gsap'
    import SplitType from 'split-type'

    let charClass = "translate-y-[2em] transition-transform duration-[0.75s]"
    let lineClass = "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"

    let text: HTMLElement

    onMount(() => {
        const myText = new SplitType(text)
        console.log(myText)

        myText.lines?.map((line)=>{
            line.classList.add(...lineClass.split(" "))
        })

        myText.chars?.map((char)=>{
            char.classList.add(...charClass.split(" "))
        })
        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .7
        })
    })
</script>

<div bind:this={text} {...$$restProps}>
    <slot/>
</div>


