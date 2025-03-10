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
import type { Discountable } from './Discountable';
import type { PromotionCode } from './PromotionCode';
/**
 * A coupon contains information about a percent-off or amount-off discount you might want to apply to an order.
 * @export
 * @interface Coupon
 */
export interface Coupon {
    /**
     * ID of the coupon. UUID Version 4.
     * @type {string}
     * @memberof Coupon
     */
    id: string;
    /**
     * Name of the coupon displayed to customers on orders.
     * @type {string}
     * @memberof Coupon
     */
    name?: string;
    /**
     * A decimal value representing the percent that will be taken off the subtotal of an order this coupon is applied to. For example, 0.500 would represent an applied discount of 50%, meaning an order with a subtotal of $100 would result in a balance of $50.
     * @type {number}
     * @memberof Coupon
     */
    percentOff?: number;
    /**
     * Amount that will be taken off the subtotal of any orders this coupon is applied to. Amount represented in the smallest currency unit (that is, 100 cents for $1.00).
     * @type {number}
     * @memberof Coupon
     */
    amountOff?: number;
    /**
     *
     * @type {Array<PromotionCode>}
     * @memberof Coupon
     */
    promotionCodes?: Array<PromotionCode>;
    /**
     *
     * @type {Array<Discountable>}
     * @memberof Coupon
     */
    discountables?: Array<Discountable>;
    /**
     * The date and time (ISO 8601 format) when the order was created.
     * @type {Date}
     * @memberof Coupon
     */
    createdAt?: Date | null;
}
/**
 * Check if a given object implements the Coupon interface.
 */
export declare function instanceOfCoupon(value: object): value is Coupon;
export declare function CouponFromJSON(json: any): Coupon;
export declare function CouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coupon;
export declare function CouponToJSON(json: any): Coupon;
export declare function CouponToJSONTyped(value?: Coupon | null, ignoreDiscriminator?: boolean): any;
