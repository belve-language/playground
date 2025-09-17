import type {UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const variableName = this.atom.node;
		const variableNameAbstractifyingResult = variableName.abstractify();
		switch (variableNameAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedPaddedVariableName =
					variableNameAbstractifyingResult.data;
				const abstractifiedUnknownFunctionCallStatementSegmentContent: string =
					abstractifiedPaddedVariableName;
				const unknownFunctionCallStatementSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(
						abstractifiedUnknownFunctionCallStatementSegmentContent,
					);
				return unknownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const unknownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						variableNameAbstractifyingResult.message,
					);
				return unknownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
		}
	}
}
