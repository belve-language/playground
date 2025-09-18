import {AbstractifyingState} from "../../AbstractifyingState.ts";
import {successAbstractifyingStateTypeName} from "./type-name/successAbstractifyingStateTypeName.ts";
export abstract class SuccessAbstractifyingState<
	SubTypeName extends string,
> extends AbstractifyingState<typeof successAbstractifyingStateTypeName> {
	protected constructor(subTypeName: SubTypeName) {
		super(successAbstractifyingStateTypeName);
		this.subTypeName = subTypeName;
	}
	public readonly subTypeName: SubTypeName;
}
