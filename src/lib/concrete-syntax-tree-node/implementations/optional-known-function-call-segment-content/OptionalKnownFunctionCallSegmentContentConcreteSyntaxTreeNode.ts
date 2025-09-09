import type {OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/known/children/KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
		const knownFunctionCallSegmentContent = this.atom.node;
		const knownFunctionCallSegmentContentAbstractifyingResult =
			knownFunctionCallSegmentContent.abstractify();
		switch (knownFunctionCallSegmentContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalKnownFunctionCallSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionCallSegmentContentAbstractifyingResult.message,
					);
				return optionalKnownFunctionCallSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedKnownFunctionCallSegmentContent =
					knownFunctionCallSegmentContentAbstractifyingResult.data;
				if (abstractifiedKnownFunctionCallSegmentContent === null) {
					const optionalKnownFunctionCallSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Optional known function call segment content cannot be abstractified to null.",
						);
					return optionalKnownFunctionCallSegmentContentAbstractifyingResult;
				} else {
					const abstractifiedOptionalKnownFunctionCallSegmentContent: KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren =
						{name: abstractifiedKnownFunctionCallSegmentContent};
					const optionalKnownFunctionCallSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> =
						new SuccessAbstractifyingResult(
							abstractifiedOptionalKnownFunctionCallSegmentContent,
						);
					return optionalKnownFunctionCallSegmentContentAbstractifyingResult;
				}
			}
		}
	}
}
