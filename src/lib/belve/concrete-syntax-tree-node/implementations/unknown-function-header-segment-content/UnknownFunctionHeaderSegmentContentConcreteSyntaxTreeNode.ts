import type {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/children/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
		const variableName = this.atom.node;
		const variableNameAbstractifyingResult = variableName.abstractify();
		switch (variableNameAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						variableNameAbstractifyingResult.message,
					);
				return unknownFunctionHeaderSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableName = variableNameAbstractifyingResult.data;
				const abstractifiedUnknownFunctionHeaderSegmentContent: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren =
					{name: abstractifiedVariableName};
				const unknownFunctionHeaderSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> =
					new SuccessAbstractifyingResult<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren>(
						abstractifiedUnknownFunctionHeaderSegmentContent,
					);
				return unknownFunctionHeaderSegmentContentAbstractifyingResult;
			}
		}
	}
}
