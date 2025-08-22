import type {ClosingSquareBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/closing-square-bracket/ClosingSquareBracketLeafConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/opening-square-bracket/OpeningSquareBracketLeafConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode} from "../../unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode.ts";
export type UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		openingSquareBracket: OpeningSquareBracketLeafConcreteSyntaxTreeNode,
		unknownFunctionHeaderSegmentContent: null | UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode,
		closingSquareBracket: ClosingSquareBracketLeafConcreteSyntaxTreeNode,
	];
