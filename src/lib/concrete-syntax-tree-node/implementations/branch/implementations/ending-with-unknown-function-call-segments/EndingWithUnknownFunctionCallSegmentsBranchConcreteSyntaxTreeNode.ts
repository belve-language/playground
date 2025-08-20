import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
