import borders from "./data/borders.json";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

/**
 * @param {{lat: Number, lng: Number}} point {lat, lng}
 * @returns {{code: String} | undefined} Object {country: String, code: String} | undefined
 */
export function getCountryCode(point) {
	for (let feature of borders.features) {
		if (booleanPointInPolygon([point.lng, point.lat], feature)) {
			return { code: feature.properties.code, country: feature.properties.name };
		}
	}
}
