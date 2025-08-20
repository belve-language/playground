import type {BlockAbstractSyntaxTreeNode} from "../../block/BlockAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeData = {
	readonly headerSegments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	];
	readonly block: BlockAbstractSyntaxTreeNode;
};
