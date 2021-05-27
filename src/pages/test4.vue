<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          type="number"
          label="ID"
          hint="ID를 입력해주세요"
          v-model="id"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '입력값이 필요합니다.']"
        />
        <q-input
          filled
          label="이름"
          hint="과일 이름을 입력해주세요"
          v-model="name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '입력값이 필요합니다.']"
        />
        <q-input
          filled
          type="number"
          label="수량"
          hint="과일 수량을 입력해주세요"
          name="quantity"
          v-model="quantity"
          lazy-rules
          :rules="[ val => val !== null && val !== '' || '입력값이 필요합니다.', val => val > 0 && val <= 100000 || '입력값이 10만을 넘을 수 없습니다.']"
        />
        <q-btn label="등록" type="submit" color="dark"></q-btn>
        <q-btn label="초기화" type="reset" color="dark" flat class="q-ml-sm"></q-btn>
        <q-input
          readonly
          label="결과"
          v-model="result"
        />
      </q-form>
    </div>
    <div class="q-pa-md bg-grey-10 text-white">
      <div class="q-gutter-md">
        <q-date
          v-model="date1"
          dark
          bordered
        ></q-date>

        <q-date
          v-model="date2"
          color="orange"
          text-color="black"
          dark
          bordered
        ></q-date>
      </div>
    </div>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          label="시작일"
          hint="시작일을 선택해주세요"
          name="startDays"
          v-model="startDays"
        />
        <q-input
          label="종료일"
          hint="종료일을 선택해주세요"
          name="endDays"
          v-model="endDays"
        />
      </q-form>
    </div>
    <div class="q-pa-md">
      <div class="q-pb-sm">
      </div>
      <q-date v-model="date3" range @click="getDate"></q-date>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar';
import axios from 'axios';

export default {
  name: 'PageIndex',
  data() {
    const timeStamp = Date.now();
    const formattedString = date.formatDate(timeStamp, 'YYYY/MM/DD');
    return {
      date1: `${formattedString}`,
      date2: '2019/02/01',
      date3: [
        { from: '2020/07/01', to: '2020/07/10' },
      ],
      startDays: '',
      endDays: '',
      id: null,
      name: null,
      quantity: null,
      result: '결과가 없습니다.',
    };
  },
  methods: {
    getDate() {
      if (this.date3.from) {
        this.startDays = this.date3.from;
      }
      if (this.date3.to) {
        this.endDays = this.date3.to;
      }
    },
    onSubmit() {
      console.log(this.id, this.name, this.quantity);
      const article = { id: this.id, name: this.name, quantity: this.quantity };
      axios.post('http://www.rrphp.com/api/photos2', article)
        .then((response) => {
          console.log(response);

          if (response.data === 'TRUE') {
            this.result = `등록 성공 : ${response.data}`;
            this.onReset();
          } else {
            this.result = `등록 실패 : ${response.data}`;
          }
        }).catch((err) => {
          console.log(err.response);
          this.result = `통신 실패 : ${err.response}`;
        });
    },
    onReset() {
      this.id = null;
      this.name = null;
      this.quantity = null;
    },
  },
};
</script>
