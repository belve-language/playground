<script lang="ts">
	import Pages from "../pages/Pages.svelte";
	import {implementacjaChapter} from "./chapters/implementacja/implementacjaChapter.ts";
	import {motywacjaChapter} from "./chapters/motywacja/motywacjaChapter.ts";
	import {opracowanieChapter} from "./chapters/opracowanie/opracowanieChapter.ts";
	import {podsumowanieChapter} from "./chapters/podsumowanie/podsumowanieChapter.ts";
	import {przyjeteDefinicjeChapter} from "./chapters/przyjete-definicje/przyjeteDefinicjeChapter.ts";
	import TitlePageContent from "./title-page-content/TitlePageContent.svelte";
</script>

<Pages
	atoms={[
		TitlePageContent,
		...przyjeteDefinicjeChapter,
		...motywacjaChapter,
		...opracowanieChapter,
		...implementacjaChapter,
		...podsumowanieChapter,
	]}
/>
