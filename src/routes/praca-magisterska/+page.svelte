<script lang="ts">
	import type {Snippet} from "svelte";
	import AutomaticPages from "../../lib/core/automatic-pages/AutomaticPages.svelte";
	import MainPageContent from "../../lib/core/main-page-content/MainPageContent.svelte";
	import {ruleById} from "../../lib/instances/rule-by-id/ruleById.ts";
</script>

{#snippet titlePageContent()}
	<MainPageContent />
{/snippet}
{#snippet gramatykaSectionTitle()}
	<h2>Gramatyka</h2>
{/snippet}
{#snippet pre(text: string)}
	<pre>{text}</pre>
	<style lang="scss">
		pre {
			margin-block: 0;
		}
	</style>
{/snippet}

<AutomaticPages
	parts={[
		titlePageContent,
		gramatykaSectionTitle,
		...Object.values(ruleById).map((rule): Snippet<[]> => {
			return ((node: Text): ReturnType<Snippet<[]>> => {
				return (
					pre as unknown as (
						node: Text,
						textGetter: () => string,
					) => ReturnType<Snippet<[]>>
				)(node, () => {
					return rule.stringify(ruleById);
				});
			}) as Snippet<[]>;
		}),
	]}
/>

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
