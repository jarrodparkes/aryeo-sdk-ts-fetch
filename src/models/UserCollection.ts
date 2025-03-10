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

import type { PaginationLinks } from './PaginationLinks';
import {
    PaginationLinksFromJSON,
    PaginationLinksToJSON
} from './PaginationLinks';
import type { PaginationMeta } from './PaginationMeta';
import {
    PaginationMetaFromJSON,
    PaginationMetaToJSON
} from './PaginationMeta';
import type { User } from './User';
import {
    UserFromJSON,
    UserToJSON
} from './User';

/**
 * A collection of users.
 * @export
 * @interface UserCollection
 */
export interface UserCollection {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof UserCollection
     */
    status: string;
    /**
     * A collection of objects.
     * @type {Array<User>}
     * @memberof UserCollection
     */
    data?: Array<User> | null;
    /**
     * 
     * @type {PaginationMeta}
     * @memberof UserCollection
     */
    meta?: PaginationMeta;
    /**
     * 
     * @type {PaginationLinks}
     * @memberof UserCollection
     */
    links?: PaginationLinks;
}

/**
 * Check if a given object implements the UserCollection interface.
 */
export function instanceOfUserCollection(value: object): value is UserCollection {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function UserCollectionFromJSON(json: any): UserCollection {
    return UserCollectionFromJSONTyped(json, false);
}

export function UserCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(UserFromJSON)),
        'meta': json['meta'] == null ? undefined : PaginationMetaFromJSON(json['meta']),
        'links': json['links'] == null ? undefined : PaginationLinksFromJSON(json['links']),
    };
}

export function UserCollectionToJSON(json: any): UserCollection {
    return UserCollectionToJSONTyped(json, false);
}

export function UserCollectionToJSONTyped(value?: UserCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(UserToJSON)),
        'meta': PaginationMetaToJSON(value['meta']),
        'links': PaginationLinksToJSON(value['links']),
    };
}

