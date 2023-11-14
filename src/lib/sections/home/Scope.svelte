<script>
	import { fade, fly } from 'svelte/transition';
	import { twJoin, twMerge } from 'tailwind-merge';

	import { ArrowRight } from '$lib/components/icons';

	let selectedTab = 0;

	const scopes = [
		[
			{
				name: 'พื้นฐานการเขียนโปรแกรม',
				lists: []
			},
			{
				name: 'ทักษะการแก้ปัญหา (Problem-solving Skill)',
				lists: []
			},
			{
				name: 'พื้นฐานโครงสร้างข้อมูล',
				lists: [
					'ชนิดข้อมูลดั้งเดิม (Primitive data type) ได้แก่ Boolean, Signed/Unsigned Integer, Character',
					'แถวลําดับ (อาเรย์ และอาเรย์หลายมิติ',
					'Record/Struct',
					'สตริง และการดําเนินการกับสตริง',
					'Static และ Stack Allocation',
					'Lined Structures (ทั้งที่เป็นแบบเส้นตรง และแบบที่แบ่งเป็นสาขาได้)',
					'การสร้างโครงสร้างกองซ้อน (Stack) คิว (Queue) ต้นไม้(Tree) และกราฟ (Graph)',
					'การเลือกโครงสร้างข้อมูลมที่เหมาะสม',
					'คิวลำดับสำคัญ (Priority Queue) ไดนามิกเซต (Dynamic Set) และไดนามิกแม็ป (Dynamic Map)'
				]
			},
			{
				name: 'การเรียกตัวเองซ้ำ (Recursion)',
				lists: [
					'แนวคิด',
					'ฟังก์ชันทางคณิตศาสตร์ที่เรียกตัวเองซ้ำ',
					'วิธิแบ่งแยก และเอาชนะ (Divide and Conquer)',
					'อัลกอริทึมการย้อนรอยแบบเรียกตัวเองซ้ำ (Recursive Backtracking)'
				]
			}
		],
		[
			{
				name: 'พื้นฐานการวิเคราะห์ความซับซ้อนของอัลกอริทึม (Algorithmic Complexity)',
				lists: []
			},
			{
				name: 'กลวิธีทางอัลกอริทึม',
				lists: [
					'Brute-force Algorithm',
					'Greedy Algorithm',
					'การแบ่งแยก และเอาชนะ',
					'Backtracking (ทั้งที่เป็นแบบเรียกตัวเองซ้ำ และไม่เรียกตัวเองซ้ำ)',
					'Branch-and-bound Algorithm',
					'Pattern Matching and String/Text Algorithm',
					'Dynamic Programming'
				]
			},
			{
				name: 'อัลกอริทึมเชิงคํานวณพื้นฐาน',
				lists: [
					"อัลกอริทึมเชิงคํานวณพื้นฐาน อัลกอริทึมเชิงตัวเลขพื้นฐานที่เกี่ยวข้องกับจำนวนเต็ม เช่น Radix Conversion, Euclid's Algorithm, Primality Test in O(N1/2), Sieve of Eratosthenes, Factorization, Efficient Exponentiation",
					'การจัดการอาร์เรยขั้นพื้นฐาน (รวมถึงการทําฮิสโทแกรม และ Bucket Sort)',
					'Sequential และ Binary Search',
					'Search by Elimination',
					'การเรียงข้อมูลที่มีเวลาที่แย่ที่สุดเป็น O(NlogN) เช่น Heap Sort, Merge Sort',
					'Binary Heap พื้นฐาน และ Binary Search Tree',
					'การบรรยายโครงสร้างกราฟ เช่น Adjacency List, Adjacency Matrix',
					'Depth-first and Breadth-first Traversals of Graphs และการหาองค์ประกอบที่เชื่อมต่อกันของกราฟแบบไม่มีทิศทาง',
					'Shortest Path Algorithm เช่น Dijkstra, Bellman-Ford, Floyd-Warshall',
					"Transitive Closure (Floyd's Algorithm)",
					'Minimum Spanning Tree'
				]
			},
			{
				name: 'กราฟ และต้นไม้',
				lists: [
					'ต้นไม้ และคุณสมบัติพื้นฐาน',
					'กราฟแบบไม่มีทิศทาง (Degree, Path, Cycle, Connectedness, Handshaking Lemma)',
					'กราฟแบบมีทิศทาง (In-degree, Out-degree, Directed Path/Cycle)',
					'Spanning Trees',
					'วิธิการเดินผ่านต้นไม้ (Traversal Strategies: Defining the Node Order for Ordered Trees)',
					'Decorated Graphs with Edge/Node Labels, Weights, Colors',
					'Multi graphs และ Graphs ที่มี Self-loops'
				]
			}
		]
	];
</script>

<div
	{...$$restProps}
	class={twMerge('flex min-h-screen flex-col bg-sandy py-8 lg:py-16', $$props.class)}
>
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24">
		
		<h3 class="font-mali text-4xl font-medium tracking-wide text-burgundy md:basis-1/3 md:text-5xl">
			ขอบเขตเนื้อหาที่ใช้ในการแข่งขัน
		</h3>
		<div class="h-[0.2rem] bg-burgundy w-full"></div>

		<div class="mx-8 flex flex-1 flex-col lg:mx-16">
			<ul
				class="relative -my-0.5 flex grow-0 list-none flex-wrap md:w-1/2"
				data-tabs="tabs"
				role="list"
			>
				<li
					class={twJoin(
						'flex-auto rounded-t text-center',
						selectedTab === 0
							? 'z-50 bg-azul-600 text-soapstone'
							: 'z-0 border-x border-t border-asphalt'
					)}
				>
					<button
						class="flex h-full w-full items-center justify-center"
						role="tab"
						aria-selected="true"
						on:click={() => (selectedTab = 0)}
					>
						พื้นฐานวิทยาการคอมพิวเตอร์
					</button>
				</li>
				<li
					class={twJoin(
						'flex-auto rounded-t text-center',
						selectedTab === 1
							? 'z-50 bg-azul-600 text-soapstone'
							: 'z-0 border-x border-t border-asphalt'
					)}
				>
					<button
						class="flex h-full w-full items-center justify-center py-4"
						role="tab"
						aria-selected="false"
						on:click={() => (selectedTab = 1)}
					>
						อัลกอริทึม
					</button>
				</li>
			</ul>
			<div
				class="min-h-[24rem] rounded-b rounded-tr border border-asphalt bg-azul-600 p-8 text-soapstone"
			>
				{#each scopes[selectedTab] as scope}
					<hr class="my-4" />
					<h3 in:fade|global>{scope.name}</h3>
					{#if scope.lists.length}
						<div class="my-6 flex flex-col gap-y-6">
							{#each scope.lists as list, idx}
								<div in:fly|global={{ x: -50, delay: idx * 50 }} class="flex items-center">
									<div class="shrink-0 basis-1/6 md:basis-1/12">
										<ArrowRight class="h-4 stroke-soapstone" />
									</div>
									<p>{list}</p>
								</div>
							{/each}
						</div>
					{/if}
				{/each}
				<hr class="my-4" />
			</div>
		</div>
	</div>

</div>
