import type {FunctionHeaderAbstractSyntaxTreeNodeChildren} from "./children/FunctionHeaderAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {computeId} from "./computing-id/computeId.ts";
import {computeKnowns} from "./computing-knowns/computeKnowns.ts";
import {computeKnownsNames} from "./computing-knowns-names/computeKnownsNames.ts";
import {computeUnknownsNames} from "./computing-unknowns-names/computeUnknownsNames.ts";
import type {Variables} from "../../../variables/Variables.ts";
export class FunctionHeaderAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionHeaderAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: FunctionHeaderAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): FunctionHeaderAbstractSyntaxTreeNode {
		const id: string = computeId(children.segments);
		const knownsNames: readonly string[] = computeKnownsNames(
			children.segments,
		);
		const unknownsNames: readonly string[] = computeUnknownsNames(
			children.segments,
		);
		const node = new this(
			children,
			id,
			knownsNames,
			spanIndexes,
			unknownsNames,
		);
		return node;
	}
	private constructor(
		children: FunctionHeaderAbstractSyntaxTreeNodeChildren,
		id: string,
		knownsNames: readonly string[],
		spanIndexes: SpanIndexes,
		unknownsNames: readonly string[],
	) {
		super(children, spanIndexes);
		this.id = id;
		this.knownsNames = knownsNames;
		this.unknownsNames = unknownsNames;
	}
	public computeKnowns(knownsValues: readonly unknown[]): Variables {
		const knowns: Variables = computeKnowns(this.knownsNames, knownsValues);
		return knowns;
	}
	public readonly id: string;
	public readonly knownsNames: readonly string[];
	public readonly unknownsNames: readonly string[];
}
