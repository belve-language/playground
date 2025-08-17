import type {Character} from "../../../../../../character/Character.ts";
import type {Index} from "../../../../../../index/Index.ts";
export type ErrorFeedingResultData = {
	readonly character: Character;
	readonly index: Index;
	readonly message: string;
};
