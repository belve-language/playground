import type {OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/known/children/KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren> {
		const knownFunctionCallStatementSegmentContent = this.atom.node;
		const knownFunctionCallStatementSegmentContentAbstractifyingResult =
			knownFunctionCallStatementSegmentContent.abstractify();
		switch (
			knownFunctionCallStatementSegmentContentAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionCallStatementSegmentContentAbstractifyingResult.message,
					);
				return optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedKnownFunctionCallStatementSegmentContent =
					knownFunctionCallStatementSegmentContentAbstractifyingResult.data;
				if (abstractifiedKnownFunctionCallStatementSegmentContent === null) {
					const optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Optional known function call statement segment content cannot be abstractified to null.",
						);
					return optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult;
				} else {
					const abstractifiedOptionalKnownFunctionCallStatementSegmentContent: KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren =
						{name: abstractifiedKnownFunctionCallStatementSegmentContent};
					const optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren> =
						new SuccessAbstractifyingResult<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren>(
							abstractifiedOptionalKnownFunctionCallStatementSegmentContent,
						);
					return optionalKnownFunctionCallStatementSegmentContentAbstractifyingResult;
				}
			}
		}
	}
}
