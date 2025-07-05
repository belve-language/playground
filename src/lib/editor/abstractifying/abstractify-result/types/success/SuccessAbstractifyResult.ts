import type {SuccessParseResultData} from "../../../../parsing/parse-result/types/success/data/SuccessParseResultData.ts";
import type {successParseResultTypeName} from "../../../../parsing/parse-result/types/success/type-name/successParseResultTypeName.ts";
import type {AbstractifyResult} from "../../AbstractifyResult.ts";
export type SuccessAbstractifyResult = AbstractifyResult<
	typeof successAbstractifyResultTypeName,
	SuccessAbstractifyResultData
>;
