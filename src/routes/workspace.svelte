<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		MiniMap,
		useSvelteFlow,
		type Node,
		type Edge
	} from '@xyflow/svelte';
	import './tailwind.css';
	import '@xyflow/svelte/dist/style.css';

	import { initialNodes, initialEdges } from './node_edges';

	// sidebar
	import Sidebar from './sidebar.svelte';
	const { screenToFlowPosition } = useSvelteFlow();
	const onDragOver = (event: DragEvent) => {
		event.preventDefault();

		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
	};

	const onDrop = (event: DragEvent) => {
		event.preventDefault();

		if (!event.dataTransfer) {
			return null;
		}

		const type = event.dataTransfer.getData('application/svelteflow');

		const position = screenToFlowPosition({
			x: event.clientX,
			y: event.clientY
		});

		const newNode = {
			id: `${Math.random()}`,
			type,
			position,
			data: { label: `${type} node` },
			origin: [0.5, 0.0]
		} satisfies Node;

		$nodes.push(newNode);
		$nodes = $nodes;
	};

	// custom node
	const nodes = writable<Node[]>(initialNodes);
	const edges = writable<Edge[]>(initialEdges);

	import CustomNode from './nodes/CustomNode.svelte';

	const nodeTypes = {
		custom: CustomNode,
	};
</script>

<main>
	<SvelteFlow {nodes} {nodeTypes} {edges} fitView on:dragover={onDragOver} on:drop={onDrop}>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
		<MiniMap height={80} width={90} />
	</SvelteFlow>
	<Sidebar />
</main>

<style>
	main {
		height: 100%;
		display: flex;
		flex-direction: column-reverse;
	}
</style>
