<script>
	import { twMerge } from 'tailwind-merge';

	import ArrowDown from '$lib/components/icons/ArrowDown.svelte';

	const scopes = [
		{
			topic: 'พื้นฐานวิทยาการคอมพิวเตอร์',
			contents: [
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
			]
		},
		{
			topic: 'อัลกอริทึม',
			contents: [
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
		}
	];

	/**
	 * @type {number[]}
	 */
	let openTabs = [0, 1];
	const toggleDropdown = (/** @type {number} */ index) => {
		openTabs = openTabs.includes(index)
			? openTabs.filter((i) => i !== index)
			: [...openTabs, index];
	};
</script>

<div
	{...$$restProps}
	class={twMerge('flex min-h-screen flex-col bg-sandy py-8 lg:py-16', $$props.class)}
>
	<div class="mx-12 flex flex-col justify-center gap-y-8 md:mx-24">
		<h3 class="font-mali text-4xl font-medium tracking-wide text-burgundy md:basis-1/3 md:text-5xl">
			ขอบเขตเนื้อหาที่ใช้ในการแข่งขัน
		</h3>
		<div class="h-[0.2rem] w-full bg-burgundy"></div>

		<div class="container mx-auto flex flex-col gap-16">
			{#each scopes as { topic, contents }, idx}
				<div>
					<button
						on:click={() => toggleDropdown(idx)}
						class="flex w-full items-center justify-between border border-black bg-aubergine p-8 text-3xl font-bold text-white md:px-12"
					>
						<span>{topic}</span>
						<ArrowDown
							style="transform: rotate({openTabs.includes(idx)
								? '0deg'
								: '90deg'}); transition: transform 0.3s ease;"
						/>
					</button>
					{#if openTabs.includes(idx)}
						<div class="border bg-white text-[#47537C] md:px-4">
							<ul class="list-inside p-8">
								{#each contents as { name, lists }, idx}
									<li class="tex list-decimal py-1 font-bold">{name}</li>
									{#if lists.length > 0}
										<ul class="list-outside list-[lower-alpha] py-1 pl-6">
											{#each lists as item (item)}
												<li>{item}</li>
											{/each}
										</ul>
									{/if}
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
