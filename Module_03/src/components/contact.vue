<script setup>
import { contactSection } from "/src/data/contact.js";
</script>

<template>
    <!-- Contact Section Starts -->
    <div class="untree_co-section" id="contact-section">
      <div class="container">
        <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
          <div class="col-12 text-center">
            <h2 class="heading">{{ contactSection.title1 }}</h2>
            <p>{{ contactSection.title2 }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <form class="contact-form" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="" for="fname">First name</label>
                    <input type="text" class="form-control" id="fname" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="" for="lname">Last name</label>
                    <input type="text" class="form-control" id="lname" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="" for="email">Email address</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label class="" for="message">Message</label>
                <textarea
                  name=""
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
            <h3 class="h5 mb-4">Contact Info</h3>
            <address class="text-black d-flex">
              <span class="mt-1 mr-2"></span
              ><span>✓ {{ contactSection.address }}</span>
            </address>
            <ul class="list-unstyled mb-4">
              <li>
                <a :href="contactSection.phoneHref1" class="d-flex"
                  ><span class="mt-1 mr-2"></span
                  ><span>✓ {{ contactSection.phone1 }}</span></a
                >
              </li>
              <li>
                <a :href="contactSection.phoneHref2" class="d-flex"
                  ><span class="mt-1 mr-2"></span
                  ><span>✓ {{ contactSection.phone2 }}</span></a
                >
              </li>
              <li>
                <a
                  :href="contactSection.emailHref"
                  class="d-flex"
                  ><span class="mt-1 mr-2"></span
                  ><span>✓ {{ contactSection.email }}</span
                  ></a
                >
              </li>
              <li>
                <a :href="contactSection.websiteHref" target="_blank" class="d-flex"
                  ><span class="mt-1 mr-2"></span
                  ><span>✓ {{ contactSection.website }}</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Section Ends -->
</template>