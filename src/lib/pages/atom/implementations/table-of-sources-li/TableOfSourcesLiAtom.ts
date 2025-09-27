import ComponentOfTableOfSourcesLiAtom from "./component/ComponentOfTableOfSourcesLiAtom.svelte";
import type {StylesOfTableOfSourcesLiAtom} from "./styles/StylesOfTableOfSourcesLiAtom.ts";
import {bindComponentProps} from "../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../source/Source.ts";
import {Atom} from "../../Atom.ts";
export class TableOfSourcesLiAtom extends Atom {
	public constructor(
		number: number,
		pageNumber: number,
		source: Source,
		styles: StylesOfTableOfSourcesLiAtom,
	) {
		super(
			bindComponentProps(ComponentOfTableOfSourcesLiAtom, {
				number: number,
				source: source,
				styles: styles,
			}),
			pageNumber,
		);
	}
}
