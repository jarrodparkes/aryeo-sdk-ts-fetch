/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { Appointment } from './Appointment';
import {
    AppointmentFromJSON,
    AppointmentFromJSONTyped,
    AppointmentToJSON,
    AppointmentToJSONTyped,
} from './Appointment';
import type { Order } from './Order';
import {
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
    OrderToJSONTyped,
} from './Order';
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
    ProductToJSONTyped,
} from './Product';
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
    TaxToJSONTyped,
} from './Tax';
import type { ProductVariant } from './ProductVariant';
import {
    ProductVariantFromJSON,
    ProductVariantFromJSONTyped,
    ProductVariantToJSON,
    ProductVariantToJSONTyped,
} from './ProductVariant';
import type { DiscountAmount } from './DiscountAmount';
import {
    DiscountAmountFromJSON,
    DiscountAmountFromJSONTyped,
    DiscountAmountToJSON,
    DiscountAmountToJSONTyped,
} from './DiscountAmount';

/**
 * An individual service or charge of an order. Order items can capture products serviced by or fees applied to an order. 
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * ID of the item. UUID Version 4.
     * @type {string}
     * @memberof OrderItem
     */
    id: string;
    /**
     * The title of the item.
     * @type {string}
     * @memberof OrderItem
     */
    title?: string;
    /**
     * The sub title of the item.
     * @type {string}
     * @memberof OrderItem
     */
    subtitle?: string;
    /**
     * The description of the item.
     * @type {string}
     * @memberof OrderItem
     */
    description?: string;
    /**
     * The type of order item.
     * @type {string}
     * @memberof OrderItem
     */
    purchasableType?: OrderItemPurchasableTypeEnum;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the cost of a single instance of this item. This is multiplied by the quantity to calculate what was or will be charged. Legacy version of unit_price_amount.
     * @type {number}
     * @memberof OrderItem
     */
    amount?: number;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the cost of a single instance of this item. This is multiplied by the quantity to calculate what was or will be charged.
     * @type {number}
     * @memberof OrderItem
     */
    unitPriceAmount?: number;
    /**
     * A positive integer representing the number of instances of this item that was or will be serviced.
     * @type {number}
     * @memberof OrderItem
     */
    quantity?: number;
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the total cost of this item (before discounts and taxes have been applied) to be charge.
     * @type {number}
     * @memberof OrderItem
     */
    grossTotalAmount?: number;
    /**
     * 
     * @type {Appointment}
     * @memberof OrderItem
     */
    appointment?: Appointment;
    /**
     * 
     * @type {Array<DiscountAmount>}
     * @memberof OrderItem
     */
    discounts?: Array<DiscountAmount>;
    /**
     * 
     * @type {Order}
     * @memberof OrderItem
     */
    order?: Order;
    /**
     * 
     * @type {Product}
     * @memberof OrderItem
     */
    product?: Product;
    /**
     * 
     * @type {ProductVariant}
     * @memberof OrderItem
     */
    productVariant?: ProductVariant;
    /**
     * 
     * @type {Array<Tax>}
     * @memberof OrderItem
     */
    taxes?: Array<Tax>;
}


/**
 * @export
 */
export const OrderItemPurchasableTypeEnum = {
    ProductVariant: 'PRODUCT_VARIANT',
    Fee: 'FEE',
    Custom: 'CUSTOM'
} as const;
export type OrderItemPurchasableTypeEnum = typeof OrderItemPurchasableTypeEnum[keyof typeof OrderItemPurchasableTypeEnum];


/**
 * Check if a given object implements the OrderItem interface.
 */
export function instanceOfOrderItem(value: object): value is OrderItem {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function OrderItemFromJSON(json: any): OrderItem {
    return OrderItemFromJSONTyped(json, false);
}

export function OrderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
        'description': json['description'] == null ? undefined : json['description'],
        'purchasableType': json['purchasable_type'] == null ? undefined : json['purchasable_type'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'unitPriceAmount': json['unit_price_amount'] == null ? undefined : json['unit_price_amount'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'grossTotalAmount': json['gross_total_amount'] == null ? undefined : json['gross_total_amount'],
        'appointment': json['appointment'] == null ? undefined : AppointmentFromJSON(json['appointment']),
        'discounts': json['discounts'] == null ? undefined : ((json['discounts'] as Array<any>).map(DiscountAmountFromJSON)),
        'order': json['order'] == null ? undefined : OrderFromJSON(json['order']),
        'product': json['product'] == null ? undefined : ProductFromJSON(json['product']),
        'productVariant': json['product_variant'] == null ? undefined : ProductVariantFromJSON(json['product_variant']),
        'taxes': json['taxes'] == null ? undefined : ((json['taxes'] as Array<any>).map(TaxFromJSON)),
    };
}

export function OrderItemToJSON(json: any): OrderItem {
    return OrderItemToJSONTyped(json, false);
}

export function OrderItemToJSONTyped(value?: OrderItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'title': value['title'],
        'subtitle': value['subtitle'],
        'description': value['description'],
        'purchasable_type': value['purchasableType'],
        'amount': value['amount'],
        'unit_price_amount': value['unitPriceAmount'],
        'quantity': value['quantity'],
        'gross_total_amount': value['grossTotalAmount'],
        'appointment': AppointmentToJSON(value['appointment']),
        'discounts': value['discounts'] == null ? undefined : ((value['discounts'] as Array<any>).map(DiscountAmountToJSON)),
        'order': OrderToJSON(value['order']),
        'product': ProductToJSON(value['product']),
        'product_variant': ProductVariantToJSON(value['productVariant']),
        'taxes': value['taxes'] == null ? undefined : ((value['taxes'] as Array<any>).map(TaxToJSON)),
    };
}

