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
	public *executeComplexly(
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
	public executeSimply(): boolean | null {
		const mainFunction = this.children.mainFunction;
		if (mainFunction === null) {
			return null;
		} else {
			const unknownsValueses = mainFunction.call(this.children.functions, []);
			for (const unknownsValues of unknownsValueses) {
				return true;
			}
			return false;
		}
	}
}
