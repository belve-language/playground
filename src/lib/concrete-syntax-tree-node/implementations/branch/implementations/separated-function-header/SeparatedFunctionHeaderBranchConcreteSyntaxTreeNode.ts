import type {SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
export class SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode> {
		const result = this.children[0].abstractify();
		return result;
	}
}
