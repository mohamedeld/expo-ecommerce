import { v2 as cloudinary } from "cloudinary";

import { ENV } from "./env.js";

cloudinary.config({
  cloud_name: ENV.CLOUDINARY_NAME as string,
  api_key: ENV.CLOUDINARY_APIKEY as string,
  api_secret: ENV.CLOUDINARY_SECRETKEY as string,
});

export default cloudinary;
