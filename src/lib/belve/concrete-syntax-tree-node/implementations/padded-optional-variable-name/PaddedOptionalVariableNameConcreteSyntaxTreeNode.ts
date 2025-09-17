import type {PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom} from "./atom/PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class PaddedOptionalVariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalVariableName = this.atom.rightSubAtom.node;
		const optionalVariableNameAbstractifyingResult =
			optionalVariableName.abstractify();
		switch (optionalVariableNameAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const paddedOptionalVariableNameAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalVariableNameAbstractifyingResult.message,
					);
				return paddedOptionalVariableNameAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalVariableName =
					optionalVariableNameAbstractifyingResult.data;
				const abstractifiedPaddedOptionalVariableName: string =
					abstractifiedOptionalVariableName;
				const paddedOptionalVariableNameAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(
						abstractifiedPaddedOptionalVariableName,
					);
				return paddedOptionalVariableNameAbstractifyingResult;
			}
		}
	}
}
