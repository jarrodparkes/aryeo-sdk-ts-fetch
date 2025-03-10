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
export declare function instanceOfMarketingMaterialUpdatePayload(value: object): value is MarketingMaterialUpdatePayload;
export declare function MarketingMaterialUpdatePayloadFromJSON(json: any): MarketingMaterialUpdatePayload;
export declare function MarketingMaterialUpdatePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingMaterialUpdatePayload;
export declare function MarketingMaterialUpdatePayloadToJSON(json: any): MarketingMaterialUpdatePayload;
export declare function MarketingMaterialUpdatePayloadToJSONTyped(value?: MarketingMaterialUpdatePayload | null, ignoreDiscriminator?: boolean): any;
