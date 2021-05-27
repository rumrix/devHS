<template>
  <q-page class="flex flex-center">
    <div class="q-gutter-md">
      <q-btn color="brown" label="MAX HEIGHT MENU">
        <q-menu max-height="300px">
          <q-list style="min-width:100px">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <q-btn color="primary" @click="showTableLoading">
      Show Text Loading
    </q-btn>
    <div class="q-pa-md">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="light-blue-6"
        size="13px"
        skip-hijack
      ></q-ajax-bar>
      <q-table title="Fruits" :data="data" :columns="columns" row-key="name">
        <template v-slot:body-cell="props">
          <q-td :props="props">
            <q-badge color="blue" :label="props.value"></q-badge>
          </q-td>
        </template>
      </q-table>
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="lime-13"
        size="13px"
        skip-hijack
      ></q-ajax-bar>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="date"></q-date>

        <q-date v-model="date" minimal></q-date>
      </div>
    </div>
    <div class="q-pa-md">
      <q-btn
        push
        color="teal"
        label="Change image"
        @click="refresh"
        class="q-mb-md"
      ></q-btn>
      <div class="q-gutter-sm row items-start">
        <q-img
          :src="url"
          spinner-color="red"
          style="height: 140px; max-width: 150px"
        ></q-img>
        <q-img
          :src="url"
          spinner-color="primary"
          spinner-size="82px"
          style="height: 140px; max-width: 150px"
        ></q-img>
        <q-img :src="url" style="height: 140px; max-width: 150px">
          <template v-slot:loading>
            <div class="text-subtitle1 text-white">
              Loading...
            </div>
          </template>
        </q-img>
        <q-img :src="url" style="height: 140px; max-width: 150px">
          <template v-slot:loading>
            <q-spinner-gears color="white"></q-spinner-gears>
          </template>
        </q-img>
        <q-img :src="url" style="height: 140px; max-width: 150px">
          <template v-slot:loading>
            <div class="text-yellow">
              <q-spinner-ios></q-spinner-ios>
              <div class="q-mt-md">Loading...</div>
            </div>
          </template>
        </q-img>
      </div>
    </div>
  </q-page>
</template>

<style>
.card-example {
  width: 288px;
  height: 290px;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'PageIndex',
  data() {
    return {
      data: [{ id: 1, name: 'No Data', quantity: 0 }],
      date: '2021/04/28',
      url: 'https://placeimg.com/500/300/nature',
    };
  },
  methods: {
    showTableLoading() {
      this.$refs.bar.start();

      axios
        .get('http://www.rrphp.com/api/photos2/100')
        .then((result) => {
          console.log(result.data);
          this.data = result.data;
          this.$refs.bar.stop();
        })
        .catch((err) => {
          console.log(err.data);
          this.data = err.response;
          this.$refs.bar.stop();
        });
    },
    refresh() {
      this.url = `https://placeimg.com/500/300/nature?t=${Math.random()}`;
    },
  },
};
</script>
