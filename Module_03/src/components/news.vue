<script setup>
import { newsSection } from "/src/data/news.js";
</script>

<template>
    <!-- News Section Starts -->
    <div class="untree_co-section bg-light">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">{{ newsSection.title1 }}</h2>
            <p>{{ newsSection.title2 }}</p>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div class="news-item">
              <div class="vcard d-flex align-items-center mb-4">
                <div class="img-wrap">
                  <img
                    :src="newsSection.authorImage1"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="post-meta">
                  <strong>Posted by {{ newsSection.authorName1 }}</strong>
                  <span>{{ newsSection.newsDate1 }}</span>
                </div>
              </div>
              <div class="news-contents mb-4">
                <span class="post-meta-2">{{ newsSection.newsTitle1 }}, {{ newsSection.readingTime1 }}</span>
                <h3>
                  <a :href="newsSection.newsLink1"
                    >{{ newsSection.newsDetails1 }}</a
                  >
                </h3>
              </div>
              <p class="mb-0">
                <a href="#" class="read-more-arrow" v-html="newsSection.arrowIcon">
                </a>
              </p>
            </div>
          </div>
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="news-item">
              <div class="vcard d-flex align-items-center mb-4">
                <div class="img-wrap">
                  <img
                    :src="newsSection.authorImage2"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="post-meta">
                  <strong>Posted by {{ newsSection.authorName2 }}</strong>
                  <span>{{ newsSection.newsDate2 }}</span>
                </div>
              </div>
              <div class="news-contents mb-4">
                <span class="post-meta-2">{{ newsSection.newsTitle2 }}, {{ newsSection.readingTime2 }}</span>
                <h3>
                  <a :href="newsSection.newsLink2"
                    >{{ newsSection.newsDetails2 }}</a
                  >
                </h3>
              </div>
              <p class="mb-0">
                <a href="#" class="read-more-arrow" v-html="newsSection.arrowIcon">
                </a>
              </p>
            </div>
          </div>
          <div
            class="col-md-12 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="news-item">
              <div class="vcard d-flex align-items-center mb-4">
                <div class="img-wrap">
                  <img
                    :src="newsSection.authorImage3"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="post-meta">
                  <strong>Posted by {{ newsSection.authorName3 }}</strong>
                  <span>{{ newsSection.newsDate3 }}</span>
                </div>
              </div>
              <div class="news-contents mb-4">
                <span class="post-meta-2">{{ newsSection.newsTitle3 }}, {{ newsSection.readingTime3 }}</span>
                <h3>
                  <a :href="newsSection.newsLink3"
                    >{{ newsSection.newsDetails3 }}</a
                  >
                </h3>
              </div>
              <p class="mb-0">
                <a href="#" class="read-more-arrow" v-html="newsSection.arrowIcon">
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- News Section Ends -->
</template>