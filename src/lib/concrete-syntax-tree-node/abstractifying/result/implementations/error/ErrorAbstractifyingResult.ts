import type {ErrorAbstractifyingResultData} from "./data/DataAbstractifyingResultData.ts";
import {AbstractifyingResult} from "../../AbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "./type-name/errorAbstractifyingResultTypeName.ts";
export class ErrorAbstractifyingResult extends AbstractifyingResult<
	ErrorAbstractifyingResultData,
	typeof errorAbstractifyingResultTypeName
> {
	public constructor(message: string) {
		super({message: message}, errorAbstractifyingResultTypeName);
	}
}
