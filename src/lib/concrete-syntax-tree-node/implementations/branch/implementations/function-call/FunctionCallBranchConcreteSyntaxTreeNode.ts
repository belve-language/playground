import type {FunctionCallBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionCallBranchConcreteSyntaxTreeNodeChildren.ts";
import {FunctionCallAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionCallBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionCallBranchConcreteSyntaxTreeNodeTypeName.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class FunctionCallBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionCallBranchConcreteSyntaxTreeNodeChildren,
	typeof functionCallBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionCallBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, functionCallBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionCallAbstractSyntaxTreeNode> {
		const functionCallSegmentsResult = this.children[0].abstractify();
		switch (functionCallSegmentsResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				return functionCallSegmentsResult;
			}
			case successAbstractifyingResultTypeName: {
				const node = new FunctionCallAbstractSyntaxTreeNode(
					{segments: functionCallSegmentsResult.data},
					this.computeSpanIndexes(),
				);
				const result =
					new SuccessAbstractifyingResult<FunctionCallAbstractSyntaxTreeNode>(
						node,
					);
				return result;
			}
		}
	}
}
