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
 * A defined page size for marketing material.
 * @export
 * @interface MarketingMaterialPageSize
 */
export interface MarketingMaterialPageSize {
    /**
     * ID of the page size. UUID Version 4.
     * @type {string}
     * @memberof MarketingMaterialPageSize
     */
    id: string;
    /**
     * Width in pixels.
     * @type {number}
     * @memberof MarketingMaterialPageSize
     */
    width: number;
    /**
     * Height in pixels.
     * @type {number}
     * @memberof MarketingMaterialPageSize
     */
    height: number;
    /**
     * Name of the page size.
     * @type {string}
     * @memberof MarketingMaterialPageSize
     */
    name: string;
}
/**
 * Check if a given object implements the MarketingMaterialPageSize interface.
 */
export declare function instanceOfMarketingMaterialPageSize(value: object): value is MarketingMaterialPageSize;
export declare function MarketingMaterialPageSizeFromJSON(json: any): MarketingMaterialPageSize;
export declare function MarketingMaterialPageSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingMaterialPageSize;
export declare function MarketingMaterialPageSizeToJSON(json: any): MarketingMaterialPageSize;
export declare function MarketingMaterialPageSizeToJSONTyped(value?: MarketingMaterialPageSize | null, ignoreDiscriminator?: boolean): any;
