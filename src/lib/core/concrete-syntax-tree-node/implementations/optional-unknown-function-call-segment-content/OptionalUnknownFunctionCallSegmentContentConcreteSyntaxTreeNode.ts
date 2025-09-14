import type {OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const unknownFunctionCallSegmentContent = this.atom.node;
		const unknownFunctionCallSegmentContentAbstractifyingResult =
			unknownFunctionCallSegmentContent.abstractify();
		switch (unknownFunctionCallSegmentContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalUnknownFunctionCallSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						unknownFunctionCallSegmentContentAbstractifyingResult.message,
					);
				return optionalUnknownFunctionCallSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedUnknownFunctionCallSegmentContent =
					unknownFunctionCallSegmentContentAbstractifyingResult.data;
				if (abstractifiedUnknownFunctionCallSegmentContent === null) {
					const optionalUnknownFunctionCallSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Optional unknown function call segment content cannot be abstractified to null.",
						);
					return optionalUnknownFunctionCallSegmentContentAbstractifyingResult;
				} else {
					const abstractifiedOptionalUnknownFunctionCallSegmentContent: string =
						abstractifiedUnknownFunctionCallSegmentContent;
					const optionalUnknownFunctionCallSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedOptionalUnknownFunctionCallSegmentContent,
						);
					return optionalUnknownFunctionCallSegmentContentAbstractifyingResult;
				}
			}
		}
	}
}
