import type {FunctionCallAbstractSyntaxTreeNodeData} from "./data/FunctionCallAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeDataFunctions} from "../functions/data/functions/FunctionAbstractSyntaxTreeNodeDataFunctions.ts";
export class FunctionCallAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionCallAbstractSyntaxTreeNodeData> {
	public constructor(
		data: FunctionCallAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public execute(
		functions: FunctionAbstractSyntaxTreeNodeDataFunctions,
		knownsStack: readonly [
			{readonly [variableName: string]: unknown},
			...(readonly {readonly [variableName: string]: unknown}[]),
		],
	): null | {readonly [variableName: string]: unknown} {
		return unknowns;
	}
}
