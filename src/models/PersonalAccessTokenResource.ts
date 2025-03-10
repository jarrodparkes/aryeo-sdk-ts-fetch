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

import type { PersonalAccessToken } from './PersonalAccessToken';
import {
    PersonalAccessTokenFromJSON,
    PersonalAccessTokenToJSON
} from './PersonalAccessToken';

/**
 * A personal access token.
 * @export
 * @interface PersonalAccessTokenResource
 */
export interface PersonalAccessTokenResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof PersonalAccessTokenResource
     */
    status: string;
    /**
     * 
     * @type {PersonalAccessToken}
     * @memberof PersonalAccessTokenResource
     */
    data?: PersonalAccessToken;
}

/**
 * Check if a given object implements the PersonalAccessTokenResource interface.
 */
export function instanceOfPersonalAccessTokenResource(value: object): value is PersonalAccessTokenResource {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PersonalAccessTokenResourceFromJSON(json: any): PersonalAccessTokenResource {
    return PersonalAccessTokenResourceFromJSONTyped(json, false);
}

export function PersonalAccessTokenResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalAccessTokenResource {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : PersonalAccessTokenFromJSON(json['data']),
    };
}

export function PersonalAccessTokenResourceToJSON(json: any): PersonalAccessTokenResource {
    return PersonalAccessTokenResourceToJSONTyped(json, false);
}

export function PersonalAccessTokenResourceToJSONTyped(value?: PersonalAccessTokenResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': PersonalAccessTokenToJSON(value['data']),
    };
}

