export const appConfig = {
  appName: "Enterprise Frontend App",
  version: "1.0.0",

  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },

  uploads: {
    maxImageSizeMB: 5,
    maxDocumentSizeMB: 10,
    allowedImageTypes: ["image/png", "image/jpeg"],
    allowedDocumentTypes: ["application/pdf"],
  },

  features: {
    enableDashboard: true,
    enableAuditLogs: false,
    enableDarkMode: true,
  },

  timezone: "UTC",
  dateFormat: "DD/MM/YYYY",
  currency: "USD",
  supportEmail: "support@company.com",

  retry: {
    maxAttempts: 1,
    retryDelayMS: 500,
  },
} as const;
