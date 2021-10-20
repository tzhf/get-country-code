import { readFile } from "fs/promises";
const geojson = JSON.parse(await readFile(new URL("./data/countries.geojson", import.meta.url)));

import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

export function getCountryCode(point) {
	for (let feature of geojson.features) {
		const res = booleanPointInPolygon(point, feature);
		if (res) {
			return feature.properties.ISO_A2;
		}
	}
}
