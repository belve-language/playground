import {tableOfSourcesHChapterHeadingAtomBuilderSubTypeName} from "./sub-type-name/tableOfSourcesHChapterHeadingAtomBuilderSubTypeName.ts";
import type {ChapterHeadingAtomLevel} from "../../../../../chapter-heading-atom-level/ChapterHeadingAtomLevel.ts";
import type {ChapterNumber} from "../../../../../chapter-number/ChapterNumber.ts";
import {ChapterHeadingAtomBuilder} from "../../ChapterHeadingAtomBuilder.ts";
import type {Component} from "svelte";
export abstract class TableOfSourcesHChapterHeadingAtomBuilder extends ChapterHeadingAtomBuilder<
	typeof tableOfSourcesHChapterHeadingAtomBuilderSubTypeName
> {
	protected constructor(
		component: Component<{
			readonly chapterNumber: ChapterNumber;
			readonly title: string;
		}>,
		level: ChapterHeadingAtomLevel,
		title: string,
	) {
		super(
			component,
			level,
			true,
			true,
			tableOfSourcesHChapterHeadingAtomBuilderSubTypeName,
			title,
		);
	}
}
