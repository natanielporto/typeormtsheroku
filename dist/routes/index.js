"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var class_routes_1 = __importDefault(require("./class.routes"));
var lesson_routes_1 = __importDefault(require("./lesson.routes"));
var routes = express_1.Router();
routes.use('/class', class_routes_1.default);
routes.use('/lesson', lesson_routes_1.default);
routes.use('/student', lesson_routes_1.default);
routes.use('/content', lesson_routes_1.default);
exports.default = routes;
