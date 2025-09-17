import type {FunctionBodyConcreteSyntaxTreeNodeAtom} from "./atom/FunctionBodyConcreteSyntaxTreeNodeAtom.ts";
import type {BlockStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionBodyConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionBodyConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionBodyConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> {
		const block = this.atom.node;
		const blockAbstractifyingResult = block.abstractify();
		switch (blockAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedBlock = blockAbstractifyingResult.data;
				const abstractifiedFunctionBody: BlockStatementAbstractSyntaxTreeNode =
					abstractifiedBlock;
				const functionBodyAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult(abstractifiedFunctionBody);
				return functionBodyAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const errorAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(blockAbstractifyingResult.message);
				return errorAbstractifyingResult;
			}
		}
	}
}
