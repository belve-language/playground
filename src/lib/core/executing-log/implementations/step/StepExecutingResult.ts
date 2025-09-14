import type {StepExecutingResultData} from "./data/StepExecutingResultData.ts";
import {stepExecutingResultTypeName} from "./type-name/stepExecutingResultTypeName.ts";
import type {SupportedAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {ExecutingResult} from "../../ExecutingResult.ts";
export class StepExecutingResult extends ExecutingResult<
	StepExecutingResultData,
	typeof stepExecutingResultTypeName
> {
	public constructor(
		node: SupportedAbstractSyntaxTreeNode,
		variables: Variables,
	) {
		super({node: node, variables: variables}, stepExecutingResultTypeName);
	}
}
