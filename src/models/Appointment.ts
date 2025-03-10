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

import type { Order } from './Order';
import {
    OrderFromJSON,
    OrderToJSON
} from './Order';
import type { OrderItem } from './OrderItem';
import {
    OrderItemFromJSON,
    OrderItemToJSON
} from './OrderItem';
import type { User } from './User';
import {
    UserFromJSON,
    UserToJSON
} from './User';

/**
 * An appointment.
 * @export
 * @interface Appointment
 */
export interface Appointment {
    /**
     * ID of the appointment. UUID Version 4.
     * @type {string}
     * @memberof Appointment
     */
    id: string;
    /**
     * The status of the appointment.
     * @type {string}
     * @memberof Appointment
     */
    status?: AppointmentStatusEnum | null;
    /**
     * The title of the appointment.
     * @type {string}
     * @memberof Appointment
     */
    title?: string | null;
    /**
     * The multi-line description of the appointment.
     * @type {string}
     * @memberof Appointment
     */
    description?: string | null;
    /**
     * The date and time (ISO 8601 format) when the appointment is set to start.
     * @type {Date}
     * @memberof Appointment
     */
    startAt?: Date | null;
    /**
     * The date and time (ISO 8601 format) when the appointment is set to end.
     * @type {Date}
     * @memberof Appointment
     */
    endAt?: Date | null;
    /**
     * The date and time (ISO 8601 format) when the appointment was rescheduled.
     * @type {Date}
     * @memberof Appointment
     */
    rescheduledAt?: Date | null;
    /**
     * The date and time (ISO 8601 format) when the appointment was postponed.
     * @type {Date}
     * @memberof Appointment
     */
    postponedAt?: Date | null;
    /**
     * The date and time (ISO 8601 format) when the appointment was previously scheduled for.
     * @type {Date}
     * @memberof Appointment
     */
    previousStartAt?: Date | null;
    /**
     * The type of preferred scheduling information provided by a customer to aid in scheduling this appointment.
     * @type {string}
     * @memberof Appointment
     */
    preferenceType?: AppointmentPreferenceTypeEnum | null;
    /**
     * A preferred date and time (ISO 8601 format) for when the appointment could start. Only returned if unconfirmed appointment's preference type is TIME. 
     * @type {Date}
     * @memberof Appointment
     */
    preferredStartAt?: Date | null;
    /**
     * A preferred date (ISO 8601 format) for when the appointment could start. Only returned if unconfirmed appointment's preference type is TIME_OF_DAY. 
     * @type {Date}
     * @memberof Appointment
     */
    preferredStartAtDay?: Date | null;
    /**
     * A preferred time of day for when the appointment could start. Only returned if unconfirmed appointment's preference type is TIME_OF_DAY. 
     * @type {string}
     * @memberof Appointment
     */
    preferredStartAtTimeOfDay?: AppointmentPreferredStartAtTimeOfDayEnum | null;
    /**
     * The length of the appointment in minutes.
     * @type {number}
     * @memberof Appointment
     */
    duration?: number | null;
    /**
     * Does the authorized user have the availability to manage this appointment?
     * @type {boolean}
     * @memberof Appointment
     */
    userHasAppointmentsManagePermission?: boolean;
    /**
     * 
     * @type {Order}
     * @memberof Appointment
     */
    order?: Order;
    /**
     * Users attached to the appointment.
     * @type {Array<User>}
     * @memberof Appointment
     */
    users?: Array<User> | null;
    /**
     * Items attached to the appointment.
     * @type {Array<OrderItem>}
     * @memberof Appointment
     */
    items?: Array<OrderItem>;
    /**
     * Indicates if the request user can cancel the appointment.
     * @type {boolean}
     * @memberof Appointment
     */
    canCancel?: boolean | null;
    /**
     * Indicates if the request user can reschedule the appointment.
     * @type {boolean}
     * @memberof Appointment
     */
    canReschedule?: boolean | null;
    /**
     * Indicates if the appointment is within the cancellation lock period.
     * @type {boolean}
     * @memberof Appointment
     */
    isWithinCancellationLockPeriod?: boolean | null;
    /**
     * Indicates if the appointment is within the cancellation lock period.
     * @type {boolean}
     * @memberof Appointment
     */
    isWithinReschedulingLockPeriod?: boolean | null;
    /**
     * A deleted date and time (ISO 8601 format) for when we use a filter to get changed appointments. 
     * @type {Date}
     * @memberof Appointment
     */
    deletedAt?: Date | null;
}


/**
 * @export
 */
export const AppointmentStatusEnum = {
    Scheduled: 'SCHEDULED',
    Unscheduled: 'UNSCHEDULED',
    Canceled: 'CANCELED'
} as const;
export type AppointmentStatusEnum = typeof AppointmentStatusEnum[keyof typeof AppointmentStatusEnum];

/**
 * @export
 */
