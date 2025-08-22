import type {UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode> {
		if (this.children[1] === null) {
			const result = new ErrorAbstractifyingResult("No variable name.");
			return result;
		} else {
			const unknownFunctionHeaderSegmentContentResult =
				this.children[1].abstractify();
			switch (unknownFunctionHeaderSegmentContentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return unknownFunctionHeaderSegmentContentResult;
				}
				case successAbstractifyingResultTypeName: {
					const node = new UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode(
						{name: unknownFunctionHeaderSegmentContentResult.data},
						this.computeSpanIndexes(),
					);
					const result = new SuccessAbstractifyingResult(node);
					return result;
				}
			}
		}
	}
}
