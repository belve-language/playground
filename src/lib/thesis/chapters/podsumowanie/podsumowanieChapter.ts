import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import H3 from "../../../pages/html/node/implementations/element/implementations/h3/H3.svelte";
import H4 from "../../../pages/html/node/implementations/element/implementations/h4/H4.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
export const podsumowanieChapter = [
	createElement(H2, {} as const, [createTextNode("Podsumowanie")]),
	createElement(H3, {} as const, [createTextNode("Możliwa kontynuacja")]),
	createElement(H4, {} as const, [createTextNode("Language Server Protocol")]),
] as const satisfies readonly Atom[];
