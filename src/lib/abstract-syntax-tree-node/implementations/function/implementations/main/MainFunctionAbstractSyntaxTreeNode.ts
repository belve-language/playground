import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {FunctionsAbstractSyntaxTreeNode} from "../../../functions/FunctionsAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
export class MainFunctionAbstractSyntaxTreeNode extends FunctionAbstractSyntaxTreeNode<null> {
	public constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<null>,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override computeUnknownsValues(
		variables: Variables,
	): readonly unknown[] {
		const unknownsValues: readonly unknown[] = [];
		return unknownsValues;
	}
	public override createFunctions(): FunctionsAbstractSyntaxTreeNode {
		const functions = new FunctionsAbstractSyntaxTreeNode(
			{functions: {}, mainFunction: this},
			this.spanIndexes,
		);
		return functions;
	}
	public override putIntoFunctions(
		functions: FunctionsAbstractSyntaxTreeNode,
	): FunctionsAbstractSyntaxTreeNode {
		if (functions.children.mainFunction !== null) {
			// TODO
			throw new Error(`Duplicate main function`);
		} else {
			const newFunctions = new FunctionsAbstractSyntaxTreeNode(
				{...functions.children, mainFunction: this},
				new SpanIndexes(this.spanIndexes.from, functions.spanIndexes.until),
			);
			return newFunctions;
		}
	}
}
