import type {FunctionConcreteSyntaxTreeNodeAtom} from "./atom/FunctionConcreteSyntaxTreeNodeAtom.ts";
import {MainFunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
import {NonMainFunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<MainFunctionAbstractSyntaxTreeNode>
		| SuccessAbstractifyingResult<NonMainFunctionAbstractSyntaxTreeNode> {
		const optionalFunctionHeader = this.atom.leftSubAtom.node;
		const functionBody = this.atom.rightSubAtom.node;
		const optionalFunctionHeaderAbstractifyingResult =
			optionalFunctionHeader.abstractify();
		switch (optionalFunctionHeaderAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalFunctionHeaderAbstractifyingResult.message,
					);
				return functionAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalFunctionHeader =
					optionalFunctionHeaderAbstractifyingResult.data;
				if (abstractifiedOptionalFunctionHeader === null) {
					const functionBodyAbstractifyingResult = functionBody.abstractify();
					switch (functionBodyAbstractifyingResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							const functionAbstractifyingResult: ErrorAbstractifyingResult =
								new ErrorAbstractifyingResult(
									functionBodyAbstractifyingResult.message,
								);
							return functionAbstractifyingResult;
						}
						case successAbstractifyingResultTypeName: {
							const abstractifiedFunctionBody =
								functionBodyAbstractifyingResult.data;
							const abstractifiedFunction: MainFunctionAbstractSyntaxTreeNode =
								new MainFunctionAbstractSyntaxTreeNode(
									{body: abstractifiedFunctionBody, header: null},
									abstractifiedFunctionBody.spanIndexes,
								);
							const functionAbstractifyingResult: SuccessAbstractifyingResult<MainFunctionAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<MainFunctionAbstractSyntaxTreeNode>(
									abstractifiedFunction,
								);
							return functionAbstractifyingResult;
						}
					}
				} else {
					const functionBodyAbstractifyingResult = functionBody.abstractify();
					switch (functionBodyAbstractifyingResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							const functionAbstractifyingResult: ErrorAbstractifyingResult =
								new ErrorAbstractifyingResult(
									functionBodyAbstractifyingResult.message,
								);
							return functionAbstractifyingResult;
						}
						case successAbstractifyingResultTypeName: {
							const abstractifiedFunctionBody =
								functionBodyAbstractifyingResult.data;
							const abstractifiedFunction: NonMainFunctionAbstractSyntaxTreeNode =
								NonMainFunctionAbstractSyntaxTreeNode.create(
									{
										body: abstractifiedFunctionBody,
										header: abstractifiedOptionalFunctionHeader,
									},
									new SpanIndexes(
										abstractifiedOptionalFunctionHeader.spanIndexes.from,
										abstractifiedFunctionBody.spanIndexes.until,
									),
								);
							const functionAbstractifyingResult: SuccessAbstractifyingResult<NonMainFunctionAbstractSyntaxTreeNode> =
								new SuccessAbstractifyingResult<NonMainFunctionAbstractSyntaxTreeNode>(
									abstractifiedFunction,
								);
							return functionAbstractifyingResult;
						}
					}
				}
			}
		}
	}
}
