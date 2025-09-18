import {AbstractifyingState} from "../../AbstractifyingState.ts";
import {errorAbstractifyingStateTypeName} from "./type-name/errorAbstractifyingStateTypeName.ts";
export class ErrorAbstractifyingState extends AbstractifyingState<
	typeof errorAbstractifyingStateTypeName
> {
	public constructor(message: string) {
		super(errorAbstractifyingStateTypeName);
		this.message = message;
	}
	public readonly message: string;
}
