import type {FunctionBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionBranchConcreteSyntaxTreeNodeTypeName.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function/FunctionAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {FunctionBodyBranchConcreteSyntaxTreeNode} from "../function-body/FunctionBodyBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode} from "../separated-function-header/SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode.ts";
export class FunctionBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionBranchConcreteSyntaxTreeNodeChildren,
	typeof functionBranchConcreteSyntaxTreeNodeTypeName
> {
	private constructor(children: FunctionBranchConcreteSyntaxTreeNodeChildren) {
		super(children, functionBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionAbstractSyntaxTreeNode> {
		if (this.children[0] === null) {
			// const function_ = new FunctionAbstractSyntaxTreeNode(
			// 	{body: this.children[1].abstractify(), header: []},
			// 	this.computeSpanIndexes(),
			// );
			// const result = new SuccessAbstractifyingResult(function_);
			// return result;
			const functionBodyResult = this.children[1].abstractify();
			switch (functionBodyResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return functionBodyResult;
				}
				case successAbstractifyingResultTypeName: {
					const function_ = new FunctionAbstractSyntaxTreeNode(
						{body: functionBodyResult.data, header: null},
						this.computeSpanIndexes(),
					);
					const result = new SuccessAbstractifyingResult(function_);
					return result;
				}
			}
		} else {
			const functionHeaderResult = this.children[0].abstractify();
			switch (functionHeaderResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return functionHeaderResult;
				}
				case successAbstractifyingResultTypeName: {
					const functionBodyResult = this.children[1].abstractify();
					switch (functionBodyResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return functionBodyResult;
						}
						case successAbstractifyingResultTypeName: {
							const function_ = new FunctionAbstractSyntaxTreeNode(
								{
									body: functionBodyResult.data,
									header: functionHeaderResult.data,
								},
								this.computeSpanIndexes(),
							);
							const result = new SuccessAbstractifyingResult(function_);
							return result;
						}
					}
				}
			}
		}
	}
	public static create(
		separatedFunctionHeader: null | SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode,
		functionBody: FunctionBodyBranchConcreteSyntaxTreeNode,
	): FunctionBranchConcreteSyntaxTreeNode {
		const node = new FunctionBranchConcreteSyntaxTreeNode([
			separatedFunctionHeader,
			functionBody,
		]);
		return node;
	}
}
