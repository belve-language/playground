import {unexpectedFinalizingRuleFinalizingParsingResultTypeName} from "./type-name/unexpectedFinalizingRuleFinalizingParsingResultTypeName.ts";
import {RuleParsingResult} from "../../../rule-parsing-result/RuleParsingResult.ts";
export class UnexpectedFinalizingRuleFinalizingParsingResult extends RuleParsingResult<
	typeof unexpectedFinalizingRuleFinalizingParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingRuleFinalizingParsingResultTypeName);
	}
}
