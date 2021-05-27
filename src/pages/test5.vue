/* eslint-disable prefer-destructuring */
<template>
  <q-page class="flex flex-center shadow-1">
    <div class="q-pa-md">
      <q-uploader
        style=""
        label="Sub Images (Max 3)"
        max-files="3"
        multiple
        auto-upload
        accept=".jpg, image/*"
        :factory="uploadSubImages"
        @rejected="onRejected"
      />
    </div>
    <div class="q-pa-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="fustify"
        >
          <q-tab name="mails" label="Mails"></q-tab>
          <q-tab name="alarms" label="Alarms"></q-tab>
          <q-tab name="movies" label="Movies"></q-tab>
        </q-tabs>

        <q-separator></q-separator>

        <q-tab-panels v-model="tab" anomated>
          <q-tab-panel name="mails" class="q-pa-none">
            <q-splitter
              v-model="splitterModel"
              style="height: 250px"
            >
              <template v-slot:before>
                <q-tabs
                  v-model="innerTab"
                  vertical
                  class="text-teal"
                >
                  <q-tab name="innerMails" icon="mail" label="Mails"></q-tab>
                  <q-tab name="innerAlarms" icon="alarm" label="Alarms"></q-tab>
                  <q-tab name="innerMovies" icon="movie" label="Movies"></q-tab>
                </q-tabs>
              </template>
              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerMails">
                    <div class="text-h4 q-mb-md">Mails</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  </q-tab-panel>
                  <q-tab-panel name="innerAlarms">
                    <div class="text-h4 q-mb-md">Alarms</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  </q-tab-panel>
                  <q-tab-panel name="innerMovies">
                    <div class="text-h4 q-mb-md">Movies</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>
          <q-tab-panel name="alarms">
            <div clsss="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies">
            <div clsss="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div class="q-pa-md shadow-2 q-gutter-sm">
      <div class="q-gutter-md row justify-center" style="font-size: 2em">
        <q-spinner-audio color="secondary"></q-spinner-audio>
        <q-spinner-ball color="red"></q-spinner-ball>
        <q-spinner-bars color="purple"></q-spinner-bars>
        <q-spinner-box color="deep-orange"></q-spinner-box>
        <q-spinner-cube color="indigo"></q-spinner-cube>
        <q-spinner-dots color="blue"></q-spinner-dots>
        <q-spinner-facebook color="light-blue"></q-spinner-facebook>
        <q-spinner-gears color="cyan"></q-spinner-gears>
        <q-spinner-grid color="teal"></q-spinner-grid>
        <q-spinner-hearts color="green"></q-spinner-hearts>
        <q-spinner-hourglass color="light-green"></q-spinner-hourglass>
        <q-spinner-infinity color="lime"></q-spinner-infinity>
        <q-spinner-ios color="yellow"></q-spinner-ios>
        <q-spinner-orbit color="blue"></q-spinner-orbit>
        <q-spinner-oval color="amber"></q-spinner-oval>
        <q-spinner-pie color="orange"></q-spinner-pie>
        <q-spinner-puff color="deep-orange"></q-spinner-puff>
        <q-spinner-radio color="brown"></q-spinner-radio>
        <q-spinner-rings color="grey"></q-spinner-rings>
        <q-spinner-tail color="blue-grey"></q-spinner-tail>
      </div>
    </div>
    <div class="q-pa-md shadow-2">
      <q-toggle
        :label="`판매여부 : ${blueModel}`"
        false-value="판매중지"
        true-value="판매중"
        v-model="blueModel"
      ></q-toggle>
      <q-toggle
        :label="`성별 : ${pinkModel}`"
        color="pink"
        false-value="남자"
        true-value="여자"
        v-model="pinkModel"
      ></q-toggle>
      <q-toggle
        :label="`과세여부 : ${greenModel}`"
        false-value="비과세"
        true-value="과세"
        color="green"
        v-model="greenModel"
      ></q-toggle>
      <q-toggle
        :label="`방송여부 : ${redModel}`"
        false-value="미방영"
        true-value="방송중"
        color="red"
        v-model="redModel"
        @input="onLive"
      ></q-toggle>
    </div>
  </q-page>
</template>
<style>
</style>
<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      sub_files_paths: null,
      tab: 'mails',
      innerTab: 'innerMails',
      splitterModel: 20,
      blueModel: '판매중',
      pinkModel: '남자',
      greenModel: '과세',
      redModel: '방송중',
    };
  },
  methods: {
    uploadSubImages(files) {
      this.sub_files_paths = files;
      const fileData = new FormData();

      fileData.append('sub_files_paths', this.sub_files_paths[0]);

      this.$axios.post('http://www.rrphp.com/api/upload', fileData, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        console.log(response.data);

        this.$q.notify({
          type: 'possitive',
          mesaage: 'Sub Images Uploaded',
        });
      }).catch((err) => {
        console.log(err);
        this.$q.loading.hide();
      });
    },
    onRejected(rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },
    onLive() {
      console.log(this.redModel);
    },
  },
};
</script>
