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
 * A notification preference.
 * @export
 * @interface NotificationPreference
 */
export interface NotificationPreference {
    /**
     * The notification type.
     * @type {string}
     * @memberof NotificationPreference
     */
    notificationType?: NotificationPreferenceNotificationTypeEnum;
    /**
     * Is the push channel enabled?
     * @type {boolean}
     * @memberof NotificationPreference
     */
    push?: boolean;
    /**
     * Is the sms channel enabled?
     * @type {boolean}
     * @memberof NotificationPreference
     */
    sms?: boolean;
    /**
     * Is the in-app channel enabled?
     * @type {boolean}
     * @memberof NotificationPreference
     */
    inApp?: boolean;
    /**
     * Is the email channel enabled?
     * @type {boolean}
     * @memberof NotificationPreference
     */
    email?: boolean;
}
/**
 * @export
 */
export declare const NotificationPreferenceNotificationTypeEnum: {
    readonly CreatorOrderReceived: "CREATOR_ORDER_RECEIVED";
    readonly CreatorOrderPaymentProcessed: "CREATOR_ORDER_PAYMENT_PROCESSED";
    readonly CreatorAppointmentScheduled: "CREATOR_APPOINTMENT_SCHEDULED";
    readonly CreatorAppointmentRescheduled: "CREATOR_APPOINTMENT_RESCHEDULED";
    readonly CreatorAppointmentCanceled: "CREATOR_APPOINTMENT_CANCELED";
    readonly CreatorAppointmentPostponed: "CREATOR_APPOINTMENT_POSTPONED";
    readonly CreatorAppointmentAssigned: "CREATOR_APPOINTMENT_ASSIGNED";
    readonly CreatorAppointmentUnassigned: "CREATOR_APPOINTMENT_UNASSIGNED";
    readonly CreatorAppointmentReminder: "CREATOR_APPOINTMENT_REMINDER";
    readonly CreatorUpcomingAppointmentsSummary: "CREATOR_UPCOMING_APPOINTMENTS_SUMMARY";
    readonly CreatorExportReady: "CREATOR_EXPORT_READY";
    readonly CreatorCustomerTeamInvitation: "CREATOR_CUSTOMER_TEAM_INVITATION";
    readonly CreatorTeamMemberInvitation: "CREATOR_TEAM_MEMBER_INVITATION";
    readonly ListingDelivery: "LISTING_DELIVERY";
    readonly CustomerOrderConfirmation: "CUSTOMER_ORDER_CONFIRMATION";
    readonly CustomerOrderPaymentRequired: "CUSTOMER_ORDER_PAYMENT_REQUIRED";
    readonly CustomerAppointmentScheduled: "CUSTOMER_APPOINTMENT_SCHEDULED";
    readonly CustomerAppointmentRescheduled: "CUSTOMER_APPOINTMENT_RESCHEDULED";
    readonly CustomerAppointmentCanceled: "CUSTOMER_APPOINTMENT_CANCELED";
    readonly CustomerAppointmentPostponed: "CUSTOMER_APPOINTMENT_POSTPONED";
    readonly CustomerAppointmentReminder: "CUSTOMER_APPOINTMENT_REMINDER";
    readonly CustomerNewLead: "CUSTOMER_NEW_LEAD";
    readonly CustomerUserVerification: "CUSTOMER_USER_VERIFICATION";
    readonly CustomerUserResetPassword: "CUSTOMER_USER_RESET_PASSWORD";
    readonly CustomerUserActivation: "CUSTOMER_USER_ACTIVATION";
    readonly PortalCustom: "PORTAL_CUSTOM";
};
export type NotificationPreferenceNotificationTypeEnum = typeof NotificationPreferenceNotificationTypeEnum[keyof typeof NotificationPreferenceNotificationTypeEnum];
/**
 * Check if a given object implements the NotificationPreference interface.
 */
export declare function instanceOfNotificationPreference(value: object): value is NotificationPreference;
export declare function NotificationPreferenceFromJSON(json: any): NotificationPreference;
export declare function NotificationPreferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationPreference;
export declare function NotificationPreferenceToJSON(json: any): NotificationPreference;
export declare function NotificationPreferenceToJSONTyped(value?: NotificationPreference | null, ignoreDiscriminator?: boolean): any;
