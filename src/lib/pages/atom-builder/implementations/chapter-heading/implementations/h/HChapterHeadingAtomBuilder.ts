import {hChapterHeadingAtomBuilderSubTypeName} from "./sub-type-name/hChapterHeadingAtomBuilderSubTypeName.ts";
import type {ChapterHeadingAtomLevel} from "../../../../../chapter-heading-atom-level/ChapterHeadingAtomLevel.ts";
import type {ChapterNumber} from "../../../../../chapter-number/ChapterNumber.ts";
import {ChapterHeadingAtomBuilder} from "../../ChapterHeadingAtomBuilder.ts";
import type {Component} from "svelte";
export abstract class HChapterHeadingAtomBuilder extends ChapterHeadingAtomBuilder<
	typeof hChapterHeadingAtomBuilderSubTypeName
> {
	protected constructor(
		component: Component<{
			readonly chapterNumber: ChapterNumber;
			readonly title: string;
		}>,
		level: ChapterHeadingAtomLevel,
		shouldBeConsideredInChapterNumbers: boolean,
		shouldHaveNumberOfPage: boolean,
		title: string,
	) {
		super(
			component,
			level,
			shouldBeConsideredInChapterNumbers,
			shouldHaveNumberOfPage,
			hChapterHeadingAtomBuilderSubTypeName,
			title,
		);
	}
}
