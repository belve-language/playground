import type {OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/children/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
		const unknownFunctionHeaderSegmentContent = this.atom.node;
		const unknownFunctionHeaderSegmentContentAbstractifyingResult =
			unknownFunctionHeaderSegmentContent.abstractify();
		switch (unknownFunctionHeaderSegmentContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						unknownFunctionHeaderSegmentContentAbstractifyingResult.message,
					);
				return optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedUnknownFunctionHeaderSegmentContent =
					unknownFunctionHeaderSegmentContentAbstractifyingResult.data;
				if (abstractifiedUnknownFunctionHeaderSegmentContent === null) {
					const optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Expected unknown function header segment content, but received empty.",
						);
					return optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult;
				} else {
					const abstractifiedOptionalUnknownFunctionHeaderSegmentContent: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren =
						abstractifiedUnknownFunctionHeaderSegmentContent;
					const optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> =
						new SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren>(
							abstractifiedOptionalUnknownFunctionHeaderSegmentContent,
						);
					return optionalUnknownFunctionHeaderSegmentContentAbstractifyingResult;
				}
			}
		}
	}
}
