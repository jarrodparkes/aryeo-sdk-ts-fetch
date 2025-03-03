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
import type { Listing } from './Listing';
/**
 * A listing.
 * @export
 * @interface ListingResource
 */
export interface ListingResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof ListingResource
     */
    status: string;
    /**
     *
     * @type {Listing}
     * @memberof ListingResource
     */
    data?: Listing;
}
/**
 * Check if a given object implements the ListingResource interface.
 */
export declare function instanceOfListingResource(value: object): value is ListingResource;
export declare function ListingResourceFromJSON(json: any): ListingResource;
export declare function ListingResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingResource;
export declare function ListingResourceToJSON(json: any): ListingResource;
export declare function ListingResourceToJSONTyped(value?: ListingResource | null, ignoreDiscriminator?: boolean): any;
