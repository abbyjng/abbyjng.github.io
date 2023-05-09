<script setup>
import { ref, computed } from "vue";
import WhiteCurve from "./svgs/WhiteCurve.vue";
import PurpleCurve from "./svgs/PurpleCurve.vue";
import emailjs from "@emailjs/browser";

defineProps({
  isInView: Boolean,
});

const name = ref("");
const email = ref("");
const message = ref("");

const formHasValue = computed(() => {
  return name.value !== "" || email.value !== "" || message.value !== "";
});

const messageSent = ref(false);

const inputStyle =
  "border border-px border-darkPurple rounded-[5px] px-2 py-1 bg-blueWhite w-full focus:border-darkPurple focus:ring-1 focus:ring-brightPurple";

function submitForm(event) {
  event.preventDefault();
  const honeypot = event.target.elements.honeypot.value;
  if (!honeypot || honeypot === "") {
    emailjs
      .sendForm(
        "portfolio_contact_form",
        "portfolio_contact_form",
        event.target,
        "ViElaCBJ0XIOLA7HN"
      )
      .then(
        function () {
          messageSent.value = true;
          name.value = "";
          email.value = "";
          message.value = "";
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
}
</script>

<template>
  <PurpleCurve
    class="absolute w-screen h-auto bottom-[calc(100%-50px)] -left-[max(calc(50vw-512px),10vw)]"
  />
  <WhiteCurve
    class="absolute w-screen h-auto bottom-[calc(100%-50px)] -left-[max(calc(50vw-512px),10vw)]"
  />
  <div
    class="absolute w-screen h-[calc(100%-50px)] bottom-0 -left-[max(calc(50vw-512px),10vw)] bg-blueWhite"
  />
  <div class="md:mb-[5vh] w-full">
    <p class="section-header">connect();</p>
    <div :class="[isInView ? 'in-view' : '', 'section-body w-full']">
      <h1 class="text-darkPurple">Get in touch</h1>
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 w-full"
      >
        <form
          class="text-darkPurple flex flex-col table max-w-[500px]"
          @submit.prevent="submitForm"
        >
          <label for="name" class="text-xs font-semibold">NAME</label>
          <input
            placeholder="Johnny Appleseed"
            type="text"
            id="name"
            name="user_name"
            v-model="name"
            :class="inputStyle"
          />
          <label for="email" class="text-xs font-semibold">EMAIL</label>
          <input
            placeholder="johnny@appleseed.com"
            type="email"
            id="email"
            name="user_email"
            v-model="email"
            :class="inputStyle"
          />
          <label for="message" class="text-xs font-semibold">MESSAGE</label>
          <textarea
            placeholder="Let's connect, Abigail!"
            type="text"
            id="message"
            name="message"
            v-model="message"
            rows="5"
            :class="inputStyle"
          />
          <input
            type="text"
            id="honeypot"
            placeholder="Last name"
            class="hidden"
          />
          <div class="flex justify-between">
            <div>
              <div
                v-if="messageSent && !formHasValue"
                class="text-darkPurple text-base font-semibold"
              >
                Message sent!
              </div>
            </div>
            <input
              type="submit"
              value="Send"
              :disabled="name === '' || email === '' || message === ''"
              class="bg-brightPurple rounded-lg text-blueWhite px-4 py-2 mt-2 cursor-pointer disabled:bg-brightPurple/50 disabled:cursor-auto"
            />
          </div>
        </form>
        <img
          class="rounded-full max-w-[200px] shadow-pixelPortrait"
          src="./images/pixelPortrait.png"
        />
      </div>
    </div>
  </div>
</template>
