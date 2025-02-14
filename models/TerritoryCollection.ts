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
import type { PaginationLinks } from './PaginationLinks';
import {
    PaginationLinksFromJSON,
    PaginationLinksFromJSONTyped,
    PaginationLinksToJSON,
    PaginationLinksToJSONTyped,
} from './PaginationLinks';
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
    TerritoryToJSONTyped,
} from './Territory';
import type { PaginationMeta } from './PaginationMeta';
import {
    PaginationMetaFromJSON,
    PaginationMetaFromJSONTyped,
    PaginationMetaToJSON,
    PaginationMetaToJSONTyped,
} from './PaginationMeta';

/**
 * A collection of territories.
 * @export
 * @interface TerritoryCollection
 */
export interface TerritoryCollection {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof TerritoryCollection
     */
    status: string;
    /**
     * 
     * @type {Array<Territory>}
     * @memberof TerritoryCollection
     */
    data?: Array<Territory> | null;
    /**
     * 
     * @type {PaginationMeta}
     * @memberof TerritoryCollection
     */
    meta?: PaginationMeta;
    /**
     * 
     * @type {PaginationLinks}
     * @memberof TerritoryCollection
     */
    links?: PaginationLinks;
}

/**
 * Check if a given object implements the TerritoryCollection interface.
 */
export function instanceOfTerritoryCollection(value: object): value is TerritoryCollection {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function TerritoryCollectionFromJSON(json: any): TerritoryCollection {
    return TerritoryCollectionFromJSONTyped(json, false);
}

export function TerritoryCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TerritoryFromJSON)),
        'meta': json['meta'] == null ? undefined : PaginationMetaFromJSON(json['meta']),
        'links': json['links'] == null ? undefined : PaginationLinksFromJSON(json['links']),
    };
}

export function TerritoryCollectionToJSON(json: any): TerritoryCollection {
    return TerritoryCollectionToJSONTyped(json, false);
}

export function TerritoryCollectionToJSONTyped(value?: TerritoryCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(TerritoryToJSON)),
        'meta': PaginationMetaToJSON(value['meta']),
        'links': PaginationLinksToJSON(value['links']),
    };
}

