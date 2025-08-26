import type {OperatedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/OperatedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {operatedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/operatedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class OperatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	OperatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof operatedStatementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: OperatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, operatedStatementsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
					OperatedStatementAbstractSyntaxTreeNode,
				]
		  > {
		const statementsResult = this.children[0].abstractify();
		switch (statementsResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				return statementsResult;
			}
			case successAbstractifyingResultTypeName: {
				const result = new SuccessAbstractifyingResult<
					readonly [
						...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
						OperatedStatementAbstractSyntaxTreeNode,
					]
				>([
					...statementsResult.data.initialOperatedStatements,
					new OperatedStatementAbstractSyntaxTreeNode(
						{
							operator: this.children[2].character,
							statement: statementsResult.data.finalStatement,
						},
						{
							ending: this.children[2].index,
							starting:
								statementsResult.data.finalStatement.spanIndexes.starting,
						},
					),
				]);
				return result;
			}
		}
	}
}
