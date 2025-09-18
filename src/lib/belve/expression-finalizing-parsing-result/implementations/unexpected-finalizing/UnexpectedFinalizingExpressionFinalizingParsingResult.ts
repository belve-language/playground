import {unexpectedFinalizingExpressionFinalizingParsingResultTypeName} from "./type-name/unexpectedFinalizingExpressionFinalizingParsingResultTypeName.ts";
import {ExpressionFinalizingParsingResult} from "../../ExpressionFinalizingParsingResult.ts";
export class UnexpectedFinalizingExpressionFinalizingParsingResult extends ExpressionFinalizingParsingResult<
	typeof unexpectedFinalizingExpressionFinalizingParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingExpressionFinalizingParsingResultTypeName);
	}
}
