import type {ClosingSquareBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/closing-square-bracket/ClosingSquareBracketLeafConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/opening-square-bracket/OpeningSquareBracketLeafConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode} from "../../unknown-function-call-segment-content/UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode.ts";
export type UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		openingSquareBracket: OpeningSquareBracketLeafConcreteSyntaxTreeNode,
		unknownFunctionCallSegmentContent: null | UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode,
		closingSquareBracket: ClosingSquareBracketLeafConcreteSyntaxTreeNode,
	];
