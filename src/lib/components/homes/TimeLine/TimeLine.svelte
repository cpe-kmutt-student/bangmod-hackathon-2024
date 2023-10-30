<script>
    import HorizontalTimeline from "$lib/components/homes/TimeLine/HorizontalTimeline.svelte";
    import TimeLineCard from "$lib/components/homes/TimeLine/TimeLineCard.svelte";
    import TimeLinePoint from "$lib/components/homes/TimeLine/TimeLinePoint.svelte";
</script>

<section id="timeline-section" class="h-full md:h-screen flex flex-col justify-center items-center py-12 lg:py-24">
    <div class="w-fit mx-auto mb-8 px-8  py-4 bg-yellow-600 rounded-xl text-base lg:text-2xl text-white font-bold shadow-xl text-center">
        ไทม์ไลน์
    </div>

    <div class="hidden md:flex flex-col space-y-2">
        <HorizontalTimeline/>
    </div>

    <div class="md:hidden relative h-full w-full place-items-center">
        <div class="absolute h-full w-full flex items-center justify-center">
            <div class="bg-white w-2 h-full lg:w-full lg:h-3 rounded-xl"></div>
        </div>

        <div class="grid grid-cols-9 lg:grid-rows-5  lg:grid-cols-1">
            <div class="col-span-4 lg:col-span-none lg:row-span-2">
                <TimeLineCard
                        title="เปิดรับสมัคร"
                        startTime={new Date("24 Oct 2022 00:00:00 GMT+0700")}
                        endTime={new Date("10 Dec 2022 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-1 place-self-center items-center lg:col-span-none lg:row-span-1">
                <TimeLinePoint
                        startTime={new Date("24 Oct 2022 00:00:00 GMT+0700")}
                        endTime={new Date("10 Dec 2022 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-4 lg:col-span-none lg:row-span-2"></div>
        </div>

        <div class="grid grid-cols-9 lg:grid-rows-5  lg:grid-cols-1">
            <div class="col-span-4 lg:col-span-none lg:row-span-2"></div>
            <div class="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
                <TimeLinePoint
                        startTime={new Date("11 Dec 2022 00:00:00 GMT+0700")}
                        endTime={new Date("19 Dec 2022 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-4 lg:col-span-none lg:row-span-2">
                <TimeLineCard
                        title="ปิดรับสมัคร"
                        startTime={new Date("11 Dec 2022 00:00:00 GMT+0700")}
                        endTime={new Date("19 Dec 2022 23:59:59 GMT+0700")}
                />
            </div>
        </div>

        <div class="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2  lg:grid-cols-1">
            <div class="col-span-4 lg:col-span-none lg:row-span-2">
                <TimeLineCard
                        title="การแข่งขันรอบคัดเลือก(Online)"
                        startTime={new Date("24 Dec 2022 00:00:00 GMT+0700")}
                        endTime={new Date("24 Dec 2022 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
                <TimeLinePoint
                        startTime={new Date("24 Dec 2022 00:00:00 GMT+0700")}
                        endTime={new Date("24 Dec 2022 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-4 lg:col-span-none lg:row-span-2"></div>
        </div>

        <div class="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2 lg:grid-cols-1">
            <div class="col-span-4 lg:col-span-none lg:row-span-2"></div>
            <div class="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
                <TimeLinePoint
                        startTime={new Date("25 Dec 2022 00:00:00 GMT+0700")}
                        endTime={new Date("18 Jan 2023 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-4 lg:col-span-none lg:row-span-2">
                <TimeLineCard
                        title="ประกาศผลผู้ที่ผ่านการคัดเลือกรอบแรก"
                        startTime={new Date("25 Dec 2022 00:00:00 GMT+0700")}
                        endTime={new Date("18 Jan 2023 23:59:59 GMT+0700")}
                />
            </div>
        </div>

        <div class="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2 lg:grid-cols-1">
            <div class="col-span-4 lg:col-span-none lg:row-span-2">
                <TimeLineCard
                        title="การแข่งขันรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ (On-site)"
                        startTime={new Date("19 Jan 2023 00:00:00 GMT+0700")}
                        endTime={new Date("19 Jan 2023 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
                <TimeLinePoint
                        startTime={new Date("19 Jan 2023 00:00:00 GMT+0700")}
                        endTime={new Date("19 Jan 2023 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-4 lg:col-span-none  lg:row-span-2"></div>
        </div>

        <div class="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2  lg:grid-cols-1">
            <div class="col-span-4 lg:col-span-none lg:row-span-2"></div>
            <div class="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
                <TimeLinePoint
                        startTime={new Date("19 Jan 2023 00:00:00 GMT+0700")}
                        endTime={new Date("19 Jan 2023 23:59:59 GMT+0700")}
                />
            </div>
            <div class="col-span-4 lg:col-span-none lg:row-span-2">
                <TimeLineCard
                        title="ประกาศผลผู้ผ่านการคัดเลือกรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ"
                        startTime={new Date("19 Jan 2023 00:00:00 GMT+0700")}
                        endTime={new Date("19 Jan 2023 23:59:59 GMT+0700")}
                />
            </div>
        </div>
    </div>
</section>