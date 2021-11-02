import { v4 as uuid } from "uuid";

// this file should contain the function that generates the API-Key
// and constructs a URL
const createButton = document.getElementById("keygen");
console.log(createButton);

export const createAPIKey = () => {
  const key = uuid();
  return key;
};
