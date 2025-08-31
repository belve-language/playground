import {Grammar} from "./Grammar.ts";
import {ParsingTable} from "./ParsingTable.ts";
import {ParsingTableRow} from "./ParsingTableRow.ts";
import {Rule} from "./Rule.ts";
import {EmptyExpression} from "./expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "./expression/implementations/non-terminal/NonTerminalExpression.ts";
import {TerminalExpression} from "./expression/implementations/terminal/TerminalExpression.ts";
import {ThenExpression} from "./expression/implementations/then/ThenExpression.ts";
import type {StackItem} from "./stack-item/StackItem.ts";
const rules = [
	new Rule("Block", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningCurlyBracketCharacter"),
			new NonTerminalExpression("OptionalBlockContent"),
			new NonTerminalExpression("ClosingCurlyBracketCharacter"),
			new NonTerminalExpression("OptionalWhitespace"),
		]),
	]),
	new Rule("OptionalBlockContent", [
		new NonTerminalExpression("BlockContent"),
		new EmptyExpression(),
	]),
	new Rule("BlockContent", [
		new NonTerminalExpression("PaddedOptionalStatements"),
		new NonTerminalExpression("Statements"),
	]),
	new Rule("PaddedOptionalStatements", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalStatements"),
		]),
	]),
	new Rule("OptionalStatements", [
		new NonTerminalExpression("Statements"),
		new EmptyExpression(),
	]),
	new Rule("BlockStatement", [new NonTerminalExpression("Block")]),
	new Rule("ClosingCurlyBracketCharacter", [new TerminalExpression("}")]),
	new Rule("ClosingRoundBracketCharacter", [new TerminalExpression(")")]),
	new Rule("ClosingSquareBracketCharacter", [new TerminalExpression("]")]),
	new Rule("Content", [
		new NonTerminalExpression("Functions"),
		new NonTerminalExpression("PaddedOptionalFunctions"),
		new EmptyExpression(),
	]),
	new Rule("PaddedOptionalFunctions", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalFunctions"),
		]),
	]),
	new Rule("OptionalFunctions", [
		new NonTerminalExpression("Functions"),
		new EmptyExpression(),
	]),
	new Rule("Function", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OptionalFunctionHeader"),
			new NonTerminalExpression("FunctionBody"),
		]),
	]),
	new Rule("OptionalFunctionHeader", [
		new NonTerminalExpression("FunctionHeader"),
		new EmptyExpression(),
	]),
	new Rule("FunctionBody", [new NonTerminalExpression("Block")]),
	new Rule("FunctionCall", [new NonTerminalExpression("FunctionCallSegments")]),
	new Rule("FunctionCallSegments", [
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithWordFunctionCallSegments"),
	]),
	new Rule("FunctionCallStatement", [
		new NonTerminalExpression("FunctionCall"),
	]),
	new Rule("FunctionHeader", [
		new NonTerminalExpression("FunctionHeaderSegments"),
	]),
	new Rule("FunctionHeaderSegments", [
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegments"),
	]),
	new Rule("KnownFunctionCallSegment", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningRoundBracketCharacter"),
			new NonTerminalExpression("OptionalKnownFunctionCallSegmentContent"),
			new NonTerminalExpression("ClosingRoundBracketCharacter"),
		]),
	]),
	new Rule("OptionalKnownFunctionCallSegmentContent", [
		new NonTerminalExpression("KnownFunctionCallSegmentContent"),
		new EmptyExpression(),
	]),
	new Rule("KnownFunctionCallSegmentContent", [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	]),
	new Rule("PaddedOptionalPaddedVariableName", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalPaddedVariableName"),
		]),
	]),
	new Rule("PaddedVariableName", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("VariableName"),
			new NonTerminalExpression("OptionalWhitespace"),
		]),
	]),
	new Rule("OptionalWhitespace", [
		new NonTerminalExpression("Whitespace"),
		new EmptyExpression(),
	]),
	new Rule("OptionalPaddedVariableName", [
		new NonTerminalExpression("PaddedVariableName"),
		new EmptyExpression(),
	]),
	new Rule("KnownFunctionHeaderSegment", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningRoundBracketCharacter"),
			new NonTerminalExpression("KnownFunctionHeaderSegmentContent"),
			new NonTerminalExpression("ClosingRoundBracketCharacter"),
		]),
	]),
	new Rule("KnownFunctionHeaderSegmentContent", [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	]),
	new Rule("OpeningCurlyBracketCharacter", [new TerminalExpression("{")]),
	new Rule("OpeningRoundBracketCharacter", [new TerminalExpression("(")]),
	new Rule("OpeningSquareBracketCharacter", [new TerminalExpression("[")]),
	new Rule("OperatorCharacter", [
		new TerminalExpression(","),
		new TerminalExpression("."),
	]),
	new Rule("SeparatedStatements", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OperatorCharacter"),
			new NonTerminalExpression("OptionalWhitespace"),
			new NonTerminalExpression("Statements"),
		]),
	]),
	new Rule("StartingWithKnownFunctionCallSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("KnownFunctionCallSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithKnownFunctionCallSegmentsRest",
			),
		]),
	]),
	new Rule("Functions", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Function"),
			new NonTerminalExpression("OptionalFunctions"),
		]),
	]),
	new Rule("OptionalStartingWithKnownFunctionCallSegmentsRest", [
		new NonTerminalExpression("StartingWithKnownFunctionCallSegmentsRest"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithKnownFunctionCallSegmentsRest", [
		new NonTerminalExpression("SeparatedOptionalFunctionCallSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithWordFunctionCallSegments"),
	]),
	new Rule("StartingWithKnownFunctionHeaderSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("KnownFunctionHeaderSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithKnownFunctionHeaderSegmentsRest",
			),
		]),
	]),
	new Rule("OptionalStartingWithKnownFunctionHeaderSegmentsRest", [
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegmentsRest"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithKnownFunctionHeaderSegmentsRest", [
		new NonTerminalExpression("SeparatedOptionalFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegments"),
	]),
	new Rule("SeparatedOptionalFunctionHeaderSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalFunctionHeaderSegments"),
		]),
	]),
	new Rule("SeparatedOptionalFunctionCallSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalFunctionCallSegments"),
		]),
	]),
	new Rule("OptionalFunctionHeaderSegments", [
		new NonTerminalExpression("FunctionHeaderSegments"),
		new EmptyExpression(),
	]),
	new Rule("OptionalFunctionCallSegments", [
		new NonTerminalExpression("FunctionCallSegments"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithUnknownFunctionCallSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("UnknownFunctionCallSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithUnknownFunctionCallSegmentsRest",
			),
		]),
	]),
	new Rule("OptionalStartingWithUnknownFunctionCallSegmentsRest", [
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegmentsRest"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithUnknownFunctionCallSegmentsRest", [
		new NonTerminalExpression("SeparatedOptionalFunctionCallSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithWordFunctionCallSegments"),
	]),
	new Rule("StartingWithUnknownFunctionHeaderSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("UnknownFunctionHeaderSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithUnknownFunctionHeaderSegmentsRest",
			),
		]),
	]),
	new Rule("OptionalStartingWithUnknownFunctionHeaderSegmentsRest", [
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegmentsRest"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithUnknownFunctionHeaderSegmentsRest", [
		new NonTerminalExpression("SeparatedOptionalFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegments"),
	]),
	new Rule("StartingWithWordFunctionCallSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WordFunctionCallSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithWordFunctionCallSegmentsRest",
			),
		]),
	]),
	new Rule("OptionalStartingWithWordFunctionCallSegmentsRest", [
		new NonTerminalExpression("StartingWithWordFunctionCallSegmentsRest"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithWordFunctionCallSegmentsRest", [
		new NonTerminalExpression("SeparatedOptionalFunctionCallSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
	]),
	new Rule("StartingWithWordFunctionHeaderSegments", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WordFunctionHeaderSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithWordFunctionHeaderSegmentsRest",
			),
		]),
	]),
	new Rule("OptionalStartingWithWordFunctionHeaderSegmentsRest", [
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegmentsRest"),
		new EmptyExpression(),
	]),
	new Rule("StartingWithWordFunctionHeaderSegmentsRest", [
		new NonTerminalExpression("SeparatedOptionalFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
	]),
	new Rule("Statement", [
		new NonTerminalExpression("BlockStatement"),
		new NonTerminalExpression("FunctionCallStatement"),
	]),
	new Rule("Statements", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Statement"),
			new NonTerminalExpression("OptionalSeparatedStatements"),
		]),
	]),
	new Rule("OptionalSeparatedStatements", [
		new NonTerminalExpression("SeparatedStatements"),
		new EmptyExpression(),
	]),
	new Rule("UnknownFunctionCallSegment", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningSquareBracketCharacter"),
			new NonTerminalExpression("OptionalUnknownFunctionCallSegmentContent"),
			new NonTerminalExpression("ClosingSquareBracketCharacter"),
		]),
	]),
	new Rule("OptionalUnknownFunctionCallSegmentContent", [
		new NonTerminalExpression("UnknownFunctionCallSegmentContent"),
		new EmptyExpression(),
	]),
	new Rule("UnknownFunctionCallSegmentContent", [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	]),
	new Rule("UnknownFunctionHeaderSegment", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningSquareBracketCharacter"),
			new NonTerminalExpression("OptionalUnknownFunctionHeaderSegmentContent"),
			new NonTerminalExpression("ClosingSquareBracketCharacter"),
		]),
	]),
	new Rule("OptionalUnknownFunctionHeaderSegmentContent", [
		new NonTerminalExpression("UnknownFunctionHeaderSegmentContent"),
		new EmptyExpression(),
	]),
	new Rule("UnknownFunctionHeaderSegmentContent", [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	]),
	new Rule("VariableName", [new NonTerminalExpression("Word")]),
	new Rule("Whitespace", [new NonTerminalExpression("WhitespaceCharacters")]),
	new Rule("WhitespaceCharacter", [
		new TerminalExpression(" "),
		new TerminalExpression("\t"),
		new TerminalExpression("\n"),
	]),
	new Rule("WhitespaceCharacters", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WhitespaceCharacter"),
			new NonTerminalExpression("OptionalWhitespaceCharacters"),
		]),
	]),
	new Rule("OptionalWhitespaceCharacters", [
		new NonTerminalExpression("WhitespaceCharacters"),
		new EmptyExpression(),
	]),
	new Rule("Word", [new NonTerminalExpression("WordCharacters")]),
	new Rule("WordCharacter", [
		new TerminalExpression("0"),
		new TerminalExpression("1"),
		new TerminalExpression("2"),
		new TerminalExpression("3"),
		new TerminalExpression("4"),
		new TerminalExpression("5"),
		new TerminalExpression("6"),
		new TerminalExpression("7"),
		new TerminalExpression("8"),
		new TerminalExpression("9"),
		new TerminalExpression("a"),
		new TerminalExpression("b"),
		new TerminalExpression("c"),
		new TerminalExpression("d"),
		new TerminalExpression("e"),
		new TerminalExpression("f"),
		new TerminalExpression("g"),
		new TerminalExpression("h"),
		new TerminalExpression("i"),
		new TerminalExpression("j"),
		new TerminalExpression("k"),
		new TerminalExpression("l"),
		new TerminalExpression("m"),
		new TerminalExpression("n"),
		new TerminalExpression("o"),
		new TerminalExpression("p"),
		new TerminalExpression("q"),
		new TerminalExpression("r"),
		new TerminalExpression("s"),
		new TerminalExpression("t"),
		new TerminalExpression("u"),
		new TerminalExpression("v"),
		new TerminalExpression("w"),
		new TerminalExpression("x"),
		new TerminalExpression("y"),
		new TerminalExpression("z"),
		new TerminalExpression("%"),
		new TerminalExpression("!"),
		new TerminalExpression("="),
		new TerminalExpression(">"),
		new TerminalExpression("<"),
		new TerminalExpression("+"),
		new TerminalExpression("-"),
		new TerminalExpression("*"),
		new TerminalExpression("/"),
		new TerminalExpression("^"),
		new TerminalExpression("?"),
	]),
	new Rule("WordCharacters", [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WordCharacter"),
			new NonTerminalExpression("OptionalWordCharacters"),
		]),
	]),
	new Rule("OptionalWordCharacters", [
		new NonTerminalExpression("WordCharacters"),
		new EmptyExpression(),
	]),
	new Rule("WordFunctionCallSegment", [new NonTerminalExpression("Word")]),
	new Rule("WordFunctionHeaderSegment", [new NonTerminalExpression("Word")]),
];

