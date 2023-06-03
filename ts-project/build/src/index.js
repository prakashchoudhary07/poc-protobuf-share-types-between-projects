"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSampleUser(id) {
    const user = {
        id,
        name: 'prakash',
        userId: 'prakash',
        address: {
            city: 'bangalore',
            state: 'ka',
            country: 'india',
        },
        progile: {
            image: 'imgURL',
            someArray: ['S', 's'],
        },
        roles: {
            active: true,
            member: false,
        },
    };
    return user;
}
exports.default = getSampleUser;
//# sourceMappingURL=index.js.map