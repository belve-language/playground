import type {OperatedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/OperatedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {operatedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/operatedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
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
					OperatedStatementAbstractSyntaxTreeNode,
					...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
				]
		  > {
		if (this.children[0] === null) {
			const operatedStatementResult = this.children[1].abstractify();
			switch (operatedStatementResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return operatedStatementResult;
				}
				case successAbstractifyingResultTypeName: {
					const result = new SuccessAbstractifyingResult<
						readonly [OperatedStatementAbstractSyntaxTreeNode]
					>([operatedStatementResult.data]);
					return result;
				}
			}
		} else {
			const separatedOperatedStatementsResult = this.children[0].abstractify();
			switch (separatedOperatedStatementsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return separatedOperatedStatementsResult;
				}
				case successAbstractifyingResultTypeName: {
					const operatedStatementResult = this.children[1].abstractify();
					switch (operatedStatementResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return operatedStatementResult;
						}
						case successAbstractifyingResultTypeName: {
							const result = new SuccessAbstractifyingResult<
								readonly [
									OperatedStatementAbstractSyntaxTreeNode,
									...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
								]
							>([
								...separatedOperatedStatementsResult.data,
								operatedStatementResult.data,
							]);
							return result;
						}
					}
				}
			}
		}
	}
}
