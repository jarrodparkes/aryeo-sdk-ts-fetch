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
import type { MarketingMaterialTemplate } from './MarketingMaterialTemplate';
/**
 * A marketing material template.
 * @export
 * @interface MarketingMaterialTemplateResource
 */
export interface MarketingMaterialTemplateResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof MarketingMaterialTemplateResource
     */
    status: string;
    /**
     *
     * @type {MarketingMaterialTemplate}
     * @memberof MarketingMaterialTemplateResource
     */
    data?: MarketingMaterialTemplate;
}
/**
 * Check if a given object implements the MarketingMaterialTemplateResource interface.
 */
export declare function instanceOfMarketingMaterialTemplateResource(value: object): value is MarketingMaterialTemplateResource;
export declare function MarketingMaterialTemplateResourceFromJSON(json: any): MarketingMaterialTemplateResource;
export declare function MarketingMaterialTemplateResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingMaterialTemplateResource;
export declare function MarketingMaterialTemplateResourceToJSON(json: any): MarketingMaterialTemplateResource;
export declare function MarketingMaterialTemplateResourceToJSONTyped(value?: MarketingMaterialTemplateResource | null, ignoreDiscriminator?: boolean): any;
