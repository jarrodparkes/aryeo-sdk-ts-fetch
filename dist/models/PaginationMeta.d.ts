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
 * Metadata about a paginated response.
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     * Total number of records.
     * @type {number}
     * @memberof PaginationMeta
     */
    total: number;
    /**
     * Number of records per page.
     * @type {number}
     * @memberof PaginationMeta
     */
    perPage: number;
    /**
     * The current page.
     * @type {number}
     * @memberof PaginationMeta
     */
    currentPage: number;
    /**
     * The last page of records.
     * @type {number}
     * @memberof PaginationMeta
     */
    lastPage: number;
    /**
     * The ID of the first record on this page. This is specified as either `integer` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
     * @type {number}
     * @memberof PaginationMeta
     */
    from?: number | null;
    /**
     * The ID of the last record on this page. This is specified as either `integer` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
     * @type {number}
     * @memberof PaginationMeta
     */
    to?: number | null;
    /**
     * The current paged path.
     * @type {string}
     * @memberof PaginationMeta
     */
    path: string;
}
/**
 * Check if a given object implements the PaginationMeta interface.
 */
export declare function instanceOfPaginationMeta(value: object): value is PaginationMeta;
export declare function PaginationMetaFromJSON(json: any): PaginationMeta;
export declare function PaginationMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationMeta;
export declare function PaginationMetaToJSON(json: any): PaginationMeta;
export declare function PaginationMetaToJSONTyped(value?: PaginationMeta | null, ignoreDiscriminator?: boolean): any;
