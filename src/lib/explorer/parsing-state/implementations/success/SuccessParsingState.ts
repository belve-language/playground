import {ParsingState} from "../../ParsingState.ts";
import {successParsingStateTypeName} from "./type-name/successParsingStateTypeName.ts";
export class SuccessParsingState extends ParsingState<
	typeof successParsingStateTypeName
> {
	public constructor(abstractifyingState: SupportedAbstractifyingState) {
		super(successParsingStateTypeName);
		this.abstractifyingState = abstractifyingState;
	}
	public readonly abstractifyingState: SupportedAbstractifyingState;
}
