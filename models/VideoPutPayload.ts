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

import { mapValues } from '../runtime';
/**
 * Payload to update a video.
 * @export
 * @interface VideoPutPayload
 */
export interface VideoPutPayload {
    /**
     * The name of the video.
     * @type {string}
     * @memberof VideoPutPayload
     */
    title: string;
}

/**
 * Check if a given object implements the VideoPutPayload interface.
 */
export function instanceOfVideoPutPayload(value: object): value is VideoPutPayload {
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function VideoPutPayloadFromJSON(json: any): VideoPutPayload {
    return VideoPutPayloadFromJSONTyped(json, false);
}

export function VideoPutPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoPutPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
    };
}

export function VideoPutPayloadToJSON(json: any): VideoPutPayload {
    return VideoPutPayloadToJSONTyped(json, false);
}

export function VideoPutPayloadToJSONTyped(value?: VideoPutPayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
    };
}

