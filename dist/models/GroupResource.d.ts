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
import type { Group } from './Group';
/**
 * A group.
 * @export
 * @interface GroupResource
 */
export interface GroupResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof GroupResource
     */
    status: string;
    /**
     *
     * @type {Group}
     * @memberof GroupResource
     */
    data?: Group;
}
/**
 * Check if a given object implements the GroupResource interface.
 */
export declare function instanceOfGroupResource(value: object): value is GroupResource;
export declare function GroupResourceFromJSON(json: any): GroupResource;
export declare function GroupResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupResource;
export declare function GroupResourceToJSON(json: any): GroupResource;
export declare function GroupResourceToJSONTyped(value?: GroupResource | null, ignoreDiscriminator?: boolean): any;
