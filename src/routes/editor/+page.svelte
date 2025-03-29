<script lang="ts">
	import Editor from "../../lib/editor/Editor.svelte";
	const {data} = $props();
	const selectedMode = $derived(data.selectedMode);
</script>

<Editor {selectedMode} />
