import capitalize from "./index.js";

if (capitalize("hello") !== "Hello") {
  throw new Error("Функция работает не верно!");
}
