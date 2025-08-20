import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
