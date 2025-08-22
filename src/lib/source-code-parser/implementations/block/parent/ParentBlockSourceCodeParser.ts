import type {BlockBranchConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree-node/implementations/branch/implementations/block/BlockBranchConcreteSyntaxTreeNode.ts";
import type {SourceCodeParser} from "../../../SourceCodeParser.ts";
export interface ParentBlockSourceCodeParser extends SourceCodeParser {
	restore(block: BlockBranchConcreteSyntaxTreeNode): SourceCodeParser;
}
