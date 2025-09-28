import type {ChapterHeadingAtomLevel} from "../../../chapter-heading-atom-level/ChapterHeadingAtomLevel.ts";
import type {ChapterNumber} from "../../../chapter-number/ChapterNumber.ts";
import {Atom} from "../../Atom.ts";
import type {Component} from "svelte";
export class ChapterHeadingAtom extends Atom {
	public constructor(
		chapterNumber: ChapterNumber,
		component: Component<{readonly [name: string]: never}>,
		level: ChapterHeadingAtomLevel,
		numberOfPage: number,
		shouldHaveNumberOfPage: boolean,
		title: string,
	) {
		super(component, numberOfPage, shouldHaveNumberOfPage);
		this.chapterNumber = chapterNumber;
		this.level = level;
		this.title = title;
	}
	public readonly chapterNumber: ChapterNumber;
	public readonly level: ChapterHeadingAtomLevel;
	public override repage(): ChapterHeadingAtom {
		const newAtom: ChapterHeadingAtom = new ChapterHeadingAtom(
			this.chapterNumber,
			this.component,
			this.level,
			this.numberOfPage + 1,
			this.shouldHaveNumberOfPage,
			this.title,
		);
		return newAtom;
	}
	public readonly title: string;
}
