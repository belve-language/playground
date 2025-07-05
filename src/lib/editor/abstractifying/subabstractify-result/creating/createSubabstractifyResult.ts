import type {SubabstractifyResult} from "../SubabstractifyResult.ts";
export function createSubabstractifyResult<
	TypeNameToUse extends string,
	DataToUse,
>(
	typeName: TypeNameToUse,
	data: DataToUse,
): SubabstractifyResult<TypeNameToUse, DataToUse> {
	return {typeName, data};
}
