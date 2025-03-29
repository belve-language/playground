<script lang="ts">
	import type {EditorMode} from "./EditorMode.ts";
	const {selectedMode}: Readonly<{selectedMode: EditorMode}> = $props();
</script>

<section>
	<textarea></textarea>
	<fieldset>
		<legend>Select mode</legend>
		{#each ["none", "instant-parser", "animated-parser", "formatter", "abstracter", "interpreter"] as mode (mode)}
			<label>
				<input
					type="radio"
					name="mode"
					value={mode}
					checked={selectedMode === mode}
				/>
				{mode}
			</label>
		{/each}
	</fieldset>
</section>
