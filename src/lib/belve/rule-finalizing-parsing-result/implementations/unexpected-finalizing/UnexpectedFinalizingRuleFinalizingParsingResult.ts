import {unexpectedFinalizingRuleFinalizingParsingResultTypeName} from "./type-name/unexpectedFinalizingRuleFinalizingParsingResultTypeName.ts";
import {RuleFinalizingParsingResult} from "../../RuleFinalizingParsingResult.ts";
export class UnexpectedFinalizingRuleFinalizingParsingResult extends RuleFinalizingParsingResult<
	typeof unexpectedFinalizingRuleFinalizingParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingRuleFinalizingParsingResultTypeName);
	}
}
