import { model, models, Schema } from "mongoose";
import type { InferSchemaType } from "mongoose";

export const addressSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
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
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export type AddressDocument = InferSchemaType<typeof addressSchema>;

const Address =
  models.Address ?? model<AddressDocument>("Address", addressSchema);
export default Address;
