import type {BlockConcreteSyntaxTreeNodeAtom} from "./atom/BlockConcreteSyntaxTreeNodeAtom.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class BlockConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<BlockConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: BlockConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> {
		const openingCurlyBracketCharacter = this.atom.leftSubAtom.node;
		const optionalBlockContent = this.atom.rightSubAtom.leftSubAtom.node;
		const closingCurlyBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.leftSubAtom.node;
		const optionalWhitespace =
			this.atom.rightSubAtom.rightSubAtom.rightSubAtom.node;
		const optionalBlockContentAbstractifyingResult =
			optionalBlockContent.abstractify();
		switch (optionalBlockContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const blockAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalBlockContentAbstractifyingResult.message,
					);
				return blockAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalBlockContent =
					optionalBlockContentAbstractifyingResult.data;
				const abstractifiedBlock = new BlockStatementAbstractSyntaxTreeNode(
					abstractifiedOptionalBlockContent,
					new SpanIndexes(
						openingCurlyBracketCharacter.atom.spanIndexes.from,
						closingCurlyBracketCharacter.atom.spanIndexes.until,
					),
				);
				const blockAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNode>(
						abstractifiedBlock,
					);
				return blockAbstractifyingResult;
			}
		}
	}
}
