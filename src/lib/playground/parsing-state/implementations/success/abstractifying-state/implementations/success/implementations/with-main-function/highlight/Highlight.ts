import type {SpanIndexes} from "../../../../../../../../../../belve/span-indexes/SpanIndexes.ts";
import type {Variables} from "../../../../../../../../../../belve/variables/Variables.ts";
export abstract class Highlight<TypeName extends string> {
	public constructor(
		spanIndexes: SpanIndexes,
		typeName: TypeName,
		variables: Variables,
	) {
		this.spanIndexes = spanIndexes;
		this.typeName = typeName;
		this.variables = variables;
	}
	public readonly spanIndexes: SpanIndexes;
	public readonly typeName: TypeName;
	public readonly variables: Variables;
}
