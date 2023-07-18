<script setup>
import { aboutSection } from "/src/data/about.js";
</script>

<template>
    <!-- About Section Starts -->
    <div class="untree_co-section" id="about-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <img :src="aboutSection.image" alt="Image" class="img-fluid" />
          </div>
          <div class="col-lg-4">
            <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
              <span class="caption">{{ aboutSection.title1 }}</span>
              <h2 class="heading">{{ aboutSection.title2 }}</h2>
            </div>
            <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
              <p>
                {{ aboutSection.description1 }}
              </p>
              <p>
                {{ aboutSection.description2 }}
                <span class="highlight"
                  >{{ aboutSection.description3 }}</span
                >{{ aboutSection.description4 }}
              </p>
            </div>
            <div class="row count-numbers">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                <span class="counter d-block"
                  ><span data-number="159">0</span><span>K</span></span
                >
                <span class="caption-2">Subscribers</span>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <span class="counter d-block"
                  ><span data-number="11">0</span><span>K</span
                ></span>
                <span class="caption-2">Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Section Ends -->
</template>