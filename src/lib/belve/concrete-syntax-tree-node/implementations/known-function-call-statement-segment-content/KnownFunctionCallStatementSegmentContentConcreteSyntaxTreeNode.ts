import type {KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const paddedVariableName = this.atom.node;
		const paddedVariableNameAbstractifyingResult =
			paddedVariableName.abstractify();
		switch (paddedVariableNameAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedPaddedVariableName =
					paddedVariableNameAbstractifyingResult.data;
				const abstractifiedKnownFunctionCallStatementSegmentContent: string =
					abstractifiedPaddedVariableName;
				const knownFunctionCallStatementSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult(
						abstractifiedKnownFunctionCallStatementSegmentContent,
					);
				return knownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const knownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						paddedVariableNameAbstractifyingResult.message,
					);
				return knownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
		}
	}
}
