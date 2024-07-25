var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/errors/forbiden-error.ts
var forbiden_error_exports = {};
__export(forbiden_error_exports, {
  default: () => ForbiddenError
});
module.exports = __toCommonJS(forbiden_error_exports);

// src/errors/base-error.ts
var BaseError = class _BaseError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, _BaseError.prototype);
  }
};

// src/errors/forbiden-error.ts
var ForbiddenError = class _ForbiddenError extends BaseError {
  constructor(message) {
    super();
    this.statusCode = 403;
    this.reason = message;
    Object.setPrototypeOf(this, _ForbiddenError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
};