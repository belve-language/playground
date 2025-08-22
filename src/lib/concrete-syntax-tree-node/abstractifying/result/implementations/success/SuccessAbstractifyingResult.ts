import {successAbstractifyingResultTypeName} from "./type-name/successAbstractifyingResultTypeName.ts";
import {AbstractifyingResult} from "../../AbstractifyingResult.ts";
export class SuccessAbstractifyingResult<Data> extends AbstractifyingResult<
	Data,
	typeof successAbstractifyingResultTypeName
> {
	public constructor(data: Data) {
		super(data, successAbstractifyingResultTypeName);
	}
}
