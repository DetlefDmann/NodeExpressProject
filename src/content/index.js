//needs to be changed so conditional import can happen
import { v4 as uuid } from "https://jspm.dev/uuid";

// this file should contain the function that generates the API-Key
// and constructs a URL
const createButton = document.getElementById("keygen");
console.log(createButton);

createButton.addEventListener("click", () => createAPIKey());

export const createAPIKey = () => {
  const key = uuid();
  console.log(key);
  return key;
};
