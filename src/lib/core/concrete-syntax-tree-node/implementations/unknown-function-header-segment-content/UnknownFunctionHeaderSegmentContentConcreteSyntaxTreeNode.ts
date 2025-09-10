import type {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/children/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
		const paddedVariableName = this.atom.node;
		const paddedVariableNameAbstractifyingResult =
			paddedVariableName.abstractify();
		switch (paddedVariableNameAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						paddedVariableNameAbstractifyingResult.message,
					);
				return unknownFunctionHeaderSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedPaddedVariableName =
					paddedVariableNameAbstractifyingResult.data;
				const abstractifiedUnknownFunctionHeaderSegmentContent: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren =
					{name: abstractifiedPaddedVariableName};
				const unknownFunctionHeaderSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> =
					new SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren>(
						abstractifiedUnknownFunctionHeaderSegmentContent,
					);
				return unknownFunctionHeaderSegmentContentAbstractifyingResult;
			}
		}
	}
}
