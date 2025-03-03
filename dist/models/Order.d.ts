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
import type { Address } from './Address';
import type { Appointment } from './Appointment';
import type { CustomerGroup } from './CustomerGroup';
import type { Discount } from './Discount';
import type { Group } from './Group';
import type { Listing } from './Listing';
import type { OrderForm } from './OrderForm';
import type { OrderItem } from './OrderItem';
import type { Tag } from './Tag';
/**
 * A payment request for some content or service.
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * ID of the order. UUID Version 4.
     * @type {string}
     * @memberof Order
     */
    id: string;
    /**
     * A vanity id used for internal tracking of orders for a given vendor.
     * @type {number}
     * @memberof Order
     */
    number?: number | null;
    /**
     * The title of the order, generated by combining the order's number property with the prefix 'Order #'.
     * @type {string}
     * @memberof Order
     */
    title: string;
    /**
     * The status of the order.
     * @type {string}
     * @memberof Order
     */
    status?: OrderStatusEnum;
    /**
     * The status of the order.
     * @type {string}
     * @memberof Order
     */
    orderStatus?: OrderOrderStatusEnum;
    /**
     * The fulfillment status of the order.
     * @type {string}
     * @memberof Order
     */
    fulfillmentStatus: OrderFulfillmentStatusEnum;
    /**
     * The payment status of the order.
     * @type {string}
     * @memberof Order
     */
    paymentStatus: OrderPaymentStatusEnum;
    /**
     * Internal order notes.
     * @type {string}
     * @memberof Order
     */
    internalNotes?: string | null;
    /**
     * The three-letter ISO 4217 currency code for the currency in which this order was or will be transacted. Must be a supported currency of Aryeo.
     * @type {string}
     * @memberof Order
     */
    currency?: OrderCurrencyEnum;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the total order amount that was or will be charged. This accounts for order items and taxes.
     * @type {number}
     * @memberof Order
     */
    totalAmount?: number;
    /**
     * A URL of a publicly-accessible webpage to pay for the order.
     * @type {string}
     * @memberof Order
     */
    paymentUrl?: string | null;
    /**
     * A URL of a publicly-accessible webpage to see the order's status.
     * @type {string}
     * @memberof Order
     */
    statusUrl: string | null;
    /**
     * A URL of a publicly-accessible pdf invoice of the order.
     * @type {string}
     * @memberof Order
     */
    invoiceUrl?: string | null;
    /**
     * Indicates if the current user is allowed to download content from the attached listing.
     * @type {boolean}
     * @memberof Order
     */
    downloadsAllowed: boolean;
    /**
     * Indicates if the current user is allowed to make a payment for the order.
     * @type {boolean}
     * @memberof Order
     */
    paymentsAllowed: boolean;
    /**
     *
     * @type {Address}
     * @memberof Order
     */
    address?: Address;
    /**
     *
     * @type {Group}
     * @memberof Order
     */
    customer?: Group;
    /**
     *
     * @type {CustomerGroup}
     * @memberof Order
     */
    customerGroup?: CustomerGroup;
    /**
     *
     * @type {Listing}
     * @memberof Order
     */
    listing?: Listing;
    /**
     *
     * @type {OrderForm}
     * @memberof Order
     */
    orderForm?: OrderForm;
    /**
     * The list of discounts applied to the order.
     * @type {Array<Discount>}
     * @memberof Order
     */
    discounts?: Array<Discount>;
    /**
     * The list of tags applied to the order.
     * @type {Array<Tag>}
     * @memberof Order
     */
    tags?: Array<Tag>;
    /**
     * items
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    items?: Array<OrderItem>;
    /**
     *
     * @type {Array<Appointment>}
     * @memberof Order
     */
    appointments?: Array<Appointment>;
    /**
     *
     * @type {Array<Appointment>}
     * @memberof Order
     */
    unconfirmedAppointments?: Array<Appointment>;
    /**
     * The date and time (ISO 8601 format) when the order was created.
     * @type {Date}
     * @memberof Order
     */
    createdAt: Date | null;
    /**
     * The date and time (ISO 8601 format) when the order was last updated.
     * @type {Date}
     * @memberof Order
     */
    updatedAt: Date | null;
}
/**
 * @export
 */
export declare const OrderStatusEnum: {
    readonly Confirmed: "CONFIRMED";
    readonly Ghost: "GHOST";
};
export type OrderStatusEnum = typeof OrderStatusEnum[keyof typeof OrderStatusEnum];
/**
 * @export
 */
export declare const OrderOrderStatusEnum: {
    readonly Draft: "DRAFT";
    readonly Open: "OPEN";
    readonly Canceled: "CANCELED";
};
export type OrderOrderStatusEnum = typeof OrderOrderStatusEnum[keyof typeof OrderOrderStatusEnum];
/**
 * @export
 */
export declare const OrderFulfillmentStatusEnum: {
    readonly Fulfilled: "FULFILLED";
    readonly Unfulfilled: "UNFULFILLED";
};
export type OrderFulfillmentStatusEnum = typeof OrderFulfillmentStatusEnum[keyof typeof OrderFulfillmentStatusEnum];
/**
 * @export
 */
export declare const OrderPaymentStatusEnum: {
    readonly Paid: "PAID";
    readonly PartiallyPaid: "PARTIALLY_PAID";
    readonly Unpaid: "UNPAID";
};
export type OrderPaymentStatusEnum = typeof OrderPaymentStatusEnum[keyof typeof OrderPaymentStatusEnum];
/**
 * @export
 */
export declare const OrderCurrencyEnum: {
    readonly Usd: "USD";
    readonly Cad: "CAD";
    readonly Gbp: "GBP";
    readonly Chf: "CHF";
    readonly Eur: "EUR";
    readonly Aud: "AUD";
    readonly Nzd: "NZD";
    readonly Zar: "ZAR";
};
export type OrderCurrencyEnum = typeof OrderCurrencyEnum[keyof typeof OrderCurrencyEnum];
/**
 * Check if a given object implements the Order interface.
 */
export declare function instanceOfOrder(value: object): value is Order;
export declare function OrderFromJSON(json: any): Order;
export declare function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order;
export declare function OrderToJSON(json: any): Order;
export declare function OrderToJSONTyped(value?: Order | null, ignoreDiscriminator?: boolean): any;
