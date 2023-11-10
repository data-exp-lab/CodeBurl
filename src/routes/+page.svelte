<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

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
	<div class="right-column">
		<!-- Top Right: Workspace Section -->
		<div class="space-y-3 flex flex-col">
			<h6 class="section-title"><span>Workspace</span></h6>
			<div class="workspace-section" />

			<div class="flex">
				<!-- Bottom Right: Terminal and Visualization Sections -->
				<div>
					<h6 class="section-title"><span>Terminal Output</span></h6>
					<div class="terminal-section">
						<!-- Terminal output content goes here -->
					</div>
				</div>
				<div>
					<h6 class="section-title"><span>Visualization</span></h6>
					<div class="vis-section">
						<!-- Terminal output content goes here -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.section-title {
		margin-left: 30px;
		margin-bottom:10px;
	}

	.configuration-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 20px;
		border-radius: 10px;
		height:600px;
	}

	.workspace-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 30px;
		border-radius: 10px;
		width: 800px;
		height: 350px;
	
	}
	.terminal-section {
		border: 1px solid #818bb7;
		padding: 20px;
		margin-left: 30px;
		border-radius: 10px;
		width: 380px;
		height: 200px;
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
		margin-bottom:10px;
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
