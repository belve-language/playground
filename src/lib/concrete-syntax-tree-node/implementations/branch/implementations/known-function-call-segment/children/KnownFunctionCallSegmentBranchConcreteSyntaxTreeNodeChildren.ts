import type {ClosingRoundBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/closing-round-bracket/ClosingRoundBracketLeafConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/opening-round-bracket/OpeningRoundBracketLeafConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode} from "../../known-function-call-segment-content/KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode.ts";
export type KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		openingRoundBracket: OpeningRoundBracketLeafConcreteSyntaxTreeNode,
		knownFunctionCallSegmentContent: KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode | null,
		closingRoundBracket: ClosingRoundBracketLeafConcreteSyntaxTreeNode,
	];
