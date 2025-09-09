import type {OptionalStatementsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {Statements} from "../../../../statements/Statements.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalStatementsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStatementsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalStatementsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<Statements> {
		const statements = this.atom.node;
		const statementsAbstractifyingResult = statements.abstractify();
		switch (statementsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStatements = statementsAbstractifyingResult.data;
				if (abstractifiedStatements === null) {
					const optionalStatementsAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult("Expected statements to be present.");
					return optionalStatementsAbstractifyingResult;
				} else {
					const optionalStatementsAbstractifyingResult: SuccessAbstractifyingResult<Statements> =
						new SuccessAbstractifyingResult<Statements>(
							abstractifiedStatements,
						);
					return optionalStatementsAbstractifyingResult;
				}
			}
			case errorAbstractifyingResultTypeName: {
				const optionalStatementsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(statementsAbstractifyingResult.message);
				return optionalStatementsAbstractifyingResult;
			}
		}
	}
}
