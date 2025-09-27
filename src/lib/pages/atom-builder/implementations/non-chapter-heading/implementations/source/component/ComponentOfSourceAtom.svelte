<script lang="ts">
	const {
		number: number,
		text: text,
	}: {readonly number: number; readonly text: string} = $props();
</script>

{text} [{number.toString(10)}]
