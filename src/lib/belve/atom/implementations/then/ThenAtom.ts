import type {Character} from "../../../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
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
	public static create<
		LeftSubAtom extends
			| EmptyAtom
			| NonTerminalAtom<ConcreteSyntaxTreeNode<Atom>>
			| TerminalAtom<Character>,
		RightSubAtom extends Atom,
	>(
		leftSubAtom: LeftSubAtom,
		rightSubAtom: RightSubAtom,
	): ThenAtom<LeftSubAtom, RightSubAtom> {
		const spanIndexes = new SpanIndexes(
			leftSubAtom.spanIndexes.from,
			rightSubAtom.spanIndexes.until,
		);
		const atom = new ThenAtom(leftSubAtom, rightSubAtom, spanIndexes);
		return atom;
	}
	private constructor(
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
