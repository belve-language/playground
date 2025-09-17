import {ParsingState} from "../../ParsingState.ts";
import {extraCharactersParsingStateTypeName} from "./type-name/extraCharactersParsingStateTypeName.ts";
export class ExtraCharactersParsingState extends ParsingState<
	typeof extraCharactersParsingStateTypeName
> {
	public constructor() {
		super(extraCharactersParsingStateTypeName);
	}
}
