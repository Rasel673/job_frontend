<template lang="">
  <div>
    <!-- comment box -->
    <section>
      <div class="row my-5">
        <div class="col-md-8">
          <form @submit.prevent="submitPost">
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label"
                >Leave a Comment
              </label>
              <textarea
                rows="6"
                v-model="formData.comment"
                class="form-control"
                cols=""
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="formData.name"
                id="exampleInputName1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="formData.email"
              />
            </div>

            <button type="submit" class="btn btn-primary col-md-12">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;
import Swal from "sweetalert2";

const { id } = defineProps({
  id: String,
});

const formData = ref({
  id: "",
  email: "",
  name: "",
  comment: "",
});

const submitPost = async () => {
  try {
    const url = `${apiBaseUrl}comments`;
    const response = await $fetch(url, {
      headers: {},
      method: "POST",
      body: {
        id: id,
        name: formData.value.email,
        email: formData.value.name,
        comment: formData.value.comment,
      },
    });

    if (response.success) {
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset the form
      formData.value = {
        email: "",
        name: "",
        comment: "",
      };
    } else {
      Swal.fire({
        title: "Oops!",
        text: "An error occurred while submitting the form.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Oops!",
      text: "An error occurred while submitting the form.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
</script>
<style lang=""></style>
