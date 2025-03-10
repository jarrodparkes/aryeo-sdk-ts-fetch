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
exports.PayrollApi = void 0;
const runtime = require("../runtime");
/**
 *
 */
class PayrollApi extends runtime.BaseAPI {
    /**
     * billing-setup-intents-post
     */
    billingSetupIntentsPostRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/billing/setup-intents`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * billing-setup-intents-post
     */
    billingSetupIntentsPost(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.billingSetupIntentsPostRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * payroll-pay-run-items-get
     */
    payrollPayRunItemsGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/payroll/pay-run-items`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * payroll-pay-run-items-get
     */
    payrollPayRunItemsGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.payrollPayRunItemsGetRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * payroll-pay-run-items-pay-run-item-delete
     */
    payrollPayRunItemsPayRunItemDeleteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['payRunItem'] == null) {
                throw new runtime.RequiredError('payRunItem', 'Required parameter "payRunItem" was null or undefined when calling payrollPayRunItemsPayRunItemDelete().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/payroll/pay-run-items/{pay_run_item}`.replace(`{${"pay_run_item"}}`, encodeURIComponent(String(requestParameters['payRunItem']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * payroll-pay-run-items-pay-run-item-delete
     */
    payrollPayRunItemsPayRunItemDelete(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.payrollPayRunItemsPayRunItemDeleteRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * payroll-pay-run-items-pay-run-item-put
     */
    payrollPayRunItemsPayRunItemPutRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['payRunItem'] == null) {
                throw new runtime.RequiredError('payRunItem', 'Required parameter "payRunItem" was null or undefined when calling payrollPayRunItemsPayRunItemPut().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/payroll/pay-run-items/{pay_run_item}`.replace(`{${"pay_run_item"}}`, encodeURIComponent(String(requestParameters['payRunItem']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * payroll-pay-run-items-pay-run-item-put
     */
    payrollPayRunItemsPayRunItemPut(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.payrollPayRunItemsPayRunItemPutRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * payroll-pay-run-items-post
     */
    payrollPayRunItemsPostRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/payroll/pay-run-items`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * payroll-pay-run-items-post
     */
    payrollPayRunItemsPost(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.payrollPayRunItemsPostRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * payroll-pay-runs-pay-run-items-add-post
     */
    payrollPayRunsPayRunItemsAddPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['payRun'] == null) {
                throw new runtime.RequiredError('payRun', 'Required parameter "payRun" was null or undefined when calling payrollPayRunsPayRunItemsAddPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/payroll/pay-runs/{pay_run}/items/add`.replace(`{${"pay_run"}}`, encodeURIComponent(String(requestParameters['payRun']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * payroll-pay-runs-pay-run-items-add-post
     */
    payrollPayRunsPayRunItemsAddPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.payrollPayRunsPayRunItemsAddPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * payroll-pay-runs-pay-run-items-remove-post
     */
    payrollPayRunsPayRunItemsRemovePostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['payRun'] == null) {
                throw new runtime.RequiredError('payRun', 'Required parameter "payRun" was null or undefined when calling payrollPayRunsPayRunItemsRemovePost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/payroll/pay-runs/{pay_run}/items/remove`.replace(`{${"pay_run"}}`, encodeURIComponent(String(requestParameters['payRun']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * payroll-pay-runs-pay-run-items-remove-post
     */
    payrollPayRunsPayRunItemsRemovePost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.payrollPayRunsPayRunItemsRemovePostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.PayrollApi = PayrollApi;
