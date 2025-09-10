import type {BlockContentConcreteSyntaxTreeNodeAtom} from "./atom/BlockContentConcreteSyntaxTreeNodeAtom.ts";
import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class BlockContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<BlockContentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: BlockContentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> {
		const statements = this.atom.node;
		const statementsAbstractifyingResult = statements.abstractify();
		switch (statementsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStatements = statementsAbstractifyingResult.data;
				const abstractifiedBlockContent: BlockStatementAbstractSyntaxTreeNodeChildren =
					{statements: abstractifiedStatements};
				const blockContentAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> =
					new SuccessAbstractifyingResult(abstractifiedBlockContent);
				return blockContentAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const blockContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(statementsAbstractifyingResult.message);
				return blockContentAbstractifyingResult;
			}
		}
	}
}
