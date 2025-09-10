import type {FunctionsAbstractSyntaxTreeNodeChildren} from "./children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedFunctionCallingResult} from "../../../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {Functions} from "../../../functions/Functions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../function/FunctionAbstractSyntaxTreeNode.ts";
import {NonMainFunctionAbstractSyntaxTreeNode} from "../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../statements/StatementsAbstractSyntaxTreeNode.ts";
export class FunctionsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *mutate(
		builtInFunctions: Functions,
	): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
		yield* pickBfslyFromInfiniteGenerators(
			this.mutateByAddingFunction(builtInFunctions),
			this.mutateByMutatingFunction(builtInFunctions),
		);
	}
	private *mutateByAddingFunction(
		builtInFunctions: Functions,
	): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
		const newFunctions = generateNewFunctions(
			builtInFunctions,
			this.children.functions,
		);
		for (const newFunction of newFunctions) {
			const newFunctions_ = new FunctionsAbstractSyntaxTreeNode(
				{
					functions: {
						...this.children.functions,
						[newFunction.id]: newFunction,
					},
					mainFunction: this.children.mainFunction,
				},
				new SpanIndexes(0, 0),
			);
			yield newFunctions_;
		}
	}
	public *mutateByMutatingFunction(
		builtInFunctions: Functions,
	): Generator<FunctionsAbstractSyntaxTreeNode, void, void> {
		yield* pickBfslyFromInfiniteGenerators(
			...Object.values(this.children.functions).map((function_) => {
				const combinedFunctions: Functions = {
					...builtInFunctions,
					...this.children.functions,
				};
				const newFunctions = function_.mutate(combinedFunctions);
				const children = this.children;
				return (function* () {
					for (const newFunction of newFunctions) {
						const newFunctions_ = new FunctionsAbstractSyntaxTreeNode(
							{
								functions: {
									...children.functions,
									[newFunction.id]: newFunction,
								},
								mainFunction: children.mainFunction,
							},
							new SpanIndexes(0, 0),
						);
						yield newFunctions_;
					}
				})();
			}),
		);
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
function* generateNewFunctions(
	builtInFunctions: Functions,
	existingFunctions: Functions,
): Generator<NonMainFunctionAbstractSyntaxTreeNode, void, void> {
	const functionHeaders = generateNewFunctionHeaders(
		builtInFunctions,
		existingFunctions,
	);
	for (const functionHeader of functionHeaders) {
		const function_ = NonMainFunctionAbstractSyntaxTreeNode.create(
			{
				body: new BlockStatementAbstractSyntaxTreeNode(
					{
						statements: new StatementsAbstractSyntaxTreeNode(
							{
								finalStatement:
									FunctionCallStatementAbstractSyntaxTreeNode.create(
										{
											segments: [
												WordFunctionCallSegmentAbstractSyntaxTreeNode.create(
													{word: "?"},
													new SpanIndexes(0, 0),
												),
											],
										},
										new SpanIndexes(0, 0),
									),
								initialOperatedStatements: [],
							},
							new SpanIndexes(0, 0),
						),
					},
					new SpanIndexes(0, 0),
				),
				header: functionHeader,
			},
			new SpanIndexes(0, 0),
		);
		yield function_;
	}
}
function* generateNewFunctionHeaders(
	builtInFunctions: Functions,
	existingFunctions: Functions,
): Generator<FunctionHeaderAbstractSyntaxTreeNode, void, void> {
	const segmentses = generateNewFunctionHeaderSegmentses(1);
	for (const segments of segmentses) {
		const functionHeader = FunctionHeaderAbstractSyntaxTreeNode.create(
			{segments: segments},
			new SpanIndexes(0, 0),
		);
		if (
			!(functionHeader.id in existingFunctions)
			&& !(functionHeader.id in builtInFunctions)
		) {
			yield functionHeader;
		}
	}
}
function* generateNewFunctionHeaderSegmentses(
	number: number,
): Generator<
	readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	]
> {
	const firstSegments = [...generateNewFunctionHeaderSegments(number)];
	yield* firstSegments.map((firstSegment) => {
		return [firstSegment] as const;
	});
	yield* pickBfslyFromInfiniteGenerators(
		...firstSegments.map((firstSegment) => {
			const restSegmentses = generateNewFunctionHeaderSegmentses(number + 1);
			return (function* () {
				for (const restSegments of restSegmentses) {
					yield [firstSegment, ...restSegments] as const;
				}
			})();
		}),
	);
}
function* generateNewFunctionHeaderSegments(
	number: number,
): Generator<SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode, void, void> {
	yield KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
		{name: "k".repeat(number)},
		new SpanIndexes(0, 0),
	);
	yield UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
		{name: "u".repeat(number)},
		new SpanIndexes(0, 0),
	);
	yield WordFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
		{word: "w"},
		new SpanIndexes(0, 0),
	);
}
export function* pickBfslyFromInfiniteGenerators<Value>(
	...generators: Generator<Value, void, void>[]
): Generator<Value, void, void> {
	for (;;) {
		let isDone = true;
		for (const generator of generators) {
			const iterationResult = generator.next();
			if (iterationResult.done) {
				continue;
			} else {
				yield iterationResult.value;
				isDone = false;
			}
		}
		if (isDone) {
			break;
		}
	}
}
