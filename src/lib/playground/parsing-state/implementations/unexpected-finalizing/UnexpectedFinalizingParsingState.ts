import {ParsingState} from "../../ParsingState.ts";
import {unexpectedFinalizingParsingStateTypeName} from "./type-name/unexpectedFinalizingParsingStateTypeName.ts";
export class UnexpectedFinalizingParsingState extends ParsingState<
	typeof unexpectedFinalizingParsingStateTypeName
> {
	public constructor() {
		super(unexpectedFinalizingParsingStateTypeName);
	}
}
