import borders from "./data/borders.js";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

/**
 * @param {{lat: Number, lng: Number}} point {lat, lng}
 * @returns {{code: String, name: String, country?: String} | {code: "none"}} Object feature.properties | Object {code: "none"}
 */
export function getCountryCode(point) {
	for (let feature of borders.features) {
		if (booleanPointInPolygon([point.lng, point.lat], feature)) return feature.properties;
	}
	return { name: "none" };
}
