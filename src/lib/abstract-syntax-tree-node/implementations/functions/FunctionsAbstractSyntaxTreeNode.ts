import type {FunctionsAbstractSyntaxTreeNodeChildren} from "./children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedFunctionCallingResult} from "../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {Functions} from "../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class FunctionsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *run(
		builtInFunctions: Functions,
	): Generator<SupportedFunctionCallingResult, void, void> {
		const mainFunction = this.children.mainFunction;
		if (mainFunction === null) {
			throw new Error("Main function not found.");
		} else {
			const combinedFunctions: Functions = {
				...builtInFunctions,
				...this.children.functions,
			};
			const executingResults = mainFunction.call(combinedFunctions, []);
			yield* executingResults;
		}
	}
}
