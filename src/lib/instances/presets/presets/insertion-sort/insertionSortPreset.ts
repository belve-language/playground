import type {Preset} from "../../../../playground/preset/Preset.ts";
export const insertionSortPreset = {
	name: "Insertion sort",
	sourceCode: `extract min from (list) to [min] and leave [rest] {
	pair of [head] and [tail] is (list),
	{
		is (tail) pair,
		extract min from (tail) to [sub min] and leave [sub rest],
		{
			(head) < (sub min),
			(head) = [min],
			pair of (sub min) and (sub rest) is [rest]
		}.
		{
			(head) >= (sub min),
			(sub min) = [min],
			pair of (head) and (sub rest) is [rest]
		}
	}.
	{
		is not (tail) pair,
		{
			(head) < (tail),
			(head) = [min],
			(tail) = [rest]
		}.
		{
			(head) >= (tail),
			(tail) = [min],
			(head) = [rest]
		}
	}
}

sort (list) to [sorted] {
	{
		is not (list) pair,
		(list) = [sorted]
	}.
	{
		is (list) pair,
		extract min from (list) to [min] and leave [rest],
		sort (rest) to [sorted rest],
		pair of (min) and (sorted rest) is [sorted]
	}
}

{
	pair of (5) and (3) is [list1],
	pair of (8) and (list1) is [list2],
	pair of (1) and (list2) is [list3],
	pair of (4) and (list3) is [list4],
	sort (list4) to [sorted]
}
`,
} as const satisfies Preset;
