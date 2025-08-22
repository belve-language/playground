import type {SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import {separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, separatedFunctionsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> {
		const result = this.children[0].abstractify();
		return result;
	}
}
