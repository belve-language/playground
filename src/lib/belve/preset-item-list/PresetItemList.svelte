<script lang="ts">
	import type {Preset} from "../preset/Preset.ts";
	const {
		onPresetSet,
		preset,
	}: {readonly onPresetSet: (preset: Preset) => void; readonly preset: Preset} =
		$props();
	function handleButtonClick() {
		onPresetSet(preset);
	}
</script>

<li>
	<button type="button" onclick={handleButtonClick}>{preset.name}</button>
</li>
