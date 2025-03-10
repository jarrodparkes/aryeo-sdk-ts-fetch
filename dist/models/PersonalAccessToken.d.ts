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
import type { Group } from './Group';
import type { User } from './User';
/**
 * A personal access token, its user, and the it's users group (if applicable).
 * @export
 * @interface PersonalAccessToken
 */
export interface PersonalAccessToken {
    /**
     * Authorization token for a user.
     * @type {string}
     * @memberof PersonalAccessToken
     */
    token: string;
    /**
     *
     * @type {User}
     * @memberof PersonalAccessToken
     */
    user: User;
    /**
     *
     * @type {Group}
     * @memberof PersonalAccessToken
     */
    group?: Group;
}
/**
 * Check if a given object implements the PersonalAccessToken interface.
 */
export declare function instanceOfPersonalAccessToken(value: object): value is PersonalAccessToken;
export declare function PersonalAccessTokenFromJSON(json: any): PersonalAccessToken;
export declare function PersonalAccessTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalAccessToken;
export declare function PersonalAccessTokenToJSON(json: any): PersonalAccessToken;
export declare function PersonalAccessTokenToJSONTyped(value?: PersonalAccessToken | null, ignoreDiscriminator?: boolean): any;
