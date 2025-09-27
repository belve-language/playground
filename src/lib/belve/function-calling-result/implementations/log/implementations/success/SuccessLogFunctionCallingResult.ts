import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogFunctionCallingResult} from "../../LogFunctionCallingResult.ts";
import {successLogFunctionCallingResultActionTypeName} from "./action-type-name/successLogFunctionCallingResultActionTypeName.ts";
export class SuccessLogFunctionCallingResult extends LogFunctionCallingResult<
	typeof successLogFunctionCallingResultActionTypeName
> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
		unknowns: Variables,
	) {
		super(successLogFunctionCallingResultActionTypeName, availables, node);
		this.unknowns = unknowns;
	}
	public readonly unknowns: Variables;
}
