import mongoose from "mongoose";
import { shipmentAddressSchema } from "./shipmentAddress.model.js";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  image: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    clerkId: {
      type: String,
      unique: true,
      required: true,
    },
    orderItems: [orderItemSchema],
    shippingAddress: {
      type: shipmentAddressSchema,
      required: true,
    },
    paymentResult: {
      id: String,
      status: String,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    },
    deliveredAt: {
      type: Date,
    },
    shippedAt: Date,
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order ?? mongoose.model("Order", orderSchema);
