import {unexpectedCharacterExpressionParsingResultTypeName} from "./type-name/unexpectedCharacterExpressionParsingResultTypeName.ts";
import type {Index} from "../../../index/Index.ts";
import {ParsingResult} from "../../../parsing-result/ParsingResult.ts";
export class UnexpectedCharacterExpressionParsingResult extends ParsingResult<
	typeof unexpectedCharacterExpressionParsingResultTypeName
> {
	public constructor(index: Index) {
		super(unexpectedCharacterExpressionParsingResultTypeName);
		this.index = index;
	}
	public readonly index: Index;
}
