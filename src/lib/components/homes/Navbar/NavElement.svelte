<script lang="ts">
    import {twMerge} from "tailwind-merge";

    export let href: string | undefined = undefined
    export let content: string | undefined = undefined
</script>

<a {...$$restProps}
   href={href}
   class={twMerge("flex-auto flex justify-center items-center md:border-y-[0.01px] border-white/20 hover:bg-white hover:text-black hover:backdrop-blur-md", $$props.class)}>
    {content}
</a>