import type {KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class KnownFunctionCallSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
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
				const abstractifiedKnownFunctionCallSegmentContent: string =
					abstractifiedPaddedVariableName;
				const knownFunctionCallSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult(
						abstractifiedKnownFunctionCallSegmentContent,
					);
				return knownFunctionCallSegmentContentAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const knownFunctionCallSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						paddedVariableNameAbstractifyingResult.message,
					);
				return knownFunctionCallSegmentContentAbstractifyingResult;
			}
		}
	}
}
