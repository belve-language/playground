import type {FailureHighlight} from "../implementations/failure/FailureHighlight.ts";
import type {StepHighlight} from "../implementations/step/StepHighlight.ts";
import type {SuccessHighlight} from "../implementations/success/SuccessHighlight.ts";
export type SupportedHighlight =
	| FailureHighlight
	| StepHighlight
	| SuccessHighlight;
