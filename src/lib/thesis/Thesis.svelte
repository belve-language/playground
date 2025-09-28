<script lang="ts">
	import {browser} from "$app/environment";
	import Pages from "../pages/Pages.svelte";
	import {implementacjaChapter} from "./chapters/implementacja/implementacjaChapter.ts";
	import {implementacjePrzykladowychAlgorytmowChapter} from "./chapters/implementacja-przykladowych-algorytmow/implementacjaPrzykladowychAlgorytmowChapter.ts";
	import {motywacjaChapter} from "./chapters/motywacja/motywacjaChapter.ts";
	import {opracowanieChapter} from "./chapters/opracowanie/opracowanieChapter.ts";
	import {podsumowanieChapter} from "./chapters/podsumowanie/podsumowanieChapter.ts";
	import {przyjeteDefinicjeChapter} from "./chapters/przyjete-definicje/przyjeteDefinicjeChapter.ts";
	import {TitlePageContentAtomBuilder} from "./title-page-content-atom/TitlePageContentAtom.ts";
	import {TableOfChaptersH2AtomBuilder} from "../pages/atom-builder/implementations/chapter-heading/implementations/table-of-chapters-h/implementations/2/TableOfChaptersH2AtomBuilder.ts";
	import {TableOfSourcesH2AtomBuilder} from "../pages/atom-builder/implementations/chapter-heading/implementations/table-of-sources-h/implementations/2/TableOfSourcesH2AtomBuilder.ts";
	import {H1AtomBuilder} from "../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/1/H1AtomBuilder.ts";
</script>

<main>
	{#if browser}
		<Pages
			atomBuilders={[
				new TitlePageContentAtomBuilder(
					"Opracowanie i implementacja języka programowania Belve",
				),
				new TableOfChaptersH2AtomBuilder("Spis treści"),
				...motywacjaChapter,
				...przyjeteDefinicjeChapter,
				...opracowanieChapter,
				...implementacjaChapter,
				...implementacjePrzykladowychAlgorytmowChapter,
				...podsumowanieChapter,
				new TableOfSourcesH2AtomBuilder("Spis źródeł"),
			]}
		/>
	{/if}
</main>

<style lang="scss">
	main {
		--step-light: #b8d8f8;
		--success-light: #bbdeb1;
		--failure-light: #ffc6d0;
		--step-dark: #37556f;
		--success-dark: #3d5a33;
		--failure-dark: #72464f;
	}
</style>
