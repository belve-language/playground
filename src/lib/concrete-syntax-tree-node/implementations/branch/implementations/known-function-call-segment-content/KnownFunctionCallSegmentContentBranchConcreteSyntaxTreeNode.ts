import type {KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
