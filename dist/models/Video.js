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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSourceTypeEnum = exports.VideoDisplayTypeEnum = void 0;
exports.instanceOfVideo = instanceOfVideo;
exports.VideoFromJSON = VideoFromJSON;
exports.VideoFromJSONTyped = VideoFromJSONTyped;
exports.VideoToJSON = VideoToJSON;
exports.VideoToJSONTyped = VideoToJSONTyped;
/**
 * @export
 */
exports.VideoDisplayTypeEnum = {
    Branded: 'BRANDED',
    Unbranded: 'UNBRANDED',
    Both: 'BOTH',
    None: 'NONE'
};
/**
 * @export
 */
exports.VideoSourceTypeEnum = {
    Youtube: 'YOUTUBE',
    Vimeo: 'VIMEO',
    Optimized: 'OPTIMIZED',
    Uploaded: 'UPLOADED',
    Link: 'LINK'
};
/**
 * Check if a given object implements the Video interface.
 */
function instanceOfVideo(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('displayType' in value) || value['displayType'] === undefined)
        return false;
    if (!('sourceType' in value) || value['sourceType'] === undefined)
        return false;
    if (!('thumbnailUrl' in value) || value['thumbnailUrl'] === undefined)
        return false;
    if (!('playbackUrl' in value) || value['playbackUrl'] === undefined)
        return false;
    return true;
}
function VideoFromJSON(json) {
    return VideoFromJSONTyped(json, false);
}
function VideoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'duration': json['duration'] == null ? undefined : json['duration'],
        'displayType': json['display_type'],
        'sourceType': json['source_type'],
        'thumbnailUrl': json['thumbnail_url'],
        'playbackUrl': json['playback_url'],
        'downloadUrl': json['download_url'] == null ? undefined : json['download_url'],
        'shareUrl': json['share_url'] == null ? undefined : json['share_url'],
    };
}
function VideoToJSON(json) {
    return VideoToJSONTyped(json, false);
}
function VideoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'title': value['title'],
        'duration': value['duration'],
        'display_type': value['displayType'],
        'source_type': value['sourceType'],
        'thumbnail_url': value['thumbnailUrl'],
        'playback_url': value['playbackUrl'],
        'download_url': value['downloadUrl'],
        'share_url': value['shareUrl'],
    };
}
