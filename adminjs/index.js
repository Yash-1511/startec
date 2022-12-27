const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const mongoose = require("mongoose");
const Product = require("../models/product");
const uploadFeature = require("@adminjs/upload");
const Category = require("../models/category");
AdminJS.registerAdapter(AdminJSMongoose);

const admin = new AdminJS({
  databases: [mongoose],
  rootPath: "/admin",
  branding: {
    logo: "/images/logo.png",
    companyName: "Startek Lubricants",
    softwareBrothers: false,
  },
  resources:[
    {
        resource: Product,
          features: [
          uploadFeature({
          provider: { local: { bucket: 'uploads' } },
          properties: {
            key: "uploadedFile.path",
            bucket: "uploadedFile.folder",
            mimeType: "uploadedFile.type",
            size: "uploadedFile.size",
            filename: "uploadedFile.filename",
            file: "uploadFile",
          },
        }),
      ],
    },
    {
        resource: Category,
    },
  ],
  locale: {
    translations: {
      labels: {
        loginWelcome: "Admin Panel Login",
      },
      messages: {
        loginWelcome:
          "Please enter your credentials to log in and manage your website contents",
      },
    },
  },
});

const ADMIN = {
  email: "admin@gmail.com",
  password: "star@1234",
};
const router = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "yashparmar1112",
  cookiePassword: "yash@1112",
});

module.exports = router;
