import {unexpectedFinalizingExpressionParsingResultTypeName} from "./type-name/unexpectedFinalizingExpressionParsingResultTypeName.ts";
import {ParsingResult} from "../../../parsing-result/ParsingResult.ts";
export class UnexpectedFinalizingExpressionParsingResult extends ParsingResult<
	typeof unexpectedFinalizingExpressionParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingExpressionParsingResultTypeName);
	}
}
