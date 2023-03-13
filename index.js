"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const notifications_routes_1 = require("./src/routes/notifications/notifications.routes");
const notification_service_1 = require("./src/services/notification.service");
const error_handler_middleware_1 = require("./src/middleware/error-handler.middleware");
// create express app
const app = (0, express_1.default)();
// set up middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('combined'));
// set up routes
app.use('/notifications', new notifications_routes_1.NotificationsRouter().router);
// set up error handling middleware
app.use(error_handler_middleware_1.ErrorHandlerMiddleware.handle);
// start the server
(0, typeorm_1.createConnection)(config_1.config)
    .then(() => {
    console.log('Connected to database');
    app.use('/notifications', new notifications_routes_1.NotificationsRouter(notification_service_1.NotificationService).router);
    app.use(error_handler_middleware_1.ErrorHandlerMiddleware);
    app.listen(config_1.config.PORT, () => {
        console.log(`Server started on port ${config_1.config.PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
exports.default = app;
