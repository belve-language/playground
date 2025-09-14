export function createEmptyIsGeneratorDones(
	generators: readonly Generator<unknown, void, void>[],
): readonly boolean[] {
	const isGeneratorDones = generators.map((generator) => {
		return false;
	});
	return isGeneratorDones;
}
