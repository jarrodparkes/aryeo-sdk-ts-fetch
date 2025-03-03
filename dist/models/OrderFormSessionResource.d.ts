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
import type { OrderFormSession } from './OrderFormSession';
/**
 * An order.
 * @export
 * @interface OrderFormSessionResource
 */
export interface OrderFormSessionResource {
    /**
     * What was the state of the request?
     * @type {string}
     * @memberof OrderFormSessionResource
     */
    status: string;
    /**
     *
     * @type {OrderFormSession}
     * @memberof OrderFormSessionResource
     */
    data?: OrderFormSession;
}
/**
 * Check if a given object implements the OrderFormSessionResource interface.
 */
export declare function instanceOfOrderFormSessionResource(value: object): value is OrderFormSessionResource;
export declare function OrderFormSessionResourceFromJSON(json: any): OrderFormSessionResource;
export declare function OrderFormSessionResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderFormSessionResource;
export declare function OrderFormSessionResourceToJSON(json: any): OrderFormSessionResource;
export declare function OrderFormSessionResourceToJSONTyped(value?: OrderFormSessionResource | null, ignoreDiscriminator?: boolean): any;
