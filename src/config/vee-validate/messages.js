import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import ka from "@vee-validate/i18n/dist/locale/ka.json";

configure({
  generateMessage: localize({
    en: {
      messages: {
        ...en.messages,
        lower_alpha_num:
          "The {field} must contain only lowercase Latin characters and numbers",
        alpha_num_spaces:
          "The {field} must contain only Latin characters and numbers",
        geo_num_spaces:
          "The {field} must contain only Georgian characters and numbers",
      },
      names: {
        password_confirmation: "confirm password",
        new_email: "new email",
        name_en: "name (Eng)",
        name_ka: "name (Geo)",
        director_en: "director (Eng)",
        director_ka: "director (Geo)",
        release_year: "release year",
        description_en: "description (Eng)",
        description_ka: "description (Geo)",
      },
    },
    ka: {
      messages: {
        ...ka.messages,
        confirmed: "პაროლები არ ემთხვევა ერთმანეთს",
        lower_alpha_num:
          "{field} უნდა შეიცავდეს მხოლოდ დაბალი რეგისტრის ლათინურ სიმბოლოებს და რიცხვებს",
        alpha_num_spaces:
          "{field} უნდა შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს და რიცხვებს",
        geo_num_spaces:
          "{field} უნდა შეიცავდეს მხოლოდ ქართულ სიმბოლოებს და რიცხვებს",
      },
      names: {
        name: "სახელი",
        email: "ელ-ფოსტა",
        password: "პაროლი",
        password_confirmation: "პაროლის გამეორება",
        new_email: "ახალი ელ-ფოსტა",
        name_en: "სახელი (ინგ)",
        name_ka: "სახელი (ქარ)",
        genre: "ჟანრი",
        director_en: "რეჟისორი (ინგ)",
        director_ka: "რეჟისორი (ქარ)",
        budget: "შემოსავალი",
        release_year: "გამოსვლის წელი",
        description_en: "აღწერა (ინგ)",
        description_ka: "აღწერა (ქარ)",
        poster: "პოსტერი",
      },
    },
  }),
});
