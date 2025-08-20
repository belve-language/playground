import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
export class EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
