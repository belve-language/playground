import type {SuccessAbstractifyingResultData} from "./data/SuccessAbstractifyingResultData.ts";
import {successAbstractifyingResultTypeName} from "./type-name/successAbstractifyingResultTypeName.ts";
import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import {AbstractifyingResult} from "../../AbstractifyingResult.ts";
export class SuccessAbstractifyingResult<Data> extends AbstractifyingResult<
	SuccessAbstractifyingResultData<Data>,
	typeof successAbstractifyingResultTypeName
> {
	public constructor(abstractSyntaxTreeNode: AbstractSyntaxTreeNode<Data>) {
		super(
			{abstractSyntaxTreeNode: abstractSyntaxTreeNode},
			successAbstractifyingResultTypeName,
		);
	}
}
