import type {StatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/StatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {statementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/statementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "../../../../../abstract-syntax-tree-node/implementations/block/children/BlockAbstractSyntaxTreeNodeChildren.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class StatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	StatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof statementsBranchConcreteSyntaxTreeNodeTypeName
> {
	private constructor(
		children: StatementsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, statementsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNodeChildren> {
		if (this.children[0] === null) {
			const statement = this.children[1].abstractify();
			switch (statement.typeName) {
				case errorAbstractifyingResultTypeName: {
					return statement;
				}
				case successAbstractifyingResultTypeName: {
					const result =
						new SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNodeChildren>(
							{finalStatement: statement.data, initialOperatedStatements: []},
						);
					return result;
				}
			}
		} else {
			const initialOperatedStatementsResult = this.children[0].abstractify();
			switch (initialOperatedStatementsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return initialOperatedStatementsResult;
				}
				case successAbstractifyingResultTypeName: {
					const statementResult = this.children[1].abstractify();
					switch (statementResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return statementResult;
						}
						case successAbstractifyingResultTypeName: {
							const result =
								new SuccessAbstractifyingResult<BlockAbstractSyntaxTreeNodeChildren>(
									{
										finalStatement: statementResult.data,
										initialOperatedStatements:
											initialOperatedStatementsResult.data,
									},
								);
							return result;
						}
					}
				}
			}
		}
	}
}
