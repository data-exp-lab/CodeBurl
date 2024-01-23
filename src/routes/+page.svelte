<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	//configuration section
	function handleScriptUpload(event) {
		// Implementation goes here
	}
	//workspace section
	import { SvelteFlowProvider } from '@xyflow/svelte';
	import Workspace from './workspace.svelte';
</script>

<div class="container">
	<!-- Configuration Section -->
	<div class="space-y-3 flex flex-col" style="margin-left:30px">
		<h6 class="section-title"><span>Configuration of the Node</span></h6>
		<div class="configuration-section items-center text-center">
			<div class="fields-wrapper">
				<div class="text-left w-full">
					<label class="text-sm">Node Name</label>
					<input type="text" placeholder="Node Name" class="text-area" />
				</div>

				<div class="text-left w-full">
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
					<div class="label-center">
						<label class="btn btn-sm variant-ghost-surface" for="script-upload">
							Script Upload
							<input
								type="file"
								id="script-upload"
								style="display: none;"
								on:change={handleScriptUpload}
							/>
						</label>
					</div>
				</div>
				<div class="text-left w-full">
					<label class="text-sm">Programming Languages</label>
					<input type="text" placeholder="Enter Languages" class="text-area" />
				</div>
			</div>

			<label class="btn btn-sm variant-ghost-surface" for="node-add">
				Add/Update Node to Workspace
				<input type="file" id="node-add" style="display: none;" />
			</label>
		</div>
	</div>

	<!-- Workspace Section -->
	<div class="space-y-3 flex flex-col">
		<h6 class="section-title"><span>Workspace</span></h6>
		<div class="workspace-section" style:height="600px">
			<SvelteFlowProvider>
				<Workspace />
			</SvelteFlowProvider>
		</div>
	</div>

	<!-- Output Section -->
	<div class="space-y-2 flex flex-col">
		<div>
			<h6 class="section-title"><span>Terminal Output</span></h6>
			<div class="terminal-section" />
		</div>
		<br />
		<br />
		<div>
			<h6 class="section-title"><span>Visualization</span></h6>
			<div class="terminal-section" />
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
		width: 400px;
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
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.thin-small-text {
		font-weight: 300;
		font-size: 1.2rem;
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
		margin-bottom: 0.5rem;
	}

	.text-area {
		height: 50%;
		width: 80%;
		padding: 0.3rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		text-align: left;
		font-size: small;
		color: rgb(182, 181, 181);
		margin-bottom: 15px;
	}
	.label-center {
		text-align: left;
		margin-left: 80px;
	}
</style>
