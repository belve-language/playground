import type {Index} from "../../../../../index/Index.ts";
export type LeafConcreteSyntaxTreeNodeData<CharacterToUse extends string> =
	Readonly<{character: CharacterToUse; spanIndex: Index}>;
