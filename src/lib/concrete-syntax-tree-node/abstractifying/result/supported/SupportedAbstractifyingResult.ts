import type {ErrorAbstractifyingResult} from "../implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../implementations/success/SuccessAbstractifyingResult.ts";
export type SupportedAbstractifyingResult<Data> =
	| ErrorAbstractifyingResult
	| SuccessAbstractifyingResult<Data>;