// type Grammar = {
// 	readonly ruleByNonTerminal: RuleByNonTerminal;
// 	readonly startingNonTerminal: string;
// };
const grammar = Grammar.create(rules, "Content");
// for (const nonTerminal of Object.keys(grammar.ruleByNonTerminal)) {
// 	const firstSet = grammar.computeFirstSetOfNonTerminal(nonTerminal);
// 	const followSet = grammar.computeFollowSetOfNonTerminal(nonTerminal);
// 	console.dir(
// 		{nonTerminal: nonTerminal, firstSet: firstSet, followSet: followSet},
// 		{depth: null},
// 	);
// }

const sourceCodeContent = `is (dividend) not divisible by (divisor) {
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
const parsingTable = ParsingTable.create(grammar);
type Stack = readonly StackItem[];
let stack: Stack = [new NonTerminalExpression(grammar.startingNonTerminal)];
let sourceCodeContentCharacters: readonly string[] =
	sourceCodeContent.split("");
for (;;) {
	const [firstCharacter, ...restCharacters] = sourceCodeContentCharacters;
	if (firstCharacter === undefined) {
		const [firstStackEntry, ...restStackEntries] = stack;
		if (firstStackEntry === undefined) {
			break;
		} else {
			switch (firstStackEntry.typeName) {
				case "terminal": {
					throw new Error(
						`Parsing failed: unexpected end of input, expected "${firstStackEntry.terminal}"`,
					);
				}
				case "nonTerminal": {
					const parsingTableRow = parsingTable.rows[
						firstStackEntry.nonTerminal
					] as ParsingTableRow;
					const newStackItems = parsingTableRow.finalization;
					if (newStackItems === null) {
						throw new Error(
							`Parsing failed: unexpected end of input, no rule to finalize non-terminal "${firstStackEntry.nonTerminal}"`,
						);
					} else {
						stack = [...newStackItems, ...restStackEntries];
						break;
					}
				}
			}
			continue;
		}
	} else {
		const [firstStackEntry, ...restStackEntries] = stack;
		if (firstStackEntry === undefined) {
			throw new Error(
				`Parsing failed: unexpected character "${firstCharacter}", stack is empty`,
			);
		} else {
			switch (firstStackEntry.typeName) {
				case "terminal": {
					if (firstStackEntry.terminal === firstCharacter) {
						sourceCodeContentCharacters = restCharacters;
						stack = restStackEntries;
					} else {
						throw new Error(
							`Parsing failed: unexpected character "${firstCharacter}", expected "${firstStackEntry.terminal}"`,
						);
					}
					break;
				}
				case "nonTerminal": {
					const parsingTableRow = parsingTable.rows[
						firstStackEntry.nonTerminal
					] as ParsingTableRow;
					const newStackItems = parsingTableRow.terminals[firstCharacter];
					if (newStackItems === undefined) {
						throw new Error(
							`Parsing failed: unexpected character "${firstCharacter}", no rule to expand non-terminal "${firstStackEntry.nonTerminal}" with that starting character`,
						);
					} else {
						stack = [...newStackItems, ...restStackEntries];
					}
					break;
				}
			}
		}
		continue;
	}
}
