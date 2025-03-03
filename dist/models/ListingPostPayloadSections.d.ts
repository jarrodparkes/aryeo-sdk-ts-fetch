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
 * Media sections to include for this listing.
 * @export
 * @interface ListingPostPayloadSections
 */
export interface ListingPostPayloadSections {
    /**
     * Include the images section when creating this listing.
     * @type {boolean}
     * @memberof ListingPostPayloadSections
     */
    images?: boolean;
    /**
     * Include the videos section when creating this listing.
     * @type {boolean}
     * @memberof ListingPostPayloadSections
     */
    videos?: boolean;
    /**
     * Include the floor plans section when creating this listing.
     * @type {boolean}
     * @memberof ListingPostPayloadSections
     */
    floorPlans?: boolean;
    /**
     * Include the interactive content section when creating this listing.
     * @type {boolean}
     * @memberof ListingPostPayloadSections
     */
    interactiveContent?: boolean;
}
/**
 * Check if a given object implements the ListingPostPayloadSections interface.
 */
export declare function instanceOfListingPostPayloadSections(value: object): value is ListingPostPayloadSections;
export declare function ListingPostPayloadSectionsFromJSON(json: any): ListingPostPayloadSections;
export declare function ListingPostPayloadSectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingPostPayloadSections;
export declare function ListingPostPayloadSectionsToJSON(json: any): ListingPostPayloadSections;
export declare function ListingPostPayloadSectionsToJSONTyped(value?: ListingPostPayloadSections | null, ignoreDiscriminator?: boolean): any;
