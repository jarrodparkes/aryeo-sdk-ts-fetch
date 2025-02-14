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
 * The JSON representation of a Polotno canvas.
 * @export
 * @interface PolotnoJson
 */
export interface PolotnoJson {
    /**
     * The width of the canvas.
     * @type {number}
     * @memberof PolotnoJson
     */
    width: number;
    /**
     * The height of the canvas.
     * @type {number}
     * @memberof PolotnoJson
     */
    height: number;
}

/**
 * Check if a given object implements the PolotnoJson interface.
 */
export function instanceOfPolotnoJson(value: object): value is PolotnoJson {
    if (!('width' in value) || value['width'] === undefined) return false;
    if (!('height' in value) || value['height'] === undefined) return false;
    return true;
}

export function PolotnoJsonFromJSON(json: any): PolotnoJson {
    return PolotnoJsonFromJSONTyped(json, false);
}

export function PolotnoJsonFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolotnoJson {
    if (json == null) {
        return json;
    }
    return {
        
        'width': json['width'],
        'height': json['height'],
    };
}

export function PolotnoJsonToJSON(json: any): PolotnoJson {
    return PolotnoJsonToJSONTyped(json, false);
}

export function PolotnoJsonToJSONTyped(value?: PolotnoJson | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'width': value['width'],
        'height': value['height'],
    };
}

