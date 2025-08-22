import type {PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> {
		const result = this.children[1].abstractify();
		return result;
	}
}
