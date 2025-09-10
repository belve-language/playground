import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
export abstract class StatementAbstractSyntaxTreeNode<
	Children,
> extends AbstractSyntaxTreeNode<Children> {
	public constructor(children: Children, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
	}
	public abstract execute(
		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
		variables: {readonly [variableName: string]: unknown},
	): Generator<SupportedStatementExecutingResult, void, void>;
}
