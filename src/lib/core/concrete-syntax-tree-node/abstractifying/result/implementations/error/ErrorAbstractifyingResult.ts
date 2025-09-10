import {AbstractifyingResult} from "../../AbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "./type-name/errorAbstractifyingResultTypeName.ts";
export class ErrorAbstractifyingResult extends AbstractifyingResult<
	typeof errorAbstractifyingResultTypeName
> {
	public constructor(message: string) {
		super(errorAbstractifyingResultTypeName);
		this.message = message;
	}
	public readonly message: string;
}
