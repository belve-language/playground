import {unexpectedFinalizingExpressionFinalizingParsingResultTypeName} from "./type-name/unexpectedFinalizingExpressionFinalizingParsingResultTypeName.ts";
import {ParsingResult} from "../../../parsing-result/ParsingResult.ts";
export class UnexpectedFinalizingExpressionFinalizingParsingResult extends ParsingResult<
	typeof unexpectedFinalizingExpressionFinalizingParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingExpressionFinalizingParsingResultTypeName);
	}
}
