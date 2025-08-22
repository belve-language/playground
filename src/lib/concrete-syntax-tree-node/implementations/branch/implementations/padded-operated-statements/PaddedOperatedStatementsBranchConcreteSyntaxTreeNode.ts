import type {PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedOperatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					OperatedStatementAbstractSyntaxTreeNode,
					...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
				]
		  > {
		const result = this.children[1].abstractify();
		return result;
	}
}
