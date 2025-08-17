import type {EditorMode} from "./EditorMode.ts";
export function parseRawMode(rawMode: string | null): EditorMode {
	switch (rawMode) {
		case "animated-parser":
		case "instant-parser":
		case "abstracter":
		case "formatter":
		case "interpreter": {
			return rawMode;
		}
		default: {
			return "none";
		}
	}
}
