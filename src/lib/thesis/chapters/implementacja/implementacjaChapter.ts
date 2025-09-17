import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import H3 from "../../../pages/html/node/implementations/element/implementations/h3/H3.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
export const implementacjaChapter = [
	createElement(H2, [createTextNode("Implementacja")]),
	createElement(H3, [createTextNode("Parser")]),
	createElement(H3, [createTextNode("Eksplorator")]),
	createElement(H2, [createTextNode("Możliwe rozszerzenia")]),
] as const satisfies readonly Atom[];
