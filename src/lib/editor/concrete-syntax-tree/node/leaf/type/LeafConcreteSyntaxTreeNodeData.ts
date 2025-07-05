import type {Character} from "../../../../../character/Character.ts";
import type {Index} from "../../../../index/Index.ts";
export type LeafConcreteSyntaxTreeNodeData<CharacterToUse extends Character> =
	Readonly<{character: CharacterToUse; spanIndex: Index}>;
