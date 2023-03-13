"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const notifications_routes_1 = require("./notifications/notifications.routes");
const router = (0, express_1.Router)();
exports.routes = router;
router.use('/notifications', notifications_routes_1.notificationsRouter);
