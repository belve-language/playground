import {RuleParsingResult} from "../../RuleParsingResult.ts";
import {unexpectedCharacterRuleParsingResultTypeName} from "./type-name/unexpectedCharacterRuleParsingResultTypeName.ts";
export class UnexpectedCharacterRuleParsingResult extends RuleParsingResult<
	typeof unexpectedCharacterRuleParsingResultTypeName
> {
	public constructor() {
		super(unexpectedCharacterRuleParsingResultTypeName);
	}
}
