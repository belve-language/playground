import type {BlockAbstractSyntaxTreeNodeChildren} from "./children/BlockAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {executeStatements} from "./executing-statements/executeStatements.ts";
import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
export class BlockAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<BlockAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
		variables: {readonly [variableName: string]: unknown},
		depth: number,
	): Generator<{readonly [variableName: string]: unknown}, void, void> {
		// console.log(`${"\t".repeat(depth)}{`);
		const unknownses = executeStatements(
			functions,
			variables,
			this.children,
			depth + 1,
		);
		yield* unknownses;
		// console.log(`${"\t".repeat(depth)}}`);
	}
}
