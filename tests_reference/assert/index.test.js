import { strict as assert } from "node:assert";
import capitalize from "./index.js";

assert(capitalize("hello") === "Hello");
assert(capitalize("") === "");
