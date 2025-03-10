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
 * Payload for updating a marketing material record.
 * @export
 * @interface MarketingMaterialUpdatePayload
 */
export interface MarketingMaterialUpdatePayload {
    /**
     * Name of the marketing material.
     * @type {string}
     * @memberof MarketingMaterialUpdatePayload
     */
    name?: string | null;
    /**
     * String representation of a polotno JSON object.
     * @type {string}
     * @memberof MarketingMaterialUpdatePayload
     */
    polotnoJson?: string | null;
    /**
     * The version of the MMB app used to save this record.
     * @type {string}
     * @memberof MarketingMaterialUpdatePayload
     */
    appVersion?: string | null;
}

/**
 * Check if a given object implements the MarketingMaterialUpdatePayload interface.
 */
export function instanceOfMarketingMaterialUpdatePayload(value: object): value is MarketingMaterialUpdatePayload {
    return true;
}

export function MarketingMaterialUpdatePayloadFromJSON(json: any): MarketingMaterialUpdatePayload {
    return MarketingMaterialUpdatePayloadFromJSONTyped(json, false);
}

export function MarketingMaterialUpdatePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingMaterialUpdatePayload {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'polotnoJson': json['polotno_json'] == null ? undefined : json['polotno_json'],
        'appVersion': json['app_version'] == null ? undefined : json['app_version'],
    };
}

export function MarketingMaterialUpdatePayloadToJSON(json: any): MarketingMaterialUpdatePayload {
    return MarketingMaterialUpdatePayloadToJSONTyped(json, false);
}

export function MarketingMaterialUpdatePayloadToJSONTyped(value?: MarketingMaterialUpdatePayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'polotno_json': value['polotnoJson'],
        'app_version': value['appVersion'],
    };
}

