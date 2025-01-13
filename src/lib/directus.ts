import { createDirectus, rest } from "@directus/sdk";

const API_URL = "https://directus.martonpaulo.com";

const directus = createDirectus(API_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directus;
