<script setup>
import { testimonialSection } from "/src/data/testimonial.js";
</script>

<template>
    <!-- Testimonial Section Starts -->
    <div class="untree_co-section" id="testimonials-section">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 mb-5 text-center text-lg-left mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div class="mb-4">
              <span class="caption">{{ testimonialSection.title1 }}</span>
              <h2 class="heading">{{ testimonialSection.title2 }}</h2>
            </div>
            <div>
              <a
                :href="testimonialSection.leftLink"
                class="js-custom-prev-v2 cusotm-slider-nav custom-prev"
                ><span v-html="testimonialSection.svgLeft"></span
              ></a>
              <a
                :href="testimonialSection.rightLink"
                class="js-custom-next-v2 cusotm-slider-nav custom-next"
                ><span v-html="testimonialSection.svgRight"></span>
              </a>
            </div>
          </div>
          <div class="col-lg-8" data-aos="fade" data-aos-delay="200">
            <div class="owl-2-slider owl-carousel">
              <div class="item">
                <div class="untree_co-testimonial d-flex">
                  <div class="text">
                    <blockquote>
                      &ldquo;{{ testimonialSection.feedback1_1 }}
                      <span class="highlight"
                        >{{ testimonialSection.feedback1_2 }}</span
                      >{{   testimonialSection.feedback1_3 }}&rdquo;
                    </blockquote>
                    <div class="author d-flex">
                      <div class="pic mr-3">
                        <img
                          :src="testimonialSection.feedback1_image"
                          alt="Image"
                          class="img-fluid"
                        />
                      </div>
                      <div>
                        <strong class="d-block">{{ testimonialSection.feedback1_name }}</strong
                        ><span class="d-block">{{ testimonialSection.feedback1_title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="untree_co-testimonial d-flex">
                  <div class="text">
                    <blockquote>
                      &ldquo;{{ testimonialSection.feedback2_1 }}
                      <span class="highlight"
                        >{{ testimonialSection.feedback2_2 }}</span
                      >{{   testimonialSection.feedback2_3 }}&rdquo;
                    </blockquote>
                    <div class="author d-flex">
                      <div class="pic mr-3">
                        <img
                          :src="testimonialSection.feedback2_image"
                          alt="Image"
                          class="img-fluid"
                        />
                      </div>
                      <div>
                        <strong class="d-block">{{ testimonialSection.feedback2_name }}</strong
                        ><span class="d-block">{{ testimonialSection.feedback2_title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="untree_co-testimonial d-flex">
                  <div class="text">
                    <blockquote>
                      &ldquo;{{ testimonialSection.feedback3_1 }}
                      <span class="highlight"
                        >{{ testimonialSection.feedback3_2 }}</span
                      >{{   testimonialSection.feedback3_3 }}&rdquo;
                    </blockquote>
                    <div class="author d-flex">
                      <div class="pic mr-3">
                        <img
                          :src="testimonialSection.feedback3_image"
                          alt="Image"
                          class="img-fluid"
                        />
                      </div>
                      <div>
                        <strong class="d-block">{{ testimonialSection.feedback3_name }}</strong
                        ><span class="d-block">{{ testimonialSection.feedbacK3_title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial Section Ends -->
</template>