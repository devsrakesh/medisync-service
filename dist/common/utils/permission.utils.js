"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = void 0;
async function hasPermission(user, resource, action) {
    if (!user.permissions) {
        return false;
    }
    return user.permissions.some((perm) => perm.resource === resource && perm.actions.includes(action));
}
exports.hasPermission = hasPermission;
//# sourceMappingURL=permission.utils.js.map