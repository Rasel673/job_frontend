<template lang="">
  <div>
    <!-- comment box -->
    <section>
      <div class="row my-5">
        <div class="col-md-8">
          <form>
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label"
                >Leave a Comment
              </label>
              <textarea rows="6" class="form-control" cols=""></textarea>
            </div>

            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputName1" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
const { id } = defineProps({
  id: String,
});
</script>
<style lang=""></style>
