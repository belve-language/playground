import {Grammar} from "./Grammar.ts";
import {ParsingTable} from "./ParsingTable.ts";
import {ParsingTableRow} from "./ParsingTableRow.ts";
import type {RuleRightExpressions} from "./RuleRightExpressions.ts";
import type {Rules} from "./Rules.ts";
import {EmptyExpression} from "./expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "./expression/implementations/non-terminal/NonTerminalExpression.ts";
import {TerminalExpression} from "./expression/implementations/terminal/TerminalExpression.ts";
import {ThenExpression} from "./expression/implementations/then/ThenExpression.ts";
import type {StackItem} from "./stack-item/StackItem.ts";
const rules: Rules = {
	"Block": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningCurlyBracketCharacter"),
			new NonTerminalExpression("OptionalBlockContent"),
			new NonTerminalExpression("ClosingCurlyBracketCharacter"),
			new NonTerminalExpression("OptionalWhitespace"),
		]),
	],
	"BlockContent": [
		new NonTerminalExpression("PaddedOptionalStatements"),
		new NonTerminalExpression("Statements"),
	],
	"BlockStatement": [new NonTerminalExpression("Block")],
	"ClosingCurlyBracketCharacter": [new TerminalExpression("}")],
	"ClosingRoundBracketCharacter": [new TerminalExpression(")")],
	"ClosingSquareBracketCharacter": [new TerminalExpression("]")],
	"Content": [
		new NonTerminalExpression("Functions"),
		new NonTerminalExpression("PaddedOptionalFunctions"),
		new EmptyExpression(),
	],
	"Function": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OptionalFunctionHeader"),
			new NonTerminalExpression("FunctionBody"),
		]),
	],
	"FunctionBody": [new NonTerminalExpression("Block")],
	"FunctionCall": [new NonTerminalExpression("FunctionCallSegments")],
	"FunctionCallSegments": [
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithWordFunctionCallSegments"),
	],
	"FunctionCallStatement": [new NonTerminalExpression("FunctionCall")],
	"FunctionHeader": [new NonTerminalExpression("FunctionHeaderSegments")],
	"FunctionHeaderSegments": [
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegments"),
	],
	"Functions": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Function"),
			new NonTerminalExpression("OptionalFunctions"),
		]),
	],
	"KnownFunctionCallSegment": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningRoundBracketCharacter"),
			new NonTerminalExpression("OptionalKnownFunctionCallSegmentContent"),
			new NonTerminalExpression("ClosingRoundBracketCharacter"),
		]),
	],
	"KnownFunctionCallSegmentContent": [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	],
	"KnownFunctionHeaderSegment": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningRoundBracketCharacter"),
			new NonTerminalExpression("KnownFunctionHeaderSegmentContent"),
			new NonTerminalExpression("ClosingRoundBracketCharacter"),
		]),
	],
	"KnownFunctionHeaderSegmentContent": [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	],
	"OpeningCurlyBracketCharacter": [new TerminalExpression("{")],
	"OpeningRoundBracketCharacter": [new TerminalExpression("(")],
	"OpeningSquareBracketCharacter": [new TerminalExpression("[")],
	"OperatorCharacter": [
		new TerminalExpression(","),
		new TerminalExpression("."),
	],
	"OptionalBlockContent": [
		new NonTerminalExpression("BlockContent"),
		new EmptyExpression(),
	],
	"OptionalFunctionCallSegments": [
		new NonTerminalExpression("FunctionCallSegments"),
		new EmptyExpression(),
	],
	"OptionalFunctionHeader": [
		new NonTerminalExpression("FunctionHeader"),
		new EmptyExpression(),
	],
	"OptionalFunctionHeaderSegments": [
		new NonTerminalExpression("FunctionHeaderSegments"),
		new EmptyExpression(),
	],
	"OptionalFunctions": [
		new NonTerminalExpression("Functions"),
		new EmptyExpression(),
	],
	"OptionalKnownFunctionCallSegmentContent": [
		new NonTerminalExpression("KnownFunctionCallSegmentContent"),
		new EmptyExpression(),
	],
	"OptionalPaddedVariableName": [
		new NonTerminalExpression("PaddedVariableName"),
		new EmptyExpression(),
	],
	"OptionalSeparatedStatements": [
		new NonTerminalExpression("SeparatedStatements"),
		new EmptyExpression(),
	],
	"OptionalStartingWithKnownFunctionCallSegmentsRest": [
		new NonTerminalExpression("StartingWithKnownFunctionCallSegmentsRest"),
		new EmptyExpression(),
	],
	"OptionalStartingWithKnownFunctionHeaderSegmentsRest": [
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegmentsRest"),
		new EmptyExpression(),
	],
	"OptionalStartingWithUnknownFunctionCallSegmentsRest": [
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegmentsRest"),
		new EmptyExpression(),
	],
	"OptionalStartingWithUnknownFunctionHeaderSegmentsRest": [
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegmentsRest"),
		new EmptyExpression(),
	],
	"OptionalStartingWithWordFunctionCallSegmentsRest": [
		new NonTerminalExpression("StartingWithWordFunctionCallSegmentsRest"),
		new EmptyExpression(),
	],
	"OptionalStartingWithWordFunctionHeaderSegmentsRest": [
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegmentsRest"),
		new EmptyExpression(),
	],
	"OptionalStatements": [
		new NonTerminalExpression("Statements"),
		new EmptyExpression(),
	],
	"OptionalUnknownFunctionCallSegmentContent": [
		new NonTerminalExpression("UnknownFunctionCallSegmentContent"),
		new EmptyExpression(),
	],
	"OptionalUnknownFunctionHeaderSegmentContent": [
		new NonTerminalExpression("UnknownFunctionHeaderSegmentContent"),
		new EmptyExpression(),
	],
	"OptionalWhitespace": [
		new NonTerminalExpression("Whitespace"),
		new EmptyExpression(),
	],
	"OptionalWhitespaceCharacters": [
		new NonTerminalExpression("WhitespaceCharacters"),
		new EmptyExpression(),
	],
	"OptionalWordCharacters": [
		new NonTerminalExpression("WordCharacters"),
		new EmptyExpression(),
	],
	"PaddedOptionalFunctions": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalFunctions"),
		]),
	],
	"PaddedOptionalPaddedVariableName": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalPaddedVariableName"),
		]),
	],
	"PaddedOptionalStatements": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalStatements"),
		]),
	],
	"PaddedVariableName": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("VariableName"),
			new NonTerminalExpression("OptionalWhitespace"),
		]),
	],
	"SeparatedOptionalFunctionCallSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalFunctionCallSegments"),
		]),
	],
	"SeparatedOptionalFunctionHeaderSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Whitespace"),
			new NonTerminalExpression("OptionalFunctionHeaderSegments"),
		]),
	],
	"SeparatedStatements": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OperatorCharacter"),
			new NonTerminalExpression("OptionalWhitespace"),
			new NonTerminalExpression("Statements"),
		]),
	],
	"StartingWithKnownFunctionCallSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("KnownFunctionCallSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithKnownFunctionCallSegmentsRest",
			),
		]),
	],
	"StartingWithKnownFunctionCallSegmentsRest": [
		new NonTerminalExpression("SeparatedOptionalFunctionCallSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithWordFunctionCallSegments"),
	],
	"StartingWithKnownFunctionHeaderSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("KnownFunctionHeaderSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithKnownFunctionHeaderSegmentsRest",
			),
		]),
	],
	"StartingWithKnownFunctionHeaderSegmentsRest": [
		new NonTerminalExpression("SeparatedOptionalFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithWordFunctionHeaderSegments"),
	],
	"StartingWithUnknownFunctionCallSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("UnknownFunctionCallSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithUnknownFunctionCallSegmentsRest",
			),
		]),
	],
	"StartingWithUnknownFunctionCallSegmentsRest": [
		new NonTerminalExpression("SeparatedOptionalFunctionCallSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
	],
	"StartingWithUnknownFunctionHeaderSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("UnknownFunctionHeaderSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithUnknownFunctionHeaderSegmentsRest",
			),
		]),
	],
	"StartingWithUnknownFunctionHeaderSegmentsRest": [
		new NonTerminalExpression("SeparatedOptionalFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
	],
	"StartingWithWordFunctionCallSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WordFunctionCallSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithWordFunctionCallSegmentsRest",
			),
		]),
	],
	"StartingWithWordFunctionCallSegmentsRest": [
		new NonTerminalExpression("SeparatedOptionalFunctionCallSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionCallSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionCallSegments"),
	],
	"StartingWithWordFunctionHeaderSegments": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WordFunctionHeaderSegment"),
			new NonTerminalExpression(
				"OptionalStartingWithWordFunctionHeaderSegmentsRest",
			),
		]),
	],
	"StartingWithWordFunctionHeaderSegmentsRest": [
		new NonTerminalExpression("SeparatedOptionalFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithKnownFunctionHeaderSegments"),
		new NonTerminalExpression("StartingWithUnknownFunctionHeaderSegments"),
	],
	"Statement": [
		new NonTerminalExpression("BlockStatement"),
		new NonTerminalExpression("FunctionCallStatement"),
	],
	"Statements": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("Statement"),
			new NonTerminalExpression("OptionalSeparatedStatements"),
		]),
	],
	"UnknownFunctionCallSegment": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningSquareBracketCharacter"),
			new NonTerminalExpression("OptionalUnknownFunctionCallSegmentContent"),
			new NonTerminalExpression("ClosingSquareBracketCharacter"),
		]),
	],
	"UnknownFunctionCallSegmentContent": [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	],
	"UnknownFunctionHeaderSegment": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("OpeningSquareBracketCharacter"),
			new NonTerminalExpression("OptionalUnknownFunctionHeaderSegmentContent"),
			new NonTerminalExpression("ClosingSquareBracketCharacter"),
		]),
	],
	"UnknownFunctionHeaderSegmentContent": [
		new NonTerminalExpression("PaddedOptionalPaddedVariableName"),
		new NonTerminalExpression("PaddedVariableName"),
	],
	"VariableName": [new NonTerminalExpression("Word")],
	"Whitespace": [new NonTerminalExpression("WhitespaceCharacters")],
	"WhitespaceCharacter": [
		new TerminalExpression(" "),
		new TerminalExpression("\t"),
		new TerminalExpression("\n"),
	],
	"WhitespaceCharacters": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WhitespaceCharacter"),
			new NonTerminalExpression("OptionalWhitespaceCharacters"),
		]),
	],
	"Word": [new NonTerminalExpression("WordCharacters")],
	"WordCharacter": [
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
	],
	"WordCharacters": [
		ThenExpression.createFromArray([
			new NonTerminalExpression("WordCharacter"),
			new NonTerminalExpression("OptionalWordCharacters"),
		]),
	],
	"WordFunctionCallSegment": [new NonTerminalExpression("Word")],
	"WordFunctionHeaderSegment": [new NonTerminalExpression("Word")],
};
const grammar = Grammar.create(rules, "Content");
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
const sourceCodeContentCharacters: readonly string[] =
	sourceCodeContent.split("");
grammar.parse(sourceCodeContentCharacters);
