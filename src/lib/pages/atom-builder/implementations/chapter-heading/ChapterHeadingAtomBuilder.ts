import {chapterHeadingAtomBuilderTypeName} from "./type-name/chapterHeadingAtomBuilderTypeName.ts";
import {ChapterHeadingAtom} from "../../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../binding-component-props/bindComponentProps.ts";
import type {ChapterHeadingAtomLevel} from "../../../chapter-heading-atom-level/ChapterHeadingAtomLevel.ts";
import type {ChapterNumber} from "../../../chapter-number/ChapterNumber.ts";
import {AtomBuilder} from "../../AtomBuilder.ts";
import type {Component} from "svelte";
export abstract class ChapterHeadingAtomBuilder<
	SubTypeName extends string,
> extends AtomBuilder<typeof chapterHeadingAtomBuilderTypeName> {
	protected constructor(
		component: Component<{
			readonly chapterNumber: ChapterNumber;
			readonly title: string;
		}>,
		level: ChapterHeadingAtomLevel,
		shouldBeConsideredInChapterNumbers: boolean,
		shouldHaveNumberOfPage: boolean,
		subTypeName: SubTypeName,
		title: string,
	) {
		super(chapterHeadingAtomBuilderTypeName);
		this.component = component;
		this.level = level;
		this.shouldBeConsideredInChapterNumbers =
			shouldBeConsideredInChapterNumbers;
		this.shouldHaveNumberOfPage = shouldHaveNumberOfPage;
		this.subTypeName = subTypeName;
		this.title = title;
	}
	public build(
		chapterNumber: ChapterNumber,
		numberOfPage: number,
	): ChapterHeadingAtom {
		const atom: ChapterHeadingAtom = new ChapterHeadingAtom(
			chapterNumber,
			bindComponentProps(this.component, {
				chapterNumber: chapterNumber,
				title: this.title,
			}),
			this.level,
			numberOfPage,
			this.shouldHaveNumberOfPage,
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
	private readonly shouldHaveNumberOfPage: boolean;
	public readonly subTypeName: SubTypeName;
	public readonly title: string;
}
