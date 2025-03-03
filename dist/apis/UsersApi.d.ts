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
import * as runtime from '../runtime';
export interface CompanyTeamMembersCompanyTeamMemberIdEventsGetRequest {
    companyTeamMemberId: string;
}
export interface CompanyTeamMembersCompanyTeamMemberIdGetRequest {
    companyTeamMemberId: string;
}
export interface CustomerTeamMembersCustomerTeamMemberIdGetRequest {
    customerTeamMemberId: string;
}
export interface CustomerTeamsCustomerTeamIdMembershipsGetRequest {
    customerTeamId: string;
}
/**
 *
 */
export declare class UsersApi extends runtime.BaseAPI {
    /**
     * company-team-members-company-team-member-id-events-get
     */
    companyTeamMembersCompanyTeamMemberIdEventsGetRaw(requestParameters: CompanyTeamMembersCompanyTeamMemberIdEventsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * company-team-members-company-team-member-id-events-get
     */
    companyTeamMembersCompanyTeamMemberIdEventsGet(requestParameters: CompanyTeamMembersCompanyTeamMemberIdEventsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * company-team-members-company-team-member-id-get
     */
    companyTeamMembersCompanyTeamMemberIdGetRaw(requestParameters: CompanyTeamMembersCompanyTeamMemberIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * company-team-members-company-team-member-id-get
     */
    companyTeamMembersCompanyTeamMemberIdGet(requestParameters: CompanyTeamMembersCompanyTeamMemberIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * company-team-members-get
     */
    companyTeamMembersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * company-team-members-get
     */
    companyTeamMembersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customer-team-members-customer-team-member-id-get
     */
    customerTeamMembersCustomerTeamMemberIdGetRaw(requestParameters: CustomerTeamMembersCustomerTeamMemberIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customer-team-members-customer-team-member-id-get
     */
    customerTeamMembersCustomerTeamMemberIdGet(requestParameters: CustomerTeamMembersCustomerTeamMemberIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customer-teams-affiliate-memberships-post
     */
    customerTeamsAffiliateMembershipsPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customer-teams-affiliate-memberships-post
     */
    customerTeamsAffiliateMembershipsPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customer-teams-customer-team-id-memberships-get
     */
    customerTeamsCustomerTeamIdMembershipsGetRaw(requestParameters: CustomerTeamsCustomerTeamIdMembershipsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customer-teams-customer-team-id-memberships-get
     */
    customerTeamsCustomerTeamIdMembershipsGet(requestParameters: CustomerTeamsCustomerTeamIdMembershipsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customer-users-get
     */
    customerUsersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customer-users-get
     */
    customerUsersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customer-users-post
     */
    customerUsersPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customer-users-post
     */
    customerUsersPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customers-get
     */
    customersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customers-get
     */
    customersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * customers-post
     */
    customersPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * customers-post
     */
    customersPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
}
