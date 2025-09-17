import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../FunctionsAbstractSyntaxTreeNode.ts";
import type {FunctionsAbstractSyntaxTreeNodeChildren} from "../../children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
export class WithoutMainFunctionFunctionsAbstractSyntaxTreeNode extends FunctionsAbstractSyntaxTreeNode<null> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren<null>,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override *run(
		builtInFunctions: NonMainFunctions,
	): Generator<never, void, void> {}
}
