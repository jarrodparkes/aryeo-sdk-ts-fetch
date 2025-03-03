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
import type { SsoProvider } from './SsoProvider';
/**
 * A SSO User contains the information pertaining to a users SSO account.
 * @export
 * @interface SsoUser
 */
export interface SsoUser {
    /**
     * SSO ID of the user
     * @type {string}
     * @memberof SsoUser
     */
    ssoId: string;
    /**
     *
     * @type {SsoProvider}
     * @memberof SsoUser
     */
    ssoProvider?: SsoProvider;
}
/**
 * Check if a given object implements the SsoUser interface.
 */
export declare function instanceOfSsoUser(value: object): value is SsoUser;
export declare function SsoUserFromJSON(json: any): SsoUser;
export declare function SsoUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SsoUser;
export declare function SsoUserToJSON(json: any): SsoUser;
export declare function SsoUserToJSONTyped(value?: SsoUser | null, ignoreDiscriminator?: boolean): any;
