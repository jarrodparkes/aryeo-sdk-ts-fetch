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

import type { OrderForm } from './OrderForm';
import {
    OrderFormFromJSON,
    OrderFormToJSON
} from './OrderForm';
import type { User } from './User';
import {
    UserFromJSON,
    UserToJSON
} from './User';

/**
 * A collection of users that can interact with the Aryeo platform. Permissions and properties are determined based on the group's type which can be creator, agent, or brokerage.
 * @export
 * @interface GroupCustomer
 */
export interface GroupCustomer {
    /**
     * String representing the object’s type. Objects of the same type share the same schema.
     * @type {string}
     * @memberof GroupCustomer
     */
    object?: string;
    /**
     * ID of the group. UUID Version 4.
     * @type {string}
     * @memberof GroupCustomer
     */
    id: string;
    /**
     * The type of the group. Can be CREATOR, AGENT, or BROKERAGE, and may dictate the attributes of the group returned.
     * @type {string}
     * @memberof GroupCustomer
     */
    type: GroupCustomerTypeEnum;
    /**
     * The name of the group.
     * @type {string}
     * @memberof GroupCustomer
     */
    name: string;
    /**
     * The email address of a group.
     * @type {string}
     * @memberof GroupCustomer
     */
    email?: string | null;
    /**
     * A phone number represented in whichever standards specified by the group, typically ###-###-#### (separated by hyphens).
     * @type {string}
     * @memberof GroupCustomer
     */
    phone?: string | null;
    /**
     * The website URL of a group.
     * @type {string}
     * @memberof GroupCustomer
     */
    websiteUrl?: string | null;
    /**
     * The logo URL of a group.
     * @type {string}
     * @memberof GroupCustomer
     */
    logoUrl?: string | null;
    /**
     * The name of the brokerage or team of a real estate agent. Only returned if group's type is AGENT.
     * @type {string}
     * @memberof GroupCustomer
     */
    officeName?: string | null;
    /**
     * The license number of a real estate agent. Only returned if group's type is AGENT.
     * @type {string}
     * @memberof GroupCustomer
     */
    licenseNumber?: string | null;
    /**
     * The default timezone for the group.
     * @type {string}
     * @memberof GroupCustomer
     */
    timezone?: string;
    /**
     * The default currency for the group.
     * @type {string}
     * @memberof GroupCustomer
     */
    currency?: GroupCustomerCurrencyEnum;
    /**
     * The slug for the group.
     * @type {string}
     * @memberof GroupCustomer
     */
    slug?: string | null;
    /**
     * The order page URL for the group.
     * @type {string}
     * @memberof GroupCustomer
     */
    orderPageUrl?: string | null;
    /**
     * The background color for the order page (has a hex value) for the group.
     * @type {string}
     * @memberof GroupCustomer
     */
    orderPageBackgroundColor?: string | null;
    /**
     * 
     * @type {OrderForm}
     * @memberof GroupCustomer
     */
    defaultOrderForm?: OrderForm;
    /**
     * Indicates if the order form by default uses territories to filter available users and products.
     * @type {boolean}
     * @memberof GroupCustomer
     */
    useTerritoryAwareness?: boolean | null;
    /**
     * The scheduling style the order form should use for timeslot selection by default.
     * @type {string}
     * @memberof GroupCustomer
     */
    availabilityStyle?: GroupCustomerAvailabilityStyleEnum | null;
    /**
     * How frequently slotted available times are on the order form by default.
     * @type {number}
     * @memberof GroupCustomer
     */
    slotIntervalMinutes?: number | null;
    /**
     * Indicates if the order form uses auto-assignment of users to appointments.
     * @type {boolean}
     * @memberof GroupCustomer
     */
    useAutomatedUserAssignment?: boolean | null;
    /**
     * The default assignment strategy the order form should use to assign users to appointments, if applicable.
     * @type {string}
     * @memberof GroupCustomer
     */
    automatedUserAssignmentStrategy?: GroupCustomerAutomatedUserAssignmentStrategyEnum | null;
    /**
     * Indicates if the order form by default should display user's names after they have been assigned to an appointment.
     * @type {boolean}
     * @memberof GroupCustomer
     */
    showUserNames?: boolean | null;
    /**
     * Indicates if the order form by default instantly schedules appointments as soon as the order is placed.
     * @type {boolean}
     * @memberof GroupCustomer
     */
    useInstantAppointmentScheduling?: boolean | null;
    /**
     * An array of order forms a vendor group provides for placing orders. Only returned if group's type is CREATOR. 
     * @type {Array<OrderForm>}
     * @memberof GroupCustomer
     */
    orderForms?: Array<OrderForm> | null;
    /**
     * The Aryeo users associated with this group.
     * @type {Array<User>}
     * @memberof GroupCustomer
     */
    users?: Array<User> | null;
}


/**
 * @export
 */
export const GroupCustomerTypeEnum = {
    Creator: 'CREATOR',
    Agent: 'AGENT',
    Brokerage: 'BROKERAGE'
} as const;
export type GroupCustomerTypeEnum = typeof GroupCustomerTypeEnum[keyof typeof GroupCustomerTypeEnum];

