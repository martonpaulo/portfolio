import { createDirectus, rest } from "@directus/sdk";

const API_URL = "https://directus.martonpaulo.com";

const directus = createDirectus(API_URL).with(rest({}));

export default directus;
