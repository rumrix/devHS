<template>
  <div class="container p-5">
    <h1>우편번호 검색</h1>
    <hr />
    <b-form>
      <b-form-group>
        <b-input
          id="sample6_postcode"
          size="md"
          type="text"
          placeholder="우편번호"
        />
        <b-button variant="dark" value="" @click="addrSearch">
          우편번호 찾기
        </b-button>
      </b-form-group>
      <b-form-group>
        <b-input
          id="sample6_address"
          type="text"
          placeholder="주소"
          size="40"
        />
      </b-form-group>
      <b-form-group>
        <b-input
          id="sample6_detailAddress"
          type="text"
          placeholder="상 세 주 소"
          size="40"
        />
      </b-form-group>
      <b-form-group>
        <b-input
          id="sample6_extraAddress"
          type="text"
          placeholder="참 고 항 목"
          size="40"
        />
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
export default {
  layout: 'none',
  head() {
    return {
      title: 'title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description',
        },
      ], // 이곳에 script 파일 주소를 넣을 수 있습니다.
      script: [
        {
          src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
        },
      ],
    }
  },
  methods: {
    addrSearch() {
      // eslint-disable-next-line no-undef
      new daum.Postcode({
        oncomplete(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let addr = ''
          // 주소 변수
          let extraAddr = ''
          // 참고항목 변수
          // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress
          } // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.

          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname
            } // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              extraAddr +=
                extraAddr !== '' ? ', ' + data.buildingName : data.buildingName
            } // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== '') {
              extraAddr = ' (' + extraAddr + ')'
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            document.getElementById('sample6_extraAddress').value = extraAddr
          } else {
            document.getElementById('sample6_extraAddress').value = ''
          }
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample6_postcode').value = data.zonecode
          document.getElementById('sample6_address').value = addr
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById('sample6_detailAddress').focus()
        },
      }).open()
    },
  },
}
</script>
<style scoped>
input {
  border: 1px solid black;
  margin: 5px;
}
</style>
