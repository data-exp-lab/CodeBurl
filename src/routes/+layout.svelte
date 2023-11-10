<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">Jupyterlab NodeEditor </strong>
				<span class="thin-small-text"> - A Graphical Interface for Multi-Language Operations</span>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<label class="btn btn-sm variant-ghost-surface" for="yaml-upload">
					YAML Upload
					<input type="file" id="yaml-upload" style="display: none;" on:change={handleYAMLUpload} />
				</label>
				<label class="btn btn-sm variant-ghost-surface" for="recipe-upload">
					Recipe Upload
					<input
						type="file"
						id="recipe-upload"
						style="display: none;"
						on:change={handleRecipeUpload}
					/>
				</label>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	.thin-small-text {
		font-weight: 300; /* This makes the font thinner */
		font-size: 1rem; /* This sets the font size to a smaller value */
	}
	.text-xl
	{
		font-size: 1.1rem;
	}
	.btn{
		background-color: transparent;
		cursor: pointer;
	}
	.btn:hover{
		background-color: #b7c0c0;
		color: #034638;
	}
</style>
