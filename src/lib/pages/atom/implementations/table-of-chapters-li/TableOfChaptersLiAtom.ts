import type {StylesOfTableOfChaptersLiAtom} from "./styles/StylesOfTableOfChaptersLiAtom.ts";
import {bindComponentProps} from "../../../binding-component-props/bindComponentProps.ts";
import {Atom} from "../../Atom.ts";
import ComponentOfTableOfChaptersLiAtom from "./component/ComponentOfTableOfChaptersLiAtom.svelte";
import type {ChapterHeadingAtom} from "../h/implementations/chapter-heading/ChapterHeadingAtom.ts";
export class TableOfChaptersLiAtom extends Atom {
	public constructor(
		pageNumber: number,
		styles: StylesOfTableOfChaptersLiAtom,
		targetAtom: ChapterHeadingAtom,
	) {
		super(
			bindComponentProps(ComponentOfTableOfChaptersLiAtom, {
				styles: styles,
				targetAtom: targetAtom,
			}),
			pageNumber,
		);
		this.styles = styles;
		this.targetAtom = targetAtom;
	}
	public setStyles(
		newStyles: StylesOfTableOfChaptersLiAtom,
	): TableOfChaptersLiAtom {
		const newAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
			this.pageNumber,
			newStyles,
			this.targetAtom,
		);
		return newAtom;
	}
	public setTargetAtom(
		newTargetAtom: ChapterHeadingAtom,
	): TableOfChaptersLiAtom {
		const newAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
			this.pageNumber,
			this.styles,
			newTargetAtom,
		);
		return newAtom;
	}
	public readonly styles: StylesOfTableOfChaptersLiAtom;
	public readonly targetAtom: ChapterHeadingAtom;
}
