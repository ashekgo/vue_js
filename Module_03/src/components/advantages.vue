<script setup>
import { advantagesSection } from "/src/data/advanatages.js";
</script>

<template>
    <!-- Advantages Section Starts -->
    <div class="untree_co-section" id="advantages-section">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">{{ advantagesSection.advantagesTitle1 }}</h2>
            <p>{{ advantagesSection.advantagesTitle2 }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="service horizontal d-flex">
              <div class="service-icon color-1 mb-4" v-html="advantagesSection.svg1"></div>
              <div class="service-contents">
                <h3>{{  advantagesSection.title1 }}</h3>
                <p>{{  advantagesSection.description1 }}</p>
                <p><a :href="advantagesSection.link1" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service horizontal d-flex">
              <div class="service-icon color-2 mb-4" v-html="advantagesSection.svg2"></div>
              <div class="service-contents">
                <h3>{{  advantagesSection.title2 }}</h3>
                <p>{{  advantagesSection.description2 }}</p>
                <p><a :href="advantagesSection.link2" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="service horizontal d-flex">
              <div class="service-icon color-3 mb-4" v-html="advantagesSection.svg3"></div>
              <div class="service-contents">
                <h3>{{  advantagesSection.title3 }}</h3>
                <p>{{  advantagesSection.description3 }}</p>
                <p><a :href="advantagesSection.link3" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="service horizontal d-flex">
              <div class="service-icon color-4 mb-4" v-html="advantagesSection.svg4"></div>
              <div class="service-contents">
                <h3>{{  advantagesSection.title4 }}</h3>
                <p>{{  advantagesSection.description4 }}</p>
                <p><a :href="advantagesSection.link4" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Advantages Section Ends -->
</template>