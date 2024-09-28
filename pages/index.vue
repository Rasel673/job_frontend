<template lang="">
  <div>
    <Search />

    <section>
      <div class="container my-2">
        <img
          src="/images/banner_2.png"
          class="img-fluid"
          style="display: block; width: 100%; height: 150px;"
          alt=""
        />
      </div>
    </section>

    <!-- job category -->
    <section>
      <div class="row">
        <div class="d-flex justify-content-between">
          <a href="#" class="text-dark nav-link fs-50"><h4>Job Category</h4></a>
          <a href="#" class="text-dark nav-link"> <b>See all</b></a>
        </div>
      </div>
      <div
        class="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-xl-7 row-cols-lg-6"
      >
        <Category-Card
          v-for="(category, index) in categories"
          :key="index"
          :id="category.id"
          :name="category.name"
          :image="category.image"
        />
      </div>
    </section>

    <section>
      <div class="container my-2">
        <img
          src="/images/banner_2.png"
          class="img-fluid"
          style="display: block; width: 100%; height: 150px;"
          alt=""
        />
      </div>
    </section>

    <!--content -->
    <section>
      <div class="row mt-5">
        <div class="d-flex justify-content-between">
          <a href="#" class="text-dark nav-link fs-50"
            ><h4>চলমান নিয়োগ বিজ্ঞপ্তি</h4></a
          >
          <a href="#" class="text-dark nav-link"> <b>See all</b></a>
        </div>
      </div>

      <!-- posts content -->
      <div class="row">
        <!-- posts -->
        <div class="col-md-9 post">
          <div
            v-if="posts"
            class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-lg-3"
          >
            <PostCard
              v-for="(post, index) in posts"
              :key="index"
              :id="post.id"
              :title="post.title"
              :image="post.thumbnail"
              :description="post.short_description"
            />
          </div>

          <!--post pagination -->
          <div class="row my-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    >Previous</a
                  >
                </li>

                <li class="page-item active">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
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

      <!-- quiz and notice section -->
      <div class="row">
        <div class="col-md-6 my-2">
          <div class="card">
            <h5 class="card-header text-center bg-danger text-white">
              কুইজ টেস্ট
            </h5>
            <div class="card-body">
              <Quiz-Card
                v-for="index in 3"
                :key="index"
                date="12 May 2024"
                title=" Filmfare Awards 2024 winners: ফিল্মফেয়ার পুরস্কার 2024-
                        বিজেতাদের তালিকা PDF"
                image="/images/Rectangle 16.png"
              />

              <div class="d-flex justify-content-center">
                <button class="btn btn-primary btn-flat" type="button">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 my-2">
          <div class="card">
            <h5 class="card-header text-center bg-danger text-white">
              পরীক্ষার নোটিশ
            </h5>
            <div class="card-body">
              <Notice-Card
                v-for="index in 3"
                :key="index"
                date="12 May 2024"
                title=" Exam Notice for Divisional Accountant (DA) 2nd Part Exam
                    Schedule /2022"
              />

              <div class="d-flex justify-content-center my-2">
                <button class="btn btn-primary btn-flat" type="button">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Preparation-->
      <div class="row">
        <div class="col-md-12 my-2">
          <div class="card">
            <h5 class="card-header text-center bg-danger text-white">
              চাকরির প্রস্তুতি
            </h5>
            <div class="card-body">
              <Job-Card
                v-for="index in 3"
                :key="index"
                date="12 May 2024"
                title="ফোরাম প্রশ্নোত্তর – Newspaper
              vocabulary for Job Preparation"
                image="/images/Rectangle 17.png"
              />

              <div class="d-flex justify-content-center">
                <button class="btn btn-primary btn-flat" type="button">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;

const posts = ref(null);
const categories = ref(null);

const fetchPosts = async () => {
  console.log(apiBaseUrl);
  try {
    const response = await $fetch(`${apiBaseUrl}posts`);
    // console.log(response);
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchCategories = async () => {
  console.log(apiBaseUrl);
  try {
    const response = await $fetch(`${apiBaseUrl}categories`);
    // console.log(response);
    categories.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchPosts();
  fetchCategories();
});
</script>
