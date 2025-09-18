import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogStatementExecutingResult} from "../../LogStatementExecutingResult.ts";
import {successLogStatementExecutingResultActionTypeName} from "./action-type-name/successLogStatementExecutingResultActionTypeName.ts";
export class SuccessLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof successLogStatementExecutingResultActionTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		unknowns: Variables,
		variables: Variables,
	) {
		super(successLogStatementExecutingResultActionTypeName, node, variables);
		this.unknowns = unknowns;
	}
	public readonly unknowns: Variables;
}
