import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogStatementExecutingResult} from "../../LogStatementExecutingResult.ts";
import {failureLogStatementExecutingResultActionTypeName} from "./action-type-name/failureLogStatementExecutingResultActionTypeName.ts";
export class FailureLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof failureLogStatementExecutingResultActionTypeName
> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(failureLogStatementExecutingResultActionTypeName, availables, node);
	}
}
