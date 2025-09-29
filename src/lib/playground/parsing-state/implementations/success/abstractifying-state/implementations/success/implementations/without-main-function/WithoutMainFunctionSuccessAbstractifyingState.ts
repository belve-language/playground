import type {WithoutMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../../../../../../../belve/abstract-syntax-tree-node/implementations/functions/implementations/without-main-function/WithoutMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import {SuccessAbstractifyingState} from "../../SuccessAbstractifyingState.ts";
import {withoutMainFunctionSuccessAbstractifyingStateSubTypeName} from "./sub-type-name/withoutMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
export class WithoutMainFunctionSuccessAbstractifyingState extends SuccessAbstractifyingState<
	typeof withoutMainFunctionSuccessAbstractifyingStateSubTypeName
> {
	public constructor(
		functions: null | WithoutMainFunctionFunctionsAbstractSyntaxTreeNode,
	) {
		super(withoutMainFunctionSuccessAbstractifyingStateSubTypeName);
		// TODO move to parent class
		this.functions = functions;
	}
	public readonly functions: null | WithoutMainFunctionFunctionsAbstractSyntaxTreeNode;
}
