import type {KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			knownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
