import type {FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import {functionCallStatementBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionCallStatementBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../../../../../abstract-syntax-tree-node/implementations/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionCallStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren,
	typeof functionCallStatementBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, functionCallStatementBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionCallAbstractSyntaxTreeNode> {
		const result = this.children[0].abstractify();
		return result;
	}
}
