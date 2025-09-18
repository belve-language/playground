import type {UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom.ts";
import {UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/unknown/UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode> {
		const openingSquareBracketCharacter = this.atom.leftSubAtom.node;
		const optionalUnknownFunctionCallStatementSegmentContent =
			this.atom.rightSubAtom.leftSubAtom.node;
		const closingSquareBracketCharacter =
			this.atom.rightSubAtom.rightSubAtom.node;
		const optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult =
			optionalUnknownFunctionCallStatementSegmentContent.abstractify();
		switch (
			optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionCallStatementSegmentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult.message,
					);
				return unknownFunctionCallStatementSegmentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalUnknownFunctionCallStatementSegmentContent =
					optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult.data;
				const abstractifiedUnknownFunctionCallStatementSegment: UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode =
					new UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode(
						{
							name: abstractifiedOptionalUnknownFunctionCallStatementSegmentContent,
						},
						new SpanIndexes(
							openingSquareBracketCharacter.atom.spanIndexes.from,
							closingSquareBracketCharacter.atom.spanIndexes.until,
						),
					);
				const unknownFunctionCallStatementSegmentAbstractifyingResult: SuccessAbstractifyingResult<UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode>(
						abstractifiedUnknownFunctionCallStatementSegment,
					);
				return unknownFunctionCallStatementSegmentAbstractifyingResult;
			}
		}
	}
}
