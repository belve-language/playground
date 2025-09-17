import {BlockStatementRule} from "../../belve/rule/implementations/block-statement/BlockStatementRule.ts";
import {BlockStatementContentRule} from "../../belve/rule/implementations/block-statement-content/BlockStatementContentRule.ts";
import {ClosingCurlyBracketCharacterRule} from "../../belve/rule/implementations/closing-curly-bracket-character/ClosingCurlyBracketCharacterRule.ts";
import {ClosingRoundBracketCharacterRule} from "../../belve/rule/implementations/closing-round-bracket-character/ClosingRoundBracketCharacterRule.ts";
import {ClosingSquareBracketCharacterRule} from "../../belve/rule/implementations/closing-square-bracket-character/ClosingSquareBracketCharacterRule.ts";
import {ContentRule} from "../../belve/rule/implementations/content/ContentRule.ts";
import {EmptyRule} from "../../belve/rule/implementations/empty/EmptyRule.ts";
import {FunctionRule} from "../../belve/rule/implementations/function/FunctionRule.ts";
import {FunctionBodyRule} from "../../belve/rule/implementations/function-body/FunctionBodyRule.ts";
import {FunctionCallStatementRule} from "../../belve/rule/implementations/function-call-statement/FunctionCallStatementRule.ts";
import {FunctionCallStatementSegmentsRule} from "../../belve/rule/implementations/function-call-statement-segments/FunctionCallStatementSegmentsRule.ts";
import {FunctionHeaderRule} from "../../belve/rule/implementations/function-header/FunctionHeaderRule.ts";
import {FunctionHeaderSegmentsRule} from "../../belve/rule/implementations/function-header-segments/FunctionHeaderSegmentsRule.ts";
import {FunctionsRule} from "../../belve/rule/implementations/functions/FunctionsRule.ts";
import {KnownFunctionCallStatementSegmentRule} from "../../belve/rule/implementations/known-function-call-statement-segment/KnownFunctionCallStatementSegmentRule.ts";
import {KnownFunctionCallStatementSegmentContentRule} from "../../belve/rule/implementations/known-function-call-statement-segmentContent/KnownFunctionCallStatementSegmentContentRule.ts";
import {KnownFunctionHeaderSegmentRule} from "../../belve/rule/implementations/known-function-header-segment/KnownFunctionHeaderSegmentRule.ts";
import {KnownFunctionHeaderSegmentContentRule} from "../../belve/rule/implementations/known-function-header-segmentContent/KnownFunctionHeaderSegmentContentRule.ts";
import {OpeningCurlyBracketCharacterRule} from "../../belve/rule/implementations/opening-curly-bracket-character/OpeningCurlyBracketCharacterRule.ts";
import {OpeningRoundBracketCharacterRule} from "../../belve/rule/implementations/opening-round-bracket-character/OpeningRoundBracketCharacterRule.ts";
import {OpeningSquareBracketCharacterRule} from "../../belve/rule/implementations/opening-square-bracket-character/OpeningSquareBracketCharacterRule.ts";
import {OperatorRule} from "../../belve/rule/implementations/operator/OperatorRule.ts";
import {OptionalBlockStatementContentRule} from "../../belve/rule/implementations/optional-block-statement-content/OptionalBlockStatementContentRule.ts";
import {OptionalContentRule} from "../../belve/rule/implementations/optional-content/OptionalContentRule.ts";
import {OptionalFunctionCallStatementSegmentsRule} from "../../belve/rule/implementations/optional-function-call-statement-segments/OptionalFunctionCallStatementSegmentsRule.ts";
import {OptionalFunctionHeaderRule} from "../../belve/rule/implementations/optional-function-header/OptionalFunctionHeaderRule.ts";
import {OptionalFunctionHeaderSegmentsRule} from "../../belve/rule/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsRule.ts";
import {OptionalFunctionsRule} from "../../belve/rule/implementations/optional-functions/OptionalFunctionsRule.ts";
import {OptionalKnownFunctionCallStatementSegmentContentRule} from "../../belve/rule/implementations/optional-known-function-call-statement-segment-content/OptionalKnownFunctionCallStatementSegmentContentRule.ts";
import {OptionalKnownFunctionHeaderSegmentContentRule} from "../../belve/rule/implementations/optional-known-function-header-segment-content/OptionalKnownFunctionHeaderSegmentContentRule.ts";
import {OptionalSeparatedOptionalVariableNameSegmentsRule} from "../../belve/rule/implementations/optional-separated-optional-variable-name-segments/OptionalSeparatedOptionalVariableNameSegmentsRule.ts";
import {OptionalSeparatedStatementsRule} from "../../belve/rule/implementations/optional-separated-statements/OptionalSeparatedStatementsRule.ts";
import {OptionalStartingWithKnownFunctionCallStatementSegmentsRestRule} from "../../belve/rule/implementations/optional-starting-with-known-function-call-statement-segments-rest/OptionalStartingWithKnownFunctionCallStatementSegmentsRestRule.ts";
import {OptionalStartingWithKnownFunctionHeaderSegmentsRestRule} from "../../belve/rule/implementations/optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestRule.ts";
import {OptionalStartingWithUnknownFunctionCallStatementSegmentsRestRule} from "../../belve/rule/implementations/optional-starting-with-unknown-function-call-statement-segments-rest/OptionalStartingWithUnknownFunctionCallStatementSegmentsRestRule.ts";
import {OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule} from "../../belve/rule/implementations/optional-starting-with-unknown-function-header-segments-rest/OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule.ts";
import {OptionalStartingWithWordFunctionCallStatementSegmentsRestRule} from "../../belve/rule/implementations/optional-starting-with-word-function-call-statement-segments-rest/OptionalStartingWithWordFunctionCallStatementSegmentsRestRule.ts";
import {OptionalStartingWithWordFunctionHeaderSegmentsRestRule} from "../../belve/rule/implementations/optional-starting-with-word-function-header-segments-rest/OptionalStartingWithWordFunctionHeaderSegmentsRestRule.ts";
import {OptionalStatementsRule} from "../../belve/rule/implementations/optional-statements/OptionalStatementsRule.ts";
import {OptionalUnknownFunctionCallStatementSegmentContentRule} from "../../belve/rule/implementations/optional-unknown-function-call-statement-segment-content/OptionalUnknownFunctionCallStatementSegmentContentRule.ts";
import {OptionalUnknownFunctionHeaderSegmentContentRule} from "../../belve/rule/implementations/optional-unknown-function-header-segment-content/OptionalUnknownFunctionHeaderSegmentContentRule.ts";
import {OptionalVariableNameRule} from "../../belve/rule/implementations/optional-variable-name/OptionalVariableNameRule.ts";
import {OptionalVariableNameSegmentCharactersRule} from "../../belve/rule/implementations/optional-variable-name-segment-characters/OptionalVariableNameSegmentCharactersRule.ts";
import {OptionalVariableNameSegmentsRule} from "../../belve/rule/implementations/optional-variable-name-segments/OptionalVariableNameSegmentsRule.ts";
import {OptionalWhitespaceRule} from "../../belve/rule/implementations/optional-whitespace/OptionalWhitespaceRule.ts";
import {OptionalWhitespaceCharactersRule} from "../../belve/rule/implementations/optional-whitespace-characters/OptionalWhitespaceCharactersRule.ts";
import {OptionalWordCharactersRule} from "../../belve/rule/implementations/optional-word-characters/OptionalWordCharactersRule.ts";
import {OrOperatorRule} from "../../belve/rule/implementations/or-operator/OrOperatorRule.ts";
import {PaddedOptionalFunctionsRule} from "../../belve/rule/implementations/padded-optional-functions/PaddedOptionalFunctionsRule.ts";
import {PaddedOptionalStatementsRule} from "../../belve/rule/implementations/padded-optional-statements/PaddedOptionalStatementsRule.ts";
import {PaddedOptionalVariableNameRule} from "../../belve/rule/implementations/padded-optional-variable-name/PaddedOptionalVariableNameRule.ts";
import {SeparatedOptionalFunctionCallStatementSegmentsRule} from "../../belve/rule/implementations/separated-optional-function-call-statement-segments/SeparatedOptionalFunctionCallStatementSegmentsRule.ts";
import {SeparatedOptionalFunctionHeaderSegmentsRule} from "../../belve/rule/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsRule.ts";
import {SeparatedOptionalVariableNameSegmentsRule} from "../../belve/rule/implementations/separated-optional-variable-name-segments/SeparatedOptionalVariableNameSegmentsRule.ts";
import {SeparatedStatementsRule} from "../../belve/rule/implementations/separated-statements/SeparatedStatementsRule.ts";
import {StartingWithKnownFunctionCallStatementSegmentsRule} from "../../belve/rule/implementations/starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsRule.ts";
import {StartingWithKnownFunctionCallStatementSegmentsRestRule} from "../../belve/rule/implementations/starting-with-known-function-call-statement-segments-rest/StartingWithKnownFunctionCallStatementSegmentsRestRule.ts";
import {StartingWithKnownFunctionHeaderSegmentsRule} from "../../belve/rule/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsRule.ts";
import {StartingWithKnownFunctionHeaderSegmentsRestRule} from "../../belve/rule/implementations/starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestRule.ts";
import {StartingWithUnknownFunctionCallStatementSegmentsRule} from "../../belve/rule/implementations/starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsRule.ts";
import {StartingWithUnknownFunctionCallStatementSegmentsRestRule} from "../../belve/rule/implementations/starting-with-unknown-function-call-statement-segments-rest/StartingWithUnknownFunctionCallStatementSegmentsRestRule.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRule} from "../../belve/rule/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsRule.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRestRule} from "../../belve/rule/implementations/starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestRule.ts";
import {StartingWithWordFunctionCallStatementSegmentsRule} from "../../belve/rule/implementations/starting-with-word-function-call-statement-segments/StartingWithWordFunctionCallStatementSegmentsRule.ts";
import {StartingWithWordFunctionCallStatementSegmentsRestRule} from "../../belve/rule/implementations/starting-with-word-function-call-statement-segments-rest/StartingWithWordFunctionCallStatementSegmentsRestRule.ts";
import {StartingWithWordFunctionHeaderSegmentsRule} from "../../belve/rule/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsRule.ts";
import {StartingWithWordFunctionHeaderSegmentsRestRule} from "../../belve/rule/implementations/starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestRule.ts";
import {StatementRule} from "../../belve/rule/implementations/statement/StatementRule.ts";
import {StatementsRule} from "../../belve/rule/implementations/statements/StatementsRule.ts";
import {ThenOperatorRule} from "../../belve/rule/implementations/then-operator/ThenOperatorRule.ts";
import {UnknownFunctionCallStatementSegmentRule} from "../../belve/rule/implementations/unknown-function-call-statement-segment/UnknownFunctionCallStatementSegmentRule.ts";
import {UnknownFunctionCallStatementSegmentContentRule} from "../../belve/rule/implementations/unknown-function-call-statement-segment-content/UnknownFunctionCallStatementSegmentContentRule.ts";
import {UnknownFunctionHeaderSegmentRule} from "../../belve/rule/implementations/unknown-function-header-segment/UnknownFunctionHeaderSegmentRule.ts";
import {UnknownFunctionHeaderSegmentContentRule} from "../../belve/rule/implementations/unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentRule.ts";
import {VariableNameRule} from "../../belve/rule/implementations/variable-name/VariableNameRule.ts";
import {VariableNameSegmentRule} from "../../belve/rule/implementations/variable-name-segment/VariableNameSegmentRule.ts";
import {VariableNameSegmentCharacterRule} from "../../belve/rule/implementations/variable-name-segment-character/VariableNameSegmentCharacterRule.ts";
import {VariableNameSegmentCharactersRule} from "../../belve/rule/implementations/variable-name-segment-characters/VariableNameSegmentCharactersRule.ts";
import {VariableNameSegmentsRule} from "../../belve/rule/implementations/variable-name-segments/VariableNameSegmentsRule.ts";
import {WhitespaceRule} from "../../belve/rule/implementations/whitespace/WhitespaceRule.ts";
import {WhitespaceCharacterRule} from "../../belve/rule/implementations/whitespace-character/WhitespaceCharacterRule.ts";
import {WhitespaceCharactersRule} from "../../belve/rule/implementations/whitespace-characters/WhitespaceCharactersRule.ts";
import {WordRule} from "../../belve/rule/implementations/word/WordRule.ts";
import {WordCharacterRule} from "../../belve/rule/implementations/word-character/WordCharacterRule.ts";
import {WordCharactersRule} from "../../belve/rule/implementations/word-characters/WordCharactersRule.ts";
import {WordFunctionCallStatementSegmentRule} from "../../belve/rule/implementations/word-function-call-statement-segment/WordFunctionCallStatementSegmentRule.ts";
import {WordFunctionHeaderSegmentRule} from "../../belve/rule/implementations/word-function-header-segment/WordFunctionHeaderSegmentRule.ts";
import type {RuleById} from "../../belve/rule-by-id/RuleById.ts";
export const ruleById: RuleById = {
	BlockStatement: new BlockStatementRule(),
	BlockStatementContent: new BlockStatementContentRule(),
	ClosingCurlyBracketCharacter: new ClosingCurlyBracketCharacterRule(),
	ClosingRoundBracketCharacter: new ClosingRoundBracketCharacterRule(),
	ClosingSquareBracketCharacter: new ClosingSquareBracketCharacterRule(),
	Content: new ContentRule(),
	Empty: new EmptyRule(),
	Function: new FunctionRule(),
	FunctionBody: new FunctionBodyRule(),
	FunctionCallStatement: new FunctionCallStatementRule(),
	FunctionCallStatementSegments: new FunctionCallStatementSegmentsRule(),
	FunctionHeader: new FunctionHeaderRule(),
	FunctionHeaderSegments: new FunctionHeaderSegmentsRule(),
	Functions: new FunctionsRule(),
	KnownFunctionCallStatementSegment:
		new KnownFunctionCallStatementSegmentRule(),
	KnownFunctionCallStatementSegmentContent:
		new KnownFunctionCallStatementSegmentContentRule(),
	KnownFunctionHeaderSegment: new KnownFunctionHeaderSegmentRule(),
	KnownFunctionHeaderSegmentContent:
		new KnownFunctionHeaderSegmentContentRule(),
	OpeningCurlyBracketCharacter: new OpeningCurlyBracketCharacterRule(),
	OpeningRoundBracketCharacter: new OpeningRoundBracketCharacterRule(),
	OpeningSquareBracketCharacter: new OpeningSquareBracketCharacterRule(),
	Operator: new OperatorRule(),
	OptionalBlockStatementContent: new OptionalBlockStatementContentRule(),
	OptionalContent: new OptionalContentRule(),
	OptionalFunctionCallStatementSegments:
		new OptionalFunctionCallStatementSegmentsRule(),
	OptionalFunctionHeader: new OptionalFunctionHeaderRule(),
	OptionalFunctionHeaderSegments: new OptionalFunctionHeaderSegmentsRule(),
	OptionalFunctions: new OptionalFunctionsRule(),
	OptionalKnownFunctionCallStatementSegmentContent:
		new OptionalKnownFunctionCallStatementSegmentContentRule(),
	OptionalKnownFunctionHeaderSegmentContent:
		new OptionalKnownFunctionHeaderSegmentContentRule(),
	OptionalSeparatedOptionalVariableNameSegments:
		new OptionalSeparatedOptionalVariableNameSegmentsRule(),
	OptionalSeparatedStatements: new OptionalSeparatedStatementsRule(),
	OptionalStartingWithKnownFunctionCallStatementSegmentsRest:
		new OptionalStartingWithKnownFunctionCallStatementSegmentsRestRule(),
	OptionalStartingWithKnownFunctionHeaderSegmentsRest:
		new OptionalStartingWithKnownFunctionHeaderSegmentsRestRule(),
	OptionalStartingWithUnknownFunctionCallStatementSegmentsRest:
		new OptionalStartingWithUnknownFunctionCallStatementSegmentsRestRule(),
	OptionalStartingWithUnknownFunctionHeaderSegmentsRest:
		new OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule(),
	OptionalStartingWithWordFunctionCallStatementSegmentsRest:
		new OptionalStartingWithWordFunctionCallStatementSegmentsRestRule(),
	OptionalStartingWithWordFunctionHeaderSegmentsRest:
		new OptionalStartingWithWordFunctionHeaderSegmentsRestRule(),
	OptionalStatements: new OptionalStatementsRule(),
	OptionalUnknownFunctionCallStatementSegmentContent:
		new OptionalUnknownFunctionCallStatementSegmentContentRule(),
	OptionalUnknownFunctionHeaderSegmentContent:
		new OptionalUnknownFunctionHeaderSegmentContentRule(),
	OptionalVariableName: new OptionalVariableNameRule(),
	OptionalVariableNameSegmentCharacters:
		new OptionalVariableNameSegmentCharactersRule(),
	OptionalVariableNameSegments: new OptionalVariableNameSegmentsRule(),
	OptionalWhitespace: new OptionalWhitespaceRule(),
	OptionalWhitespaceCharacters: new OptionalWhitespaceCharactersRule(),
	OptionalWordCharacters: new OptionalWordCharactersRule(),
	OrOperator: new OrOperatorRule(),
	PaddedOptionalFunctions: new PaddedOptionalFunctionsRule(),
	PaddedOptionalStatements: new PaddedOptionalStatementsRule(),
	PaddedOptionalVariableName: new PaddedOptionalVariableNameRule(),
	SeparatedOptionalFunctionCallStatementSegments:
		new SeparatedOptionalFunctionCallStatementSegmentsRule(),
	SeparatedOptionalFunctionHeaderSegments:
		new SeparatedOptionalFunctionHeaderSegmentsRule(),
	SeparatedOptionalVariableNameSegments:
		new SeparatedOptionalVariableNameSegmentsRule(),
	SeparatedStatements: new SeparatedStatementsRule(),
	StartingWithKnownFunctionCallStatementSegments:
		new StartingWithKnownFunctionCallStatementSegmentsRule(),
	StartingWithKnownFunctionCallStatementSegmentsRest:
		new StartingWithKnownFunctionCallStatementSegmentsRestRule(),
	StartingWithKnownFunctionHeaderSegments:
		new StartingWithKnownFunctionHeaderSegmentsRule(),
	StartingWithKnownFunctionHeaderSegmentsRest:
		new StartingWithKnownFunctionHeaderSegmentsRestRule(),
	StartingWithUnknownFunctionCallStatementSegments:
		new StartingWithUnknownFunctionCallStatementSegmentsRule(),
	StartingWithUnknownFunctionCallStatementSegmentsRest:
		new StartingWithUnknownFunctionCallStatementSegmentsRestRule(),
	StartingWithUnknownFunctionHeaderSegments:
		new StartingWithUnknownFunctionHeaderSegmentsRule(),
	StartingWithUnknownFunctionHeaderSegmentsRest:
		new StartingWithUnknownFunctionHeaderSegmentsRestRule(),
	StartingWithWordFunctionCallStatementSegments:
		new StartingWithWordFunctionCallStatementSegmentsRule(),
	StartingWithWordFunctionCallStatementSegmentsRest:
		new StartingWithWordFunctionCallStatementSegmentsRestRule(),
	StartingWithWordFunctionHeaderSegments:
		new StartingWithWordFunctionHeaderSegmentsRule(),
	StartingWithWordFunctionHeaderSegmentsRest:
		new StartingWithWordFunctionHeaderSegmentsRestRule(),
	Statement: new StatementRule(),
	Statements: new StatementsRule(),
	ThenOperator: new ThenOperatorRule(),
	UnknownFunctionCallStatementSegment:
		new UnknownFunctionCallStatementSegmentRule(),
	UnknownFunctionCallStatementSegmentContent:
		new UnknownFunctionCallStatementSegmentContentRule(),
	UnknownFunctionHeaderSegment: new UnknownFunctionHeaderSegmentRule(),
	UnknownFunctionHeaderSegmentContent:
		new UnknownFunctionHeaderSegmentContentRule(),
	VariableName: new VariableNameRule(),
	VariableNameSegment: new VariableNameSegmentRule(),
	VariableNameSegmentCharacter: new VariableNameSegmentCharacterRule(),
	VariableNameSegmentCharacters: new VariableNameSegmentCharactersRule(),
	VariableNameSegments: new VariableNameSegmentsRule(),
	Whitespace: new WhitespaceRule(),
	WhitespaceCharacter: new WhitespaceCharacterRule(),
	WhitespaceCharacters: new WhitespaceCharactersRule(),
	Word: new WordRule(),
	WordCharacter: new WordCharacterRule(),
	WordCharacters: new WordCharactersRule(),
	WordFunctionCallStatementSegment: new WordFunctionCallStatementSegmentRule(),
	WordFunctionHeaderSegment: new WordFunctionHeaderSegmentRule(),
};
