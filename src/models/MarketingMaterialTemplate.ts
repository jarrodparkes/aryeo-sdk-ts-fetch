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

import type { Group } from './Group';
import {
    GroupFromJSON,
    GroupToJSON
} from './Group';
import type { MarketingMaterialCategory } from './MarketingMaterialCategory';
import {
    MarketingMaterialCategoryFromJSON,
    MarketingMaterialCategoryToJSON
} from './MarketingMaterialCategory';
import type { PolotnoJson } from './PolotnoJson';
import {
    PolotnoJsonFromJSON,
    PolotnoJsonToJSON
} from './PolotnoJson';

/**
 * A template for the marketing material builder.
 * @export
 * @interface MarketingMaterialTemplate
 */
export interface MarketingMaterialTemplate {
    /**
     * The ID of the template. UUID Version 4.
     * @type {string}
     * @memberof MarketingMaterialTemplate
     */
    id: string;
    /**
     * The name of the template.
     * @type {string}
     * @memberof MarketingMaterialTemplate
     */
    name: string;
    /**
     * The URL of the image used to preview the template.
     * @type {string}
     * @memberof MarketingMaterialTemplate
     */
    previewImageUrl?: string | null;
    /**
     * 
     * @type {PolotnoJson}
     * @memberof MarketingMaterialTemplate
     */
    polotnoJson?: PolotnoJson;
    /**
     * 
     * @type {PolotnoJson}
     * @memberof MarketingMaterialTemplate
     */
    draftPolotnoJson?: PolotnoJson;
    /**
     * 
     * @type {Group}
     * @memberof MarketingMaterialTemplate
     */
    group?: Group;
    /**
     * categories
     * @type {Array<MarketingMaterialCategory>}
     * @memberof MarketingMaterialTemplate
     */
    categories?: Array<MarketingMaterialCategory> | null;
}

/**
 * Check if a given object implements the MarketingMaterialTemplate interface.
 */
export function instanceOfMarketingMaterialTemplate(value: object): value is MarketingMaterialTemplate {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function MarketingMaterialTemplateFromJSON(json: any): MarketingMaterialTemplate {
    return MarketingMaterialTemplateFromJSONTyped(json, false);
}

export function MarketingMaterialTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingMaterialTemplate {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'previewImageUrl': json['preview_image_url'] == null ? undefined : json['preview_image_url'],
        'polotnoJson': json['polotno_json'] == null ? undefined : PolotnoJsonFromJSON(json['polotno_json']),
        'draftPolotnoJson': json['draft_polotno_json'] == null ? undefined : PolotnoJsonFromJSON(json['draft_polotno_json']),
        'group': json['group'] == null ? undefined : GroupFromJSON(json['group']),
        'categories': json['categories'] == null ? undefined : ((json['categories'] as Array<any>).map(MarketingMaterialCategoryFromJSON)),
    };
}

export function MarketingMaterialTemplateToJSON(json: any): MarketingMaterialTemplate {
    return MarketingMaterialTemplateToJSONTyped(json, false);
}

export function MarketingMaterialTemplateToJSONTyped(value?: MarketingMaterialTemplate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'preview_image_url': value['previewImageUrl'],
        'polotno_json': PolotnoJsonToJSON(value['polotnoJson']),
        'draft_polotno_json': PolotnoJsonToJSON(value['draftPolotnoJson']),
        'group': GroupToJSON(value['group']),
        'categories': value['categories'] == null ? undefined : ((value['categories'] as Array<any>).map(MarketingMaterialCategoryToJSON)),
    };
}

