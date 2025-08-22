import type {SeparatedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {separatedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			separatedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName,
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
		const result = this.children[0].abstractify();
		return result;
	}
}
