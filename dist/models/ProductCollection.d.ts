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
import type { PaginationLinks } from './PaginationLinks';
import type { PaginationMeta } from './PaginationMeta';
import type { Product } from './Product';
/**
 * A collection of products.
 * @export
 * @interface ProductCollection
 */
export interface ProductCollection {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof ProductCollection
     */
    status: string;
    /**
     * A collection of objects.
     * @type {Array<Product>}
     * @memberof ProductCollection
     */
    data?: Array<Product> | null;
    /**
     *
     * @type {PaginationMeta}
     * @memberof ProductCollection
     */
    meta?: PaginationMeta;
    /**
     *
     * @type {PaginationLinks}
     * @memberof ProductCollection
     */
    links?: PaginationLinks;
}
/**
 * Check if a given object implements the ProductCollection interface.
 */
export declare function instanceOfProductCollection(value: object): value is ProductCollection;
export declare function ProductCollectionFromJSON(json: any): ProductCollection;
export declare function ProductCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCollection;
export declare function ProductCollectionToJSON(json: any): ProductCollection;
export declare function ProductCollectionToJSONTyped(value?: ProductCollection | null, ignoreDiscriminator?: boolean): any;
