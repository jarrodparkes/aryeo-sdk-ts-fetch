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
 * Payload for publishing a marketing material template record.
 * @export
 * @interface MarketingMaterialTemplatePublishPayload
 */
export interface MarketingMaterialTemplatePublishPayload {
    /**
     * String representation of a polotno JSON object.
     * @type {string}
     * @memberof MarketingMaterialTemplatePublishPayload
     */
    polotnoJson?: string | null;
}

/**
 * Check if a given object implements the MarketingMaterialTemplatePublishPayload interface.
 */
export function instanceOfMarketingMaterialTemplatePublishPayload(value: object): value is MarketingMaterialTemplatePublishPayload {
    return true;
}

export function MarketingMaterialTemplatePublishPayloadFromJSON(json: any): MarketingMaterialTemplatePublishPayload {
    return MarketingMaterialTemplatePublishPayloadFromJSONTyped(json, false);
}

export function MarketingMaterialTemplatePublishPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingMaterialTemplatePublishPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'polotnoJson': json['polotno_json'] == null ? undefined : json['polotno_json'],
    };
}

export function MarketingMaterialTemplatePublishPayloadToJSON(json: any): MarketingMaterialTemplatePublishPayload {
    return MarketingMaterialTemplatePublishPayloadToJSONTyped(json, false);
}

export function MarketingMaterialTemplatePublishPayloadToJSONTyped(value?: MarketingMaterialTemplatePublishPayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'polotno_json': value['polotnoJson'],
    };
}

