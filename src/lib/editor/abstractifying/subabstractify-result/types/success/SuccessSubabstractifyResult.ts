import type {SuccessParseResultData} from "../../../../parsing/parse-result/types/success/data/SuccessParseResultData.ts";
import type {successParseResultTypeName} from "../../../../parsing/parse-result/types/success/type-name/successParseResultTypeName.ts";
import type {SubabstractifyResult} from "../../SubabstractifyResult.ts";
export type SuccessSubabstractifyResult = SubabstractifyResult<
	typeof successParseResultTypeName,
	SuccessParseResultData
>;
