import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../leaf/LeafConcreteSyntaxTreeNode.ts";
import type {functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName,
		ClosingSquareBracketCharacter
	>;
