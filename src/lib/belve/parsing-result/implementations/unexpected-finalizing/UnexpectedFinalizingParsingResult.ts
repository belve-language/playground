import {unexpectedFinalizingParsingResultTypeName} from "./type-name/unexpectedFinalizingParsingResultTypeName.ts";
import {ParsingResult} from "../../ParsingResult.ts";
export class UnexpectedFinalizingParsingResult extends ParsingResult<
	typeof unexpectedFinalizingParsingResultTypeName
> {
	public constructor() {
		super(unexpectedFinalizingParsingResultTypeName);
	}
}
