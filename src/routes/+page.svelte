<script>
	import {resolve} from "$app/paths";
</script>

<svelte:head>
	<title>Belve</title>
</svelte:head>
<main>
	<a href={resolve("/explorer", {})}>Go to Explorer</a>
	<a href={resolve("/thesis", {})}>Go to Thesis</a>
</main>
