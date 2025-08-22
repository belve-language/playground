import type {FunctionHeaderBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionHeaderBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionHeaderBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionHeaderBranchConcreteSyntaxTreeNodeTypeName.ts";
import {FunctionHeaderAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class FunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	typeof functionHeaderBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, functionHeaderBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode> {
		const segmentsResult = this.children[0].abstractify();
		switch (segmentsResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				return segmentsResult;
			}
			case successAbstractifyingResultTypeName: {
				const node = new FunctionHeaderAbstractSyntaxTreeNode(
					{segments: segmentsResult.data},
					this.computeSpanIndexes(),
				);
				const result = new SuccessAbstractifyingResult(node);
				return result;
			}
		}
	}
}
