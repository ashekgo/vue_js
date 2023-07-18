<script setup>
import { featureOneSection } from "/src/data/featureOne.js";
</script>

<template>
      <!-- Features One Section Starts -->
      <div class="untree_co-section" id="features-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4">
            <span class="caption" data-aos="fade-up" data-aos-delay="0"
              >{{ featureOneSection.title1 }}</span
            >
            <h3 class="heading mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ featureOneSection.title2 }}
            </h3>
            <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
              <p>
                {{ featureOneSection.description }}
              </p>
              <ul class="list-unstyled primary">
                <li>✓ {{ featureOneSection.list1 }}</li>
                <li>✓ {{ featureOneSection.list2 }}</li>
              </ul>
            </div>
            <div class="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div class="untree_co-testimonial d-flex">
                <div class="text">
                  <blockquote>
                    &ldquo;{{ featureOneSection.blockquote1 }}
                    <span class="highlight">{{ featureOneSection.blockquote2 }}&rdquo;</span
                    >{{ featureOneSection.blockquote3 }}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="400">
            <a
              :href="featureOneSection.videoLink"
              data-fancybox
            >
              <img
                :src="featureOneSection.imageSrc"
                alt="Image"
                class="img-fluid img-shadow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Features One Section Ends -->
</template>