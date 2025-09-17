<script>
	import {resolve} from "$app/paths";
</script>

<svelte:head>
	<title>Belve</title>
</svelte:head>

<main>
	<a href={resolve("/explorer", {})}>Explorer</a>
	<a href={resolve("/thesis", {})}>Thesis</a>
</main>
