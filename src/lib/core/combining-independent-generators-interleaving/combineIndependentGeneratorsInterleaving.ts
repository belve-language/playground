import {createEmptyIsGeneratorDones} from "./creating-empty-is-generator-dones/createEmptyIsGeneratorDones.ts";
export function* combineIndependentGeneratorsInterleaving<Result>(
	...generators: Generator<Result, void, void>[]
): Generator<Result, void, void> {
	let isGeneratorDones = createEmptyIsGeneratorDones(generators);
	do {
		for (const [index, generator] of generators.entries()) {
			if (!isGeneratorDones[index]) {
				const result = generator.next();
				if (result.done) {
					isGeneratorDones = isGeneratorDones.with(index, true);
				} else {
					yield result.value;
				}
			}
		}
	} while (
		!isGeneratorDones.every((isDone) => {
			return isDone;
		})
	);
}
