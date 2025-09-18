import {unexpectedFinalizingExpressionParsingResultTypeName} from "./type-name/unexpectedFinalizingExpressionParsingResultTypeName.ts";
import {ExpressionParsingResult} from "../../ExpressionParsingResult.ts";
export class UnexpectedFinalizingExpressionParsingResult extends ExpressionParsingResult<
	typeof unexpectedFinalizingExpressionParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingExpressionParsingResultTypeName);
	}
}
