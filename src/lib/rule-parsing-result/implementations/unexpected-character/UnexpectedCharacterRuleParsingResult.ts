import type {Index} from "../../../index/Index.ts";
import {RuleParsingResult} from "../../RuleParsingResult.ts";
import {unexpectedCharacterRuleParsingResultTypeName} from "./type-name/unexpectedCharacterRuleParsingResultTypeName.ts";
export class UnexpectedCharacterRuleParsingResult extends RuleParsingResult<
	typeof unexpectedCharacterRuleParsingResultTypeName
> {
	public constructor(index: Index) {
		super(unexpectedCharacterRuleParsingResultTypeName);
		this.index = index;
	}
	public readonly index: Index;
}
