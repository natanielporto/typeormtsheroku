"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Content_1 = __importDefault(require("./Content"));
var Class_1 = __importDefault(require("./Class"));
var Lesson = /** @class */ (function () {
    function Lesson() {
    }
    Lesson_1 = Lesson;
    var Lesson_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Lesson.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Lesson.prototype, "description", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Content_1.default; }, function (lesson) { return Lesson_1; }),
        __metadata("design:type", Content_1.default)
    ], Lesson.prototype, "content", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Class_1.default; }, function (lessons) { return Lesson_1; }, { eager: true }),
        __metadata("design:type", Class_1.default)
    ], Lesson.prototype, "classe", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_At' }),
        __metadata("design:type", Date)
    ], Lesson.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_At' }),
        __metadata("design:type", Date)
    ], Lesson.prototype, "updatedAt", void 0);
    Lesson = Lesson_1 = __decorate([
        typeorm_1.Entity('lesson')
    ], Lesson);
    return Lesson;
}());
exports.default = Lesson;
