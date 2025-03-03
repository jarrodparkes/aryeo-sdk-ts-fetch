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
import type { ProductCategory } from './ProductCategory';
import type { ProductVariant } from './ProductVariant';
/**
 * A product available for purchase via an order.
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * String representing the object's type. Objects of the same type share the same schema.
     * @type {string}
     * @memberof Product
     */
    object?: string;
    /**
     * ID of the product. UUID Version 4.
     * @type {string}
     * @memberof Product
     */
    id: string;
    /**
     * The title of the product.
     * @type {string}
     * @memberof Product
     */
    title: string;
    /**
     * The description of the product.
     * @type {string}
     * @memberof Product
     */
    description?: string;
    /**
     * The active status of a product.
     * @type {boolean}
     * @memberof Product
     */
    active?: boolean;
    /**
     * The type of product.
     * @type {string}
     * @memberof Product
     */
    type: ProductTypeEnum;
    /**
     *
     * @type {Array<ProductVariant>}
     * @memberof Product
     */
    variants?: Array<ProductVariant>;
    /**
     *
     * @type {Array<ProductCategory>}
     * @memberof Product
     */
    categories?: Array<ProductCategory>;
}
/**
 * @export
 */
export declare const ProductTypeEnum: {
    readonly Main: "MAIN";
    readonly Addon: "ADDON";
};
export type ProductTypeEnum = typeof ProductTypeEnum[keyof typeof ProductTypeEnum];
/**
 * Check if a given object implements the Product interface.
 */
export declare function instanceOfProduct(value: object): value is Product;
export declare function ProductFromJSON(json: any): Product;
export declare function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product;
export declare function ProductToJSON(json: any): Product;
export declare function ProductToJSONTyped(value?: Product | null, ignoreDiscriminator?: boolean): any;
