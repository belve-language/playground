import type {Variables} from "../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export function computeKnowns(
	header: FunctionHeaderAbstractSyntaxTreeNode | null,
	knownsValues: readonly unknown[],
): Variables {
	if (header === null) {
		return {};
	} else {
		const knowns = Object.fromEntries(
			header.knownsNames.map((name, index) => {
				return [name, knownsValues[index]];
			}),
		);
		return knowns;
	}
}
