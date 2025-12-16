import mongoose from "mongoose";

const cartSchemaItem = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
});

const cartSchema = new mongoose.Schema(
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
    items: [cartSchemaItem],
  },
  { timestamps: true }
);

export const Cart = mongoose.models.Cart ?? mongoose.model("Cart", cartSchema);
