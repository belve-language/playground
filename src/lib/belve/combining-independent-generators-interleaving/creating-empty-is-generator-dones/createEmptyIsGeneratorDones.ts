export function createEmptyIsGeneratorDones(
	generators: readonly Generator<unknown, void, void>[],
): readonly boolean[] {
	const isGeneratorDones: readonly boolean[] = generators.map(
		(generator: Generator<unknown, void, void>): false => {
			const isGeneratorDone: false = false;
			return isGeneratorDone;
		},
	);
	return isGeneratorDones;
}
