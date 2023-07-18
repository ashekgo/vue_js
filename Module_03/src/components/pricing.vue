<script setup>
import { pricingSection } from "/src/data/pricing.js";
</script>


<template>
    <!-- Pricing Section Starts -->
    <div class="untree_co-section bg-light" id="pricing-section">
      <div class="container">
        <div class="row pricing-title">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">{{ pricingSection.title1 }}</h2>
            <p>{{ pricingSection.title2 }}</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div class="pricing">
                  <div class="body">
                    <div class="price">
                      <span class="d-block plan">{{ pricingSection.policyName1 }}</span>
                      <span class="price"><sup>$</sup><span>{{ pricingSection.policyPrice1 }}</span></span>
                    </div>
                    <ul class="list-unstyled primary mb-5">
                      <li>✓ {{ pricingSection.policyNote1_1 }}</li>
                      <li>✓ {{ pricingSection.policyNote1_2 }}</li>
                      <li>✓ {{ pricingSection.policyNote1_3 }}</li>
                    </ul>
                    <p class="text-center mb-0">
                      <a :href="pricingSection.policyStartLink1" class="btn btn-outline-primary"
                        >Get Started</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="pricing active">
                  <div class="body">
                    <div class="price">
                      <span class="d-block plan">{{ pricingSection.policyName2 }}</span>
                      <span class="price"><sup>$</sup><span>{{ pricingSection.policyPrice2 }}</span></span>
                    </div>
                    <ul class="list-unstyled primary mb-5">
                      <li>✓ {{ pricingSection.policyNote2_1 }}</li>
                      <li>✓ {{ pricingSection.policyNote2_2 }}</li>
                      <li>✓ {{ pricingSection.policyNote2_3 }}</li>
                    </ul>
                    <p class="text-center mb-0">
                      <a :href="pricingSection.policyStartLink2" class="btn btn-outline-primary"
                        >Get Started</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div class="pricing">
                  <div class="body">
                    <div class="price">
                      <span class="d-block plan">{{ pricingSection.policyName3 }}</span>
                      <span class="price"><sup>$</sup><span>{{ pricingSection.policyPrice3 }}</span></span>
                    </div>
                    <ul class="list-unstyled primary mb-5">
                      <li>✓ {{ pricingSection.policyNote3_1 }}</li>
                      <li>✓ {{ pricingSection.policyNote3_2 }}</li>
                      <li>✓ {{ pricingSection.policyNote3_3 }}</li>
                    </ul>
                    <p class="text-center mb-0">
                      <a :href="pricingSection.policyStartLink3" class="btn btn-outline-primary"
                        >Get Started</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pricing Section Ends -->
</template>