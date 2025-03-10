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

import type { Appointment } from './Appointment';
import {
    AppointmentFromJSON,
    AppointmentToJSON
} from './Appointment';
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

/**
 * A collection of appointments.
 * @export
 * @interface AppointmentCollection
 */
export interface AppointmentCollection {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof AppointmentCollection
     */
    status: string;
    /**
     * A collection of objects.
     * @type {Array<Appointment>}
     * @memberof AppointmentCollection
     */
    data?: Array<Appointment> | null;
    /**
     * 
     * @type {PaginationMeta}
     * @memberof AppointmentCollection
     */
    meta?: PaginationMeta;
    /**
     * 
     * @type {PaginationLinks}
     * @memberof AppointmentCollection
     */
    links?: PaginationLinks;
}

/**
 * Check if a given object implements the AppointmentCollection interface.
 */
export function instanceOfAppointmentCollection(value: object): value is AppointmentCollection {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function AppointmentCollectionFromJSON(json: any): AppointmentCollection {
    return AppointmentCollectionFromJSONTyped(json, false);
}

export function AppointmentCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppointmentCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppointmentFromJSON)),
        'meta': json['meta'] == null ? undefined : PaginationMetaFromJSON(json['meta']),
        'links': json['links'] == null ? undefined : PaginationLinksFromJSON(json['links']),
    };
}

export function AppointmentCollectionToJSON(json: any): AppointmentCollection {
    return AppointmentCollectionToJSONTyped(json, false);
}

export function AppointmentCollectionToJSONTyped(value?: AppointmentCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppointmentToJSON)),
        'meta': PaginationMetaToJSON(value['meta']),
        'links': PaginationLinksToJSON(value['links']),
    };
}

