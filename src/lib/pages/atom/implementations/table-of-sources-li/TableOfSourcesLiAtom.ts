import ComponentOfTableOfSourcesLiAtom from "./component/ComponentOfTableOfSourcesLiAtom.svelte";
import type {StylesOfTableOfSourcesLiAtom} from "./styles/StylesOfTableOfSourcesLiAtom.ts";
import {bindComponentProps} from "../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../source/Source.ts";
import {Atom} from "../../Atom.ts";
export class TableOfSourcesLiAtom extends Atom {
	public constructor(
		number: number,
		numberOfPage: number,
		source: Source,
		styles: StylesOfTableOfSourcesLiAtom,
	) {
		super(
			bindComponentProps(ComponentOfTableOfSourcesLiAtom, {
				number: number,
				source: source,
				styles: styles,
			}),
			numberOfPage,
			true,
		);
		this.number = number;
		this.source = source;
		this.styles = styles;
	}
	private readonly number: number;
	public override repage(): TableOfSourcesLiAtom {
		const newAtom: TableOfSourcesLiAtom = new TableOfSourcesLiAtom(
			this.number,
			this.numberOfPage + 1,
			this.source,
			this.styles,
		);
		return newAtom;
	}
	private readonly source: Source;
	private readonly styles: StylesOfTableOfSourcesLiAtom;
}
