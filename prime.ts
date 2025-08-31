/*
is (dividend) not divisible by (divisor) {
	(dividend) % (divisor) != (0),
}

none of the integers between (start) and (end) divide (dividend) {
	(start) > (end).
	(start) <= (end),
	is (dividend) not divisible by (start),
	(start) + (1) = [nextstart],
	none of the integers between (nextstart) and (end) divide (dividend),
}


is (number) prime {
	(number) > (1),
	root of degree (2) of (number) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number),
}
*/
import {BlockAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/block/BlockAbstractSyntaxTreeNode.ts";
import {FunctionAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function/FunctionAbstractSyntaxTreeNode.ts";
import {FunctionCallAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {FunctionHeaderAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {FunctionsAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "./src/lib/abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {SpanIndexes} from "./src/lib/span-indexes/SpanIndexes.ts";
const spanIndexes: SpanIndexes = {ending: 0, starting: 0};
function createFunctions(
	numberToCheck: number,
): FunctionsAbstractSyntaxTreeNode {
	const functions = new FunctionsAbstractSyntaxTreeNode(
		{
			functions: Object.fromEntries(
				[
					new FunctionAbstractSyntaxTreeNode(
						{
							body: new BlockAbstractSyntaxTreeNode(
								{
									finalStatement: new FunctionCallAbstractSyntaxTreeNode(
										{
											segments: [
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "number"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "%"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "divisor"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "!="},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "0"},
													spanIndexes,
												),
											],
										},
										spanIndexes,
									),
									initialOperatedStatements: [],
								},
								spanIndexes,
							),
							header: new FunctionHeaderAbstractSyntaxTreeNode(
								{
									segments: [
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "is"},
											spanIndexes,
										),
										new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{name: "number"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "not"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "divisible"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "by"},
											spanIndexes,
										),
										new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{name: "divisor"},
											spanIndexes,
										),
									],
								},
								spanIndexes,
							),
						},
						spanIndexes,
					),
					new FunctionAbstractSyntaxTreeNode(
						{
							body: new BlockAbstractSyntaxTreeNode(
								{
									finalStatement: new FunctionCallAbstractSyntaxTreeNode(
										{
											segments: [
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "none"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "of"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "the"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "integers"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "between"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "nextstart"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "and"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "end"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "divide"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "dividend"},
													spanIndexes,
												),
											],
										},
										spanIndexes,
									),
									initialOperatedStatements: [
										new OperatedStatementAbstractSyntaxTreeNode(
											{
												operator: ".",
												statement: new FunctionCallAbstractSyntaxTreeNode(
													{
														segments: [
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "start"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: ">"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "end"},
																spanIndexes,
															),
														],
													},
													spanIndexes,
												),
											},
											spanIndexes,
										),
										new OperatedStatementAbstractSyntaxTreeNode(
											{
												operator: ",",
												statement: new FunctionCallAbstractSyntaxTreeNode(
													{
														segments: [
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "start"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "<="},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "end"},
																spanIndexes,
															),
														],
													},
													spanIndexes,
												),
											},
											spanIndexes,
										),
										new OperatedStatementAbstractSyntaxTreeNode(
											{
												operator: ",",
												statement: new FunctionCallAbstractSyntaxTreeNode(
													{
														segments: [
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "is"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "dividend"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "not"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "divisible"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "by"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "start"},
																spanIndexes,
															),
														],
													},
													spanIndexes,
												),
											},
											spanIndexes,
										),
										new OperatedStatementAbstractSyntaxTreeNode(
											{
												operator: ",",
												statement: new FunctionCallAbstractSyntaxTreeNode(
													{
														segments: [
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "start"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "+"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "1"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "="},
																spanIndexes,
															),
															new UnknownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "nextstart"},
																spanIndexes,
															),
														],
													},
													spanIndexes,
												),
											},
											spanIndexes,
										),
									],
								},
								spanIndexes,
							),
							header: new FunctionHeaderAbstractSyntaxTreeNode(
								{
									segments: [
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "none"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "of"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "the"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "integers"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "between"},
											spanIndexes,
										),
										new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{name: "start"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "and"},
											spanIndexes,
										),
										new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{name: "end"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "divide"},
											spanIndexes,
										),
										new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{name: "dividend"},
											spanIndexes,
										),
									],
								},
								spanIndexes,
							),
						},
						spanIndexes,
					),
					new FunctionAbstractSyntaxTreeNode(
						{
							body: new BlockAbstractSyntaxTreeNode(
								{
									finalStatement: new FunctionCallAbstractSyntaxTreeNode(
										{
											segments: [
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "none"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "of"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "the"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "integers"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "between"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "2"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "and"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "maximaldivisortocheck"},
													spanIndexes,
												),
												new WordFunctionCallSegmentAbstractSyntaxTreeNode(
													{word: "divide"},
													spanIndexes,
												),
												new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
													{name: "number"},
													spanIndexes,
												),
											],
										},
										spanIndexes,
									),
									initialOperatedStatements: [
										new OperatedStatementAbstractSyntaxTreeNode(
											{
												operator: ",",
												statement: new FunctionCallAbstractSyntaxTreeNode(
													{
														segments: [
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "number"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: ">"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "1"},
																spanIndexes,
															),
														],
													},
													spanIndexes,
												),
											},
											spanIndexes,
										),
										new OperatedStatementAbstractSyntaxTreeNode(
											{
												operator: ",",
												statement: new FunctionCallAbstractSyntaxTreeNode(
													{
														segments: [
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "root"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "of"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "degree"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "2"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "of"},
																spanIndexes,
															),
															new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "number"},
																spanIndexes,
															),
															new WordFunctionCallSegmentAbstractSyntaxTreeNode(
																{word: "="},
																spanIndexes,
															),
															new UnknownFunctionCallSegmentAbstractSyntaxTreeNode(
																{name: "maximaldivisortocheck"},
																spanIndexes,
															),
														],
													},
													spanIndexes,
												),
											},
											spanIndexes,
										),
									],
								},
								spanIndexes,
							),
							header: new FunctionHeaderAbstractSyntaxTreeNode(
								{
									segments: [
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "is"},
											spanIndexes,
										),
										new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{name: "number"},
											spanIndexes,
										),
										new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
											{word: "prime"},
											spanIndexes,
										),
									],
								},
								spanIndexes,
							),
						},
						spanIndexes,
					),
				].map((function_) => {
					const id = function_.computeId();
					return [id, function_];
				}),
			),
			mainFunction: new FunctionAbstractSyntaxTreeNode(
				{
					body: new BlockAbstractSyntaxTreeNode(
						{
							finalStatement: new FunctionCallAbstractSyntaxTreeNode(
								{
									segments: [
										new WordFunctionCallSegmentAbstractSyntaxTreeNode(
											{word: "is"},
											spanIndexes,
										),
										new KnownFunctionCallSegmentAbstractSyntaxTreeNode(
											{name: numberToCheck.toString(10)},
											spanIndexes,
										),
										new WordFunctionCallSegmentAbstractSyntaxTreeNode(
											{word: "prime"},
											spanIndexes,
										),
									],
								},
								spanIndexes,
							),
							initialOperatedStatements: [],
						},
						spanIndexes,
					),
					header: null,
				},
				spanIndexes,
			),
		},
		spanIndexes,
	);
	return functions;
}
const sourceCodeAsString = `
is (dividend) not divisible by (divisor) {
	(dividend) % (divisor) != (0)
}
is (number) prime {
	(number) > (1),
	root of degree (2) of (number) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number)
}
none of the integers between (start) and (end) divide (dividend) {
	(start) > (end).
	(start) <= (end),
	is (dividend) not divisible by (start),
	(start) + (1) = [nextstart],
	none of the integers between (nextstart) and (end) divide (dividend)
}
{
	is (37) prime
}
`;
for (const numberToCheck of [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
	22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
]) {
	const functions = createFunctions(numberToCheck);
	console.log(numberToCheck, functions.execute());
}
