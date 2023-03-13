"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("./notification.entity");
const uuid_1 = require("uuid");
let UserEntity = class UserEntity {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.name = '';
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.NotificationEntity, notification => notification.user)
], UserEntity.prototype, "notifications", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)()
], UserEntity);
exports.UserEntity = UserEntity;
