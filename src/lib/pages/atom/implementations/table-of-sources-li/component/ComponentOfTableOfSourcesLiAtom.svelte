<script lang="ts">
	import {
		ArticleSource,
		BookSource,
		InternetSource,
		type Source,
	} from "../../../../source/Source.ts";
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
		<!-- {source.author}, {source.description}, dostęp {source.dateOfAccess.toLocaleDateString(
			"pl-PL",
		)}, <a href={source.url}>{source.url}</a> 
		
		todo refactor
		-->

		{#if source instanceof InternetSource}
			{source.authorName}, {source.description},
			<a href={source.url}>{source.url}</a>, dostęp {source.dateOfAccess.toLocaleDateString(
				"pl-PL",
			)}
		{:else if source instanceof BookSource}
			{source.authorName}, {source.title}, {source.publisherName}, {source.dateOfPublication.getFullYear()}
		{:else if source instanceof ArticleSource}
			{source.authorName}, {source.title}, {source.journalName}, {source.volume},
			{source.issue}, {source.pageNumbers},
			{source.dateOfPublication.getFullYear()}
		{/if}
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
