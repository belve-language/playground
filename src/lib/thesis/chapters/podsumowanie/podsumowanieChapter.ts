import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
export const podsumowanieChapter = [
	createElement(H2, {} as const, [createTextNode("Podsumowanie")]),
] as const satisfies readonly Atom[];
