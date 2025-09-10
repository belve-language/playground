import {RuleParsingResult} from "../../RuleParsingResult.ts";
import {unexpectedFinalizingRuleParsingResultTypeName} from "./type-name/unexpectedFinalizingRuleParsingResultTypeName.ts";
export class UnexpectedFinalizingRuleParsingResult extends RuleParsingResult<
	typeof unexpectedFinalizingRuleParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingRuleParsingResultTypeName);
	}
}
