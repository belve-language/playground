import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
export type SourceFileContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree =
	Readonly<{
		startingIndex: number;
		children: readonly [
			finalWhitespace: Readonly<{
				startingIndex: number;
				children: readonly [segments: WhitespaceSegmentsConcreteSyntaxTreeNode];
				endingIndex: number;
			}>,
		];
		endingIndex: number;
	}>;
