import type {PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom} from "./atom/PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class PaddedOptionalFunctionsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<null | SupportedFunctionsAbstractSyntaxTreeNode> {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalFunctions = this.atom.rightSubAtom.node;
		const optionalFunctionsAbstractifyingResult =
			optionalFunctions.abstractify();
		switch (optionalFunctionsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const paddedOptionalFunctionsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalFunctionsAbstractifyingResult.message,
					);
				return paddedOptionalFunctionsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalFunctions =
					optionalFunctionsAbstractifyingResult.data;
				const abstractifiedPaddedOptionalFunctions: null | SupportedFunctionsAbstractSyntaxTreeNode =
					abstractifiedOptionalFunctions;
				const paddedOptionalFunctionsAbstractifyingResult: SuccessAbstractifyingResult<null | SupportedFunctionsAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<null | SupportedFunctionsAbstractSyntaxTreeNode>(
						abstractifiedPaddedOptionalFunctions,
					);
				return paddedOptionalFunctionsAbstractifyingResult;
			}
		}
	}
}
