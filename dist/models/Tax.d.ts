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
import type { TaxRate } from './TaxRate';
/**
 * A tax represents the application of a tax rate to a taxed entity, such as an order or order item.
 * @export
 * @interface Tax
 */
export interface Tax {
    /**
     * String representing the object's type.
     * @type {string}
     * @memberof Tax
     */
    object: string;
    /**
     * ID of the tax. UUID Version 4.
     * @type {string}
     * @memberof Tax
     */
    id: string;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the total calculated tax for this tax rate for all applicable order items.
     * @type {number}
     * @memberof Tax
     */
    totalTaxAmount?: number;
    /**
     * A decimal value representing the rate of the parent tax rate at the time of this tax application. For example, 0.075 would represent an applied tax percentage of 7.5%.
     * @type {number}
     * @memberof Tax
     */
    appliedRate?: number;
    /**
     *
     * @type {TaxRate}
     * @memberof Tax
     */
    taxRate?: TaxRate;
}
/**
 * Check if a given object implements the Tax interface.
 */
export declare function instanceOfTax(value: object): value is Tax;
export declare function TaxFromJSON(json: any): Tax;
export declare function TaxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tax;
export declare function TaxToJSON(json: any): Tax;
export declare function TaxToJSONTyped(value?: Tax | null, ignoreDiscriminator?: boolean): any;
