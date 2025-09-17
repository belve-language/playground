import type {UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode> {
		const openingSquareBracketCharacter = this.atom.leftSubAtom.node;
		const optionalUnknownFunctionHeaderSegmentContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingSquareBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.node;
		const optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult =
			optionalUnknownFunctionHeaderSegmentContent.abstractify();
		switch (
			optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionHeaderSegmentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult.message,
					);
				return unknownFunctionHeaderSegmentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalUnknownFunctionHeaderSegmentContent =
					optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult.data;
				const abstractifiedUnknownFunctionHeaderSegment =
					new UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode(
						abstractifiedOptionalUnknownFunctionHeaderSegmentContent,
						new SpanIndexes(
							openingSquareBracketCharacter.atom.spanIndexes.from,
							closingSquareBracketCharacter.atom.spanIndexes.until,
						),
					);
				const unknownFunctionHeaderSegmentAbstractifyingResult: SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode>(
						abstractifiedUnknownFunctionHeaderSegment,
					);
				return unknownFunctionHeaderSegmentAbstractifyingResult;
			}
		}
	}
}
