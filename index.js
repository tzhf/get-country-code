import { readFile } from "fs/promises";
const geojson = JSON.parse(await readFile(new URL("./data/countries.geojson", import.meta.url)));

import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

/**
 * @param {{lat: Number, lng: Number}} point {lat, lng}
 * @returns {{code: String} | undefined} Object {country: String, code: String} | undefined
 */
export function getCountryCode(point) {
	for (let feature of geojson.features) {
		if (booleanPointInPolygon([point.lng, point.lat], feature)) {
			return { country: feature.properties.country, code: feature.properties.ISO_A2 };
		}
	}
}
