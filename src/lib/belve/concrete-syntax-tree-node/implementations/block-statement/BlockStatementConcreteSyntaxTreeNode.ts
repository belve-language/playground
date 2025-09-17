import type {BlockStatementConcreteSyntaxTreeNodeAtom} from "./atom/BlockStatementConcreteSyntaxTreeNodeAtom.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class BlockStatementConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<BlockStatementConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: BlockStatementConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> {
		const openingCurlyBracketCharacter = this.atom.leftSubAtom.node;
		const optionalBlockStatementContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingCurlyBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.leftSubAtom.node;
		const optionalWhitespace =
			this.atom.rightSubAtom.rightSubAtom.rightSubAtom.node;
		const optionalBlockStatementContentAbstractifyingResult =
			optionalBlockStatementContent.abstractify();
		switch (optionalBlockStatementContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const blockStatementAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalBlockStatementContentAbstractifyingResult.message,
					);
				return blockStatementAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalBlockStatementContent =
					optionalBlockStatementContentAbstractifyingResult.data;
				const abstractifiedBlock = new BlockStatementAbstractSyntaxTreeNode(
					abstractifiedOptionalBlockStatementContent,
					new SpanIndexes(
						openingCurlyBracketCharacter.atom.spanIndexes.from,
						closingCurlyBracketCharacter.atom.spanIndexes.until,
					),
				);
				const blockStatementAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode>(
						abstractifiedBlock,
					);
				return blockStatementAbstractifyingResult;
			}
		}
	}
}
