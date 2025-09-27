import {chapterHeadingAtomBuilderTypeName} from "./type-name/chapterHeadingAtomBuilderTypeName.ts";
import {ChapterHeadingAtom} from "../../../atom/implementations/h/implementations/chapter-heading/ChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../binding-component-props/bindComponentProps.ts";
import type {ChapterHeadingAtomLevel} from "../../../chapter-heading-atom-level/ChapterHeadingAtomLevel.ts";
import type {ChapterNumber} from "../../../chapter-number/ChapterNumber.ts";
import {AtomBuilder} from "../../AtomBuilder.ts";
import type {Component} from "svelte";
export abstract class ChapterHeadingAtomBuilder extends AtomBuilder<
	typeof chapterHeadingAtomBuilderTypeName
> {
	protected constructor(
		component: Component<{
			readonly chapterNumber: ChapterNumber;
			readonly title: string;
		}>,
		level: ChapterHeadingAtomLevel,
		shouldBeConsideredInChapterNumbers: boolean,
		title: string,
	) {
		super(chapterHeadingAtomBuilderTypeName);
		this.component = component;
		this.level = level;
		this.shouldBeConsideredInChapterNumbers =
			shouldBeConsideredInChapterNumbers;
		this.title = title;
	}
	public build(
		chapterNumber: ChapterNumber,
		pageNumber: number,
	): ChapterHeadingAtom {
		const atom: ChapterHeadingAtom = new ChapterHeadingAtom(
			chapterNumber,
			bindComponentProps(this.component, {
				chapterNumber: chapterNumber,
				title: this.title,
			}),
			this.level,
			pageNumber,
			this.title,
		);
		return atom;
	}
	private readonly component: Component<{
		readonly chapterNumber: ChapterNumber;
		readonly title: string;
	}>;
	public readonly level: ChapterHeadingAtomLevel;
	public readonly shouldBeConsideredInChapterNumbers: boolean;
	public readonly title: string;
}
