<script lang="ts">
	import Thesis from "../../lib/thesis/Thesis.svelte";
</script>

<svelte:head>
	<title>Opracowanie i implementacja języka programowania Belve</title>
</svelte:head>

<Thesis />

<style lang="scss">
	:global {
		html {
			background-color: black;
			min-height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		body {
			margin: 0;
		}
	}
</style>
