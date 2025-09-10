import {EmptyConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {BlockRule} from "../../rule/implementations/block/BlockRule.ts";
import {BlockContentRule} from "../../rule/implementations/block-content/BlockContentRule.ts";
import {BlockStatementRule} from "../../rule/implementations/block-statement/BlockStatementRule.ts";
import {ClosingCurlyBracketCharacterRule} from "../../rule/implementations/closing-curly-bracket-character/ClosingCurlyBracketCharacterRule.ts";
import {ClosingRoundBracketCharacterRule} from "../../rule/implementations/closing-round-bracket-character/ClosingRoundBracketCharacterRule.ts";
import {ClosingSquareBracketCharacterRule} from "../../rule/implementations/closing-square-bracket-character/ClosingSquareBracketCharacterRule.ts";
import {ContentRule} from "../../rule/implementations/content/ContentRule.ts";
import {EmptyRule} from "../../rule/implementations/empty/EmptyRule.ts";
import {FunctionRule} from "../../rule/implementations/function/FunctionRule.ts";
import {FunctionBodyRule} from "../../rule/implementations/function-body/FunctionBodyRule.ts";
import {FunctionCallRule} from "../../rule/implementations/function-call/FunctionCallRule.ts";
import {FunctionCallSegmentsRule} from "../../rule/implementations/function-call-segments/FunctionCallSegmentsRule.ts";
import {FunctionCallStatementRule} from "../../rule/implementations/function-call-statement/FunctionCallStatementRule.ts";
import {FunctionHeaderRule} from "../../rule/implementations/function-header/FunctionHeaderRule.ts";
import {FunctionHeaderSegmentsRule} from "../../rule/implementations/function-header-segments/FunctionHeaderSegmentsRule.ts";
import {FunctionsRule} from "../../rule/implementations/functions/FunctionsRule.ts";
import {KnownFunctionCallSegmentRule} from "../../rule/implementations/known-function-call-segment/KnownFunctionCallSegmentRule.ts";
import {KnownFunctionCallSegmentContentRule} from "../../rule/implementations/known-function-call-segmentContent/KnownFunctionCallSegmentContentRule.ts";
import {KnownFunctionHeaderSegmentRule} from "../../rule/implementations/known-function-header-segment/KnownFunctionHeaderSegmentRule.ts";
import {KnownFunctionHeaderSegmentContentRule} from "../../rule/implementations/known-function-header-segmentContent/KnownFunctionHeaderSegmentContentRule.ts";
import {OpeningCurlyBracketCharacterRule} from "../../rule/implementations/opening-curly-bracket-character/OpeningCurlyBracketCharacterRule.ts";
import {OpeningRoundBracketCharacterRule} from "../../rule/implementations/opening-round-bracket-character/OpeningRoundBracketCharacterRule.ts";
import {OpeningSquareBracketCharacterRule} from "../../rule/implementations/opening-square-bracket-character/OpeningSquareBracketCharacterRule.ts";
import {OperatorRule} from "../../rule/implementations/operator/OperatorRule.ts";
import {OptionalBlockContentRule} from "../../rule/implementations/optional-block-content/OptionalBlockContentRule.ts";
import {OptionalContentRule} from "../../rule/implementations/optional-content/OptionalContentRule.ts";
import {OptionalFunctionCallSegmentsRule} from "../../rule/implementations/optional-function-call-segments/OptionalFunctionCallSegmentsRule.ts";
import {OptionalFunctionHeaderRule} from "../../rule/implementations/optional-function-header/OptionalFunctionHeaderRule.ts";
import {OptionalFunctionHeaderSegmentsRule} from "../../rule/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsRule.ts";
import {OptionalFunctionsRule} from "../../rule/implementations/optional-functions/OptionalFunctionsRule.ts";
import {OptionalKnownFunctionCallSegmentContentRule} from "../../rule/implementations/optional-known-function-call-segment-content/OptionalKnownFunctionCallSegmentContentRule.ts";
import {OptionalKnownFunctionHeaderSegmentContentRule} from "../../rule/implementations/optional-known-function-header-segment-content/OptionalKnownFunctionHeaderSegmentContentRule.ts";
import {OptionalPaddedVariableNameRule} from "../../rule/implementations/optional-padded-variable-name/OptionalPaddedVariableNameRule.ts";
import {OptionalSeparatedStatementsRule} from "../../rule/implementations/optional-separated-statements/OptionalSeparatedStatementsRule.ts";
import {OptionalStartingWithKnownFunctionCallSegmentsRestRule} from "../../rule/implementations/optional-starting-with-known-function-call-segments-rest/OptionalStartingWithKnownFunctionCallSegmentsRestRule.ts";
import {OptionalStartingWithKnownFunctionHeaderSegmentsRestRule} from "../../rule/implementations/optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestRule.ts";
import {OptionalStartingWithUnknownFunctionCallSegmentsRestRule} from "../../rule/implementations/optional-starting-with-unknown-function-call-segments-rest/OptionalStartingWithUnknownFunctionCallSegmentsRestRule.ts";
import {OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule} from "../../rule/implementations/optional-starting-with-unknown-function-header-segments-rest/OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule.ts";
import {OptionalStartingWithWordFunctionCallSegmentsRestRule} from "../../rule/implementations/optional-starting-with-word-function-call-segments-rest/OptionalStartingWithWordFunctionCallSegmentsRestRule.ts";
import {OptionalStartingWithWordFunctionHeaderSegmentsRestRule} from "../../rule/implementations/optional-starting-with-word-function-header-segments-rest/OptionalStartingWithWordFunctionHeaderSegmentsRestRule.ts";
import {OptionalStatementsRule} from "../../rule/implementations/optional-statements/OptionalStatementsRule.ts";
import {OptionalUnknownFunctionCallSegmentContentRule} from "../../rule/implementations/optional-unknown-function-call-segment-content/OptionalUnknownFunctionCallSegmentContentRule.ts";
import {OptionalUnknownFunctionHeaderSegmentContentRule} from "../../rule/implementations/optional-unknown-function-header-segment-content/OptionalUnknownFunctionHeaderSegmentContentRule.ts";
import {OptionalVariableNameCharactersRule} from "../../rule/implementations/optional-variable-name-characters/OptionalVariableNameCharactersRule.ts";
import {OptionalWhitespaceRule} from "../../rule/implementations/optional-whitespace/OptionalWhitespaceRule.ts";
import {OptionalWhitespaceCharactersRule} from "../../rule/implementations/optional-whitespace-characters/OptionalWhitespaceCharactersRule.ts";
import {OptionalWordCharactersRule} from "../../rule/implementations/optional-word-characters/OptionalWordCharactersRule.ts";
import {OrOperatorRule} from "../../rule/implementations/or-operator/OrOperatorRule.ts";
import {PaddedOptionalFunctionsRule} from "../../rule/implementations/padded-optional-functions/PaddedOptionalFunctionsRule.ts";
import {PaddedOptionalPaddedVariableNameRule} from "../../rule/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameRule.ts";
import {PaddedOptionalStatementsRule} from "../../rule/implementations/padded-optional-statements/PaddedOptionalStatementsRule.ts";
import {PaddedVariableNameRule} from "../../rule/implementations/padded-variable-name/PaddedVariableNameRule.ts";
import {SeparatedOptionalFunctionCallSegmentsRule} from "../../rule/implementations/separated-optional-function-call-segments/SeparatedOptionalFunctionCallSegmentsRule.ts";
import {SeparatedOptionalFunctionHeaderSegmentsRule} from "../../rule/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsRule.ts";
import {SeparatedStatementsRule} from "../../rule/implementations/separated-statements/SeparatedStatementsRule.ts";
import {StartingWithKnownFunctionCallSegmentsRule} from "../../rule/implementations/starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsRule.ts";
import {StartingWithKnownFunctionCallSegmentsRestRule} from "../../rule/implementations/starting-with-known-function-call-segments-rest/StartingWithKnownFunctionCallSegmentsRestRule.ts";
import {StartingWithKnownFunctionHeaderSegmentsRule} from "../../rule/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsRule.ts";
import {StartingWithKnownFunctionHeaderSegmentsRestRule} from "../../rule/implementations/starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestRule.ts";
import {StartingWithUnknownFunctionCallSegmentsRule} from "../../rule/implementations/starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsRule.ts";
import {StartingWithUnknownFunctionCallSegmentsRestRule} from "../../rule/implementations/starting-with-unknown-function-call-segments-rest/StartingWithUnknownFunctionCallSegmentsRestRule.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRule} from "../../rule/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsRule.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRestRule} from "../../rule/implementations/starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestRule.ts";
import {StartingWithWordFunctionCallSegmentsRule} from "../../rule/implementations/starting-with-word-function-call-segments/StartingWithWordFunctionCallSegmentsRule.ts";
import {StartingWithWordFunctionCallSegmentsRestRule} from "../../rule/implementations/starting-with-word-function-call-segments-rest/StartingWithWordFunctionCallSegmentsRestRule.ts";
import {StartingWithWordFunctionHeaderSegmentsRule} from "../../rule/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsRule.ts";
import {StartingWithWordFunctionHeaderSegmentsRestRule} from "../../rule/implementations/starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestRule.ts";
import {StatementRule} from "../../rule/implementations/statement/StatementRule.ts";
import {StatementsRule} from "../../rule/implementations/statements/StatementsRule.ts";
import {ThenOperatorRule} from "../../rule/implementations/then-operator-character/ThenOperatorRule.ts";
import {UnknownFunctionCallSegmentRule} from "../../rule/implementations/unknown-function-call-segment/UnknownFunctionCallSegmentRule.ts";
import {UnknownFunctionCallSegmentContentRule} from "../../rule/implementations/unknown-function-call-segment-content/UnknownFunctionCallSegmentContentRule.ts";
import {UnknownFunctionHeaderSegmentRule} from "../../rule/implementations/unknown-function-header-segment/UnknownFunctionHeaderSegmentRule.ts";
import {UnknownFunctionHeaderSegmentContentRule} from "../../rule/implementations/unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentRule.ts";
import {VariableNameRule} from "../../rule/implementations/variable-name/VariableNameRule.ts";
import {VariableNameCharacterRule} from "../../rule/implementations/variable-name-character/VariableNameCharacterRule.ts";
import {VariableNameCharactersRule} from "../../rule/implementations/variable-name-characters/VariableNameCharactersRule.ts";
import {WhitespaceRule} from "../../rule/implementations/whitespace/WhitespaceRule.ts";
import {WhitespaceCharacterRule} from "../../rule/implementations/whitespace-character/WhitespaceCharacterRule.ts";
import {WhitespaceCharactersRule} from "../../rule/implementations/whitespace-characters/WhitespaceCharactersRule.ts";
import {WordRule} from "../../rule/implementations/word/WordRule.ts";
import {WordCharacterRule} from "../../rule/implementations/word-character/WordCharacterRule.ts";
import {WordCharactersRule} from "../../rule/implementations/word-characters/WordCharactersRule.ts";
import {WordFunctionCallSegmentRule} from "../../rule/implementations/word-function-call-segment/WordFunctionCallSegmentRule.ts";
import {WordFunctionHeaderSegmentRule} from "../../rule/implementations/word-function-header-segment/WordFunctionHeaderSegmentRule.ts";
import type {RuleById} from "../../rule-by-id/RuleById.ts";
export const ruleById: RuleById = {
	Block: new BlockRule(),
	BlockContent: new BlockContentRule(),
	BlockStatement: new BlockStatementRule(),
	ClosingCurlyBracketCharacter: new ClosingCurlyBracketCharacterRule(),
	ClosingRoundBracketCharacter: new ClosingRoundBracketCharacterRule(),
	ClosingSquareBracketCharacter: new ClosingSquareBracketCharacterRule(),
	Content: new ContentRule(),
	Empty: new EmptyRule(),
	Function: new FunctionRule(),
	FunctionBody: new FunctionBodyRule(),
	FunctionCall: new FunctionCallRule(),
	FunctionCallSegments: new FunctionCallSegmentsRule(),
	FunctionCallStatement: new FunctionCallStatementRule(),
	FunctionHeader: new FunctionHeaderRule(),
	FunctionHeaderSegments: new FunctionHeaderSegmentsRule(),
	Functions: new FunctionsRule(),
	KnownFunctionCallSegment: new KnownFunctionCallSegmentRule(),
	KnownFunctionCallSegmentContent: new KnownFunctionCallSegmentContentRule(),
	KnownFunctionHeaderSegment: new KnownFunctionHeaderSegmentRule(),
	KnownFunctionHeaderSegmentContent:
		new KnownFunctionHeaderSegmentContentRule(),
	OpeningCurlyBracketCharacter: new OpeningCurlyBracketCharacterRule(),
	OpeningRoundBracketCharacter: new OpeningRoundBracketCharacterRule(),
	OpeningSquareBracketCharacter: new OpeningSquareBracketCharacterRule(),
	Operator: new OperatorRule(),
	OptionalBlockContent: new OptionalBlockContentRule(),
	OptionalContent: new OptionalContentRule(),
	OptionalFunctionCallSegments: new OptionalFunctionCallSegmentsRule(),
	OptionalFunctionHeader: new OptionalFunctionHeaderRule(),
	OptionalFunctionHeaderSegments: new OptionalFunctionHeaderSegmentsRule(),
	OptionalFunctions: new OptionalFunctionsRule(),
	OptionalKnownFunctionCallSegmentContent:
		new OptionalKnownFunctionCallSegmentContentRule(),
	OptionalKnownFunctionHeaderSegmentContent:
		new OptionalKnownFunctionHeaderSegmentContentRule(),
	OptionalPaddedVariableName: new OptionalPaddedVariableNameRule(),
	OptionalSeparatedStatements: new OptionalSeparatedStatementsRule(),
	OptionalStartingWithKnownFunctionCallSegmentsRest:
		new OptionalStartingWithKnownFunctionCallSegmentsRestRule(),
	OptionalStartingWithKnownFunctionHeaderSegmentsRest:
		new OptionalStartingWithKnownFunctionHeaderSegmentsRestRule(),
	OptionalStartingWithUnknownFunctionCallSegmentsRest:
		new OptionalStartingWithUnknownFunctionCallSegmentsRestRule(),
	OptionalStartingWithUnknownFunctionHeaderSegmentsRest:
		new OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule(),
	OptionalStartingWithWordFunctionCallSegmentsRest:
		new OptionalStartingWithWordFunctionCallSegmentsRestRule(),
	OptionalStartingWithWordFunctionHeaderSegmentsRest:
		new OptionalStartingWithWordFunctionHeaderSegmentsRestRule(),
	OptionalStatements: new OptionalStatementsRule(),
	OptionalUnknownFunctionCallSegmentContent:
		new OptionalUnknownFunctionCallSegmentContentRule(),
	OptionalUnknownFunctionHeaderSegmentContent:
		new OptionalUnknownFunctionHeaderSegmentContentRule(),
	OptionalVariableNameCharacters: new OptionalVariableNameCharactersRule(),
	OptionalWhitespace: new OptionalWhitespaceRule(),
	OptionalWhitespaceCharacters: new OptionalWhitespaceCharactersRule(),
	OptionalWordCharacters: new OptionalWordCharactersRule(),
	OrOperator: new OrOperatorRule(),
	PaddedOptionalFunctions: new PaddedOptionalFunctionsRule(),
	PaddedOptionalPaddedVariableName: new PaddedOptionalPaddedVariableNameRule(),
	PaddedOptionalStatements: new PaddedOptionalStatementsRule(),
	PaddedVariableName: new PaddedVariableNameRule(),
	SeparatedOptionalFunctionCallSegments:
		new SeparatedOptionalFunctionCallSegmentsRule(),
	SeparatedOptionalFunctionHeaderSegments:
		new SeparatedOptionalFunctionHeaderSegmentsRule(),
	SeparatedStatements: new SeparatedStatementsRule(),
	StartingWithKnownFunctionCallSegments:
		new StartingWithKnownFunctionCallSegmentsRule(),
	StartingWithKnownFunctionCallSegmentsRest:
		new StartingWithKnownFunctionCallSegmentsRestRule(),
	StartingWithKnownFunctionHeaderSegments:
		new StartingWithKnownFunctionHeaderSegmentsRule(),
	StartingWithKnownFunctionHeaderSegmentsRest:
		new StartingWithKnownFunctionHeaderSegmentsRestRule(),
	StartingWithUnknownFunctionCallSegments:
		new StartingWithUnknownFunctionCallSegmentsRule(),
	StartingWithUnknownFunctionCallSegmentsRest:
		new StartingWithUnknownFunctionCallSegmentsRestRule(),
	StartingWithUnknownFunctionHeaderSegments:
		new StartingWithUnknownFunctionHeaderSegmentsRule(),
	StartingWithUnknownFunctionHeaderSegmentsRest:
		new StartingWithUnknownFunctionHeaderSegmentsRestRule(),
	StartingWithWordFunctionCallSegments:
		new StartingWithWordFunctionCallSegmentsRule(),
	StartingWithWordFunctionCallSegmentsRest:
		new StartingWithWordFunctionCallSegmentsRestRule(),
	StartingWithWordFunctionHeaderSegments:
		new StartingWithWordFunctionHeaderSegmentsRule(),
	StartingWithWordFunctionHeaderSegmentsRest:
		new StartingWithWordFunctionHeaderSegmentsRestRule(),
	Statement: new StatementRule(),
	Statements: new StatementsRule(),
	ThenOperator: new ThenOperatorRule(),
	UnknownFunctionCallSegment: new UnknownFunctionCallSegmentRule(),
	UnknownFunctionCallSegmentContent:
		new UnknownFunctionCallSegmentContentRule(),
	UnknownFunctionHeaderSegment: new UnknownFunctionHeaderSegmentRule(),
	UnknownFunctionHeaderSegmentContent:
		new UnknownFunctionHeaderSegmentContentRule(),
	VariableName: new VariableNameRule(),
	VariableNameCharacter: new VariableNameCharacterRule(),
	VariableNameCharacters: new VariableNameCharactersRule(),
	Whitespace: new WhitespaceRule(),
	WhitespaceCharacter: new WhitespaceCharacterRule(),
	WhitespaceCharacters: new WhitespaceCharactersRule(),
	Word: new WordRule(),
	WordCharacter: new WordCharacterRule(),
	WordCharacters: new WordCharactersRule(),
	WordFunctionCallSegment: new WordFunctionCallSegmentRule(),
	WordFunctionHeaderSegment: new WordFunctionHeaderSegmentRule(),
};
