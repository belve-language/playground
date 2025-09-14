import type {KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionHeaderSegmentAbstractSyntaxTreeNode> {
		const openingRoundBracketCharacter = this.atom.leftSubAtom.node;
		const optionalKnownFunctionHeaderSegmentContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingRoundBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.node;
		const knownFunctionHeaderSegmentContentAbstractifyingResult =
			optionalKnownFunctionHeaderSegmentContent.abstractify();
		switch (knownFunctionHeaderSegmentContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const knownFunctionHeaderSegmentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionHeaderSegmentContentAbstractifyingResult.message,
					);
				return knownFunctionHeaderSegmentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalKnownFunctionHeaderSegmentContent =
					knownFunctionHeaderSegmentContentAbstractifyingResult.data;
				const abstractifiedKnownFunctionHeaderSegment: KnownFunctionHeaderSegmentAbstractSyntaxTreeNode =
					KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
						{name: abstractifiedOptionalKnownFunctionHeaderSegmentContent},
						new SpanIndexes(
							openingRoundBracketCharacter.atom.spanIndexes.from,
							closingRoundBracketCharacter.atom.spanIndexes.until,
						),
					);
				const knownFunctionHeaderSegmentAbstractifyingResult: SuccessAbstractifyingResult<KnownFunctionHeaderSegmentAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<KnownFunctionHeaderSegmentAbstractSyntaxTreeNode>(
						abstractifiedKnownFunctionHeaderSegment,
					);
				return knownFunctionHeaderSegmentAbstractifyingResult;
			}
		}
	}
}
