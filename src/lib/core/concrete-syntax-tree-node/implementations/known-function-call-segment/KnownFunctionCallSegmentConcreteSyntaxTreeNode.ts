import type {KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom.ts";
import {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNode> {
		const openingRoundBracketCharacter = this.atom.leftSubAtom.node;
		const optionalKnownFunctionCallSegmentContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingRoundBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.node;
		const optionalKnownFunctionCallSegmentContentAbstractifyingResult =
			optionalKnownFunctionCallSegmentContent.abstractify();
		switch (
			optionalKnownFunctionCallSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const knownFunctionCallSegmentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalKnownFunctionCallSegmentContentAbstractifyingResult.message,
					);
				return knownFunctionCallSegmentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalKnownFunctionCallSegmentContent =
					optionalKnownFunctionCallSegmentContentAbstractifyingResult.data;
				const abstractifiedKnownFunctionCallSegment =
					KnownFunctionCallSegmentAbstractSyntaxTreeNode.create(
						abstractifiedOptionalKnownFunctionCallSegmentContent,
						new SpanIndexes(
							openingRoundBracketCharacter.atom.spanIndexes.from,
							closingRoundBracketCharacter.atom.spanIndexes.until,
						),
					);
				const knownFunctionCallSegmentAbstractifyingResult: SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNode>(
						abstractifiedKnownFunctionCallSegment,
					);
				return knownFunctionCallSegmentAbstractifyingResult;
			}
		}
	}
}
