<template>
  <q-page padding>
    <!-- <div class="full-height column justify-center items-center content-center"> -->
    <div class="tw-pt-12 lg:tw-pt-32 ">
      <div class="greeting tw-text-center">
        <p class="tw-text-yellow-300 tw-text-2xl">~ Hello there ~</p>
        <p class="tw-text-blue-400">Welcome to my colony :)</p>
      </div>
      <div class="img-profile tw-p-3.5">
        <img
          src="https://cdn.discordapp.com/attachments/677436181352415234/799214425714065418/S__1286168.jpg"
          class="tw-w-32 tw-h-32 tw-rounded-full tw-mx-auto"
          width="626"
          height="626"
        />
      </div>
    </div>
    <div class="tw-p-3.5">
      <div class="q-pa-md q-gutter-sm q-pa-xs q-gutter-xs">
        <q-carousel animated v-model="slide" infinite>
          <q-carousel-slide name="soft-jazz">
            <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/k3_tw44QsZQ"
            />
          </q-carousel-slide>

          <q-carousel-slide name="Rihanna">
            <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/kOkQ4T5WO9E"
            />
          </q-carousel-slide>

          <q-carousel-slide name="ibiza">
            <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/p87miJIYEEk"
            />
          </q-carousel-slide>
        </q-carousel>

        <div class="row justify-center">
          <q-btn-toggle
            glossy
            v-model="slide"
            :options="[
              { label: 'Soft Jazz', value: 'soft-jazz' },
              { label: 'Rihanna', value: 'Rihanna' },
              { label: 'Ibiza Mix', value: 'ibiza' }
            ]"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Fragment } from 'vue-fragment';

export default {
  // name: 'PageName',
  data() {
    return {
      slide: 'Rihanna'
    };
  }
};
</script>
