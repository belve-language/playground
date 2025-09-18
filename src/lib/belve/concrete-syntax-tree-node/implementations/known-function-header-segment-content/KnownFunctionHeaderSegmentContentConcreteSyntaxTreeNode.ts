import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
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
				const knownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						variableNameAbstractifyingResult.message,
					);
				return knownFunctionHeaderSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableName = variableNameAbstractifyingResult.data;
				const knownFunctionHeaderSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(abstractifiedVariableName);
				return knownFunctionHeaderSegmentContentAbstractifyingResult;
			}
		}
	}
}
