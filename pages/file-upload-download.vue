<template>
  <b-card>
    <b-form-file ref="imageInput" type="file" hidden @change="onChangeImages" />
    <b-button type="button" @click="onClickImageUpload">
      이미지 업로드
    </b-button>
    <b-img v-if="imageUrl" :src="imageUrl"></b-img>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: null,
    }
  },
  methods: {
    onClickImageUpload() {
      this.$refs.imageInput.click()
    },
    onChangeImages(e) {
      const file = e.target.files[0]
      this.imageUrl = URL.createObjectURL(file)
    },
  },
}
</script>