export const AppointmentPreferenceTypeEnum = {
    Asap: 'ASAP',
    Time: 'TIME',
    TimeOfDay: 'TIME_OF_DAY',
    None: 'NONE'
} as const;
export type AppointmentPreferenceTypeEnum = typeof AppointmentPreferenceTypeEnum[keyof typeof AppointmentPreferenceTypeEnum];

/**
 * @export
 */
export const AppointmentPreferredStartAtTimeOfDayEnum = {
    Morning: 'MORNING',
    Midday: 'MIDDAY',
    Afternoon: 'AFTERNOON',
    Twilight: 'TWILIGHT'
} as const;
export type AppointmentPreferredStartAtTimeOfDayEnum = typeof AppointmentPreferredStartAtTimeOfDayEnum[keyof typeof AppointmentPreferredStartAtTimeOfDayEnum];


/**
 * Check if a given object implements the Appointment interface.
 */
export function instanceOfAppointment(value: object): value is Appointment {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppointmentFromJSON(json: any): Appointment {
    return AppointmentFromJSONTyped(json, false);
}

export function AppointmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Appointment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'] == null ? undefined : json['status'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'startAt': json['start_at'] == null ? undefined : (new Date(json['start_at'])),
        'endAt': json['end_at'] == null ? undefined : (new Date(json['end_at'])),
        'rescheduledAt': json['rescheduled_at'] == null ? undefined : (new Date(json['rescheduled_at'])),
        'postponedAt': json['postponed_at'] == null ? undefined : (new Date(json['postponed_at'])),
        'previousStartAt': json['previous_start_at'] == null ? undefined : (new Date(json['previous_start_at'])),
        'preferenceType': json['preference_type'] == null ? undefined : json['preference_type'],
        'preferredStartAt': json['preferred_start_at'] == null ? undefined : (new Date(json['preferred_start_at'])),
        'preferredStartAtDay': json['preferred_start_at_day'] == null ? undefined : (new Date(json['preferred_start_at_day'])),
        'preferredStartAtTimeOfDay': json['preferred_start_at_time_of_day'] == null ? undefined : json['preferred_start_at_time_of_day'],
        'duration': json['duration'] == null ? undefined : json['duration'],
        'userHasAppointmentsManagePermission': json['user_has_appointments_manage_permission'] == null ? undefined : json['user_has_appointments_manage_permission'],
        'order': json['order'] == null ? undefined : OrderFromJSON(json['order']),
        'users': json['users'] == null ? undefined : ((json['users'] as Array<any>).map(UserFromJSON)),
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(OrderItemFromJSON)),
        'canCancel': json['can_cancel'] == null ? undefined : json['can_cancel'],
        'canReschedule': json['can_reschedule'] == null ? undefined : json['can_reschedule'],
        'isWithinCancellationLockPeriod': json['is_within_cancellation_lock_period'] == null ? undefined : json['is_within_cancellation_lock_period'],
        'isWithinReschedulingLockPeriod': json['is_within_rescheduling_lock_period'] == null ? undefined : json['is_within_rescheduling_lock_period'],
        'deletedAt': json['deleted_at'] == null ? undefined : (new Date(json['deleted_at'])),
    };
}

export function AppointmentToJSON(json: any): Appointment {
    return AppointmentToJSONTyped(json, false);
}

export function AppointmentToJSONTyped(value?: Appointment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'status': value['status'],
        'title': value['title'],
        'description': value['description'],
        'start_at': value['startAt'] == null ? undefined : ((value['startAt'] as any).toISOString()),
        'end_at': value['endAt'] == null ? undefined : ((value['endAt'] as any).toISOString()),
        'rescheduled_at': value['rescheduledAt'] == null ? undefined : ((value['rescheduledAt'] as any).toISOString()),
        'postponed_at': value['postponedAt'] == null ? undefined : ((value['postponedAt'] as any).toISOString()),
        'previous_start_at': value['previousStartAt'] == null ? undefined : ((value['previousStartAt'] as any).toISOString()),
        'preference_type': value['preferenceType'],
        'preferred_start_at': value['preferredStartAt'] == null ? undefined : ((value['preferredStartAt'] as any).toISOString()),
        'preferred_start_at_day': value['preferredStartAtDay'] == null ? undefined : ((value['preferredStartAtDay'] as any).toISOString().substring(0,10)),
        'preferred_start_at_time_of_day': value['preferredStartAtTimeOfDay'],
        'duration': value['duration'],
        'user_has_appointments_manage_permission': value['userHasAppointmentsManagePermission'],
        'order': OrderToJSON(value['order']),
        'users': value['users'] == null ? undefined : ((value['users'] as Array<any>).map(UserToJSON)),
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(OrderItemToJSON)),
        'can_cancel': value['canCancel'],
        'can_reschedule': value['canReschedule'],
        'is_within_cancellation_lock_period': value['isWithinCancellationLockPeriod'],
        'is_within_rescheduling_lock_period': value['isWithinReschedulingLockPeriod'],
        'deleted_at': value['deletedAt'] == null ? undefined : ((value['deletedAt'] as any).toISOString()),
    };
}

