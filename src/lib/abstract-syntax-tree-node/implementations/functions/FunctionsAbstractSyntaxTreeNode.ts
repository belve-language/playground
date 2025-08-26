import type {FunctionsAbstractSyntaxTreeNodeChildren} from "./children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class FunctionsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public execute(): boolean | null {
		const mainFunction = this.children.mainFunction;
		if (mainFunction === null) {
			return null;
		} else {
			const unknownsValueses = mainFunction.call(
				this.children.functions,
				[],
				0,
			);
			for (const unknownsValues of unknownsValueses) {
				return true;
			}
			return false;
		}
	}
}
