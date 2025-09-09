import {extraCharactersParsingResultTypeName} from "./type-name/extraCharactersParsingResultTypeName.ts";
import {ParsingResult} from "../../ParsingResult.ts";
export class ExtraCharactersParsingResult extends ParsingResult<
	typeof extraCharactersParsingResultTypeName
> {
	public constructor() {
		super(extraCharactersParsingResultTypeName);
	}
}
