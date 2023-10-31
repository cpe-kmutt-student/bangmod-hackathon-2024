<script lang="ts">
    import { twJoin } from 'tailwind-merge';

    export let title: string;
    export let startTime: Date;
    export let endTime: Date;
    export let showStart: boolean = true;

    const currentTime = new Date();
    const isCurrentEvent = startTime <= currentTime && currentTime <= endTime;
</script>

<div class="flex w-full justify-center items-center">
    <div class="w-full bg-white rounded-xl p-2 space-y-2 md:space-y-5">
        <div class={twJoin("text-center p-3  rounded-xl text-sm text-white", isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]')}>
            {title}
        </div>
        <div class={twJoin("flex justify-center text-sm py-1 md:text-lg font-extrabold", isCurrentEvent ? 'text-pink-500' : 'text-[#6C30A4]')}>
            {(showStart ? startTime : endTime).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })}
        </div>
    </div>
</div>