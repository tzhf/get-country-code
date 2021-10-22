import borders from "./data/borders.json";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

/**
 * @param {{lat: Number, lng: Number}} point {lat, lng}
 * @returns {{code: String, name: String, country?: String} | 'none'} Object feature.properties | String: 'none'
 */
export function getCountryCode(point) {
	for (let feature of borders.features) {
		if (booleanPointInPolygon([point.lng, point.lat], feature)) {
			return feature.properties;
		}
		return "none";
	}
}
