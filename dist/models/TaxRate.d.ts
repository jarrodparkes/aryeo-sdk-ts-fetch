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
 * A tax rate represents the percentage of tax that should be applied to a taxed entity.
 * @export
 * @interface TaxRate
 */
export interface TaxRate {
    /**
     * String representing the object's type.
     * @type {string}
     * @memberof TaxRate
     */
    object: string;
    /**
     * ID of the tax rate. UUID Version 4.
     * @type {string}
     * @memberof TaxRate
     */
    id: string;
    /**
     * The name of the tax.
     * @type {string}
     * @memberof TaxRate
     */
    name?: string;
    /**
     * The description of the tax rate.
     * @type {string}
     * @memberof TaxRate
     */
    description?: string;
    /**
     * A decimal value representing the rate that should be applied to a taxed entity. For example, 0.075 would represent an applied tax percentage of 7.5%.
     * @type {number}
     * @memberof TaxRate
     */
    appliedRate?: number;
}
/**
 * Check if a given object implements the TaxRate interface.
 */
export declare function instanceOfTaxRate(value: object): value is TaxRate;
export declare function TaxRateFromJSON(json: any): TaxRate;
export declare function TaxRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxRate;
export declare function TaxRateToJSON(json: any): TaxRate;
export declare function TaxRateToJSONTyped(value?: TaxRate | null, ignoreDiscriminator?: boolean): any;
