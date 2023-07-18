<script setup>
import { featureTwoSection } from "/src/data/featureTwo.js";
</script>

<template>
        <!-- Features Two Section Starts -->
        <div class="untree_co-section">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div class="service">
              <div class="service-icon color-1 mb-4" v-html="featureTwoSection.svg1"></div>
              <div class="service-contents">
                <h3>{{ featureTwoSection.title1 }}</h3>
                <p>{{ featureTwoSection.description1 }}</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="service">
              <div class="service-icon color-2 mb-4" v-html="featureTwoSection.svg2"></div>
              <div class="service-contents">
                <h3>{{ featureTwoSection.title2 }}</h3>
                <p>{{ featureTwoSection.description2 }}</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="service">
              <div class="service-icon color-3 mb-4" v-html="featureTwoSection.svg3"></div>
              <div class="service-contents">
                <h3>{{ featureTwoSection.title3 }}</h3>
                <p>{{ featureTwoSection.description3 }}</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="service">
              <div class="service-icon color-4 mb-4" v-html="featureTwoSection.svg4"></div>
              <div class="service-contents">
                <h3>{{ featureTwoSection.title4 }}</h3>
                <p>{{ featureTwoSection.description4 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Features Two Section Ends -->
</template>