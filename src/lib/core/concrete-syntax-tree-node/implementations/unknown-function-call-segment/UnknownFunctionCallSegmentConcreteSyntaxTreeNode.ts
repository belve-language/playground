import type {UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom.ts";
import {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class UnknownFunctionCallSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionCallSegmentAbstractSyntaxTreeNode> {
		const openingSquareBracketCharacter = this.atom.leftSubAtom.node;
		const optionalUnknownFunctionCallSegmentContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingSquareBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.node;
		const optionalUnknownFunctionCallSegmentContentAbstractifyingResult =
			optionalUnknownFunctionCallSegmentContent.abstractify();
		switch (
			optionalUnknownFunctionCallSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionCallSegmentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalUnknownFunctionCallSegmentContentAbstractifyingResult.message,
					);
				return unknownFunctionCallSegmentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalUnknownFunctionCallSegmentContent =
					optionalUnknownFunctionCallSegmentContentAbstractifyingResult.data;
				const abstractifiedUnknownFunctionCallSegment: UnknownFunctionCallSegmentAbstractSyntaxTreeNode =
					UnknownFunctionCallSegmentAbstractSyntaxTreeNode.create(
						{name: abstractifiedOptionalUnknownFunctionCallSegmentContent},
						new SpanIndexes(
							openingSquareBracketCharacter.atom.spanIndexes.from,
							closingSquareBracketCharacter.atom.spanIndexes.until,
						),
					);
				const unknownFunctionCallSegmentAbstractifyingResult: SuccessAbstractifyingResult<UnknownFunctionCallSegmentAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<UnknownFunctionCallSegmentAbstractSyntaxTreeNode>(
						abstractifiedUnknownFunctionCallSegment,
					);
				return unknownFunctionCallSegmentAbstractifyingResult;
			}
		}
	}
}
