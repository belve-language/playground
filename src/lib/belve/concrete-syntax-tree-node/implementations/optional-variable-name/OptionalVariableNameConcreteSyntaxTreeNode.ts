import type {OptionalVariableNameConcreteSyntaxTreeNodeAtom} from "./atom/OptionalVariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalVariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalVariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalVariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const variableName = this.atom.node;
		const variableNameAbstractifyingResult = variableName.abstractify();
		switch (variableNameAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableName = variableNameAbstractifyingResult.data;
				if (abstractifiedVariableName === null) {
					const paddedOptionalVariableNameAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							`Failed to abstractify optional variable name: ${variableName}`,
						);
					return paddedOptionalVariableNameAbstractifyingResult;
				} else {
					const abstractifiedOptionalVariableName: string =
						abstractifiedVariableName;
					const optionalVariableNameAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedOptionalVariableName,
						);
					return optionalVariableNameAbstractifyingResult;
				}
			}
		}
	}
}
