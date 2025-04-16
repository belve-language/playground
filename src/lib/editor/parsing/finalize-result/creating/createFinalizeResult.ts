import type {FinalizeResult} from "../FinalizeResult.ts";
export function createFinalizeResult<TypeNameToUse extends string, DataToUse>(
	typeName: TypeNameToUse,
	data: DataToUse,
): FinalizeResult<TypeNameToUse, DataToUse> {
	return {typeName, data};
}
