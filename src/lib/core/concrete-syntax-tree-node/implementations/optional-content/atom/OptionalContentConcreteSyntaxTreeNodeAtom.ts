import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ContentConcreteSyntaxTreeNode} from "../../content/ContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
export type OptionalContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<ContentConcreteSyntaxTreeNode>
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>;
