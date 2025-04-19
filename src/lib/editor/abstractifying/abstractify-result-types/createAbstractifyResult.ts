import type {AbstractifyResult} from "../AbstractifyResult.ts";
export function createAbstractifyResult<
	TypeNameToUse extends string,
	DataToUse,
>(
	typeName: TypeNameToUse,
	data: DataToUse,
): AbstractifyResult<TypeNameToUse, DataToUse> {
	return {typeName, data};
}
