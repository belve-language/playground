import {unexpectedCharacterParsingResultTypeName} from "./type-name/unexpectedCharacterParsingResultTypeName.ts";
import type {Index} from "../../../index/Index.ts";
import {ParsingResult} from "../../ParsingResult.ts";
export class UnexpectedCharacterParsingResult extends ParsingResult<
	typeof unexpectedCharacterParsingResultTypeName
> {
	public constructor(index: Index) {
		super(unexpectedCharacterParsingResultTypeName);
		this.index = index;
	}
	public readonly index: Index;
}
