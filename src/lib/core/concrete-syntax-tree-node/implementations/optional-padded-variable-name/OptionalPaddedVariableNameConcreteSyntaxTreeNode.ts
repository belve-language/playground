import type {OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom} from "./atom/OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalPaddedVariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom,
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
				if (abstractifiedPaddedVariableName === null) {
					const optionalPaddedVariableNameAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Optional padded variable name cannot be null.",
						);
					return optionalPaddedVariableNameAbstractifyingResult;
				} else {
					const abstractifiedOptionalPaddedVariableName: string =
						abstractifiedPaddedVariableName;
					const optionalPaddedVariableNameAbstractifyingResult =
						new SuccessAbstractifyingResult<string>(
							abstractifiedOptionalPaddedVariableName,
						);
					return optionalPaddedVariableNameAbstractifyingResult;
				}
			}
		}
	}
}
