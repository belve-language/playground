import type {ParsingTableRow} from "./row/ParsingTableRow.ts";
import type {Atom} from "../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Rule} from "../rule/Rule.ts";
export type ParsingTable = ReadonlyMap<
	Rule<ConcreteSyntaxTreeNode<Atom>>,
	ParsingTableRow<Atom>
>;
