import type {KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom.ts";
import {KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/known/KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode> {
		const openingRoundBracketCharacter = this.atom.leftSubAtom.node;
		const optionalKnownFunctionCallStatementSegmentContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingRoundBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.node;
		const optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult =
			optionalKnownFunctionCallStatementSegmentContent.abstractify();
		switch (
			optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const knownFunctionCallStatementSegmentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult.message,
					);
				return knownFunctionCallStatementSegmentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalKnownFunctionCallStatementSegmentContent =
					optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult.data;
				const abstractifiedKnownFunctionCallStatementSegment =
					new KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode(
						abstractifiedOptionalKnownFunctionCallStatementSegmentContent,
						new SpanIndexes(
							openingRoundBracketCharacter.atom.spanIndexes.from,
							closingRoundBracketCharacter.atom.spanIndexes.until,
						),
					);
				const knownFunctionCallStatementSegmentAbstractifyingResult: SuccessAbstractifyingResult<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode>(
						abstractifiedKnownFunctionCallStatementSegment,
					);
				return knownFunctionCallStatementSegmentAbstractifyingResult;
			}
		}
	}
}
