"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const uuid_1 = require("uuid");
let NotificationEntity = class NotificationEntity {
    constructor(message, read, user) {
        this.id = (0, uuid_1.v4)();
        this.message = message;
        this.read = read;
        this.user = user;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], NotificationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], NotificationEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false })
], NotificationEntity.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.notifications)
], NotificationEntity.prototype, "user", void 0);
NotificationEntity = __decorate([
    (0, typeorm_1.Entity)()
], NotificationEntity);
exports.NotificationEntity = NotificationEntity;
