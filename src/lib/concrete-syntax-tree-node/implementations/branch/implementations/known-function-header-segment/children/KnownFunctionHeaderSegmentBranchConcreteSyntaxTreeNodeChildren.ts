import type {ClosingRoundBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/closing-round-bracket/ClosingRoundBracketLeafConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/opening-round-bracket/OpeningRoundBracketLeafConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode} from "../../known-function-header-segment-content/KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode.ts";
export type KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		OpeningRoundBracketLeafConcreteSyntaxTreeNode,
		KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode | null,
		ClosingRoundBracketLeafConcreteSyntaxTreeNode,
	];
