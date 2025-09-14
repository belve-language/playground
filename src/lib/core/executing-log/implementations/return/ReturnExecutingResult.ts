import type {ReturnExecutingResultData} from "./data/ReturnExecutingResultData.ts";
import {returnExecutingResultTypeName} from "./type-name/returnExecutingResultTypeName.ts";
import {ExecutingResult} from "../../ExecutingResult.ts";
export class ReturnExecutingResult extends ExecutingResult<
	ReturnExecutingResultData,
	typeof returnExecutingResultTypeName
> {
	public constructor(variables: Variables) {
		super({variables: variables}, returnExecutingResultTypeName);
	}
}
