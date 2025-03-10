/* tslint:disable */
/* eslint-disable */
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

import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagToJSON
} from './Tag';

/**
 * A tag response resource.
 * @export
 * @interface TagResource
 */
export interface TagResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof TagResource
     */
    status: string;
    /**
     * 
     * @type {Tag}
     * @memberof TagResource
     */
    data?: Tag;
}

/**
 * Check if a given object implements the TagResource interface.
 */
export function instanceOfTagResource(value: object): value is TagResource {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function TagResourceFromJSON(json: any): TagResource {
    return TagResourceFromJSONTyped(json, false);
}

export function TagResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagResource {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : TagFromJSON(json['data']),
    };
}

export function TagResourceToJSON(json: any): TagResource {
    return TagResourceToJSONTyped(json, false);
}

export function TagResourceToJSONTyped(value?: TagResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': TagToJSON(value['data']),
    };
}

