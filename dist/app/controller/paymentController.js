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
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default("sk_test_51M6eOGCnxyBmnrrV4dMS9Lwy2OhxeWoNbk6NFO7b23s39uw42eYtZWUaiEYETg36uyWfbOyB1owcMEOhxGQ75Q9j00WauI42TZ", {});
// Define a route for creating a payment intent
const payment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, currency, quantity, productName } = req.body;
        // Calculate the total amount (price * quantity)
        const totalAmount = amount * quantity;
        // Create a payment intent
        const paymentIntent = yield stripe.paymentIntents.create({
            amount: totalAmount,
            currency: currency,
            description: `Payment for ${productName}`,
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = payment;
