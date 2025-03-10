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

/**
 * A user's channel preferences for receiving a notification.
 * @export
 * @interface NotificationPreferences
 */
export interface NotificationPreferences {
    /**
     * The notification type.
     * @type {string}
     * @memberof NotificationPreferences
     */
    notificationType: NotificationPreferencesNotificationTypeEnum;
    /**
     * Is the email channel enabled?
     * @type {boolean}
     * @memberof NotificationPreferences
     */
    email: boolean;
    /**
     * Is the SMS channel enabled?
     * @type {boolean}
     * @memberof NotificationPreferences
     */
    sms: boolean;
    /**
     * Is the in-app channel enabled?
     * @type {boolean}
     * @memberof NotificationPreferences
     */
    inApp: boolean;
    /**
     * Is the push (notification) channel enabled?
     * @type {boolean}
     * @memberof NotificationPreferences
     */
    push: boolean;
}


/**
 * @export
 */
export const NotificationPreferencesNotificationTypeEnum = {
    CreatorOrderReceived: 'CREATOR_ORDER_RECEIVED',
    CreatorOrderPaymentProcessed: 'CREATOR_ORDER_PAYMENT_PROCESSED',
    CreatorAppointmentScheduled: 'CREATOR_APPOINTMENT_SCHEDULED',
    CreatorAppointmentRescheduled: 'CREATOR_APPOINTMENT_RESCHEDULED',
    CreatorAppointmentCanceled: 'CREATOR_APPOINTMENT_CANCELED',
    CreatorAppointmentPostponed: 'CREATOR_APPOINTMENT_POSTPONED',
    CreatorAppointmentAssigned: 'CREATOR_APPOINTMENT_ASSIGNED',
    CreatorAppointmentUnassigned: 'CREATOR_APPOINTMENT_UNASSIGNED',
    CreatorAppointmentReminder: 'CREATOR_APPOINTMENT_REMINDER',
    CreatorCustomerTeamInvitation: 'CREATOR_CUSTOMER_TEAM_INVITATION',
    CreatorUpcomingAppointmentsSummary: 'CREATOR_UPCOMING_APPOINTMENTS_SUMMARY',
    CreatorExportReady: 'CREATOR_EXPORT_READY',
    CreatorTeamMemberInvitation: 'CREATOR_TEAM_MEMBER_INVITATION',
    ListingDelivery: 'LISTING_DELIVERY',
    CustomerOrderConfirmation: 'CUSTOMER_ORDER_CONFIRMATION',
    CustomerOrderPaymentRequired: 'CUSTOMER_ORDER_PAYMENT_REQUIRED',
    CustomerAppointmentScheduled: 'CUSTOMER_APPOINTMENT_SCHEDULED',
    CustomerAppointmentRescheduled: 'CUSTOMER_APPOINTMENT_RESCHEDULED',
    CustomerAppointmentCanceled: 'CUSTOMER_APPOINTMENT_CANCELED',
    CustomerAppointmentPostponed: 'CUSTOMER_APPOINTMENT_POSTPONED',
    CustomerAppointmentReminder: 'CUSTOMER_APPOINTMENT_REMINDER',
    CustomerNewLead: 'CUSTOMER_NEW_LEAD',
    CustomerTeamInvitation: 'CUSTOMER_TEAM_INVITATION',
    CustomerUserVerification: 'CUSTOMER_USER_VERIFICATION',
    CustomerUserResetPassword: 'CUSTOMER_USER_RESET_PASSWORD',
    CustomerUserActivation: 'CUSTOMER_USER_ACTIVATION',
    PortalCustom: 'PORTAL_CUSTOM'
} as const;
export type NotificationPreferencesNotificationTypeEnum = typeof NotificationPreferencesNotificationTypeEnum[keyof typeof NotificationPreferencesNotificationTypeEnum];


/**
 * Check if a given object implements the NotificationPreferences interface.
 */
export function instanceOfNotificationPreferences(value: object): value is NotificationPreferences {
    if (!('notificationType' in value) || value['notificationType'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('sms' in value) || value['sms'] === undefined) return false;
    if (!('inApp' in value) || value['inApp'] === undefined) return false;
    if (!('push' in value) || value['push'] === undefined) return false;
    return true;
}

export function NotificationPreferencesFromJSON(json: any): NotificationPreferences {
    return NotificationPreferencesFromJSONTyped(json, false);
}

export function NotificationPreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationPreferences {
    if (json == null) {
        return json;
    }
    return {
        
        'notificationType': json['notification_type'],
        'email': json['email'],
        'sms': json['sms'],
        'inApp': json['in_app'],
        'push': json['push'],
    };
}

export function NotificationPreferencesToJSON(json: any): NotificationPreferences {
    return NotificationPreferencesToJSONTyped(json, false);
}

export function NotificationPreferencesToJSONTyped(value?: NotificationPreferences | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'notification_type': value['notificationType'],
        'email': value['email'],
        'sms': value['sms'],
        'in_app': value['inApp'],
        'push': value['push'],
    };
}

