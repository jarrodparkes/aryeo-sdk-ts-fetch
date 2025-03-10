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
import type { OrderFormSessionPostPayloadAddressData } from './OrderFormSessionPostPayloadAddressData';
import type { OrderFormSessionPostPayloadCustomerData } from './OrderFormSessionPostPayloadCustomerData';
import type { OrderFormSessionPostPayloadStepVisibility } from './OrderFormSessionPostPayloadStepVisibility';
/**
 * Payload for creating an OrderFormSession to be used for an order form.
 * @export
 * @interface OrderFormSessionPostPayload
 */
export interface OrderFormSessionPostPayload {
    /**
     * ID of an order form to associate with the order form session. UUID Version 4.
     * @type {string}
     * @memberof OrderFormSessionPostPayload
     */
    orderFormId: string;
    /**
     * ID of an address to associate with the order form session. UUID Version 4.
     * @type {string}
     * @memberof OrderFormSessionPostPayload
     */
    addressId?: string;
    /**
     *
     * @type {OrderFormSessionPostPayloadAddressData}
     * @memberof OrderFormSessionPostPayload
     */
    addressData?: OrderFormSessionPostPayloadAddressData;
    /**
     * ID of the customer to associate with the order form session. UUID Version 4.
     * @type {string}
     * @memberof OrderFormSessionPostPayload
     */
    customerId?: string;
    /**
     * ID of the customer group to associate with the order form session. UUID Version 4.
     * @type {string}
     * @memberof OrderFormSessionPostPayload
     */
    customerGroupId?: string;
    /**
     *
     * @type {OrderFormSessionPostPayloadCustomerData}
     * @memberof OrderFormSessionPostPayload
     */
    customerData?: OrderFormSessionPostPayloadCustomerData;
    /**
     * IDs of the coupons to associate with this order.
     * @type {Array<string>}
     * @memberof OrderFormSessionPostPayload
     */
    couponIds?: Array<string>;
    /**
     *
     * @type {OrderFormSessionPostPayloadStepVisibility}
     * @memberof OrderFormSessionPostPayload
     */
    stepVisibility?: OrderFormSessionPostPayloadStepVisibility;
    /**
     * The URL the customer will be directed to after the payment or order placement is successful. By default, customers are directed to the Aryeo order confirmation page.
     * @type {string}
     * @memberof OrderFormSessionPostPayload
     */
    successUrl?: string;
}
/**
 * Check if a given object implements the OrderFormSessionPostPayload interface.
 */
export declare function instanceOfOrderFormSessionPostPayload(value: object): value is OrderFormSessionPostPayload;
export declare function OrderFormSessionPostPayloadFromJSON(json: any): OrderFormSessionPostPayload;
export declare function OrderFormSessionPostPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderFormSessionPostPayload;
export declare function OrderFormSessionPostPayloadToJSON(json: any): OrderFormSessionPostPayload;
export declare function OrderFormSessionPostPayloadToJSONTyped(value?: OrderFormSessionPostPayload | null, ignoreDiscriminator?: boolean): any;
