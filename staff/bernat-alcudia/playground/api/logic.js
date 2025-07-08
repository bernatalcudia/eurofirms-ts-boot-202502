"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var errors_1 = require("./errors");
var logic = {
    registerUser: function (name, email, username, password) {
        var user = data_1.default.users.find(function (user) { return user.email === email || user.username === username; });
        if (user)
            throw new errors_1.DuplicityError("User already exists");
        user = { id: data_1.default.uuid(), name: name, email: email, username: username, password: password };
        data_1.default.users.push(user);
    }
};
exports.default = logic;
