import type {Index2} from "./Index2.ts";
export function* generateIndex2Diagonally(): Generator<Index2, void, void> {
	let sum = 0;
	for (;;) {
		for (let in1Index = 0; in1Index <= sum; in1Index = in1Index + 1) {
			const in2Index = sum - in1Index;
			yield {in1: in1Index, in2: in2Index};
		}
		sum = sum + 1;
	}
}
