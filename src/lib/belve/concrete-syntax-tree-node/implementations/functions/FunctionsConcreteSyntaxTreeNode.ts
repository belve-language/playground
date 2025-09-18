import type {FunctionsConcreteSyntaxTreeNodeAtom} from "./atom/FunctionsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		const function_ = this.atom.leftSubAtom.node;
		const optionalFunctions = this.atom.rightSubAtom.node;
		const functionAbstractifyingResult = function_.abstractify();
		switch (functionAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(functionAbstractifyingResult.message);
				return functionsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunction = functionAbstractifyingResult.data;
				const optionalFunctionsAbstractifyingResult =
					optionalFunctions.abstractify();
				switch (optionalFunctionsAbstractifyingResult.typeName) {
					case errorAbstractifyingResultTypeName: {
						const functionsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalFunctionsAbstractifyingResult.message,
							);
						return functionsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalFunctions =
							optionalFunctionsAbstractifyingResult.data;
						if (abstractifiedOptionalFunctions === null) {
							const abstractifiedFunctions: SupportedFunctionsAbstractSyntaxTreeNode =
								abstractifiedFunction.createFunctions();
							const functionsAbstractifyingResult: SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>(
									abstractifiedFunctions,
								);
							return functionsAbstractifyingResult;
						} else {
							const addingToFunctionsResult =
								abstractifiedFunction.addToFunctions(
									abstractifiedOptionalFunctions,
								);
							switch (addingToFunctionsResult.typeName) {
								case errorAbstractifyingResultTypeName: {
									const functionsAbstractifyingResult: ErrorAbstractifyingResult =
										new ErrorAbstractifyingResult(
											addingToFunctionsResult.message,
										);
									return functionsAbstractifyingResult;
								}
								case successAbstractifyingResultTypeName: {
									const abstractifiedFunctions: SupportedFunctionsAbstractSyntaxTreeNode =
										addingToFunctionsResult.data;
									const functionsAbstractifyingResult: SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> =
										new SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>(
											abstractifiedFunctions,
										);
									return functionsAbstractifyingResult;
								}
							}
						}
					}
				}
			}
		}
	}
}
