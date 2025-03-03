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
 * Data used to generate or retrieve a Customer object inline. If you create an customer upfront, pass the customer_id parameter. Otherwise, this customer_data will be used to scaffold a new Customer (Group) object, if present.
 * @export
 * @interface OrderFormSessionPostPayloadCustomerData
 */
export interface OrderFormSessionPostPayloadCustomerData {
    /**
     * Single sign on identifier of the customer user.
     * @type {string}
     * @memberof OrderFormSessionPostPayloadCustomerData
     */
    ssoId?: string;
    /**
     * Email address of the user.
     * @type {string}
     * @memberof OrderFormSessionPostPayloadCustomerData
     */
    email?: string;
    /**
     * First name of the user.
     * @type {string}
     * @memberof OrderFormSessionPostPayloadCustomerData
     */
    firstName?: string | null;
    /**
     * Last name of the user.
     * @type {string}
     * @memberof OrderFormSessionPostPayloadCustomerData
     */
    lastName?: string | null;
    /**
     * A phone number represented in whichever standards specified by the user, typically ###-###-#### (separated by hyphens).
     * @type {string}
     * @memberof OrderFormSessionPostPayloadCustomerData
     */
    phone?: string | null;
}
/**
 * Check if a given object implements the OrderFormSessionPostPayloadCustomerData interface.
 */
export declare function instanceOfOrderFormSessionPostPayloadCustomerData(value: object): value is OrderFormSessionPostPayloadCustomerData;
export declare function OrderFormSessionPostPayloadCustomerDataFromJSON(json: any): OrderFormSessionPostPayloadCustomerData;
export declare function OrderFormSessionPostPayloadCustomerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderFormSessionPostPayloadCustomerData;
export declare function OrderFormSessionPostPayloadCustomerDataToJSON(json: any): OrderFormSessionPostPayloadCustomerData;
export declare function OrderFormSessionPostPayloadCustomerDataToJSONTyped(value?: OrderFormSessionPostPayloadCustomerData | null, ignoreDiscriminator?: boolean): any;
