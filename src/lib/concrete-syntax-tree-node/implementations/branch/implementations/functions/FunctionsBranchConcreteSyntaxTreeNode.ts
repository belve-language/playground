import type {FunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import {functionsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionsBranchConcreteSyntaxTreeNodeChildren,
	typeof functionsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(children: FunctionsBranchConcreteSyntaxTreeNodeChildren) {
		super(children, functionsBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> {
		if (this.children[0] === null) {
			const functionAbstractifyingResult = this.children[1].abstractify();
			switch (functionAbstractifyingResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return functionAbstractifyingResult;
				}
				case successAbstractifyingResultTypeName: {
					return new SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode>(
						new FunctionsAbstractSyntaxTreeNode(
							{
								functions: {
									[functionAbstractifyingResult.data.computeId()]:
										functionAbstractifyingResult.data,
								},
							},
							this.computeSpanIndexes(),
						),
					);
				}
			}
		} else {
			const separatedFunctionsAbstractifyingResult =
				this.children[0].abstractify();
			switch (separatedFunctionsAbstractifyingResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return separatedFunctionsAbstractifyingResult;
				}
				case successAbstractifyingResultTypeName: {
					const functionAbstractifyingResult = this.children[1].abstractify();
					switch (functionAbstractifyingResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return functionAbstractifyingResult;
						}
						case successAbstractifyingResultTypeName: {
							const alreadyExistingFunctionAbstractSyntaxTreeNode =
								separatedFunctionsAbstractifyingResult.data.children.functions[
									functionAbstractifyingResult.data.computeId()
								];
							if (alreadyExistingFunctionAbstractSyntaxTreeNode === undefined) {
								return new SuccessAbstractifyingResult(
									new FunctionsAbstractSyntaxTreeNode(
										{
											functions: {
												...separatedFunctionsAbstractifyingResult.data.children
													.functions,
												[functionAbstractifyingResult.data.computeId()]:
													functionAbstractifyingResult.data,
											},
										},
										this.computeSpanIndexes(),
									),
								);
							} else {
								return new ErrorAbstractifyingResult(
									`Function spanning ${alreadyExistingFunctionAbstractSyntaxTreeNode.spanIndexes.starting.toString(10)}->${alreadyExistingFunctionAbstractSyntaxTreeNode.spanIndexes.ending.toString(10)} has the same header as the function spanning ${functionAbstractifyingResult.data.spanIndexes.starting.toString(10)}->${functionAbstractifyingResult.data.spanIndexes.ending.toString(10)}.`,
								);
							}
						}
					}
				}
				case errorAbstractifyingResultTypeName: {
					return separatedFunctionsAbstractifyingResult;
				}
			}
		}
	}
}
