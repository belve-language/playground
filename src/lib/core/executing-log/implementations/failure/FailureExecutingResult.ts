import type {FailureExecutingResultData} from "./data/FailureExecutingResultData.ts";
import {failureExecutingResultTypeName} from "./type-name/failureExecutingResultTypeName.ts";
import type {SupportedAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {ExecutingResult} from "../../ExecutingResult.ts";
export class FailureExecutingResult extends ExecutingResult<
	FailureExecutingResultData,
	typeof failureExecutingResultTypeName
> {
	public constructor(
		node: SupportedAbstractSyntaxTreeNode,
		variables: Variables,
	) {
		super({node: node, variables: variables}, failureExecutingResultTypeName);
	}
}
