import type {FinalizeResult} from "../../FinalizeResult.ts";
export type ErrorFinalizeResult = FinalizeResult<
	"error",
	Readonly<{message: string}>
>;
