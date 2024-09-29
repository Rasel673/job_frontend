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
    console.log(response.data[0]);
    singlePost.value = response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchRelated = async () => {
  try {
    const response = await $fetch(`${apiBaseUrl}related_post/${id}`);
    // console.log(response.data[0]);
    relatedPosts.value = response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const readText = (text) => {
  responsiveVoice.speak(text, "Bangla Bangladesh Female");
};

onMounted(() => {
  fetchSingle();
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
          <div class="rating d-flex">
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1"></i></span>
            <span><i class="fa-solid fa-star ms-1 me-2"></i></span>

            (5 Reviews)
          </div>
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
                  Listen
                </button></span
              >
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
          <a
            :href="singlePost.apply_link"
            class="btn btn-outline-success text-center"
            target="_blank"
          >
            আবেদন করুন
          </a>
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
          <a
            :href="singlePost.pdf"
            target="_blank"
            class="btn btn-outline-success text-center text-danger"
          >
            বিজ্ঞপ্তি পিডিএফ ডাউনলোড করুন
          </a>
        </div>
      </div>
    </section>

    <section v-if="relatedPosts">
      <!-- Related post -->

      <div class="row">
        <div class="d-flex justify-content-between">
          <a href="#" class="text-dark nav-link fs-50"><h4>Related Job</h4></a>
          <a href="#" class="text-dark nav-link"> <b>See all</b></a>
        </div>
      </div>
      <div
        class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-lg-4"
      >
        <PostCard
          v-for="index in 8"
          :key="index"
          :id="index"
          :title="singlePost.title"
          :image="singlePost.thumbnail"
          :description="singlePost.description"
        />
      </div>
    </section>

    <CommmentBox :id="id" />
  </div>
</template>

<style lang=""></style>
