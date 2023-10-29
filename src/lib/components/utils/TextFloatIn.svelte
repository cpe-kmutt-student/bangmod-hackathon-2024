<script lang="ts">
	import { onMount } from 'svelte';
    import gsap from 'gsap'
    import SplitType from 'split-type'

    let clazz = ''
    export {clazz as class}

    let charClass = "translate-y-[50px] transition-transform duration-[0.3s]"
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
            stagger: 0.03,
            delay: 0.2,
            duration: .1
        })
    })
</script>

<div class={clazz} bind:this={text}>
    <slot/>
</div>


