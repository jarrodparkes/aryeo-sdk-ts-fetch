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
 * A visual representation of something.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * ID of the image. UUID Version 4.
     * @type {string}
     * @memberof Image
     */
    id: string;
    /**
     * A URL for a thumbnail-sized version of the image.
     * @type {string}
     * @memberof Image
     */
    thumbnailUrl: string;
    /**
     * A URL for a large version of the image.
     * @type {string}
     * @memberof Image
     */
    largeUrl: string;
    /**
     * The name of the file.
     * @type {string}
     * @memberof Image
     */
    filename: string;
    /**
     * A URL for the original, full-resolution version of the image. Useful for downloading.
     * @type {string}
     * @memberof Image
     */
    originalUrl: string;
    /**
     * The order in which the image should be displayed amongst other related images.
     * @type {number}
     * @memberof Image
     */
    index?: number | null;
    /**
     * A brief explanation of the image.
     * @type {string}
     * @memberof Image
     */
    caption?: string | null;
    /**
     * Should the image be displayed in a gallery?
     * @type {boolean}
     * @memberof Image
     */
    displayInGallery: boolean;
}
/**
 * Check if a given object implements the Image interface.
 */
export declare function instanceOfImage(value: object): value is Image;
export declare function ImageFromJSON(json: any): Image;
export declare function ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Image;
export declare function ImageToJSON(json: any): Image;
export declare function ImageToJSONTyped(value?: Image | null, ignoreDiscriminator?: boolean): any;
