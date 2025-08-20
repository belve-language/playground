import type {BlockAbstractSyntaxTreeNodeData} from "./data/BlockAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {executeStatements} from "./executing-statements/executeStatements.ts";
import type {FunctionAbstractSyntaxTreeNodeDataFunctions} from "../functions/data/functions/FunctionAbstractSyntaxTreeNodeDataFunctions.ts";
export class BlockAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<BlockAbstractSyntaxTreeNodeData> {
	public constructor(
		data: BlockAbstractSyntaxTreeNodeData,
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
		const unknowns_ = executeStatements(
			functions,
			knownsStack,
			this.data.statements,
		);
		return unknowns_;
	}
}
