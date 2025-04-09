import type {AbstractifyResult} from "../AbstractifyResult.ts";
export function createAbstractifyResult<StatusToUse extends string, DataToUse>(
	status: StatusToUse,
	data: DataToUse,
): AbstractifyResult<StatusToUse, DataToUse> {
	return {status, data};
}
