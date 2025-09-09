import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom} from "./atom/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalPaddedVariableName = this.atom.rightSubAtom.node;
		const optionalPaddedVariableNameAbstractifyingResult =
			optionalPaddedVariableName.abstractify();
		switch (optionalPaddedVariableNameAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const paddedOptionalPaddedVariableNameAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalPaddedVariableNameAbstractifyingResult.message,
					);
				return paddedOptionalPaddedVariableNameAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalPaddedVariableName =
					optionalPaddedVariableNameAbstractifyingResult.data;
				const abstractifiedPaddedOptionalPaddedVariableName: string =
					abstractifiedOptionalPaddedVariableName;
				const paddedOptionalPaddedVariableNameAbstractifyingResult =
					new SuccessAbstractifyingResult<string>(
						abstractifiedPaddedOptionalPaddedVariableName,
					);
				return paddedOptionalPaddedVariableNameAbstractifyingResult;
			}
		}
	}
}
