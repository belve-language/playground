import {unexpectedCharacterExpressionParsingResultTypeName} from "./type-name/unexpectedCharacterExpressionParsingResultTypeName.ts";
import type {Index} from "../../../index/Index.ts";
import {ExpressionParsingResult} from "../../ExpressionParsingResult.ts";
export class UnexpectedCharacterExpressionParsingResult extends ExpressionParsingResult<
	typeof unexpectedCharacterExpressionParsingResultTypeName
> {
	public constructor(index: Index) {
		super(unexpectedCharacterExpressionParsingResultTypeName);
		this.index = index;
	}
	public readonly index: Index;
}
