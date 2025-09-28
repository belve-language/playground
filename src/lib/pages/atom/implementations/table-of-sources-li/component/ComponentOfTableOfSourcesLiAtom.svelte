<script lang="ts">
	import type {Source} from "../../../../source/Source.ts";
	import type {StylesOfTableOfSourcesLiAtom} from "../styles/StylesOfTableOfSourcesLiAtom.ts";
	const {
		number: number,
		source: source,
		styles: styles,
	}: {
		readonly number: number;
		readonly source: Source;
		readonly styles: StylesOfTableOfSourcesLiAtom;
	} = $props();
</script>

<li style="margin-block: {styles.marginBlock}">
	<span class="bullet">[{number.toString(10)}]</span>
	<span class="content">
		{source.author}, {source.description}, dostęp {source.dateOfAccess.toLocaleDateString(
			"pl-PL",
		)}, <a href={source.url}>{source.url}</a>
	</span>
</li>

<style lang="scss">
	li {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 0.5em;
		grid-template-rows: auto;
		> .content {
			min-width: 0;
			> a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
</style>
