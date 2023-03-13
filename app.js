"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const notifications_routes_1 = require("./src/routes/notifications/notifications.routes");
const error_handler_middleware_1 = require("./src/middleware/error-handler.middleware");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setup();
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            // Load environment variables
            config_1.config.load();
            // Connect to the database
            yield (0, typeorm_1.createConnection)();
            // Middleware
            this.app.use(express_1.default.json());
            this.app.use((0, helmet_1.default)());
            this.app.use((0, cors_1.default)());
            // Routes
            this.app.use('/notifications', new notifications_routes_1.NotificationsRouter().router);
            // Error handling middleware
            this.app.use(error_handler_middleware_1.ErrorHandlerMiddleware.handleError);
        });
    }
}
exports.default = new App().app;
