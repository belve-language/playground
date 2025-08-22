import type {FunctionAbstractSyntaxTreeNodeChildren} from "./children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
export class FunctionAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *call(
		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
		knownsValues: readonly unknown[],
	): Generator<readonly unknown[], void, void> {
		const knowns: {readonly [name: string]: unknown} =
			this.children.header === null ?
				{}
			:	Object.fromEntries(
					this.children.header.extractKnownsNames().map((name, index) => {
						return [name, knownsValues[index]];
					}),
				);
		const unknownsNames: readonly string[] =
			this.children.header === null ?
				[]
			:	this.children.header.extractUnknownsNames();
		const unknownses = this.children.body.execute(functions, knowns);
		for (const unknowns of unknownses) {
			const unknownsValues: readonly unknown[] = unknownsNames.map((name) => {
				return unknowns[name];
			});
			yield unknownsValues;
		}
	}
	public computeId(): string {
		if (this.children.header === null) {
			return "";
		} else {
			const id = this.children.header.computeId();
			return id;
		}
	}
}
