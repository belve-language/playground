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
		const variableName = this.atom.node;
		const variableNameAbstractifyingResult = variableName.abstractify();
		switch (variableNameAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const knownFunctionCallStatementSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						variableNameAbstractifyingResult.message,
					);
				return knownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableName = variableNameAbstractifyingResult.data;
				const abstractifiedKnownFunctionCallStatementSegmentContent: string =
					abstractifiedVariableName;
				const knownFunctionCallStatementSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(
						abstractifiedKnownFunctionCallStatementSegmentContent,
					);
				return knownFunctionCallStatementSegmentContentAbstractifyingResult;
			}
		}
	}
}
