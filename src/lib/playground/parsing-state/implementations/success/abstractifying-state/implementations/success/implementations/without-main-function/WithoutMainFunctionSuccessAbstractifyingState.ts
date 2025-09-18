import {SuccessAbstractifyingState} from "../../SuccessAbstractifyingState.ts";
import {withoutMainFunctionSuccessAbstractifyingStateSubTypeName} from "./sub-type-name/withoutMainFunctionSuccessAbstractifyingStateSubTypeName.ts";
export class WithoutMainFunctionSuccessAbstractifyingState extends SuccessAbstractifyingState<
	typeof withoutMainFunctionSuccessAbstractifyingStateSubTypeName
> {
	public constructor() {
		super(withoutMainFunctionSuccessAbstractifyingStateSubTypeName);
	}
}
