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
 * A scale diagram of the arrangement of a building.
 * @export
 * @interface FloorPlan
 */
export interface FloorPlan {
    /**
     * ID of the floor plan. UUID Version 4.
     * @type {string}
     * @memberof FloorPlan
     */
    id: string;
    /**
     * A URL for the original, full-resolution version of the floor plan. Useful for downloading.
     * @type {string}
     * @memberof FloorPlan
     */
    originalUrl: string;
    /**
     * A URL for a large version of the floor plan.
     * @type {string}
     * @memberof FloorPlan
     */
    largeUrl: string;
    /**
     * A URL for a thumbnail-sized version of the floor plan.
     * @type {string}
     * @memberof FloorPlan
     */
    thumbnailUrl: string;
    /**
     * The title (or caption) of the floor plan.
     * @type {string}
     * @memberof FloorPlan
     */
    title?: string | null;
    /**
     * Index order position of the floor plan.
     * @type {number}
     * @memberof FloorPlan
     */
    index?: number | null;
}
/**
 * Check if a given object implements the FloorPlan interface.
 */
export declare function instanceOfFloorPlan(value: object): value is FloorPlan;
export declare function FloorPlanFromJSON(json: any): FloorPlan;
export declare function FloorPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): FloorPlan;
export declare function FloorPlanToJSON(json: any): FloorPlan;
export declare function FloorPlanToJSONTyped(value?: FloorPlan | null, ignoreDiscriminator?: boolean): any;
