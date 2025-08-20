import type {FunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import {functionsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import type {FunctionsAbstractSyntaxTreeNodeData} from "../../../../../abstract-syntax-tree-node/implementations/functions/data/FunctionsAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionsBranchConcreteSyntaxTreeNodeChildren,
	typeof functionsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes, functionsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNodeData> {
		if (this.children[0] === null) {
			const functionAbstractifyingResult = this.children[1].abstractify();
			switch (functionAbstractifyingResult.typeName) {
				case successAbstractifyingResultTypeName: {
					return new SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNodeData>(
						new FunctionsAbstractSyntaxTreeNode(
							{
								functions: {
									[functionAbstractifyingResult.data.abstractSyntaxTreeNode.data
										.id]:
										functionAbstractifyingResult.data.abstractSyntaxTreeNode,
								},
							},
							this.spanIndexes,
						),
					);
				}
				// case errorAbstractifyingResultTypeName: {
				// 	return new ErrorAbstractifyingResult(
				// 		functionAbstractifyingResult.errorMessage,
				// 	);
				// }
			}
		} else {
			const separatedFunctionsAbstractifyingResult =
				this.children[0].abstractify();
			const functionAbstractifyingResult = this.children[1].abstractify();
			switch (separatedFunctionsAbstractifyingResult.typeName) {
				case successAbstractifyingResultTypeName: {
					switch (functionAbstractifyingResult.typeName) {
						// case errorAbstractifyingResultTypeName: {
						// 	return new ErrorAbstractifyingResult(
						// 		functionAbstractifyingResult.errorMessage,
						// 	);
						// }
						case successAbstractifyingResultTypeName: {
							const alreadyExistingFunctionAbstractSyntaxTreeNode =
								separatedFunctionsAbstractifyingResult.data
									.abstractSyntaxTreeNode.data.functions[
									functionAbstractifyingResult.data.abstractSyntaxTreeNode.data
										.id
								];
							if (alreadyExistingFunctionAbstractSyntaxTreeNode === undefined) {
								return new SuccessAbstractifyingResult(
									new FunctionsAbstractSyntaxTreeNode(
										{
											functions: {
												...separatedFunctionsAbstractifyingResult.data
													.abstractSyntaxTreeNode.data.functions,
												[functionAbstractifyingResult.data
													.abstractSyntaxTreeNode.data.id]:
													functionAbstractifyingResult.data
														.abstractSyntaxTreeNode,
											},
										},
										this.spanIndexes,
									),
								);
							} else {
								return new ErrorAbstractifyingResult(
									`Function spanning ${alreadyExistingFunctionAbstractSyntaxTreeNode.spanIndexes.starting.toString(10)}->${alreadyExistingFunctionAbstractSyntaxTreeNode.spanIndexes.ending.toString(10)} has the same header as the function spanning ${functionAbstractifyingResult.data.abstractSyntaxTreeNode.spanIndexes.starting.toString(10)}->${functionAbstractifyingResult.data.abstractSyntaxTreeNode.spanIndexes.ending.toString(10)}.`,
								);
							}
						}
					}
				}
				case errorAbstractifyingResultTypeName: {
					// return new ErrorAbstractifyingResult(
					// 	separatedFunctionsAbstractifyingResult.data.message,
					// );
					switch (functionAbstractifyingResult.typeName) {
						case successAbstractifyingResultTypeName: {
							return separatedFunctionsAbstractifyingResult;
						}
					}
				}
			}
		}
	}
}
