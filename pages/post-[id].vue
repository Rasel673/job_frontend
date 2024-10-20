<script setup>
import { onMounted } from "vue";
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;

const route = useRoute();
const id = route.params.id;

const singlePost = ref(null);
const relatedPosts = ref(null);

const fetchSingle = async () => {
  try {
    const response = await $fetch(`${apiBaseUrl}post/${id}`);
    // console.log(response.data[0]);
    singlePost.value = response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchRelated = async () => {
  try {
    const response = await $fetch(`${apiBaseUrl}related_post/${id}`);
    // console.log(response.data[0]);
    relatedPosts.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const readText = (text) => {
  responsiveVoice.speak(text, "Bangla Bangladesh Female");
};

onMounted(() => {
  fetchSingle();
  fetchRelated();
});
</script>

<template lang="">
  <div>
    <Search />

    <section>
      <div class="row my-3">
        <img
          src="/images/banner_2.png"
          class="img-fluid"
          style="display: block; width: 100%; height: 150px;"
          alt=""
        />
      </div>
    </section>

    <section v-if="singlePost">
      <Head>
        <Title>{{ singlePost.title }}</Title>

        <Meta name="title" :content="singlePost.meta_title" />
        <Meta name="description" :content="singlePost.meta_description" />
        <Meta name="keywords" :content="singlePost.meta_tags" />

        <Meta property="og:type" content="website" />
        <Meta property="og:title" :content="singlePost.title" />
        <Meta
          property="og:description"
          :content="singlePost.meta_description"
        />
        <Meta property="og:image" :content="singlePost.meta_image" />

        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:title" :content="singlePost.title" />
        <Meta
          name="twitter:description"
          :content="singlePost.meta_description"
        />
        <Meta name="twitter:image" :content="singlePost.meta_image" />
      </Head>

      <!-- post title -->
      <div class="row my-2">
        <div class="col-md-9">
          <h4>
            {{ singlePost.title }}
          </h4>
          <p class="fs-bolder fs-6">Author: {{ singlePost.author.name }}</p>

          <!-- <div class="rating d-flex">
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1 me-2"></i></span>

            (5 Reviews)
          </div> -->
        </div>
        <div class="col-md-3">
          <Count-time :date="singlePost.apply_end_date" />
        </div>
      </div>

      <div class="row">
        <!-- posts content -->
        <div class="col-md-9 mt-3">
          <div class="row my-3">
            <img :src="singlePost.thumbnail" class="img-fluid" />
          </div>

          <div class="row" v-if="singlePost.description">
            <p class="text-start fs-6 my-3">
              <span
                ><button
                  class="btn btn-sm btn-primary m-1"
                  @click="readText(singlePost.description)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-volume-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"
                    />
                    <path
                      d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"
                    />
                    <path
                      d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"
                    />
                  </svg></button
              ></span>
              {{ singlePost.description }}
            </p>
          </div>

          <div class="row my-3">
            <div class="col-md-12">
              <div v-html="singlePost.editor_data"></div>
            </div>
          </div>
        </div>

        <!-- right sidebar -->
        <div class="col-md-3 mt-3">
          <div class="recent-news" style="border: 2px solid black;">
            <h4 class="text-dark text-center my-2">
              সর্বশেষ চাকরির খবর
            </h4>

            <Sidebar-Card />
          </div>
        </div>
      </div>

      <div class="row my-3">
        <h5
          class="fw-bold fs-5 col-md-12 text-primary my-3"
          v-if="singlePost.apply_link"
        >
          আবেদন করতে নিচের বাটনে ক্লিক করুনঃ
        </h5>

        <div class="text-center my-3" v-if="singlePost.apply_link">
          <nuxt-link
            :to="singlePost.apply_link"
            class="btn btn-outline-success text-center"
            target="_blank"
          >
            আবেদন করুন
          </nuxt-link>
        </div>

        <h5 class="fw-bold fs-5 col-md-12 text-primary my-3">
          বিস্তারিত জানতে অফিসিয়াল বিজ্ঞপ্তি দেখুন :
        </h5>

        <p class="text-center mt-2">
          {{ singlePost.title }}
        </p>

        <img :src="singlePost.circular_image_1" class="img-fluid" />
        <img :src="singlePost.circular_image_2" class="img-fluid" />
        <img :src="singlePost.circular_image_3" class="img-fluid" />

        <p class="text-center text-danger fw-bold my-4" v-if="singlePost.pdf">
          {{ singlePost.title }} নিয়োগ বিজ্ঞপ্তি PDF আকারে Download করতে নিচের
          ডাউনলোড বাটন প্রেস করুন
        </p>

        <div class="text-center" v-if="singlePost.pdf">
          <nuxt-link
            :to="singlePost.pdf"
            target="_blank"
            class="btn btn-outline-success text-center text-danger"
          >
            বিজ্ঞপ্তি পিডিএফ ডাউনলোড করুন
          </nuxt-link>
        </div>
      </div>
    </section>

    <section v-if="relatedPosts">
      <!-- Related post -->

      <div class="row">
        <div class="d-flex justify-content-between">
          <a href="#" class="text-dark nav-link fs-50"><h4>Related Job</h4></a>
        </div>
      </div>
      <div
        class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-lg-4"
      >
        <PostCard
          v-for="(post, index) in relatedPosts"
          :key="index"
          :id="post.id"
          :title="post.title"
          :image="post.thumbnail"
        />
      </div>
    </section>

    <CommmentBox :id="id" />
  </div>
</template>

<style lang=""></style>
