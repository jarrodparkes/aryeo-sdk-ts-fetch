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
import type { NotificationPreferences } from './NotificationPreferences';
/**
 * A collection of notification preferences.
 * @export
 * @interface NotificationPreferencesCollection
 */
export interface NotificationPreferencesCollection {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof NotificationPreferencesCollection
     */
    status: string;
    /**
     * A collection of objects.
     * @type {Array<NotificationPreferences>}
     * @memberof NotificationPreferencesCollection
     */
    data?: Array<NotificationPreferences> | null;
}
/**
 * Check if a given object implements the NotificationPreferencesCollection interface.
 */
export declare function instanceOfNotificationPreferencesCollection(value: object): value is NotificationPreferencesCollection;
export declare function NotificationPreferencesCollectionFromJSON(json: any): NotificationPreferencesCollection;
export declare function NotificationPreferencesCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationPreferencesCollection;
export declare function NotificationPreferencesCollectionToJSON(json: any): NotificationPreferencesCollection;
export declare function NotificationPreferencesCollectionToJSONTyped(value?: NotificationPreferencesCollection | null, ignoreDiscriminator?: boolean): any;
