import type {FunctionBodyBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionBodyBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionBodyBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionBodyBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {BlockAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/block/BlockAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
export class FunctionBodyBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionBodyBranchConcreteSyntaxTreeNodeChildren,
	typeof functionBodyBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionBodyBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, functionBodyBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNode> {
		const result = this.children[0].abstractify();
		return result;
	}
}
