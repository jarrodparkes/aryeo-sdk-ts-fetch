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
 * A label attached to something for the purpose of identification or categorization.
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * ID. UUID Version 4.
     * @type {string}
     * @memberof Tag
     */
    id: string;
    /**
     * The name of the tag.
     * @type {string}
     * @memberof Tag
     */
    name: string;
    /**
     * The slug of the tag.
     * @type {string}
     * @memberof Tag
     */
    slug: string;
    /**
     * The background color of the tag.
     * @type {string}
     * @memberof Tag
     */
    color: string;
    /**
     * The font color of the tag.
     * @type {string}
     * @memberof Tag
     */
    fontColor: string;
}
/**
 * Check if a given object implements the Tag interface.
 */
export declare function instanceOfTag(value: object): value is Tag;
export declare function TagFromJSON(json: any): Tag;
export declare function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag;
export declare function TagToJSON(json: any): Tag;
export declare function TagToJSONTyped(value?: Tag | null, ignoreDiscriminator?: boolean): any;
