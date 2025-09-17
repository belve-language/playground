import {NonMainFunctionAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import {KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/known/KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/unknown/UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {WordFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/word/WordFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {FunctionHeaderAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/statements/StatementsAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../abstract-syntax-tree-node/implementations/statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
import {combineDependentGeneratorsProducting} from "../combining-dependent-generators-producting/combineDependentGeneratorsProducting.ts";
import {combineIndependentGeneratorsInterleaving} from "../combining-independent-generators-interleaving/combineIndependentGeneratorsInterleaving.ts";
import {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
export function* generateNewFunction(
	code: string,
	depth: number,
	functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
): Generator<NonMainFunctionAbstractSyntaxTreeNode, void, void> {
	// console.log(`${code}|generateNewFunction`, depth);
	for (const generatedNewFunction of combineDependentGeneratorsProducting<
		FunctionHeaderAbstractSyntaxTreeNode,
		NonMainFunctionAbstractSyntaxTreeNode
	>(
		generateNewFunctionHeader(functionsHeaders),
		function* (generatedNewFunctionHeader) {
			const combinedFunctionsHeaders: readonly [
				FunctionHeaderAbstractSyntaxTreeNode,
				...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
			] = [generatedNewFunctionHeader, ...functionsHeaders];
			for (const generatedNewBody of generateNewFunctionBody(
				`${code}a`,
				depth + 1,
				combinedFunctionsHeaders,
				generatedNewFunctionHeader,
				generatedNewFunctionHeader.unknownsNames,
				generatedNewFunctionHeader.knownsNames,
			)) {
				const generatedNewFunction =
					NonMainFunctionAbstractSyntaxTreeNode.create(
						{body: generatedNewBody, header: generatedNewFunctionHeader},
						new SpanIndexes(0, 0),
					);
				yield generatedNewFunction;
			}
		},
	)) {
		yield generatedNewFunction;
	}
}
function* generateNewFunctionHeader(
	functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
): Generator<FunctionHeaderAbstractSyntaxTreeNode, void, void> {
	for (const generatedNewFunctionHeaderSegments of generateNewFunctionHeaderSegments(
		1,
	)) {
		const generatedNewFunctionHeader =
			FunctionHeaderAbstractSyntaxTreeNode.create(
				{segments: generatedNewFunctionHeaderSegments},
				new SpanIndexes(0, 0),
			);
		if (
			!functionsHeaders.some((existingFunctionHeader) => {
				return existingFunctionHeader.id === generatedNewFunctionHeader.id;
			})
		) {
			yield generatedNewFunctionHeader;
		}
	}
}
function* generateNewFunctionHeaderSegments(
	depth: number,
): Generator<
	readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	]
> {
	for (const generatedNewFunctionHeaderSegments of combineIndependentGeneratorsInterleaving<
		readonly [
			SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
			...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
		]
	>(
		generateNewStartingWithKnownSegmentFunctionHeaderSegments(depth),
		generateNewStartingWithUnknownSegmentFunctionHeaderSegments(depth),
		generateNewStartingWithWordSegmentFunctionHeaderSegments(depth),
	)) {
		yield generatedNewFunctionHeaderSegments;
	}
}
function* generateNewStartingWithKnownSegmentFunctionHeaderSegments(
	depth: number,
): Generator<
	readonly [
		KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	]
> {
	for (const generatedNewStartingWithKnownSegmentFunctionHeaderSegments of combineDependentGeneratorsProducting(
		generateNewKnownFunctionHeaderSegment(depth),
		function* (generatedNewKnownFunctionHeaderSegment) {
			const generatedNewStartingWithKnownSegmentFunctionHeaderSegments: readonly [
				KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
			] = [generatedNewKnownFunctionHeaderSegment];
			yield generatedNewStartingWithKnownSegmentFunctionHeaderSegments;
			for (const deeperGeneratedNewStartingWithKnownSegmentFunctionHeaderSegmentsRest of generateNewFunctionHeaderSegments(
				depth + 1,
			)) {
				const deeperGeneratedNewStartingWithKnownSegmentFunctionHeaderSegments: readonly [
					KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				] = [
					generatedNewKnownFunctionHeaderSegment,
					...deeperGeneratedNewStartingWithKnownSegmentFunctionHeaderSegmentsRest,
				];
				yield deeperGeneratedNewStartingWithKnownSegmentFunctionHeaderSegments;
			}
		},
	)) {
		yield generatedNewStartingWithKnownSegmentFunctionHeaderSegments;
	}
}
function* generateNewWordFunctionHeaderSegment(): Generator<
	WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
	void,
	void
> {
	for (const generatedNewWord of generateNewWord()) {
		const generatedNewWordFunctionHeaderSegment =
			new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
				{word: generatedNewWord},
				new SpanIndexes(0, 0),
			);
		yield generatedNewWordFunctionHeaderSegment;
	}
}
function* generateNewWord(): Generator<string, void, void> {
	const generatedNewWord = "w";
	yield generatedNewWord;
}
function* generateNewStartingWithUnknownSegmentFunctionHeaderSegments(
	depth: number,
): Generator<
	readonly [
		UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	]
> {
	for (const generatedNewStartingWithUnknownSegmentFunctionHeaderSegments of combineDependentGeneratorsProducting(
		generateNewUnknownFunctionHeaderSegment(depth),
		function* (generatedNewUnknownFunctionHeaderSegment) {
			const generatedNewStartingWithUnknownSegmentFunctionHeaderSegments: readonly [
				UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
			] = [generatedNewUnknownFunctionHeaderSegment];
			yield generatedNewStartingWithUnknownSegmentFunctionHeaderSegments;
			for (const deeperGeneratedNewStartingWithUnknownSegmentFunctionHeaderSegmentsRest of generateNewFunctionHeaderSegments(
				depth + 1,
			)) {
				const deeperGeneratedNewStartingWithUnknownSegmentFunctionHeaderSegments: readonly [
					UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				] = [
					generatedNewUnknownFunctionHeaderSegment,
					...deeperGeneratedNewStartingWithUnknownSegmentFunctionHeaderSegmentsRest,
				];
				yield deeperGeneratedNewStartingWithUnknownSegmentFunctionHeaderSegments;
			}
		},
	)) {
		yield generatedNewStartingWithUnknownSegmentFunctionHeaderSegments;
	}
}
function* generateNewUnknownFunctionHeaderSegment(
	depth: number,
): Generator<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode, void, void> {
	for (const generatedNewUnknownName of generateNewUnknownName(depth)) {
		const generatedNewUnknownFunctionHeaderSegment =
			new UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode(
				{name: generatedNewUnknownName},
				new SpanIndexes(0, 0),
			);
		yield generatedNewUnknownFunctionHeaderSegment;
	}
}
function* generateNewUnknownName(depth: number): Generator<string, void, void> {
	const generatedNewUnknownName = "u".repeat(depth);
	yield generatedNewUnknownName;
}
function* generateNewKnownFunctionHeaderSegment(
	depth: number,
): Generator<KnownFunctionHeaderSegmentAbstractSyntaxTreeNode, void, void> {
	for (const generatedNewKnownName of generateNewKnownName(depth)) {
		const generatedNewKnownFunctionHeaderSegment =
			new KnownFunctionHeaderSegmentAbstractSyntaxTreeNode(
				{name: generatedNewKnownName},
				new SpanIndexes(0, 0),
			);
		yield generatedNewKnownFunctionHeaderSegment;
	}
}
function* generateNewKnownName(depth: number): Generator<string, void, void> {
	const generatedNewKnownName = "k".repeat(depth);
	yield generatedNewKnownName;
}
function* generateNewStartingWithWordSegmentFunctionHeaderSegments(
	depth: number,
): Generator<
	readonly [
		WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	]
> {
	for (const generatedNewStartingWithWordSegmentFunctionHeaderSegments of combineDependentGeneratorsProducting(
		generateNewWordFunctionHeaderSegment(),
		function* (generatedNewWordFunctionHeaderSegment) {
			const generatedNewStartingWithWordSegmentFunctionHeaderSegments: readonly [
				WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
			] = [generatedNewWordFunctionHeaderSegment];
			yield generatedNewStartingWithWordSegmentFunctionHeaderSegments;
			for (const deeperGeneratedNewStartingWithWordSegmentFunctionHeaderSegmentsRest of generateNewFunctionHeaderSegments(
				depth + 1,
			)) {
				const deeperGeneratedNewStartingWithWordSegmentFunctionHeaderSegments: readonly [
					WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				] = [
					generatedNewWordFunctionHeaderSegment,
					...deeperGeneratedNewStartingWithWordSegmentFunctionHeaderSegmentsRest,
				];
				yield deeperGeneratedNewStartingWithWordSegmentFunctionHeaderSegments;
			}
		},
	)) {
		yield generatedNewStartingWithWordSegmentFunctionHeaderSegments;
	}
}
function* generateNewFunctionBody(
	code: string,
	depth: number,
	functionsHeaders: readonly [
		FunctionHeaderAbstractSyntaxTreeNode,
		...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
	],
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	unknownsNames: readonly string[],
	userVariableNames: readonly string[],
): Generator<BlockStatementAbstractSyntaxTreeNode, void, void> {
	// console.log(
	// 	`${code}|generateNewFunctionBody`,
	// 	depth,
	// 	unknownsNames.join(","),
	// 	userVariableNames.join(","),
	// );
	for (const generatedNewBlockStatement of generateNewBlockStatement(
		`${code}b`,
		depth + 1,
		functionsHeaders,
		thisFunctionHeader,
		unknownsNames,
		userVariableNames,
	)) {
		const generatedNewFunctionBody = generatedNewBlockStatement;
		yield generatedNewFunctionBody;
	}
}
function* generateNewBlockStatement(
	code: string,
	depth: number,
	functionsHeaders: readonly [
		FunctionHeaderAbstractSyntaxTreeNode,
		...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
	],
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	unknownsNames: readonly string[],
	userVariablesNames: readonly string[],
): Generator<BlockStatementAbstractSyntaxTreeNode, void, void> {
	// console.log(`${code}|generateNewBlockStatement`, depth);
	// for (const generatedNewStatements of generateNewStatements(
	// 	`${code}c`,
	// 	depth + 1,
	// 	functionsHeaders,
	// 	thisFunctionHeader,
	// 	unknownsNames,
	// 	userVariablesNames,
	// )) {
	// 	const generatedNewBlockStatement = new BlockStatementAbstractSyntaxTreeNode(
	// 		{statements: generatedNewStatements},
	// 		new SpanIndexes(0, 0),
	// 	);
	// 	yield generatedNewBlockStatement;
	// }
}
function* generateNewStatements(
	code: string,
	depth: number,
	functionsHeaders: readonly [
		FunctionHeaderAbstractSyntaxTreeNode,
		...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
	],
	remainingUnknownsNames: ReadonlySet<string>,
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	userVariablesNames: readonly string[],
): Generator<SupportedStatementsAbstractSyntaxTreeNode, void, void> {
	// console.log(`${code}|generateNewStatement`, depth);
	// TODO: Initials as well
	// for (const generatedNewStatement of generateNewStatement(
	// 	`${code}d`,
	// 	depth + 1,
	// 	functionsHeaders,
	// 	thisFunctionHeader,
	// 	unknownsNames,
	// 	userVariablesNames,
	// )) {
	// 	// if (generatedNewStatement instanceof BlockStatementAbstractSyntaxTreeNode) {
	// 	// 	continue;
	// 	// }
	// 	const generatedNewStatements = new StatementsAbstractSyntaxTreeNode(
	// 		{finalStatement: generatedNewStatement, initialOperatedStatements: []},
	// 		new SpanIndexes(0, 0),
	// 	);
	// 	yield generatedNewStatements;
	// }
	// with initials:
	// for (const generatedNewStatements of combineDependentGeneratorsProducting<
	// 	SupportedStatementAbstractSyntaxTreeNode,
	// 	StatementsAbstractSyntaxTreeNode
	// >(
	// 	generateNewFinalStatement(
	// 		`${code}d`,
	// 		depth + 1,
	// 		functionsHeaders,
	// 		thisFunctionHeader,
	// 		remainingUnknownsNames,
	// 		userVariablesNames,
	// 	),
	// 	function* (generatedNewStatement) {
	// 		if (remainingUnknownsNamesAfterNewStatement.size < 0) {
	// 		const generatedNewStatements = new StatementsAbstractSyntaxTreeNode(
	// 			{finalStatement: generatedNewStatement, initialOperatedStatements: []},
	// 			new SpanIndexes(0, 0),
	// 		);
	// 		yield generatedNewStatements;
	// 		// for (const deeperGeneratedNewStatementsRest of generateNewStatements(
	// 	},
	// )) {
	// 	yield generatedNewStatements;
	// }
}
function* generateNewStatement(
	code: string,
	depth: number,
	functionsHeaders: readonly [
		FunctionHeaderAbstractSyntaxTreeNode,
		...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
	],
	remainingUnknownsNames: ReadonlySet<string>,
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	userVariablesNames: readonly string[],
): Generator<SupportedStatementAbstractSyntaxTreeNode, void, void> {
	// console.log(`${code}|generateNewStatement`, depth);
	// for (const generatedNewStatement of combineIndependentGeneratorsInterleaving<SupportedStatementAbstractSyntaxTreeNode>(
	// 	generateNewFunctionCallStatementFromFunctionHeaders(
	// 		`${code}e`,
	// 		depth + 1,
	// 		functionsHeaders,
	// 		thisFunctionHeader,
	// 		unknownsNames,
	// 		userVariablesNames,
	// 	),
	// 	// (function* () {})(),
	// 	generateNewBlockStatement(
	// 		`${code}f`,
	// 		depth + 1,
	// 		functionsHeaders,
	// 		thisFunctionHeader,
	// 		unknownsNames,
	// 		userVariablesNames,
	// 	),
	// )) {
	// 	yield generatedNewStatement;
	// }
}
function* generateNewFinalStatement(
	code: string,
	depth: number,
	functionsHeaders: readonly [
		FunctionHeaderAbstractSyntaxTreeNode,
		...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
	],
	remainingUnknownsNames: ReadonlySet<string>,
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	userVariablesNames: readonly string[],
): Generator<SupportedStatementAbstractSyntaxTreeNode, void, void> {
	// it MUST use all the unknowns
	// console.log(`${code}|generateNewFinalStatement`, depth);
}
function* generateNewFunctionCallStatementFromFunctionHeaders(
	code: string,
	depth: number,
	functionsHeaders: readonly [
		FunctionHeaderAbstractSyntaxTreeNode,
		...(readonly FunctionHeaderAbstractSyntaxTreeNode[]),
	],
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	unknownsNames: readonly string[],
	userVariablesNames: readonly string[],
): Generator<FunctionCallStatementAbstractSyntaxTreeNode, void, void> {
	// console.log(
	// 	`${code}|generateNewFunctionCallStatementFromFunctionHeaders`,
	// 	depth,
	// 	thisFunctionHeader.children.segments
	// 		.map((segment) => segment.stringify())
	// 		.join(","),
	// 	unknownsNames.join(","),
	// 	userVariablesNames.join(","),
	// );
	for (const generatedNewFunctionCallStatement of combineIndependentGeneratorsInterleaving<FunctionCallStatementAbstractSyntaxTreeNode>(
		...functionsHeaders.map((functionHeader) => {
			return generateNewFunctionCallStatementFromFunctionHeader(
				`${code}g`,
				depth + 1,
				functionHeader,
				thisFunctionHeader,
				unknownsNames,
				userVariablesNames,
			);
		}),
	)) {
		yield generatedNewFunctionCallStatement;
	}
}
function* generateNewFunctionCallStatementFromFunctionHeader(
	code: string,
	depth: number,
	functionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	thisFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode,
	unknownsNames: readonly string[],
	userVariablesNames: readonly string[], // TODO CHANGE TO SET
): Generator<FunctionCallStatementAbstractSyntaxTreeNode, void, void> {
	// console.log(
	// 	`${code}|generateNewFunctionCallStatementFromFunctionHeader`,
	// 	depth,
	// 	JSON.stringify(
	// 		functionHeader.children.segments
	// 			.map((segment) => segment.stringify())
	// 			.join(","),
	// 	),
	// 	JSON.stringify(
	// 		thisFunctionHeader.children.segments
	// 			.map((segment) => segment.stringify())
	// 			.join(","),
	// 	),
	// 	JSON.stringify(unknownsNames),
	// 	JSON.stringify(userVariablesNames),
	// );
	for (const generatedNewFunctionCallStatementSegments of generateNewFunctionCallStatementSegments(
		`${code}h`,
		depth + 1,
		functionHeader.children.segments,
		unknownsNames,
		userVariablesNames,
	)) {
		const generatedNewFunctionCallStatement =
			FunctionCallStatementAbstractSyntaxTreeNode.create(
				{segments: generatedNewFunctionCallStatementSegments},
				new SpanIndexes(0, 0),
			);
		// if (
		// 	functionHeader.id === thisFunctionHeader.id
		// 	&& generatedNewFunctionCallStatementSegments.every(
		// 		(generatedFunctionCallStatementSegment, index) => {
		// 			const functionHeaderSegment = functionHeader.children.segments[index];
		// 			if (
		// 				generatedFunctionCallStatementSegment
		// 					instanceof KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode
		// 				&& functionHeaderSegment
		// 					instanceof KnownFunctionHeaderSegmentAbstractSyntaxTreeNode
		// 				&& generatedFunctionCallStatementSegment.name === functionHeaderSegment.name
		// 			) {
		// 				return true;
		// 			} else if (
		// 				generatedFunctionCallStatementSegment
		// 					instanceof UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode
		// 				&& functionHeaderSegment
		// 					instanceof UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode
		// 				&& generatedFunctionCallStatementSegment.name === functionHeaderSegment.name
		// 			) {
		// 				return true;
		// 			} else if (
		// 				generatedFunctionCallStatementSegment
		// 					instanceof WordFunctionCallStatementSegmentAbstractSyntaxTreeNode
		// 				&& functionHeaderSegment
		// 					instanceof WordFunctionHeaderSegmentAbstractSyntaxTreeNode
		// 				&& generatedFunctionCallStatementSegment.children.word
		// 					=== functionHeaderSegment.children.word
		// 			) {
		// 				return true;
		// 			} else {
		// 				return false;
		// 			}
		// 		},
		// 	)
		// ) {
		// 	continue;
		// } else {
		yield generatedNewFunctionCallStatement;
		// }
	}
}
export function* generateNewFunctionCallStatementSegments(
	code: string,
	depth: number,
	functionHeaderSegments: readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	],
	unknownsNames: readonly string[],
	userVariablesNames: readonly string[],
): Generator<
	readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	],
	void,
	void
> {
	// console.log(`${code}|generateNewFunctionCallStatementSegment`, depth);
	const [
		firstFunctionHeaderSegment,
		secondFunctionHeaderSegment,
		...restFunctionHeaderSegments
	] = functionHeaderSegments;
	if (secondFunctionHeaderSegment === undefined) {
		for (const generatedNewFunctionCallStatementSegment of generateNewFunctionCallStatementSegment(
			`${code}i`,
			depth + 1,
			firstFunctionHeaderSegment,
			unknownsNames,
			userVariablesNames,
		)) {
			const generatedNewFunctionCallStatementSegments: readonly [
				SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
			] = [generatedNewFunctionCallStatementSegment];
			yield generatedNewFunctionCallStatementSegments;
		}
	} else {
		for (const generatedNewFunctionCallStatementSegment of combineDependentGeneratorsProducting(
			generateNewFunctionCallStatementSegment(
				`${code}j`,
				depth + 1,
				firstFunctionHeaderSegment,
				unknownsNames,
				userVariablesNames,
			),
			function* (generatedNewFunctionCallStatementSegment) {
				for (const deeperGeneratedNewFunctionCallStatementSegmentsRest of generateNewFunctionCallStatementSegments(
					`${code}k`,
					depth + 1,
					[secondFunctionHeaderSegment, ...restFunctionHeaderSegments],
					unknownsNames,
					userVariablesNames,
				)) {
					const deeperGeneratedNewFunctionCallStatementSegments: readonly [
						SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
					] = [
						generatedNewFunctionCallStatementSegment,
						...deeperGeneratedNewFunctionCallStatementSegmentsRest,
					];
					yield deeperGeneratedNewFunctionCallStatementSegments;
				}
			},
		)) {
			yield generatedNewFunctionCallStatementSegment;
		}
	}
}
function* generateNewFunctionCallStatementSegment(
	code: string,
	depth: number,
	functionHeaderSegment: SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
	unknownsNames: readonly string[],
	userVariablesNames: readonly string[],
): Generator<
	SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
	void,
	void
> {
	// console.log(`${code}|generateNewFunctionCallStatementSegment`, depth);
	if (
		functionHeaderSegment
		instanceof KnownFunctionHeaderSegmentAbstractSyntaxTreeNode
	) {
		for (const generatedNewKnownCallSegment of generateNewKnownFunctionCallStatementSegment(
			`${code}l`,
			depth + 1,
			userVariablesNames,
		)) {
			yield generatedNewKnownCallSegment;
		}
	} else if (
		functionHeaderSegment
		instanceof UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode
	) {
		for (const generatedNewUnknownCallSegment of generateNewUnknownFunctionCallStatementSegment(
			`${code}m`,
			depth + 1,
			unknownsNames,
			userVariablesNames,
		)) {
			yield generatedNewUnknownCallSegment;
		}
	} else if (
		functionHeaderSegment
		instanceof WordFunctionHeaderSegmentAbstractSyntaxTreeNode
	) {
		const generatedNewWordCallSegment =
			new WordFunctionCallStatementSegmentAbstractSyntaxTreeNode(
				{word: functionHeaderSegment.children.word},
				new SpanIndexes(0, 0),
			);
		yield generatedNewWordCallSegment;
	}
}
export function* generateNewKnownFunctionCallStatementSegment(
	code: string,
	depth: number,
	userVariableNames: readonly string[],
): Generator<
	KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
	void,
	void
> {
	// console.log(`${code}|generateNewKnownFunctionCallStatementSegment`, depth);
	for (const generatedVariableName of combineIndependentGeneratorsInterleaving<string>(
		generateNewUserVariableName(userVariableNames),
		generateNewBuiltInVariableName(),
	)) {
		const generatedNewKnownFunctionCallStatementSegment =
			new KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode(
				{name: generatedVariableName},
				new SpanIndexes(0, 0),
			);
		yield generatedNewKnownFunctionCallStatementSegment;
	}
}
function* generateNewUserVariableName(
	userVariableNames: readonly string[],
): Generator<string, void, void> {
	for (const generatedNewUserVariableName of userVariableNames) {
		yield generatedNewUserVariableName;
	}
}
function* generateNewBuiltInVariableName(): Generator<string, void, void> {
	yield "0";
	for (const generatedNewBuiltInVariableName of combineIndependentGeneratorsInterleaving<string>(
		generateNewPositiveInteger(),
		generateNewNegativeInteger(),
	)) {
		yield generatedNewBuiltInVariableName;
	}
}
function* generateNewPositiveInteger(): Generator<string, void, void> {
	for (
		let generatedNewPositiveIntegerAsNumber = 1;
		;
		generatedNewPositiveIntegerAsNumber =
			generatedNewPositiveIntegerAsNumber + 1
	) {
		const generatedNewPositiveInteger =
			generatedNewPositiveIntegerAsNumber.toString(10);
		yield generatedNewPositiveInteger;
	}
}
function* generateNewNegativeInteger(): Generator<string, void, void> {
	for (
		let generatedNewNegativeIntegerAsNumber = -1;
		;
		generatedNewNegativeIntegerAsNumber =
			generatedNewNegativeIntegerAsNumber - 1
	) {
		const generatedNewNegativeInteger =
			generatedNewNegativeIntegerAsNumber.toString(10);
		yield generatedNewNegativeInteger;
	}
}
function* generateNewUnknownFunctionCallStatementSegment(
	code: string,
	depth: number,
	unknownsNames: readonly string[],
	userVariablesNames: readonly string[],
): Generator<
	UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
	void,
	void
> {
	// console.log(`${code}|generateNewUnknownFunctionCallStatementSegment`, depth);
	for (const generatedNewUnknownCallSegment of combineIndependentGeneratorsInterleaving<string>(
		generateNewUnknownNameFromUnknownsNames(
			`${code}n`,
			depth + 1,
			unknownsNames,
		),
		generateNewVariableNameFromUserVariablesNames(
			`${code}o`,
			depth + 1,
			userVariablesNames,
		),
	)) {
		const generatedNewUnknownFunctionCallStatementSegment =
			new UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode(
				{name: generatedNewUnknownCallSegment},
				new SpanIndexes(0, 0),
			);
		yield generatedNewUnknownFunctionCallStatementSegment;
	}
}
function* generateNewUnknownNameFromUnknownsNames(
	code: string,
	depth: number,
	unknownsNames: readonly string[],
): Generator<string, void, void> {
	// console.log(`${code}|generateNewUnknownNameFromUnknownsNames`, depth);
	for (const generatedNewUnknownName of unknownsNames) {
		yield generatedNewUnknownName;
	}
}
function* generateNewVariableNameFromUserVariablesNames(
	code: string,
	depth: number,
	userVariableNames: readonly string[],
): Generator<string, void, void> {
	// console.log(`${code}|generateNewVariableNameFromUserVariablesNames`, depth);
	for (const generatedNewVariableName of generateNewVariableName(
		`${code}p`,
		depth + 1,
	)) {
		if (userVariableNames.includes(generatedNewVariableName)) {
			continue;
		} else {
			yield generatedNewVariableName;
			return;
		}
	}
}
function* generateNewVariableName(
	code: string,
	depth: number,
): Generator<string, void, void> {
	// console.log(`${code}|generateNewVariableName`, depth);
	for (let depth2 = 1; ; depth2 = depth2 + 1) {
		const generatedNewVariableName = "v".repeat(depth2);
		yield generatedNewVariableName;
	}
}
