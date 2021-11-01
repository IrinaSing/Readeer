/**
 * Validate and export the program state.
 *
 * @exports state
 */

import { isPlainObject } from "../../lib/is-plain-object.js";
import { isJSONable } from "../../lib/is-jsonable.js";
import { validate } from "../../lib/validate.js";

import { data } from "../../data/app.js";
import { schema } from "../../data/app.schema.js";

if (!isPlainObject(data)) {
  throw new TypeError("data is not an object");
}

if (!isJSONable(data)) {
  throw new TypeError("data is not contains non-JSON types");
}

const validation = validate(schema, data);
if (!validation.isValid) {
  /* eslint-disable */
  console.log(validation.errors);
  throw new Error("data does not match schema");
}

export { data as state };
