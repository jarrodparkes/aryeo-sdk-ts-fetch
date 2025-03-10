/* tslint:disable */
/* eslint-disable */
/**
 * Aryeo
 * # Introduction The Aryeo API provides access to the Aryeo platform.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: jarrodp@zillowgroup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Values used for the example property shown on public-facing app store pages and screenshots.
 * @export
 * @interface PortalAppExampleOrder
 */
export interface PortalAppExampleOrder {
    /**
     * Unparsed text representation of the first part of the address, typically including the street number, street name, and unit number if applicable.
     * @type {string}
     * @memberof PortalAppExampleOrder
     */
    unparsedAddressPartOne?: string;
    /**
     * Unparsed text representation of the second part of the address, typically including the city, state or province, and postal code.
     * @type {string}
     * @memberof PortalAppExampleOrder
     */
    unparsedAddressPartTwo?: string;
    /**
     * The geographic latitude of some reference point of the location, specified in degrees and decimal parts. Positive numbers must not include the plus symbol.
     * @type {number}
     * @memberof PortalAppExampleOrder
     */
    latitude?: number;
    /**
     * The geographic longitude of some reference point of the location, specified in degrees and decimal parts. Positive numbers must not include the plus symbol.
     * @type {number}
     * @memberof PortalAppExampleOrder
     */
    longitude?: number;
    /**
     * A URL for an example property image.
     * @type {string}
     * @memberof PortalAppExampleOrder
     */
    imageUrl?: string;
}

/**
 * Check if a given object implements the PortalAppExampleOrder interface.
 */
export function instanceOfPortalAppExampleOrder(value: object): value is PortalAppExampleOrder {
    return true;
}

export function PortalAppExampleOrderFromJSON(json: any): PortalAppExampleOrder {
    return PortalAppExampleOrderFromJSONTyped(json, false);
}

export function PortalAppExampleOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalAppExampleOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'unparsedAddressPartOne': json['unparsed_address_part_one'] == null ? undefined : json['unparsed_address_part_one'],
        'unparsedAddressPartTwo': json['unparsed_address_part_two'] == null ? undefined : json['unparsed_address_part_two'],
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'imageUrl': json['image_url'] == null ? undefined : json['image_url'],
    };
}

export function PortalAppExampleOrderToJSON(json: any): PortalAppExampleOrder {
    return PortalAppExampleOrderToJSONTyped(json, false);
}

export function PortalAppExampleOrderToJSONTyped(value?: PortalAppExampleOrder | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'unparsed_address_part_one': value['unparsedAddressPartOne'],
        'unparsed_address_part_two': value['unparsedAddressPartTwo'],
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'image_url': value['imageUrl'],
    };
}

