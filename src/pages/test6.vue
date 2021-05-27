<template>
  <q-page class="felx">
    <div class="q-pa-md">
      <h4>배송템플릿</h4>
      <q-select
        standout="bg-teal text-white"
        v-model="shippingTemplate"
        :options="shippingNames"
        label="배송템플릿 선택"
        style="max-width: 300px"
      ></q-select>
      <br />
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          label="배송템플릿명"
          hint="배송템플릿 이름을 입력해주세요"
          name="shpNm"
          v-model="shpNm"
          style="max-width: 500px"
        />
        <q-input
          label="배송지 우편번호"
          hint="배송지 우편번호를 확인해주세요"
          name="shpPstCd"
          id="shpPstCd"
          v-model="shpPstCd"
          style="max-width: 500px"
        />
        <q-btn label="우편번호 찾기" type="fndAddr" color="white" text-color="black" class="q-ml-sm"></q-btn>
        <q-input
          label="배송지 주소"
          hint="배송지 주소 정보를 확인해주세요"
          name="shpAddr"
          id="shpAddr"
          v-model="shpAddr"
          style="max-width: 500px"
        />
        <q-input
          label="배송지 상세주소"
          hint="배송지 상세주소를 입력주세요."
          name="shpDtlAddr"
          id="shpDtlAddr"
          v-model="shpDtlAddr"
          style="max-width: 500px"
        />
        <q-input
          label="배송지 참고항목"
          hint="배송지 참고항목 정보를 확인해주세요."
          name="shpExtrAddr"
          id="shpExtrAddr"
          v-model="shpExtrAddr"
          style="max-width: 500px"
        />
      </q-form>
      <br />
      <q-btn label="수정" type="modify" color="white" text-color="black" class="q-ml-sm"></q-btn>
      <q-btn label="삭제" type="delete" color="white" text-color="black" class="q-ml-sm"></q-btn>
      <q-btn label="등록" type="submit" color="secondary" class="q-ml-sm"></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      shippingTemplate: null,
      shippingNames: [
        '기본배송지', '반품배송지', '제주배송지',
      ],
      shpPstCd: null,
      shpNm: null,
      shpAddr: null,
      shpDtlAddr: null,
      shpExtrAddr: null,
    };
  },
  mounted() {
    const themejs = document.createElement('script');
    themejs.setAttribute('src', 't1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');
    document.head.appendChild(themejs);
    // const themejs2 = document.createElement('script');
    // themejs2.setAttribute('src', '/public/js/daumpost.js');
    // document.head.appendChild(themejs2);
  },
  // methods: {
  //   fndAddr() {
  //     this.themejs2.sample6ExecDaumPostcode();
  //   },
  // },
};
</script>
