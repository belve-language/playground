import {redirect} from "@sveltejs/kit";
import type {PageLoad} from "./$types.ts";
import {editorModeQueryParameterName} from "../../lib/editor/editorModeQueryParameterName.ts";
import {validateSearchParamsFromUrl} from "../../lib/editor/visualizer/src/lib/validateSearchParamsFromUrl.ts";
import {parseRawMode} from "../../lib/editor/parseRawMode.ts";
export const load: PageLoad = async ({url}) => {
	const searchValidationResult = validateSearchParamsFromUrl(
		url,
		(searchParams: URLSearchParams) => {
			const rawMode = searchParams.get(editorModeQueryParameterName);
			const mode = parseRawMode(rawMode);
			const correctedSearchParams = new URLSearchParams();
			correctedSearchParams.set(editorModeQueryParameterName, mode);
			return {datum: mode, correctedSearchParams};
		},
	);
	switch (searchValidationResult.status) {
		case "success": {
			return {selectedMode: searchValidationResult.datum};
		}
		case "failure": {
			redirect(301, searchValidationResult.correctedUrl);
		}
	}
};
