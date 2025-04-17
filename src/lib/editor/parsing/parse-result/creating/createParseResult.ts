import type {ParseResult} from "../ParseResult.ts";
export function createParseResult<TypeNameToUse extends string, DataToUse>(
	typeName: TypeNameToUse,
	data: DataToUse,
): ParseResult<TypeNameToUse, DataToUse> {
	return {typeName, data};
}
