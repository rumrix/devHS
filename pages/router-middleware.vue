<template>
  <b-card>
    <b-form bg-variant="dark" @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        label-cols-lg="3"
        label="과일 정보 입력"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="과일 ID"
          label-cols-sm="3"
          label-align-sm="right"
          description="과일 ID를 입력하세요"
        >
          <b-form-input v-model="idD" type="text" />
        </b-form-group>
        <b-form-group
          label="과일 이름"
          label-cols-sm="3"
          label-align-sm="right"
          description="과일 이름을 입력하세요"
        >
          <b-form-input v-model="nameD" type="text" />
        </b-form-group>
        <b-form-group
          label="과일 수량"
          label-cols-sm="3"
          label-align-sm="right"
          description="과일 수량을 입력하세요"
        >
          <b-form-input v-model="quantityD" type="text" />
        </b-form-group>
        <b-form-group label-cols-sm="3" label-align-sm="right">
          <b-button
            ref="button"
            v-b-tooltip.hover.bottomright="
              'ID와 이름이 다를 경우 전송 성공 합니다.'
            "
            variant="dark"
            type="submit"
          >
            전송
          </b-button>
          <b-button type="reset" variant="dark">초기화</b-button>
        </b-form-group>
      </b-form-group>
    </b-form>
    <hr />
    <b-card>
      <p>저장결과 : {{ insertTF }}</p>
      <p>입력값 : {{ submitData }}</p>
      <p>조회 : {{ tempD }}</p>
    </b-card>
    <br />
    <b-form bg-variant="dark" @submit.prevent="onUpload">
      <b-form-group
        label-cols-lg="3"
        label="엑셀 업로드"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="파일 선택"
          label-cols-sm="3"
          label-align-sm="right"
          description="업로드할 파일을 선택하세요"
        >
          <b-form-file v-model="tempFile" type="file" @change="onFileChange" />
        </b-form-group>
        <b-form-group
          label="파일 선택"
          label-cols-sm="3"
          label-align-sm="right"
          description="파일 선택 완료 후 클릭하세요"
        >
          <b-overlay
            :show="busy"
            rounded
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block"
            @hidden="onHidden"
          >
            <b-button
              ref="button"
              v-b-tooltip.hover.bottomright="
                '업로드된 엑셀 데이터가 저장됩니다.'
              "
              :disabled="busy"
              variant="dark"
              @click="onClick"
            >
              엑셀 업로드
            </b-button>
          </b-overlay>
        </b-form-group>
      </b-form-group>
    </b-form>
    <hr />
    <b-card>
      <p>업로드성공 : {{ insertSuccess }}</p>
      <hr />
      <b-table
        id="insert-table"
        head-variant="dark"
        table-variant="success"
        small
        hover
        :items="datasInsert"
        :fields="sortable"
        :per-page="perPageI"
        :current-page="currentPageI"
      ></b-table>
      <b-pagination
        v-model="currentPageI"
        :total-rows="rowsI"
        :per-page="perPageI"
        aria-controls="insert-table"
      ></b-pagination>
      <p class="mt-3">Current Page: {{ currentPageI }}</p>
    </b-card>
    <br />
    <b-card>
      <p>업로드실패 : {{ insertFail }}</p>
      <b-button
        v-b-tooltip.hover.bottomright="'업로드 실패값이 엑셀 다운로드 됩니다.'"
        variant="dark"
        @click="excelDown"
      >
        엑셀다운
      </b-button>
      <hr />
      <b-table
        id="exist-table"
        head-variant="dark"
        table-variant="danger"
        small
        hover
        :items="datasExist"
        :fields="sortable"
        :per-page="perPageE"
        :current-page="currentPageE"
      ></b-table>
      <b-pagination
        v-model="currentPageE"
        :total-rows="rowsE"
        :per-page="perPageE"
        aria-controls="exist-table"
      ></b-pagination>
      <p class="mt-3">Current Page: {{ currentPageE }}</p>
    </b-card>
  </b-card>
</template>
<script>
import XLSX from 'xlsx'
import { loading } from '~/mixins/loading.js'
export default {
  mixins: [loading],
  data() {
    return {
      insertTF: null,
      idD: null,
      nameD: null,
      quantityD: null,
      submitData: null,
      tempD: null,
      insertSuccess: null,
      insertFail: null,
      datasExist: [{ id: 'No Data', name: 'No Data', quantity: 'No Data' }],
      datasInsert: [{ id: 'No Data', name: 'No Data', quantity: 'No Data' }],
      perPageE: 5,
      perPageI: 5,
      currentPageE: 1,
      currentPageI: 1,
    }
  },
  computed: {
    rowsE() {
      return this.datasExist.length
    },
    rowsI() {
      return this.datasInsert.length
    },
  },
  mounted() {
    this.$axios
      .get('http://www.rrphp.com/api/photos2/10/edit')
      .then((res) => {
        this.idD = res.data[0].id
        this.nameD = res.data[0].name
        this.quantityD = res.data[0].quantity
        this.tempD = '정상'
      })
      .catch((err) => {
        this.tempD = `실패, ${err.response}`
      })
  },
  methods: {
    onSubmit() {
      this.submitData = {
        id: this.idD,
        name: this.nameD,
        quantity: this.quantityD,
      }
      const submitDataS = {
        id: this.idD,
        name: this.nameD,
        quantity: this.quantityD,
      }
      // nuxt.config.js에서 설정을 했을 경우 $axios로 사용
      this.$axios
        .post('http://www.rrphp.com/api/photos2/', submitDataS)
        .then((res) => {
          if (res.data === 'TRUE') {
            this.insertTF = '등록 성공'
          } else {
            this.insertTF = '등록 실패'
          }
        })
        .catch((err) => {
          this.insertTF = '통신 실패, ' + err.response
        })
    },
    onReset() {
      this.idD = null
      this.nameD = null
      this.quantityD = null
    },
    onUpload() {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }

      const formData = new FormData()
      formData.append('file', this.file)
      this.$axios
        .post('http://www.rrphp.com/api/file/', formData, config)
        .then((response) => {
          this.insertSuccess = response.data.INSERT_COUNT
          this.insertFail = response.data.EXIST_COUNT
          if (response.data.EXIST) {
            this.datasExist = response.data.EXIST
          }
          if (response.data.INSERT) {
            this.datasInsert = response.data.INSERT
          }
          this.busy = false
        })
        .catch((error) => {
          this.success = error
          this.busy = false
        })
    },
    onFileChange(e) {
      this.file = e.target.files[0]
    },
    excelDown() {
      const tmpData = XLSX.utils.json_to_sheet(this.datasExist)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, tmpData, 'nameData')
      XLSX.writeFile(wb, new Date() + 'Fail.xlsx')
    },
    onClick() {
      this.busy = true
      this.onUpload()
      // Simulate an async request
      this.setTimeout(() => {
        this.busy = false
      })
    },
  },
}
</script>
