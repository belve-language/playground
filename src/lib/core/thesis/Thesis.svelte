<script lang="ts">
	import Pages from "../pages/Pages.svelte";
	import H2 from "./html-elements/h2/H2.svelte";
	import H3 from "./html-elements/h3/H3.svelte";
	import H4 from "./html-elements/h4/H4.svelte";
	import Text from "./html-elements/text/Text.svelte";
	import Pre from "./html-elements/pre/Pre.svelte";
	import P from "./html-elements/p/P.svelte";
	import TitlePageContent from "./title-page-content/TitlePageContent.svelte";
	import {ruleById} from "../../instances/rule-by-id/ruleById.ts";
	import {bindComponentProps} from "../binding-components-to-props/bindComponentProps.ts";
</script>

<Pages
	atoms={[
		TitlePageContent,
		bindComponentProps(H2, {
			children: [bindComponentProps(Text, {_: "Motywacja"})],
		}),
		bindComponentProps(H2, {
			children: [bindComponentProps(Text, {_: "Opracowanie"})],
		}),
		bindComponentProps(H2, {
			children: [bindComponentProps(Text, {_: "Paradygmat"})],
		}),
		bindComponentProps(P, {
			children: [
				bindComponentProps(Text, {
					_: "Na spektrum deklaratywności i imperatywności Belve należy umieścić przy deklaratywnym końcu. Konkretniej mówiąc, jest to język logiczny.",
				}),
			],
		}),
		bindComponentProps(H3, {
			children: [bindComponentProps(Text, {_: "Składnia"})],
		}),
		bindComponentProps(P, {
			children: [
				bindComponentProps(Text, {
					_: "Składnia została opracowana tak, żeby nie pozwolić na wiele różnych zapisów tego samego kodu.",
				}),
			],
		}),
		bindComponentProps(H4, {
			children: [bindComponentProps(Text, {_: "Gramatyka"})],
		}),
		...Object.values(ruleById).map((rule) => {
			return bindComponentProps(Pre, {
				children: [bindComponentProps(Text, {_: rule.stringify(ruleById)})],
			});
		}),
		bindComponentProps(H3, {
			children: [bindComponentProps(Text, {_: "Semantyka"})],
		}),
		bindComponentProps(H3, {
			children: [bindComponentProps(Text, {_: "Model obliczeniowy"})],
		}),
		bindComponentProps(H2, {
			children: [bindComponentProps(Text, {_: "Implementacja"})],
		}),
		bindComponentProps(H2, {
			children: [bindComponentProps(Text, {_: "Możliwe rozszerzenia"})],
		}),
	]}
/>
