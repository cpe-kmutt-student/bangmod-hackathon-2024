<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

    let clazz = ''
    export {clazz as class}

    let words: Array<string>
    function animate(node: HTMLElement)
    {
        words = node.innerHTML.split(" ")
        console.log(words)
    }

</script>

<div class="hidden" use:animate><slot/></div>

<div class={clazz}>
    {#if words}
        {#each words as word}
         <span>{word} </span>
        {/each}
    {/if}
</div>

