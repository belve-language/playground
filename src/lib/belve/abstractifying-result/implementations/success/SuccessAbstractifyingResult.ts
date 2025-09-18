import {successAbstractifyingResultTypeName} from "./type-name/successAbstractifyingResultTypeName.ts";
import {AbstractifyingResult} from "../../AbstractifyingResult.ts";
export class SuccessAbstractifyingResult<Data> extends AbstractifyingResult<
	typeof successAbstractifyingResultTypeName
> {
	public constructor(data: Data) {
		super(successAbstractifyingResultTypeName);
		this.data = data;
	}
	public readonly data: Data;
}
