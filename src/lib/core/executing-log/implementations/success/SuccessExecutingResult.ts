import type {SuccessExecutingResultData} from "./data/SuccessExecutingResultData.ts";
import {successExecutingResultTypeName} from "./type-name/successExecutingResultTypeName.ts";
import type {SupportedAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {ExecutingResult} from "../../ExecutingResult.ts";
export class SuccessExecutingResult extends ExecutingResult<
	SuccessExecutingResultData,
	typeof successExecutingResultTypeName
> {
	public constructor(
		node: SupportedAbstractSyntaxTreeNode,
		variables: Variables,
	) {
		super({node: node, variables: variables}, successExecutingResultTypeName);
	}
}
