<script lang="ts">
	import { inview } from 'svelte-inview';

	import { Section, currentSection } from '$lib/components/homes/Navbar/navbar';
</script>

<section
	use:inview={{rootMargin: '-10%'}}
	on:inview_enter={() => ($currentSection = Section.Scope)}
	id="scope-section"
	class="h-full py-12 lg:py-24"
>
	<div
		class="mx-auto mb-8 w-fit rounded-xl bg-yellow-600 px-8 py-4 text-center text-base font-bold text-white shadow-xl md:text-2xl"
	>
		ขอบเขตเนื้อหาที่ใช้ในการแข่งขัน
	</div>

	<div class="mb-8 rounded-3xl bg-white p-3 md:p-10">
		<div
			class="text-md mx-auto flex w-full justify-center rounded-xl bg-[#7c81be] py-4 font-bold text-white shadow-xl md:text-2xl"
		>
			พื้นฐานวิทยาการคอมพิวเตอร์
		</div>
		<ul
			class="list-decimal p-3 text-xs font-semibold leading-loose text-purple-700 md:space-y-3 md:p-5 md:text-xl"
		>
			<li>พื้นฐานการเขียนโปรแกรม</li>
			<li>ทักษะการแก้ปัญหา (Problem-solving Skill)</li>
			<li>
				พื้นฐานโครงสร้างข้อมูล
				<ul class="ml-3 list-[lower-alpha] font-normal md:ml-5 md:space-y-3">
					<li class="">
						ชนิดข้อมูลดั้งเดิม (Primitive data type) ได้แก่ Boolean, Signed/Unsigned Integer,
						Character
					</li>
					<li>แถวลำดับ (อาเรย์ และ อาเรย์หลายมิติ)</li>
					<li>Record/Struct</li>
					<li>สตริง และการดำเนินการกับสตริง</li>
					<li>Static และ Stack Allocation</li>
					<li>Lined Structures (ทั้งที่เป็นแบบเส้นตรง และแบบที่แบ่งเป็นสาขาได้)</li>
					<li>การสร้างโครงสร้างกองซ้อน (Stack) คิว (Queue) ต้นไม้ (Tree) และกราฟ (Graph)</li>
					<li>การเลือกโครงสร้างข้อมูลที่เหมาะสม</li>
					<li>
						คิวลำดับความสำคัญ (Priority Queue) ไดนามิกเซต (Dynamic Set) และไดนามิกแมพ (Dynamic Map)
					</li>
				</ul>
			</li>
			<li>
				การเรียกตัวเองซ้ำ (Recursion)
				<ul class="ml-3 list-[lower-alpha] font-normal md:ml-5 md:space-y-3">
					<li>แนวคิด</li>
					<li>ฟังก์ชันทางคณิตศาสตร์ที่เรียกตัวเองซ้ำ</li>
					<li>วิธีแบ่งแยกและเอาชนะ (Divide and Conquer)</li>
					<li>อัลกอริทึมการย้อนรอยแบบเรียกตัวเองซ้ำ (Recursive Backtracking)</li>
				</ul>
			</li>
		</ul>
	</div>

	<div class="rounded-3xl bg-white p-3 md:p-10">
		<div
			class="text-md mx-auto flex w-full justify-center rounded-xl bg-[#7c81be] py-4 font-bold text-white shadow-xl md:text-2xl"
		>
			อัลกอริทึม
		</div>
		<ul
			class="list-decimal p-3 text-xs font-semibold leading-loose text-purple-700 md:space-y-3 md:p-5 md:text-xl"
		>
			<li>พื้นฐานการวิเคราะห์ความซับซ้อนของอัลกอริทึม (Algorithmic Complexity)</li>
			<li>
				กลวิธีทางอัลกอริทึม
				<ul class="ml-3 list-[lower-alpha] font-normal md:ml-5 md:space-y-3">
					<li>Brute-force Algorithm</li>
					<li>Greedy Algorithm</li>
					<li>การแบ่งแยกและเอาชนะ</li>
					<li>Backtracking (ทั้งที่เป็นแบบเรียกตัวเองซ้ำ และไม่เรียกตัวเองซ้ำ)</li>
					<li>Branch-and-bound Algorithm</li>
					<li>Pattern Matching and String/Text Algorithm</li>
					<li>Dynamic Programming</li>
				</ul>
			</li>
			<li>
				อัลกอริทึมเชิงคำนวณพื้นฐาน
				<ul class="ml-3 list-[lower-alpha] font-normal md:ml-5 md:space-y-3">
					<li>
						อัลกอริทึมเชิงคำนวณพื้นฐาน อัลกอริทึมเชิงตัวเลขพื้นฐานที่เกี่ยวข้องกับจำนวนเต็ม เช่น Radix
						Conversion, Euclid's Algorithm, Primality Test in O(N1/2), Sieve of Eratosthenes,
						Factorization, Efficient Exponentiation
					</li>
					<li>การจัดการอาร์เรย์ขั้นพื้นฐาน (รวมถึงการทำฮิสโทแกรม และ Bucket Sort)</li>
					<li>Sequential และ Binary Search</li>
					<li>Search by Elimination</li>
					<li>การแบ่งข้อมูล (Partitioning) การจัดลำดับด้วยการแบ่งข้อมูลซ้ำ ๆ Quick Sort</li>
					<li>การเรียงข้อมูลที่มีเวลาที่แย่ที่สุดเป็น O(NlogN) เช่น Heap Sort และ Merge Sort</li>
					<li>Binary Heap พื้นฐาน และ Binary Search Tree</li>
					<li>การบรรยายโครงสร้างกราฟ เช่น Adjacency List และ Adjacency Matrix</li>
					<li>
						Depth-first and Breadth-first Traversals of Graphs
						และการหาองค์ประกอบที่เชื่อมต่อกันของกราฟแบบไม่มีทิศทาง
					</li>
					<li>Shortest Path Algorithm เช่น Dijkstra, Bellman-Ford และ Floyd-Warshall</li>
					<li>Transitive Closure (Floyd's Algorithm)</li>
					<li>Minimum Spanning Tree</li>
				</ul>
			</li>
			<li>
				กราฟและต้นไม้
				<ul class="ml-3 list-[lower-alpha] font-normal md:ml-5 md:space-y-3">
					<li>ต้นไม้และคุณสมบัติพื้นฐาน</li>
					<li>กราฟไม่มีทิศทาง (Degree, Path, Cycle, Connectedness, Handshaking Lemma)</li>
					<li>กราฟแบบมีทิศทาง (In-degree, Out-degree, Directed Path/Cycle)</li>
					<li>Spanning Trees</li>
					<li>
						วิธีการเดินผ่านต้นไม้ (Traversal Strategies: Defining the Node Order for Ordered Trees)
					</li>
					<li>Decorated Graphs with Edge/Node Labels, Weights, Colors</li>
					<li>Multigraphs และ Graphs ที่มี Self-loops</li>
				</ul>
			</li>
		</ul>
	</div>
</section>
