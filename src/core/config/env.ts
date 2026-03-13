export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL!,
  ENABLE_LOGS: process.env.NEXT_PUBLIC_ENABLE_LOGS === "true",
  ENV: process.env.NEXT_PUBLIC_ENV || "development",
};
