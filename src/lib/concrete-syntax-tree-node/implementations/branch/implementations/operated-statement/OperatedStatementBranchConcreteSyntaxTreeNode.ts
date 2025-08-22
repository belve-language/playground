import type {OperatedStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/OperatedStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import {operatedStatementBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/operatedStatementBranchConcreteSyntaxTreeNodeTypeName.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class OperatedStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	OperatedStatementBranchConcreteSyntaxTreeNodeChildren,
	typeof operatedStatementBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: OperatedStatementBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, operatedStatementBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<OperatedStatementAbstractSyntaxTreeNode> {
		const statementResult = this.children[0].abstractify();
		switch (statementResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				return statementResult;
			}
			case successAbstractifyingResultTypeName: {
				const node = new OperatedStatementAbstractSyntaxTreeNode(
					{
						operator: this.children[2].character,
						statement: statementResult.data,
					},
					this.computeSpanIndexes(),
				);
				const result =
					new SuccessAbstractifyingResult<OperatedStatementAbstractSyntaxTreeNode>(
						node,
					);
				return result;
			}
		}
	}
}
