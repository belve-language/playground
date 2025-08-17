import type {SuccessAbstractifyingResultData} from "./data/SuccessAbstractifyingResultData.ts";
import {successAbstractifyingResultTypeName} from "./type-name/successAbstractifyingResultTypeName.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function/FunctionAbstractSyntaxTreeNode.ts";
import {AbstractifyingResult} from "../../AbstractifyingResult.ts";
export class SuccessAbstractifyingResult extends AbstractifyingResult<
	SuccessAbstractifyingResultData,
	typeof successAbstractifyingResultTypeName
> {
	public constructor(
		abstractSyntaxTree: readonly FunctionAbstractSyntaxTreeNode[],
	) {
		super(
			{abstractSyntaxTree: abstractSyntaxTree},
			successAbstractifyingResultTypeName,
		);
	}
}
