import type {Character} from "../../../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Atom} from "../../Atom.ts";
import type {EmptyAtom} from "../empty/EmptyAtom.ts";
import type {NonTerminalAtom} from "../non-terminal/NonTermnalAtom.ts";
import type {TerminalAtom} from "../terminal/TerminalAtom.ts";
export class ThenAtom<
	LeftSubAtom extends
		| EmptyAtom
		| NonTerminalAtom<ConcreteSyntaxTreeNode<Atom>>
		| TerminalAtom<Character>,
	RightSubAtom extends Atom,
> extends Atom {
	public constructor(
		leftSubAtom: LeftSubAtom,
		rightSubAtom: RightSubAtom,
		spanIndexes: SpanIndexes,
	) {
		super(spanIndexes);
		this.leftSubAtom = leftSubAtom;
		this.rightSubAtom = rightSubAtom;
	}
	public readonly leftSubAtom: LeftSubAtom;
	public readonly rightSubAtom: RightSubAtom;
}
