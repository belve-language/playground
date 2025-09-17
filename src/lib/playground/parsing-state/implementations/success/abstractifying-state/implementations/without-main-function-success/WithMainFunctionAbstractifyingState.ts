import {AbstractifyingState} from "../../AbstractifyingState.ts";
import {withoutMainFunctionAbstractifyingStateTypeName} from "./type-name/withoutMainFunctionAbstractifyingStateTypeName.ts";
export class WithoutMainFunctionAbstractifyingState extends AbstractifyingState<
	typeof withoutMainFunctionAbstractifyingStateTypeName
> {
	public constructor() {
		super(withoutMainFunctionAbstractifyingStateTypeName);
	}
}
