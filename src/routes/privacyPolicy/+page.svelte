<script lang='ts'>
    let consent: boolean;
	let verify: boolean;
    let isClick: boolean = false;

    let PDPA_checkbox: HTMLInputElement;
	let verify_checkbox: HTMLInputElement;

</script>

<svelte:head>
	<title>Privacy Policy</title>
</svelte:head>

<div class="container mx-auto mb-8 font-['Kanit'] overflow-hidden">
    <h1 class="text-center font-['Homemade_Apple'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl my-10 md:my-20 ">
        Privacy Policy
    </h1>

    <div class="flex flex-col gap-8 md:gap-12 px-12 md:px-6">
        
        <hr class="border-second"/>
        <div class="grid md:grid-cols-5 gap-2">
            <div class="md:col-span-2 text-center md:text-left font-bold">ข้อมูลสำคัญเกี่ยวกับโครงการ</div>
            <div class="md:col-span-3 w-full">
                <ol class="list-decimal">
                    <li>โครงการแข่งขันแก้ไขปัญหาด้วยการเขียนโปรแกรมคอมพิวเตอร์ระดับมัธยมศึกษาตอนปลายปี การศึกษา 2566 หรือ <span class="font-['Old Standard TT']">BangMod Hackathon 2024</span> ซึ่งต่อจากนี้จะเรียกว่า "โครงการ" ดําเนินการ โดยคณะทํางานโครงการ ซึ่งต่อจากนี้จะเรียกว่า “คณะทํางาน”</li>
                    <li>คณะทํางานเป็นผู้ให้บริการเว็บไซต์ <span class="font-['Old Standard TT']">bangmodhackathon.com</span> และเว็บไซต์ที่เกี่ยวข้องซึ่งต่อจากนี้ จะเรียกรวมว่า "เว็บไซต์"</li>
                    <li>ผู้ใช้งานเว็บไซต์ซึ่งต่อจากนี้จะเรียกว่า “ท่าน” หรือ “คุณ” เป็นบุคคลหรือผู้แทนที่มีสิทธิในการให้ความยินยอมในการเก็บรวบรวมใช้ และเปิดเผยข้อมูลส่วนบุคคลทั้งหมดของตน</li>
                    <li>เนื่องด้วยโครงการได้เห็นความสําคัญของการรักษาข้อมูลส่วนบุคคลของผู้ใช้งานจึงได้กําหนดนโยบาย ความเป็นส่วนตัวนี้ขึ้น เพื่อกําหนดความมุ่งมั่นของโครงการต่อความเป็นส่วนตัวของผู้ใช้งาน รวมถึง ชี้แจงให้ทราบเกี่ยวกับกระบวนวิธีการ การเก็บรวบรวม การใช้ และการเปิดเผยข้อมูลส่วนบุคคลในโครงการ ดังนั้น กรุณาอ่านนโยบายความเป็นส่วนตัวนี้โดยละเอียด โดยเมื่อเข้าใช้งานเว็บไซต์ของโครงการ และยอมรับนโยบายที่เกี่ยวข้องนี้อย่างชัดเจน จะถือว่าท่านรับทราบ และยอมรับข้อกําหนดนโยบายข้อมูลส่วนบุคคลนี้แล้ว หากท่านไม่ยอมรับนโยบายข้อมูลส่วนบุคคล ท่านจะไม่สามารถทําการสมัครผ่านเว็บไซต์ของโครงการได้</li>
                </ol>
            </div>
        </div>
        <hr class="border-second"/>
        
        <div class="grid md:grid-cols-5 gap-2">
            <div class="md:col-span-2 text-center md:text-left font-bold">ข้อมูลส่วนบุคคล</div>
            <div class="md:col-span-3 w-full whitespace-pre-line">
                ข้อมูลส่วนบุคคล หรือข้อความส่วนบุคคลที่ทางโครงการเก็บรวบรวมเกี่ยวกับผู้ใช้ จะเป็นข้อมูลที่สามารถระบุตัวตนของท่านได้ ทางโครงการจะทําการเก็บรวบรวม ถ่ายโอน และใช้ข้อมูลส่วนบุคคลประเภทต่าง ๆ ที่เกี่ยวกับผู้ใช้ตามที่โครงการได้จัดกลุ่มไว้ด้วยกัน ดังต่อไปนี้
                
                <ol class="list-decimal">
                    <li>ข้อมูลส่วนตัว ได้แก่ ชื่อ-นามสกุล ชื่อเล่น เบอร์โทรศัพท์ รูปถ่าย สําเนาบัตรประชาชนของท่าน ช่องทางการติดต่อ หนังสือยืนยันสถานภาพเป็นอาจารย์ประจําสถาบันการศึกษา และอีเมลเพื่อใช้สําหรับการติดต่อ รวมไปถึงอาหาร ยาที่แพ้ และโรคประจําตัว</li>
                    <li>ข้อมูลการศึกษา ได้แก่ ใบรับรองผลการศึกษา (ปพ.7) ระดับการศึกษา หลักสูตร ชื่อสถานศึกษา</li>
                </ol>
            </div>
        </div>
        <hr class="border-second"/>

        <div class="grid md:grid-cols-5 gap-2">
            <div class="md:col-span-2 text-center md:text-left font-bold">วิธีการเก็บรวบรวมข้อมูลผู้ใช้ของโครงการ</div>
            <div class="md:col-span-3 w-full whitespace-pre-line">
                โครงการอาจเก็บรวบรวมข้อมูลเกี่ยวกับผู้ใช้หลายวิธี เช่น การเก็บข้อมูลปฏิสัมพันธ์โดยตรง การกรอกแบบฟอร์มบนเว็บไซต์รับสมัครของโครงการ เพื่อทําการสมัครเข้าร่วมโครงการ เป็นต้น
                
                <ol class="list-decimal">
                    <li >เทคโนโลยีอัตโนมัติ หรือปฏิสัมพันธ์ในขณะที่ท่านโต้ตอบกับเว็บไซต์ของโครงการ เช่น ข้อมูลเกี่ยวกับเบราว์เซอร์ของท่าน หรือลิงก์ที่ท่านรับชมเนื้อหาบนเว็บไซต์ของโครงการ เป็นต้น โดยทั้งหมดนี้จะช่วยให้โครงการสามารถส่งมอบประสบการณ์ที่ดีแก่ท่านเมื่อท่านเข้าชมเว็บไซต์ของโครงการ และยังช่วยให้โครงการสามารถปรับปรุงพัฒนาเว็บไซต์ให้ดียิ่งขึ้น</li>
                    <li>บุคคลที่สาม หรือแหล่งข้อมูลสาธารณะ โครงการจะเก็บข้อมูลของผู้ใช้ผ่านการเข้าสู่ระบบโดยใช้สื่อสังคมออนไลน์ ทําให้โครงการอาจเก็บรวบรวมข้อมูลการติดต่อ อัตลักษณ์ และข้อมูลทางเทคนิค รวมไปถึง ชื่อผู้ใช้งาน รูปประจําตัวผู้ใช้งาน และอีเมล ข้อมูลเกี่ยวกับสื่อสังคมออนไลน์ที่ท่านยินยอมเปิดเผยกับโครงการจะไปรวมกับข้อมูลที่ผู้ใช้ให้กับโครงการไว้ หรือที่โครงการรวบรวมไว้เกี่ยวกับท่าน</li>
                </ol>
            </div>
        </div>
        <hr class="border-second"/>

        <div class="grid md:grid-cols-5 gap-2">
            <div class="md:col-span-2 text-center md:text-left font-bold">วัตถุประสงค์ของการใช้ข้อมูลส่วนบุคคล</div>
            <div class="md:col-span-3 w-full whitespace-pre-line">
                โครงการมีวัตถุประสงค์ในการใช้ข้อมูล ดังต่อไปนี้
                
                <ol class="list-decimal">
                    <li>โครงการใช้ข้อมูลส่วนบุคคลเพื่อยืนยันคุณสมบัติ และคัดเลือกผู้เข้าร่วมโครงการ</li>
                    <li>โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดกิจกรรมในโครงการ</li>
                    <li>โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดทําใบประกาศนียบัตรสําหรับผู้ที่เข้าร่วมโครงการ</li>
                    <li>โครงการใช้ข้อมูลส่วนบุคคลเพื่อให้สามารถติดต่อผู้ดูแลได้ในกรณีฉุกเฉิน</li>
                    <li>โครงการใช้ข้อมูลแบบไม่ระบุตัวตน และข้อมูลเทคโนโลยีอัตโนมัติเพื่อใช้ในการวิเคราะห์ข้อมูลทางสถิติ</li>
                </ol>
            </div>
        </div>
        <hr class="border-second"/>

        <div class="grid md:grid-cols-5 gap-2">
            <div class="md:col-span-2 text-center md:text-left font-bold">ระยะเวลาในการเก็บข้อมูลส่วนบุคคล</div>
            <div class="md:col-span-3 w-full">
                โครงการจะเก็บข้อมูลส่วนบุคคลของท่านเท่าที่จําเป็นในการจัดโครงการครั้งปัจจุบัน และสําหรับโครงการครั้งถัดไป โดยมีระยะเวลาการจัดเก็บข้อมูลไว้ไม่เกิน 4 ปี
            </div>
        </div>
        <hr class="border-second"/>

        <div class="grid md:grid-cols-5 gap-2">
            <div class="md:col-span-2 text-center md:text-left font-bold">สิทธิของท่านเกี่ยวกับข้อมูลส่วนบุคคล</div>
            <div class="md:col-span-3 w-full">
                ท่านสามารถใช้สิทธิที่ท่านมีอยู่ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล อันรวมถึงการเข้าถึง การแก้ไข การลบ และระงับการประมวลผลข้อมูลส่วนบุคคลได้ โดยติดต่อผ่านทางผู้ดูแลข้อมูลของโครงการ ได้ที่อีเมล <span class="text-sm sm:text-md font-['Old Standard TT']">phimchanok.trex@mail.kmutt.ac.th<span>
            </div>
        </div>
        <hr class="border-second"/>
  
        <form action="/register">
            <div class="flex flex-col xl:flex-row gap-y-4 justify-around">
                <div class="flex items-center gap-4">
                    <input
                        required
                        id="PDPA_consent"
                        class={`h-4 w-4  md:h-6 md:w-6 shrink-0 ${(isClick && !consent) && "appearance-none rounded-sm border border-[#AC001A] " }`}
                        type="checkbox"
                        bind:checked={consent}
                        bind:this={PDPA_checkbox}
                    />
                    <label for="PDPA_consent" class={`${(isClick && !consent) && "text-[#AC001A]" }`}>ข้าพเจ้าได้อ่านเงื่อนไขและข้อกำหนดอย่างครบถ้วนแล้ว และยอมรับในเงื่อนไขและข้อกำหนดทั้งหมด</label>
                </div>
                <div class="flex items-center gap-4">
                    <input
                        required
                        id="verify_data"
                        class={`h-4 w-4 md:h-6 md:w-6 shrink-0 ${(isClick && !verify) && "appearance-none rounded-sm border border-[#AC001A] " }`}
                        type="checkbox"
                        bind:checked={verify}
                        bind:this={verify_checkbox}
                    />
                    <label for="verify_data"  class={`${(isClick && !verify) && "text-[#AC001A]" }`}>
                        ข้าพเจ้าขอยืนยันว่าข้อมูลที่ใช้ในการสมัครเป็นข้อมูลจริง
                    </label>
                </div>
            </div>
            <button
                type='submit'
                on:click={()=>{isClick = true}}
                class='py-4 mt-8 flex items-center justify-center gap-4 w-full sm:w-2/3 mx-auto rounded-full border border-[#265BF6] text-[#265BF6] hover:bg-[#265BF6] hover:text-[#FEFCFC] active:bg-[#FEFCFC] active:text-[#265BF6]'>
                    <div>
                        ดำเนินการต่อ
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                        
                        
            </button>
        </form>

    </div>
</div>