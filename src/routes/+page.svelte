<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Background,
		Controls,
		MiniMap,
		type Node,
		type NodeTypes
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';

	import { nodes as initialNodes, edges as initialEdges } from './nodes-and-edges';

	import CustomNode from './CustomNode.svelte';
	import Message from './Message.svelte';

	const nodes = writable<Node[]>(initialNodes);
	const edges = writable(initialEdges);

	const nodeTypes: NodeTypes = {
		custom: CustomNode,
		message: Message
	};

	// we are using a bit of a shortcut here to adjust the edge type
	// this could also be done with a custom edge for example
	$: {
		$edges.forEach((edge) => {
			if (edge.sourceHandle) {
				const edgeType = $nodes.find((node) => node.type === 'custom')?.data.selects[
					edge.sourceHandle
				];
				edge.type = edgeType;
			}
		});
		$edges = $edges;
	}

	function handleScriptUpload(event) {
		// Implementation goes here
	}
</script>

<div class="container">
	<!-- Configuration Section -->
	<div class="space-y-3 flex flex-col" style="margin-left:30px">
		<h6 class="section-title"><span>Configuration of the Node</span></h6>
		<div class="configuration-section items-center text-center">
			<label class="btn btn-sm variant-ghost-surface" for="script-upload">
				Script Upload
				<input
					type="file"
					id="script-upload"
					style="display: none;"
					on:change={handleScriptUpload}
				/>
			</label>

			<div class="fields-wrapper">
				<div class="text-left w-full">
					<!-- This div wraps the label and input to full width -->
					<label class="text-sm">Node Name</label>
					<input type="text" placeholder="Node Name" class="text-area" />
				</div>

				<div class="text-left w-full">
					<!-- Repeat this pattern for alignment -->
					<label class="text-sm">Inputs</label>
					<input type="text" placeholder="Input 1" class="text-area" />
					<input type="text" placeholder="Input 2" class="text-area" />
				</div>

				<div class="text-left w-full">
					<label class="text-sm">Outputs</label>
					<input type="text" placeholder="Output 1" class="text-area" />
					<input type="text" placeholder="Output 2" class="text-area" />
				</div>

				<div class="text-left w-full">
					<label class="text-sm">Executed Files</label>
					<input type="text" placeholder="Enter Args" class="text-area" />
				</div>

				<div class="text-left w-full">
					<label class="text-sm">Programming Languages</label>
					<input type="text" placeholder="Enter Languages" class="text-area" />
				</div>
			</div>

			<label class="btn btn-sm variant-ghost-surface" for="node-add">
				Add Node to Workspace
				<input type="file" id="node-add" style="display: none;" />
			</label>
		</div>
	</div>

	<!-- Workspace Section -->
	<div class="space-y-3 flex flex-col">
		<h6 class="section-title"><span>Workspace</span></h6>
		<div class="workspace-section" style:height="600px">
			<SvelteFlow {nodes} {edges} {nodeTypes} fitView>
				<Background patternColor="#aaa" gap={16} />
				<Controls />
				<MiniMap zoomable pannable height={120} />
			</SvelteFlow>
		</div>
	</div>

	<!-- Workspace Section -->
	<div class="space-y-2 flex flex-col">
		<div>
			<h6 class="section-title"><span>Terminal Output</span></h6>
			<div class="terminal-section"></div>
		</div>
		<br>
		<br>
		<div>
			<h6 class="section-title"><span>Visualization</span></h6>
			<div class="terminal-section"></div>
		</div>
	</div>
</div>

<style lang="postcss">
	.section-title {
		margin-left: 30px;
		margin-bottom: 10px;
	}

	.configuration-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 20px;
		border-radius: 10px;
		height: 600px;
		width:400px;
	}

	.workspace-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 30px;
		border-radius: 10px;
		width: 900px;
		height: 350px;
	}
	.terminal-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 30px;
		border-radius: 10px;
		width: 380px;
		height: 255px;
	}

	.vis-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 40px;
		border-radius: 10px;
		width: 380px;
		height: 200px;
	}

	.container {
		display: flex;
		align-items: center;
		height: 90vh;
	}
	.fields-wrapper {
		margin-left: 40px;
		margin-bottom: 20px;
		width: 100%; /* Set to the desired width */
		display: flex;
		flex-direction: column;
		align-items: center; /* This will center the children */
	}
	.thin-small-text {
		font-weight: 300; /* This makes the font thinner */
		font-size: 1.2rem; /* This sets the font size to a smaller value */
	}

	.btn {
		background-color: transparent;
		cursor: pointer;
		margin-bottom: 10px;
	}
	.btn:hover {
		background-color: #b7c0c0;
		color: #034638;
	}

	.text-sm {
		display: block;
		text-align: left;
		margin-left: 0px;
		margin-bottom: 0.5rem; /* space below the label */
		/* Other styles */
	}

	.text-area {
		height: 50%;
		width: 80%;
		padding: 0.3rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		text-align: left; /* Aligns text to the left */
		/* Other styles */
		font-size: small;
		color: rgb(182, 181, 181);
		margin-bottom: 15px;
	}
</style>
