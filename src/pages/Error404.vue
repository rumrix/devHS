<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        Error
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. 404.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Main"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
