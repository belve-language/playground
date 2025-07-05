import type {AbstractifyResult} from "../../AbstractifyResult.ts";
import type {ErrorAbstractifyResultData} from "./data/ErrorAbstractifyResultData.ts";
import type {errorAbstractifyResultTypeName} from "./type-name/errorAbstractifyResultTypeName.ts";
export type ErrorAbstractifyResult = AbstractifyResult<
	typeof errorAbstractifyResultTypeName,
	ErrorAbstractifyResultData
>;
