import type {BlockContentBranchConcreteSyntaxTreeNodeChildren} from "./children/BlockContentBranchConcreteSyntaxTreeNodeChildren.ts";
import {blockContentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/blockContentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "../padded-operated-statements/type-name/paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class BlockContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	BlockContentBranchConcreteSyntaxTreeNodeChildren,
	typeof blockContentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: BlockContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, blockContentBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					OperatedStatementAbstractSyntaxTreeNode,
					...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
				]
		  > {
		switch (this.children[0].typeName) {
			case whitespaceBranchConcreteSyntaxTreeNodeTypeName: {
				const result = new ErrorAbstractifyingResult("Empty block.");
				return result;
			}
			case paddedOperatedStatementsBranchConcreteSyntaxTreeNodeTypeName: {
				const statementsResult = this.children[0].abstractify();
				return statementsResult;
			}
		}
	}
}
