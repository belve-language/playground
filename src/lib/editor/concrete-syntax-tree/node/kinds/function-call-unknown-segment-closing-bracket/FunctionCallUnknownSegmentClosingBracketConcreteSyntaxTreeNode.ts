import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../types/leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingSquareBracketCharacter
	>;
