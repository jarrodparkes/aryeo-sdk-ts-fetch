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

import type { CalendarDayCollectionMeta } from './CalendarDayCollectionMeta';
import {
    CalendarDayCollectionMetaFromJSON,
    CalendarDayCollectionMetaToJSON
} from './CalendarDayCollectionMeta';
import type { PaginationLinks } from './PaginationLinks';
import {
    PaginationLinksFromJSON,
    PaginationLinksToJSON
} from './PaginationLinks';
import type { Timeslot } from './Timeslot';
import {
    TimeslotFromJSON,
    TimeslotToJSON
} from './Timeslot';

/**
 * A collection of bookable timeslots.
 * @export
 * @interface TimeslotCollection
 */
export interface TimeslotCollection {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof TimeslotCollection
     */
    status: string;
    /**
     * A collection of objects.
     * @type {Array<Timeslot>}
     * @memberof TimeslotCollection
     */
    data?: Array<Timeslot> | null;
    /**
     * 
     * @type {CalendarDayCollectionMeta}
     * @memberof TimeslotCollection
     */
    meta?: CalendarDayCollectionMeta;
    /**
     * 
     * @type {PaginationLinks}
     * @memberof TimeslotCollection
     */
    links?: PaginationLinks;
}

/**
 * Check if a given object implements the TimeslotCollection interface.
 */
export function instanceOfTimeslotCollection(value: object): value is TimeslotCollection {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function TimeslotCollectionFromJSON(json: any): TimeslotCollection {
    return TimeslotCollectionFromJSONTyped(json, false);
}

export function TimeslotCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeslotCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TimeslotFromJSON)),
        'meta': json['meta'] == null ? undefined : CalendarDayCollectionMetaFromJSON(json['meta']),
        'links': json['links'] == null ? undefined : PaginationLinksFromJSON(json['links']),
    };
}

export function TimeslotCollectionToJSON(json: any): TimeslotCollection {
    return TimeslotCollectionToJSONTyped(json, false);
}

export function TimeslotCollectionToJSONTyped(value?: TimeslotCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(TimeslotToJSON)),
        'meta': CalendarDayCollectionMetaToJSON(value['meta']),
        'links': PaginationLinksToJSON(value['links']),
    };
}