/**
 * @export
 */
export const GroupCustomerCurrencyEnum = {
    Usd: 'USD',
    Cad: 'CAD',
    Gbp: 'GBP',
    Chf: 'CHF',
    Eur: 'EUR',
    Aud: 'AUD',
    Nzd: 'NZD',
    Zar: 'ZAR',
    Dkk: 'DKK'
} as const;
export type GroupCustomerCurrencyEnum = typeof GroupCustomerCurrencyEnum[keyof typeof GroupCustomerCurrencyEnum];

/**
 * @export
 */
export const GroupCustomerAvailabilityStyleEnum = {
    Time: 'TIME',
    TimeOfDay: 'TIME_OF_DAY',
    Legacy: 'LEGACY'
} as const;
export type GroupCustomerAvailabilityStyleEnum = typeof GroupCustomerAvailabilityStyleEnum[keyof typeof GroupCustomerAvailabilityStyleEnum];

/**
 * @export
 */
export const GroupCustomerAutomatedUserAssignmentStrategyEnum = {
    Recommended: 'RECOMMENDED',
    HoursPriority: 'HOURS_PRIORITY',
    Distance: 'DISTANCE',
    RoundRobin: 'ROUND_ROBIN',
    PriorityList: 'PRIORITY_LIST'
} as const;
export type GroupCustomerAutomatedUserAssignmentStrategyEnum = typeof GroupCustomerAutomatedUserAssignmentStrategyEnum[keyof typeof GroupCustomerAutomatedUserAssignmentStrategyEnum];


/**
 * Check if a given object implements the GroupCustomer interface.
 */
export function instanceOfGroupCustomer(value: object): value is GroupCustomer {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function GroupCustomerFromJSON(json: any): GroupCustomer {
    return GroupCustomerFromJSONTyped(json, false);
}

export function GroupCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupCustomer {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'] == null ? undefined : json['object'],
        'id': json['id'],
        'type': json['type'],
        'name': json['name'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'websiteUrl': json['website_url'] == null ? undefined : json['website_url'],
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
        'officeName': json['office_name'] == null ? undefined : json['office_name'],
        'licenseNumber': json['license_number'] == null ? undefined : json['license_number'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'orderPageUrl': json['order_page_url'] == null ? undefined : json['order_page_url'],
        'orderPageBackgroundColor': json['order_page_background_color'] == null ? undefined : json['order_page_background_color'],
        'defaultOrderForm': json['default_order_form'] == null ? undefined : OrderFormFromJSON(json['default_order_form']),
        'useTerritoryAwareness': json['use_territory_awareness'] == null ? undefined : json['use_territory_awareness'],
        'availabilityStyle': json['availability_style'] == null ? undefined : json['availability_style'],
        'slotIntervalMinutes': json['slot_interval_minutes'] == null ? undefined : json['slot_interval_minutes'],
        'useAutomatedUserAssignment': json['use_automated_user_assignment'] == null ? undefined : json['use_automated_user_assignment'],
        'automatedUserAssignmentStrategy': json['automated_user_assignment_strategy'] == null ? undefined : json['automated_user_assignment_strategy'],
        'showUserNames': json['show_user_names'] == null ? undefined : json['show_user_names'],
        'useInstantAppointmentScheduling': json['use_instant_appointment_scheduling'] == null ? undefined : json['use_instant_appointment_scheduling'],
        'orderForms': json['order_forms'] == null ? undefined : ((json['order_forms'] as Array<any>).map(OrderFormFromJSON)),
        'users': json['users'] == null ? undefined : ((json['users'] as Array<any>).map(UserFromJSON)),
    };
}

export function GroupCustomerToJSON(json: any): GroupCustomer {
    return GroupCustomerToJSONTyped(json, false);
}

export function GroupCustomerToJSONTyped(value?: GroupCustomer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'object': value['object'],
        'id': value['id'],
        'type': value['type'],
        'name': value['name'],
        'email': value['email'],
        'phone': value['phone'],
        'website_url': value['websiteUrl'],
        'logo_url': value['logoUrl'],
        'office_name': value['officeName'],
        'license_number': value['licenseNumber'],
        'timezone': value['timezone'],
        'currency': value['currency'],
        'slug': value['slug'],
        'order_page_url': value['orderPageUrl'],
        'order_page_background_color': value['orderPageBackgroundColor'],
        'default_order_form': OrderFormToJSON(value['defaultOrderForm']),
        'use_territory_awareness': value['useTerritoryAwareness'],
        'availability_style': value['availabilityStyle'],
        'slot_interval_minutes': value['slotIntervalMinutes'],
        'use_automated_user_assignment': value['useAutomatedUserAssignment'],
        'automated_user_assignment_strategy': value['automatedUserAssignmentStrategy'],
        'show_user_names': value['showUserNames'],
        'use_instant_appointment_scheduling': value['useInstantAppointmentScheduling'],
        'order_forms': value['orderForms'] == null ? undefined : ((value['orderForms'] as Array<any>).map(OrderFormToJSON)),
        'users': value['users'] == null ? undefined : ((value['users'] as Array<any>).map(UserToJSON)),
    };
}

