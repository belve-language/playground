import type {Atom} from "../../../atom/Atom.ts";
import type {Character} from "../../../character/Character.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../index/Index.ts";
import {RuleParsingResult} from "../../RuleParsingResult.ts";
import {successRuleParsingResultTypeName} from "./type-name/successRuleParsingResultTypeName.ts";
export class SuccessRuleParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> extends RuleParsingResult<typeof successRuleParsingResultTypeName> {
	public constructor(
		nextIndex: Index,
		node: NodeToUse,
		remainingCharacters: readonly Character[],
	) {
		super(successRuleParsingResultTypeName);
		this.nextIndex = nextIndex;
		this.node = node;
		this.remainingCharacters = remainingCharacters;
	}
	public readonly nextIndex: Index;
	public readonly node: NodeToUse;
	public readonly remainingCharacters: readonly Character[];
}
