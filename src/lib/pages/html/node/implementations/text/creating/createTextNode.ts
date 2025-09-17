import {bindComponentProps} from "../../../../../../belve/binding-component-props/bindComponentProps.ts";
import type {Atom} from "../../../../../atom/Atom.ts";
import TextNode from "../TextNode.svelte";
export function createTextNode(text: string): Atom {
	const node: Atom = bindComponentProps(TextNode, {_: text});
	return node;
}
