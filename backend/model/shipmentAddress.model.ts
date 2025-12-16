import mongoose, { model, Schema } from "mongoose";
import type { InferSchemaType } from "mongoose";

export const shipmentAddressSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export type ShipmentAddressDocument = InferSchemaType<
  typeof shipmentAddressSchema
>;

const ShipmentAddress =
  mongoose.models.ShipmentAddress ??
  model<ShipmentAddressDocument>("ShipmentAddress", shipmentAddressSchema);
export default ShipmentAddress;
