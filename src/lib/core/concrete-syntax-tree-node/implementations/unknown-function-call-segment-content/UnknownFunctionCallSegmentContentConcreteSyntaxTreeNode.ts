import type {UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
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
				const abstractifiedUnknownFunctionCallSegmentContent: string =
					abstractifiedPaddedVariableName;
				const unknownFunctionCallSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(
						abstractifiedUnknownFunctionCallSegmentContent,
					);
				return unknownFunctionCallSegmentContentAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionCallSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						paddedVariableNameAbstractifyingResult.message,
					);
				return unknownFunctionCallSegmentContentAbstractifyingResult;
			}
		}
	}
}
