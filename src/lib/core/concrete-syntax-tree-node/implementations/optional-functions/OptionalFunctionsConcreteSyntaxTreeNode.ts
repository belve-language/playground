import type {OptionalFunctionsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalFunctionsConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalFunctionsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalFunctionsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalFunctionsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode>
		| SuccessAbstractifyingResult<null> {
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
					const abstractifiedOptionalFunctions: FunctionsAbstractSyntaxTreeNode =
						abstractifiedFunctions;
					const optionalFunctionsAbstractifyingResult: SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> =
						new SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode>(
							abstractifiedOptionalFunctions,
						);
					return optionalFunctionsAbstractifyingResult;
				}
			}
		}
	}
}
