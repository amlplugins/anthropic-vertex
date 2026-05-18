/**
 * @amlplugins/anthropic-vertex
 *
 * Thin namespaced re-export of the native @anthropic-ai/vertex-sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Anthropic on Google Vertex AI — Claude models invoked through Google Cloud Vertex AI region endpoints.
 */

import * as _sdk from "@anthropic-ai/vertex-sdk";
export * from "@anthropic-ai/vertex-sdk";
export { _sdk as sdk };
export default _sdk;
