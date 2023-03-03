const bunyan = require("bunyan");
const log = bunyan.createLogger({ name: "myapp" });
const crypto = require("crypto");
const _ = require("lodash");
const moment = require("moment-timezone");
const qs = require("qs");
const __ = require('underscore');
const uuid = require('uuid').v4;
const zod = require('zod');

const handler = async () => {
  zod.object({ data: zod.object({ userId: zod.number() }) }).parse({});
  log.info("heavy function!", _.get(res, "data", {}));

  const cryptoHash = crypto.createHash("md5").update("aaa").digest("hex");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "heavy function!",
      crypto: cryptoHash,
      date: moment(new Date()).format("YYYY-MM-DD"),
      qs: qs.stringify({ a: 1, b: 2 }),
      __: __.map([1, 2, 3], (n) => n * 3),
      uuid: uuid(),
    }),
  };
};

module.exports = { handler };
