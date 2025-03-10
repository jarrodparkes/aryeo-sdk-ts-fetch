"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCodesRedeemDiscountedTypeDiscountedPostDiscountedTypeEnum = exports.OrdersApi = void 0;
const index_1 = require("../models/index");
const runtime = require("../runtime");
/**
 *
 */
class OrdersApi extends runtime.BaseAPI {
    /**
     * Delete an order item.
     */
    deleteOrderItemsOrderItemIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderItemId'] == null) {
                throw new runtime.RequiredError('orderItemId', 'Required parameter "orderItemId" was null or undefined when calling deleteOrderItemsOrderItemId().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/order-items/{order_item_id}`.replace(`{${"order_item_id"}}`, encodeURIComponent(String(requestParameters['orderItemId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete an order item.
     */
    deleteOrderItemsOrderItemId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteOrderItemsOrderItemIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Retrieve an order item.
     */
    getOrderItemsOrderItemIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderItemId'] == null) {
                throw new runtime.RequiredError('orderItemId', 'Required parameter "orderItemId" was null or undefined when calling getOrderItemsOrderItemId().');
            }
            const queryParameters = {};
            if (requestParameters['include'] != null) {
                queryParameters['include'] = requestParameters['include'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/order-items/{order_item_id}`.replace(`{${"order_item_id"}}`, encodeURIComponent(String(requestParameters['orderItemId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderItemResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieve an order item.
     */
    getOrderItemsOrderItemId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrderItemsOrderItemIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists all orders of a group.
     */
    getOrdersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['aryeoGroupId'] == null) {
                throw new runtime.RequiredError('aryeoGroupId', 'Required parameter "aryeoGroupId" was null or undefined when calling getOrders().');
            }
            const queryParameters = {};
            if (requestParameters['include'] != null) {
                queryParameters['include'] = requestParameters['include'];
            }
            if (requestParameters['filterSearch'] != null) {
                queryParameters['filter[search]'] = requestParameters['filterSearch'];
            }
            if (requestParameters['filterPaymentStatus'] != null) {
                queryParameters['filter[payment_status]'] = requestParameters['filterPaymentStatus'];
            }
            if (requestParameters['filterFulfillmentStatus'] != null) {
                queryParameters['filter[fulfillment_status]'] = requestParameters['filterFulfillmentStatus'];
            }
            if (requestParameters['filterAppointmentStartAtGte'] != null) {
                queryParameters['filter[appointment_start_at_gte]'] = requestParameters['filterAppointmentStartAtGte'].toISOString();
            }
            if (requestParameters['filterAppointmentStartAtLte'] != null) {
                queryParameters['filter[appointment_start_at_lte]'] = requestParameters['filterAppointmentStartAtLte'].toISOString();
            }
            if (requestParameters['filterCreatorGroupId'] != null) {
                queryParameters['filter[creator_group_id]'] = requestParameters['filterCreatorGroupId'];
            }
            if (requestParameters['filterTagIds'] != null) {
                queryParameters['filter[tag_ids][]'] = requestParameters['filterTagIds'].join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters['filterUserIds'] != null) {
                queryParameters['filter[user_ids][]'] = requestParameters['filterUserIds'].join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters['sort'] != null) {
                queryParameters['sort'] = requestParameters['sort'];
            }
            if (requestParameters['perPage'] != null) {
                queryParameters['per_page'] = requestParameters['perPage'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            const headerParameters = {};
            if (requestParameters['aryeoGroupId'] != null) {
                headerParameters['Aryeo-Group-Id'] = String(requestParameters['aryeoGroupId']);
            }
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("Token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/orders`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderCollectionFromJSON)(jsonValue));
        });
    }
    /**
     * Lists all orders of a group.
     */
    getOrders(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrdersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves the details of an order with the given ID.
     */
    getOrdersIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderId'] == null) {
                throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling getOrdersId().');
            }
            if (requestParameters['aryeoGroupId'] == null) {
                throw new runtime.RequiredError('aryeoGroupId', 'Required parameter "aryeoGroupId" was null or undefined when calling getOrdersId().');
            }
            const queryParameters = {};
            if (requestParameters['include'] != null) {
                queryParameters['include'] = requestParameters['include'];
            }
            const headerParameters = {};
            if (requestParameters['aryeoGroupId'] != null) {
                headerParameters['Aryeo-Group-Id'] = String(requestParameters['aryeoGroupId']);
            }
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("Token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/orders/{order_id}`.replace(`{${"order_id"}}`, encodeURIComponent(String(requestParameters['orderId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves the details of an order with the given ID.
     */
    getOrdersId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrdersIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * interactive-contents-url-check-post
     */
    interactiveContentsUrlCheckPostRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/interactive-contents/url-check`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * interactive-contents-url-check-post
     */
    interactiveContentsUrlCheckPost(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.interactiveContentsUrlCheckPostRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * order-items-order-item-id-pay-run-item-defaults-get
     */
    orderItemsOrderItemIdPayRunItemDefaultsGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderItemId'] == null) {
                throw new runtime.RequiredError('orderItemId', 'Required parameter "orderItemId" was null or undefined when calling orderItemsOrderItemIdPayRunItemDefaultsGet().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/order-items/{order_item_id}/pay-run-item-defaults`.replace(`{${"order_item_id"}}`, encodeURIComponent(String(requestParameters['orderItemId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * order-items-order-item-id-pay-run-item-defaults-get
     */
    orderItemsOrderItemIdPayRunItemDefaultsGet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.orderItemsOrderItemIdPayRunItemDefaultsGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * orders-order-billing-address-put
     */
    ordersOrderBillingAddressPutRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['order'] == null) {
                throw new runtime.RequiredError('order', 'Required parameter "order" was null or undefined when calling ordersOrderBillingAddressPut().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/orders/{order}/billing-address`.replace(`{${"order"}}`, encodeURIComponent(String(requestParameters['order']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * orders-order-billing-address-put
     */
    ordersOrderBillingAddressPut(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersOrderBillingAddressPutRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * orders-order-discounts-discount-delete
     */
    ordersOrderDiscountsDiscountDeleteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['order'] == null) {
                throw new runtime.RequiredError('order', 'Required parameter "order" was null or undefined when calling ordersOrderDiscountsDiscountDelete().');
            }
            if (requestParameters['discount'] == null) {
                throw new runtime.RequiredError('discount', 'Required parameter "discount" was null or undefined when calling ordersOrderDiscountsDiscountDelete().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/orders/{order}/discounts/{discount}`.replace(`{${"order"}}`, encodeURIComponent(String(requestParameters['order']))).replace(`{${"discount"}}`, encodeURIComponent(String(requestParameters['discount']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * orders-order-discounts-discount-delete
     */
    ordersOrderDiscountsDiscountDelete(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersOrderDiscountsDiscountDeleteRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * orders-order-id-notes-put
     */
    ordersOrderIdNotesPutRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderId'] == null) {
                throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling ordersOrderIdNotesPut().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/orders/{order_id}/notes`.replace(`{${"order_id"}}`, encodeURIComponent(String(requestParameters['orderId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * orders-order-id-notes-put
     */
    ordersOrderIdNotesPut(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersOrderIdNotesPutRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * orders-order-id-put
     */
    ordersOrderIdPutRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderId'] == null) {
                throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling ordersOrderIdPut().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/orders/{order_id}`.replace(`{${"order_id"}}`, encodeURIComponent(String(requestParameters['orderId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * orders-order-id-put
     */
    ordersOrderIdPut(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersOrderIdPutRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * orders-order-id-tags-post
     */
    ordersOrderIdTagsPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderId'] == null) {
                throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling ordersOrderIdTagsPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/orders/{order_id}/tags`.replace(`{${"order_id"}}`, encodeURIComponent(String(requestParameters['orderId']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * orders-order-id-tags-post
     */
    ordersOrderIdTagsPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersOrderIdTagsPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * orders-order-payment-info-get
     */
    ordersOrderPaymentInfoGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['order'] == null) {
                throw new runtime.RequiredError('order', 'Required parameter "order" was null or undefined when calling ordersOrderPaymentInfoGet().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/orders/{order}/payment-info`.replace(`{${"order"}}`, encodeURIComponent(String(requestParameters['order']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * orders-order-payment-info-get
     */
    ordersOrderPaymentInfoGet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersOrderPaymentInfoGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create an order item.
     */
    postOrderItemsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['aryeoGroupId'] == null) {
                throw new runtime.RequiredError('aryeoGroupId', 'Required parameter "aryeoGroupId" was null or undefined when calling postOrderItems().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['aryeoGroupId'] != null) {
                headerParameters['Aryeo-Group-Id'] = String(requestParameters['aryeoGroupId']);
            }
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("Token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/order-items`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.OrderItemPostPayloadToJSON)(requestParameters['orderItemPostPayload']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderItemResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Create an order item.
     */
    postOrderItems(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postOrderItemsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create an order.
     */
    postOrdersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['aryeoGroupId'] == null) {
                throw new runtime.RequiredError('aryeoGroupId', 'Required parameter "aryeoGroupId" was null or undefined when calling postOrders().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['aryeoGroupId'] != null) {
                headerParameters['Aryeo-Group-Id'] = String(requestParameters['aryeoGroupId']);
            }
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("Token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/orders`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.OrderPostPayloadToJSON)(requestParameters['orderPostPayload']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Create an order.
     */
    postOrders(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postOrdersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * promotion-codes-redeem-discountedType-discounted-post
     */
    promotionCodesRedeemDiscountedTypeDiscountedPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['discountedType'] == null) {
                throw new runtime.RequiredError('discountedType', 'Required parameter "discountedType" was null or undefined when calling promotionCodesRedeemDiscountedTypeDiscountedPost().');
            }
            if (requestParameters['discounted'] == null) {
                throw new runtime.RequiredError('discounted', 'Required parameter "discounted" was null or undefined when calling promotionCodesRedeemDiscountedTypeDiscountedPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/promotion-codes/redeem/{discountedType}/{discounted}`.replace(`{${"discountedType"}}`, encodeURIComponent(String(requestParameters['discountedType']))).replace(`{${"discounted"}}`, encodeURIComponent(String(requestParameters['discounted']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * promotion-codes-redeem-discountedType-discounted-post
     */
    promotionCodesRedeemDiscountedTypeDiscountedPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.promotionCodesRedeemDiscountedTypeDiscountedPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update an order item.
     */
    putOrderItemsOrderItemIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderItemId'] == null) {
                throw new runtime.RequiredError('orderItemId', 'Required parameter "orderItemId" was null or undefined when calling putOrderItemsOrderItemId().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/order-items/{order_item_id}`.replace(`{${"order_item_id"}}`, encodeURIComponent(String(requestParameters['orderItemId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderItemResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Update an order item.
     */
    putOrderItemsOrderItemId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putOrderItemsOrderItemIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update tags of an order.
     */
    putOrderTagsTagIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderId'] == null) {
                throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling putOrderTagsTagId().');
            }
            if (requestParameters['aryeoGroupId'] == null) {
                throw new runtime.RequiredError('aryeoGroupId', 'Required parameter "aryeoGroupId" was null or undefined when calling putOrderTagsTagId().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['aryeoGroupId'] != null) {
                headerParameters['Aryeo-Group-Id'] = String(requestParameters['aryeoGroupId']);
            }
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("Token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/orders/{order_id}/tags`.replace(`{${"order_id"}}`, encodeURIComponent(String(requestParameters['orderId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.OrderTagsPutPayloadToJSON)(requestParameters['orderTagsPutPayload']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OrderResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Update tags of an order.
     */
    putOrderTagsTagId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putOrderTagsTagIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * refunds-orderPayment-post
     */
    refundsOrderPaymentPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['orderPayment'] == null) {
                throw new runtime.RequiredError('orderPayment', 'Required parameter "orderPayment" was null or undefined when calling refundsOrderPaymentPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/refunds/{orderPayment}`.replace(`{${"orderPayment"}}`, encodeURIComponent(String(requestParameters['orderPayment']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * refunds-orderPayment-post
     */
    refundsOrderPaymentPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.refundsOrderPaymentPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.OrdersApi = OrdersApi;
/**
 * @export
 */
exports.PromotionCodesRedeemDiscountedTypeDiscountedPostDiscountedTypeEnum = {
    Product: 'product',
    Fee: 'fee'
};
