import type {PaddedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "../../../../../abstract-syntax-tree-node/implementations/block/children/BlockAbstractSyntaxTreeNodeChildren.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedStatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedStatementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, paddedStatementsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNodeChildren> {
		const result = this.children[1].abstractify();
		return result;
	}
}
