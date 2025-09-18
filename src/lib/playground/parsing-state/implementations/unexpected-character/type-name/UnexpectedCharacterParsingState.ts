import {unexpectedCharacterParsingStateTypeName} from "./unexpectedCharacterParsingStateTypeName.ts";
import type {Index} from "../../../../../belve/index/Index.ts";
import {ParsingState} from "../../../ParsingState.ts";
export class UnexpectedCharacterParsingState extends ParsingState<
	typeof unexpectedCharacterParsingStateTypeName
> {
	public constructor(index: Index) {
		super(unexpectedCharacterParsingStateTypeName);
		this.index = index;
	}
	public readonly index: Index;
}
