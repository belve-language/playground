import type {KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			knownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
