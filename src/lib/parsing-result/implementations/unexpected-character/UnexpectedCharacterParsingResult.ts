import {unexpectedCharacterParsingResultTypeName} from "./type-name/unexpectedCharacterParsingResultTypeName.ts";
import {ParsingResult} from "../../ParsingResult.ts";
export class UnexpectedCharacterParsingResult extends ParsingResult<
	typeof unexpectedCharacterParsingResultTypeName
> {
	public constructor() {
		super(unexpectedCharacterParsingResultTypeName);
	}
}
