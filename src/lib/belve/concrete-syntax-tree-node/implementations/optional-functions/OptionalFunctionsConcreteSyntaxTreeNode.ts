import type {OptionalFunctionsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalFunctionsConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalFunctionsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalFunctionsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalFunctionsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<null>
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		const functions = this.atom.node;
		const functionsAbstractifyingResult = functions.abstractify();
		switch (functionsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalFunctionsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(functionsAbstractifyingResult.message);
				return optionalFunctionsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctions = functionsAbstractifyingResult.data;
				if (abstractifiedFunctions === null) {
					const abstractifiedOptionalFunctions: null = null;
					const optionalFunctionsAbstractifyingResult: SuccessAbstractifyingResult<null> =
						new SuccessAbstractifyingResult<null>(
							abstractifiedOptionalFunctions,
						);
					return optionalFunctionsAbstractifyingResult;
				} else {
					const abstractifiedOptionalFunctions: SupportedFunctionsAbstractSyntaxTreeNode =
						abstractifiedFunctions;
					const optionalFunctionsAbstractifyingResult: SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> =
						new SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>(
							abstractifiedOptionalFunctions,
						);
					return optionalFunctionsAbstractifyingResult;
				}
			}
		}
	}
}
