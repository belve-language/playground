import {BlockRule} from "../../core/rule/implementations/block/BlockRule.ts";
import {BlockContentRule} from "../../core/rule/implementations/block-content/BlockContentRule.ts";
import {BlockStatementRule} from "../../core/rule/implementations/block-statement/BlockStatementRule.ts";
import {ClosingCurlyBracketCharacterRule} from "../../core/rule/implementations/closing-curly-bracket-character/ClosingCurlyBracketCharacterRule.ts";
import {ClosingRoundBracketCharacterRule} from "../../core/rule/implementations/closing-round-bracket-character/ClosingRoundBracketCharacterRule.ts";
import {ClosingSquareBracketCharacterRule} from "../../core/rule/implementations/closing-square-bracket-character/ClosingSquareBracketCharacterRule.ts";
import {ContentRule} from "../../core/rule/implementations/content/ContentRule.ts";
import {EmptyRule} from "../../core/rule/implementations/empty/EmptyRule.ts";
import {FunctionRule} from "../../core/rule/implementations/function/FunctionRule.ts";
import {FunctionBodyRule} from "../../core/rule/implementations/function-body/FunctionBodyRule.ts";
import {FunctionCallRule} from "../../core/rule/implementations/function-call/FunctionCallRule.ts";
import {FunctionCallSegmentsRule} from "../../core/rule/implementations/function-call-segments/FunctionCallSegmentsRule.ts";
import {FunctionCallStatementRule} from "../../core/rule/implementations/function-call-statement/FunctionCallStatementRule.ts";
import {FunctionHeaderRule} from "../../core/rule/implementations/function-header/FunctionHeaderRule.ts";
import {FunctionHeaderSegmentsRule} from "../../core/rule/implementations/function-header-segments/FunctionHeaderSegmentsRule.ts";
import {FunctionsRule} from "../../core/rule/implementations/functions/FunctionsRule.ts";
import {KnownFunctionCallSegmentRule} from "../../core/rule/implementations/known-function-call-segment/KnownFunctionCallSegmentRule.ts";
import {KnownFunctionCallSegmentContentRule} from "../../core/rule/implementations/known-function-call-segmentContent/KnownFunctionCallSegmentContentRule.ts";
import {KnownFunctionHeaderSegmentRule} from "../../core/rule/implementations/known-function-header-segment/KnownFunctionHeaderSegmentRule.ts";
import {KnownFunctionHeaderSegmentContentRule} from "../../core/rule/implementations/known-function-header-segmentContent/KnownFunctionHeaderSegmentContentRule.ts";
import {OpeningCurlyBracketCharacterRule} from "../../core/rule/implementations/opening-curly-bracket-character/OpeningCurlyBracketCharacterRule.ts";
import {OpeningRoundBracketCharacterRule} from "../../core/rule/implementations/opening-round-bracket-character/OpeningRoundBracketCharacterRule.ts";
import {OpeningSquareBracketCharacterRule} from "../../core/rule/implementations/opening-square-bracket-character/OpeningSquareBracketCharacterRule.ts";
import {OperatorRule} from "../../core/rule/implementations/operator/OperatorRule.ts";
import {OptionalBlockContentRule} from "../../core/rule/implementations/optional-block-content/OptionalBlockContentRule.ts";
import {OptionalContentRule} from "../../core/rule/implementations/optional-content/OptionalContentRule.ts";
import {OptionalFunctionCallSegmentsRule} from "../../core/rule/implementations/optional-function-call-segments/OptionalFunctionCallSegmentsRule.ts";
import {OptionalFunctionHeaderRule} from "../../core/rule/implementations/optional-function-header/OptionalFunctionHeaderRule.ts";
import {OptionalFunctionHeaderSegmentsRule} from "../../core/rule/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsRule.ts";
import {OptionalFunctionsRule} from "../../core/rule/implementations/optional-functions/OptionalFunctionsRule.ts";
import {OptionalKnownFunctionCallSegmentContentRule} from "../../core/rule/implementations/optional-known-function-call-segment-content/OptionalKnownFunctionCallSegmentContentRule.ts";
import {OptionalKnownFunctionHeaderSegmentContentRule} from "../../core/rule/implementations/optional-known-function-header-segment-content/OptionalKnownFunctionHeaderSegmentContentRule.ts";
import {OptionalPaddedVariableNameRule} from "../../core/rule/implementations/optional-padded-variable-name/OptionalPaddedVariableNameRule.ts";
import {OptionalSeparatedStatementsRule} from "../../core/rule/implementations/optional-separated-statements/OptionalSeparatedStatementsRule.ts";
import {OptionalStartingWithKnownFunctionCallSegmentsRestRule} from "../../core/rule/implementations/optional-starting-with-known-function-call-segments-rest/OptionalStartingWithKnownFunctionCallSegmentsRestRule.ts";
import {OptionalStartingWithKnownFunctionHeaderSegmentsRestRule} from "../../core/rule/implementations/optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestRule.ts";
import {OptionalStartingWithUnknownFunctionCallSegmentsRestRule} from "../../core/rule/implementations/optional-starting-with-unknown-function-call-segments-rest/OptionalStartingWithUnknownFunctionCallSegmentsRestRule.ts";
import {OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule} from "../../core/rule/implementations/optional-starting-with-unknown-function-header-segments-rest/OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule.ts";
import {OptionalStartingWithWordFunctionCallSegmentsRestRule} from "../../core/rule/implementations/optional-starting-with-word-function-call-segments-rest/OptionalStartingWithWordFunctionCallSegmentsRestRule.ts";
import {OptionalStartingWithWordFunctionHeaderSegmentsRestRule} from "../../core/rule/implementations/optional-starting-with-word-function-header-segments-rest/OptionalStartingWithWordFunctionHeaderSegmentsRestRule.ts";
import {OptionalStatementsRule} from "../../core/rule/implementations/optional-statements/OptionalStatementsRule.ts";
import {OptionalUnknownFunctionCallSegmentContentRule} from "../../core/rule/implementations/optional-unknown-function-call-segment-content/OptionalUnknownFunctionCallSegmentContentRule.ts";
import {OptionalUnknownFunctionHeaderSegmentContentRule} from "../../core/rule/implementations/optional-unknown-function-header-segment-content/OptionalUnknownFunctionHeaderSegmentContentRule.ts";
import {OptionalVariableNameCharactersRule} from "../../core/rule/implementations/optional-variable-name-characters/OptionalVariableNameCharactersRule.ts";
import {OptionalWhitespaceRule} from "../../core/rule/implementations/optional-whitespace/OptionalWhitespaceRule.ts";
import {OptionalWhitespaceCharactersRule} from "../../core/rule/implementations/optional-whitespace-characters/OptionalWhitespaceCharactersRule.ts";
import {OptionalWordCharactersRule} from "../../core/rule/implementations/optional-word-characters/OptionalWordCharactersRule.ts";
import {OrOperatorRule} from "../../core/rule/implementations/or-operator/OrOperatorRule.ts";
import {PaddedOptionalFunctionsRule} from "../../core/rule/implementations/padded-optional-functions/PaddedOptionalFunctionsRule.ts";
import {PaddedOptionalPaddedVariableNameRule} from "../../core/rule/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameRule.ts";
import {PaddedOptionalStatementsRule} from "../../core/rule/implementations/padded-optional-statements/PaddedOptionalStatementsRule.ts";
import {PaddedVariableNameRule} from "../../core/rule/implementations/padded-variable-name/PaddedVariableNameRule.ts";
import {SeparatedOptionalFunctionCallSegmentsRule} from "../../core/rule/implementations/separated-optional-function-call-segments/SeparatedOptionalFunctionCallSegmentsRule.ts";
import {SeparatedOptionalFunctionHeaderSegmentsRule} from "../../core/rule/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsRule.ts";
import {SeparatedStatementsRule} from "../../core/rule/implementations/separated-statements/SeparatedStatementsRule.ts";
import {StartingWithKnownFunctionCallSegmentsRule} from "../../core/rule/implementations/starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsRule.ts";
import {StartingWithKnownFunctionCallSegmentsRestRule} from "../../core/rule/implementations/starting-with-known-function-call-segments-rest/StartingWithKnownFunctionCallSegmentsRestRule.ts";
import {StartingWithKnownFunctionHeaderSegmentsRule} from "../../core/rule/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsRule.ts";
import {StartingWithKnownFunctionHeaderSegmentsRestRule} from "../../core/rule/implementations/starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestRule.ts";
import {StartingWithUnknownFunctionCallSegmentsRule} from "../../core/rule/implementations/starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsRule.ts";
import {StartingWithUnknownFunctionCallSegmentsRestRule} from "../../core/rule/implementations/starting-with-unknown-function-call-segments-rest/StartingWithUnknownFunctionCallSegmentsRestRule.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRule} from "../../core/rule/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsRule.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRestRule} from "../../core/rule/implementations/starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestRule.ts";
import {StartingWithWordFunctionCallSegmentsRule} from "../../core/rule/implementations/starting-with-word-function-call-segments/StartingWithWordFunctionCallSegmentsRule.ts";
import {StartingWithWordFunctionCallSegmentsRestRule} from "../../core/rule/implementations/starting-with-word-function-call-segments-rest/StartingWithWordFunctionCallSegmentsRestRule.ts";
import {StartingWithWordFunctionHeaderSegmentsRule} from "../../core/rule/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsRule.ts";
import {StartingWithWordFunctionHeaderSegmentsRestRule} from "../../core/rule/implementations/starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestRule.ts";
import {StatementRule} from "../../core/rule/implementations/statement/StatementRule.ts";
import {StatementsRule} from "../../core/rule/implementations/statements/StatementsRule.ts";
import {ThenOperatorRule} from "../../core/rule/implementations/then-operator-character/ThenOperatorRule.ts";
import {UnknownFunctionCallSegmentRule} from "../../core/rule/implementations/unknown-function-call-segment/UnknownFunctionCallSegmentRule.ts";
import {UnknownFunctionCallSegmentContentRule} from "../../core/rule/implementations/unknown-function-call-segment-content/UnknownFunctionCallSegmentContentRule.ts";
import {UnknownFunctionHeaderSegmentRule} from "../../core/rule/implementations/unknown-function-header-segment/UnknownFunctionHeaderSegmentRule.ts";
import {UnknownFunctionHeaderSegmentContentRule} from "../../core/rule/implementations/unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentRule.ts";
import {VariableNameRule} from "../../core/rule/implementations/variable-name/VariableNameRule.ts";
import {VariableNameCharacterRule} from "../../core/rule/implementations/variable-name-character/VariableNameCharacterRule.ts";
import {VariableNameCharactersRule} from "../../core/rule/implementations/variable-name-characters/VariableNameCharactersRule.ts";
import {WhitespaceRule} from "../../core/rule/implementations/whitespace/WhitespaceRule.ts";
import {WhitespaceCharacterRule} from "../../core/rule/implementations/whitespace-character/WhitespaceCharacterRule.ts";
import {WhitespaceCharactersRule} from "../../core/rule/implementations/whitespace-characters/WhitespaceCharactersRule.ts";
import {WordRule} from "../../core/rule/implementations/word/WordRule.ts";
import {WordCharacterRule} from "../../core/rule/implementations/word-character/WordCharacterRule.ts";
import {WordCharactersRule} from "../../core/rule/implementations/word-characters/WordCharactersRule.ts";
import {WordFunctionCallSegmentRule} from "../../core/rule/implementations/word-function-call-segment/WordFunctionCallSegmentRule.ts";
import {WordFunctionHeaderSegmentRule} from "../../core/rule/implementations/word-function-header-segment/WordFunctionHeaderSegmentRule.ts";
import type {RuleById} from "../../core/rule-by-id/RuleById.ts";
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
