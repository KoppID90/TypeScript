"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../models/user");
class UserService {
    constructor() {
        this.users = [];
    }
    createUser(id, name, email) {
        const user = new user_1.User(id, name, email);
        this.users.push(user);
        return user;
    }
}
exports.UserService = UserService;
