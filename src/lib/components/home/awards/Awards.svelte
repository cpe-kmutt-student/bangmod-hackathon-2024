<script lang="ts">
    import { onMount } from 'svelte';

    function random(min:number, max:number) {
        return min + Math.random() * (max + 1 - min);
    }

    let shapes = ['circle', 'emptyCircle', 'star']
    let colors = ['extraYellow', 'extraBlue']

    onMount(() => {
        for(let i = 0; i < 19; i++) {
            // Set up random elements
            let xPos = random(1, 95);
            let yPos = random(0, 100);
            let size = random(5, 15);
            let shape = shapes[Math.floor(Math.random()*shapes.length)];
            let color = colors[Math.floor(Math.random()*colors.length)];

            // create & add
            const newItem = shape != 'star' ? document.createElement('div') : document.createElement('img');
            if(shape == 'star'){
                newItem.setAttribute(
                    'src', (Math.random() >= 0.5) ? `awards/starBlue.svg` : `awards/starOrange.svg`
                )
                newItem.setAttribute(
                    'alt', `star decoration`
                )
            }
            newItem.style.position = 'absolute';
            newItem.style.left = xPos + '%';
            newItem.style.top = yPos + '%';
            let multipy = (shape == 'star') ? 2.5 : 1;
            newItem.style.width = size*multipy + 'px';
            newItem.style.height = size*multipy + 'px';
            if(shape != 'star'){
                newItem.className = `hidden md:block border border-extraYellow rounded-full bg-extraYellow ${(shape=='emptyCircle' && color=='extraBlue') ? `border-extraBlue bg-transparent ` : (shape=='emptyCircle') ?  `border-extraYellow ` : ''}`
            }else{
                newItem.className = `hidden md:block`
            }
            document.getElementById('textAwards')?.appendChild(newItem);
        }        
    });
</script>

<div class='min-h-screen min-w-screen overflow-hidden bg-BG py-12 sm:grid sm:grid-cols-1 sm:place-content-center-center sm:gap-4 lg:gap-0'>
        <div id='textAwards' class={`relative w-full h-full mb-4 sm:mb-0 font-decorate text-6xl text-center text-extraGold sm:text-8xl sm:mt-0 grid place-content-center`}>
            <span class="z-10">Awards</span>
        </div>
        <div class='w-screen h-fit text-content grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4 divide-y divide-content sm:divide-y-0 lg:divide-x font-light border-y border-content py-7'>
            <div class='flex flex-col gap-2 px-6 pt-4'>
                <div class='text-center text-lg font-normal'>WINNER</div>
                <div class='flex flex-wrap justify-center items-center'>
                    <img src='/awards/First-place.png' alt='WINNER pic' class='max-w-52 max-h-52'/>
                </div>
                <div>
                    รางวัลชนะเลิศ<br/>
                    30,000 บาท<br/>
                    พร้อมโล่รางวัลประกาศเกียรติคุณ
                </div>
            </div>
            <div class='flex flex-col gap-2 px-6 pt-4 sm:border-l'>
                <div class='text-center text-lg font-normal'>FIRST RUNNER-UP</div>
                <div class='flex justify-center items-center'>
                    <img src='/awards/Second-place.png' alt='FIRST RUNNER-UP pic' class='max-w-52 max-h-52'/>
                </div>
                <div>
                    รางวัลรองชนะเลิศอันดับ 1<br/>
                    15,000 บาท<br/>
                    พร้อมโล่รางวัลประกาศเกียรติคุณ
                </div>
        </div>
            <div class='flex flex-col gap-2 px-6 pt-4'>
                <div class='text-center text-lg font-normal'>SECOND RUNNER-UP</div>
                <div class='flex justify-center items-center'>
                    <img src='/awards/Third-place.png' alt='SECOND RUNNER-UP pic' class='max-w-52 max-h-52'/>
                </div>
                <div>
                    รางวัลรองชนะเลิศอันดับ 2<br/>
                    5,000 บาท<br/>
                    พร้อมโล่รางวัลประกาศเกียรติคุณ
                </div>
            </div>
            <div class='flex flex-col gap-2 px-6 pt-4 sm:border-l'>
                <div class='text-center text-lg font-normal'>HONORABLE MENTION</div>
                <div class='flex justify-center items-center'>
                    <img src='/awards/Honored-place.png' alt='HONORABLE MENTION pic' class='max-w-52 max-h-52'/>
                </div>
                <div>
                    รางวัลชมเชย<br/>
                    จำนวน 2 รางวัล<br/>
                    รางวัลละ 2,000 บาท
                </div>
            </div>
        </div>
</div>
