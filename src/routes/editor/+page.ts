import {redirect} from "@sveltejs/kit";
import {editorModeQueryParameterName} from "../../lib/editor/editorModeQueryParameterName.ts";
import {parseRawMode} from "../../lib/editor/parseRawMode.ts";
import {validateSearchParamsFromUrl} from "../../lib/editor/visualizer/src/lib/validateSearchParamsFromUrl.ts";
import type {PageLoad} from "./$types.js";
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
