import type {FunctionCallAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
export class FunctionCallAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionCallAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionCallAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public computeId(): string {
		const id = this.children.segments
			.map((segment) => {
				const segmentId = segment.computeId();
				return segmentId;
			})
			.join(" ");
		return id;
	}
	public *execute(
		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
		variables: {readonly [variableName: string]: unknown},
	): Generator<{readonly [variableName: string]: unknown}, void, void> {
		const id = this.computeId();
		const function_ = functions[id];
		if (function_ !== undefined) {
			const knownsNames = this.extractKnownsNames();
			const knownsValues: readonly unknown[] = knownsNames.map((name) => {
				if (name in variables) {
					return variables[name];
				}
				return undefined;
			});
			const unknownsNames = this.extractUnknownsNames();
			const unknownsValueses = function_.call(functions, knownsValues);
			for (const unknownsValues of unknownsValueses) {
				const unknowns: {readonly [name: string]: unknown} = Object.fromEntries(
					unknownsNames.map((name, index) => {
						return [name, unknownsValues[index]];
					}),
				);
				yield unknowns;
			}
		}
	}
	private extractKnownsNames(): readonly string[] {
		return this.children.segments
			.filter((segment) => {
				return (
					segment instanceof KnownFunctionCallSegmentAbstractSyntaxTreeNode
				);
			})
			.map((segment) => {
				const name = segment.getVariableName();
				return name;
			});
	}
	private extractUnknownsNames(): readonly string[] {
		return this.children.segments
			.filter((segment) => {
				return (
					segment instanceof UnknownFunctionCallSegmentAbstractSyntaxTreeNode
				);
			})
			.map((segment) => {
				const name = segment.getVariableName();
				return name;
			});
	}
}
