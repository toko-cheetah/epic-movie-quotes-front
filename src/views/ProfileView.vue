<template>
  <div class="m-auto pt-28 pb-10 xl:w-1/2">
    <router-link :to="{ name: 'home' }">
      <LeftArrowIcon class="mb-6 ml-[7.5%] xl:hidden" />
    </router-link>

    <p class="ml-16 hidden text-2xl font-medium xl:block">
      {{ $t("main.my_profile") }}
    </p>

    <div
      class="main rounded-xl bg-dark-blue py-6 xl:mt-32 xl:min-h-[33.438rem]"
    >
      <EditAvatar
        :showUserAvatarIf="hasAvatar()"
        :userAvatarSrc="userStore.user.avatar"
        :sendAvatar="sendAvatar"
      />

      <div>
        <EditName
          :showEditButtonIf="!canEdit.name"
          :clickEditBtn="() => startEdit('name')"
        />

        <label name="email" class="mb-2 text-left text-base font-normal">
          {{ $t("auth.email") }}
        </label>
        <div
          class="relative mb-8 flex items-center justify-between xl:justify-start"
        >
          <VeeField class="w-9/12 xl:w-7/12" type="email" name="email" />
          <CheckCircleFillIcon
            class="absolute top-3 left-[68%] xl:left-[54%]"
          />
          <p
            v-if="userStore.user && !userStore.user.google_id"
            class="mb-4 capitalize xl:ml-8"
          >
            {{ $t("main.primary") }}
          </p>
        </div>

        <div
          v-if="userStore.user && !userStore.user.google_id"
          class="relative mb-8"
        >
          <LinearBtn class="pl-9 xl:pl-9">
            {{ $t("main.add_new_email") }}
          </LinearBtn>
          <PlusIcon class="absolute top-3 left-3 cursor-pointer" />
        </div>

        <EditPassword
          v-if="userStore.user && !userStore.user.google_id"
          :showEditButtonIf="!canEdit.current_password"
          :canEditPasswordIf="canEdit.current_password"
          :clickEditBtn="() => startEdit('current_password')"
        />
      </div>
    </div>

    <CancelConfirmBtns
      v-if="canEdit.name || canEdit.current_password"
      :clickCancelBtn="() => cancelEdit()"
      :clickConfirmBtn="() => confirmEdit()"
    />

    <EditedOk v-if="editedOk" :clickXIcon="() => (editedOk = false)" />
  </div>
</template>

<script setup>
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
import CheckCircleFillIcon from "@/components/icons/CheckCircleFillIcon.vue";
import LinearBtn from "@/components/buttons/LinearBtn.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import VeeField from "@/components/form/VeeField.vue";
import EditAvatar from "@/components/Profile/EditAvatar.vue";
import EditName from "@/components/Profile/EditName.vue";
import EditPassword from "@/components/Profile/EditPassword.vue";
import CancelConfirmBtns from "@/components/Profile/CancelConfirmBtns.vue";
import EditedOk from "@/components/Profile/EditedOk.vue";

import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/user.js";
import { useForm } from "vee-validate";
import { onMounted, reactive, ref } from "vue";

const userStore = useUserStore();
const { setValues, values } = useForm();
const editedOk = ref(false);
const canEdit = reactive({
  name: false,
  current_password: false,
});

setValues({
  name: userStore.user ? userStore.user.name : null,
  email: userStore.user ? userStore.user.email : null,
  current_password: "dummypass",
});

function setReadonly() {
  document
    .querySelectorAll(".readonly")
    .forEach(
      (el) => !el.hasAttribute("readonly") && el.setAttribute("readonly", true)
    );
}

onMounted(() => {
  setReadonly();
});

function sendAvatar(e) {
  const formData = new FormData();
  formData.append("avatar", e.target.files[0]);

  axios
    .post("/avatar", formData)
    .then((res) => (userStore.user.avatar = res.data.avatar))
    .catch((err) => alert(err.response.data.message));
}

function hasAvatar() {
  return (
    userStore.user &&
    userStore.user.avatar.length >
      (import.meta.env.VITE_BACKEND_BASE_URL + "storage/").length
  );
}

function startEdit(id) {
  const abort = ref(false);
  Object.keys(canEdit).map(
    (key) => key !== id && canEdit[key] === true && (abort.value = true)
  );

  return (
    !abort.value &&
    (id !== "current_password" &&
      document.getElementById(id).removeAttribute("readonly"),
    (canEdit[id] = true))
  );
}

function cancelEdit() {
  setReadonly();
  Object.keys(canEdit).map((key) => (canEdit[key] = false));
}

function confirmEdit() {
  canEdit.name &&
    axios
      .put("/edit/name", { name: values.name })
      .then(
        () => (
          (userStore.user.name = values.name),
          setReadonly(),
          Object.keys(canEdit).map((key) => (canEdit[key] = false)),
          window.scrollTo({ top: 0, behavior: "smooth" }),
          showEditedOk()
        )
      )
      .catch((err) => alert(err.response.data.message));

  canEdit.current_password &&
    axios
      .put("/edit/password", {
        password: values.password,
        password_confirmation: values.password_confirmation,
      })
      .then(
        () => (
          setReadonly(),
          Object.keys(canEdit).map((key) => (canEdit[key] = false)),
          window.scrollTo({ top: 0, behavior: "smooth" }),
          showEditedOk()
        )
      )
      .catch((err) => alert(err.response.data.message));
}

function showEditedOk() {
  editedOk.value = true;
  setTimeout(() => {
    editedOk.value = false;
  }, 3000);
}
</script>
