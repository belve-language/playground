import {bindComponentProps} from "../../../binding-component-props/bindComponentProps.ts";
import {Atom} from "../../Atom.ts";
import type {ChapterHeadingAtom} from "../chapter-heading/ChapterHeadingAtom.ts";
import ComponentOfTableOfChaptersLiAtom from "./component/ComponentOfTableOfChaptersLiAtom.svelte";
import type {StylesOfTableOfChaptersLiAtom} from "./styles/StylesOfTableOfChaptersLiAtom.ts";
export class TableOfChaptersLiAtom extends Atom {
	public constructor(
		numberOfPage: number,
		styles: StylesOfTableOfChaptersLiAtom,
		targetAtom: ChapterHeadingAtom,
	) {
		super(
			bindComponentProps(ComponentOfTableOfChaptersLiAtom, {
				styles: styles,
				targetAtom: targetAtom,
			}),
			numberOfPage,
			true,
		);
		this.styles = styles;
		this.targetAtom = targetAtom;
	}
	public override repage(): TableOfChaptersLiAtom {
		const newAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
			this.numberOfPage + 1,
			this.styles,
			this.targetAtom,
		);
		return newAtom;
	}
	public setStyles(
		newStyles: StylesOfTableOfChaptersLiAtom,
	): TableOfChaptersLiAtom {
		const newAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
			this.numberOfPage,
			newStyles,
			this.targetAtom,
		);
		return newAtom;
	}
	public setTargetAtom(
		newTargetAtom: ChapterHeadingAtom,
	): TableOfChaptersLiAtom {
		const newAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
			this.numberOfPage,
			this.styles,
			newTargetAtom,
		);
		return newAtom;
	}
	public readonly styles: StylesOfTableOfChaptersLiAtom;
	public readonly targetAtom: ChapterHeadingAtom;
}
