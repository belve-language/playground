import type {OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const unknownFunctionCallStatementSegmentContent = this.atom.node;
		const unknownFunctionCallStatementSegmentContentAbstractifyingResult =
			unknownFunctionCallStatementSegmentContent.abstractify();
		switch (
			unknownFunctionCallStatementSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						unknownFunctionCallStatementSegmentContentAbstractifyingResult.message,
					);
				return optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedUnknownFunctionCallStatementSegmentContent =
					unknownFunctionCallStatementSegmentContentAbstractifyingResult.data;
				if (abstractifiedUnknownFunctionCallStatementSegmentContent === null) {
					const optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Optional unknown function call segment content cannot be abstractified to null.",
						);
					return optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult;
				} else {
					const abstractifiedOptionalUnknownFunctionCallStatementSegmentContent: string =
						abstractifiedUnknownFunctionCallStatementSegmentContent;
					const optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedOptionalUnknownFunctionCallStatementSegmentContent,
						);
					return optionalUnknownFunctionCallStatementSegmentContentAbstractifyingResult;
				}
			}
		}
	}
}
