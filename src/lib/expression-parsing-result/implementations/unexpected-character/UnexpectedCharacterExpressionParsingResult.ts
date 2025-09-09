import {unexpectedCharacterExpressionParsingResultTypeName} from "./type-name/unexpectedCharacterExpressionParsingResultTypeName.ts";
import {ParsingResult} from "../../../parsing-result/ParsingResult.ts";
export class UnexpectedCharacterExpressionParsingResult extends ParsingResult<
	typeof unexpectedCharacterExpressionParsingResultTypeName
> {
	public constructor() {
		super(unexpectedCharacterExpressionParsingResultTypeName);
	}
}
