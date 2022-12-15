import { defineRule } from "vee-validate";
import {
  required,
  min,
  max,
  between,
  confirmed,
  email,
} from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("max", max);
defineRule("between", between);
defineRule("confirmed", confirmed);
defineRule("email", email);
defineRule("lower_alpha_num", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[a-z0-9]+$/.test(value)) {
    return false;
  }
  return true;
});
defineRule("alpha_num_spaces", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[A-Za-z0-9\s]*$/.test(value)) {
    return false;
  }
  return true;
});
defineRule("geo_num_spaces", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ0-9\s]*$/.test(value)) {
    return false;
  }
  return true;
});
