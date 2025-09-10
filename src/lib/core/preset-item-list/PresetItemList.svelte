<script lang="ts">
	import type {Preset} from "../preset/Preset.ts";
	const {
		preset,
		onPresetSet,
	}: {readonly preset: Preset; readonly onPresetSet: (preset: Preset) => void} =
		$props();
	function handleButtonClick() {
		onPresetSet(preset);
	}
</script>

<li>
	<button type="button" onclick={handleButtonClick}>{preset.name}</button>
</li>
