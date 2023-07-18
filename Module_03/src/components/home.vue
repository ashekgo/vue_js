<script setup>
import { homeSection } from "/src/data/home.js";
</script>

<template>
  <!-- Home Section Starts -->
  <div class="untree_co-hero" id="home-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="dots"></div>
            <div class="row align-items-center">
              <div
                class="col-lg-7 ml-auto order-lg-2"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <img
                  :src="homeSection.imageSrc"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
              <div class="col-lg-5">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="0">
                  {{ homeSection.heading }}
                </h1>
                <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                  <p>
                    {{  homeSection.description1 }}
                    <a :href="homeSection.url" target="_blank" class="highlight">{{ homeSection.urlText }}</a>
                    {{ homeSection.description2 }}
                  </p>
                </div>
                <p data-aos="fade-up" data-aos-delay="200">
                  <a
                    :href="homeSection.button1Url"
                    class="btn btn-primary smoothscroll"
                    >{{ homeSection.button1Text }}</a
                  >
                  <a
                    :href="homeSection.button2Url"
                    class="btn btn-outline-primary smoothscroll"
                    >{{ homeSection.button2Text }}</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Section Ends -->
</template>