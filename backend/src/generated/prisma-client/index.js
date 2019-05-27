"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Teacher",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Course",
    embedded: false
  },
  {
    name: "Enrollment",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/julio-soto-567e4e/coffeglot-backend/dev`
});
exports.prisma = new exports.Prisma();
