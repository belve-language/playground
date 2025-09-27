import {bindComponentProps} from "../../../../../binding-component-props/bindComponentProps.ts";
import type {ChapterHeadingAtomLevel} from "../../../../../chapter-heading-atom-level/ChapterHeadingAtomLevel.ts";
import type {ChapterNumber} from "../../../../../chapter-number/ChapterNumber.ts";
import {Atom} from "../../../../Atom.ts";
import type {Component} from "svelte";
export class ChapterHeadingAtom extends Atom {
	public constructor(
		chapterNumber: ChapterNumber,
		component: Component<{
			readonly chapterNumber: ChapterNumber;
			readonly level: ChapterHeadingAtomLevel;
			readonly title: string;
		}>,
		level: ChapterHeadingAtomLevel,
		pageNumber: number,
		title: string,
	) {
		super(
			bindComponentProps(component, {
				chapterNumber: chapterNumber,
				level: level,
				title: title,
			}),
			pageNumber,
		);
		this.chapterNumber = chapterNumber;
		this.level = level;
		this.title = title;
	}
	public readonly chapterNumber: ChapterNumber;
	public readonly level: ChapterHeadingAtomLevel;
	public readonly title: string;
}
