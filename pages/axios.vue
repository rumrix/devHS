<template>
  <b-card>
    <h1>Axios</h1>
    <b-card>
      <button @click.prevent="increment">increment</button>
      <p>{{ $store.state.example.val }}</p>
    </b-card>
    <hr />
    <b-form inline @submit.prevent="onSearch">
      <b-form-group>
        <b-input v-model="searchWord" type="text" placeholder="수량입력" />
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
              '입력 수량보다 수량이 많은 과일이 조회됩니다.'
            "
            :disabled="busy"
            variant="dark"
            @click="onClick"
          >
            조회
          </b-button>
        </b-overlay>
      </b-form-group>
      &nbsp;
      <b-form-group>
        <b-button
          v-b-tooltip.hover.bottomright="'조회 결과값이 엑셀 다운로드 됩니다.'"
          variant="dark"
          @click="excelDown"
        >
          엑셀다운
        </b-button>
      </b-form-group>
    </b-form>
    <hr />
    <b-table
      id="fruit-table"
      striped
      head-variant="dark"
      hover
      :items="datas"
      :fields="sortable"
      :per-page="perPage"
      :current-page="currentPage"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="fruit-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <hr />
    <h4>{{ axiosResult }}</h4>
  </b-card>
</template>
<script>
import { loading } from '~/mixins/loading.js'

export default {
  mixins: [loading],
  data() {
    return {
      sortable: [
        { key: 'id', sortable: true },
        { key: 'name', sortable: false },
        { key: 'quantity', sortable: true },
      ],
      datas: [
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
        { id: 'No Data', name: 'No Data', quantity: 'No Data' },
      ],
      axiosResult: null,
      searchWord: null,
      perPage: 17,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.datas.length
    },
  },
  methods: {
    onSearch() {
      // nuxt.config.js에서 설정을 했을 경우 $axios로 사용
      this.$axios
        .get(`http://www.rrphp.com/api/photos2/${this.searchWord}`)
        .then((response) => {
          this.datas = response.data
          this.axiosResult = `입력값 : ${this.searchWord}, 조회 성공`
          this.busy = false
        })
        .catch((err) => {
          this.axiosResult = `입력값 : ${this.searchWord}, 조회 실패 : ' + ${err.response}`
          this.busy = false
        })
    },
    onHidden() {
      // Return focus to the button once hidden
      this.$refs.button.focus()
    },
    excelDown() {
      this.$axios
        .get(`http://www.rrphp.com/api/file/${this.searchWord}`, {
          responseType: 'blob',
        })
        .then((response) => {
          const link = document.createElement('a') // 앵커 만들고
          link.href = window.URL.createObjectURL(new Blob([response.data])) // Blob형으로 객체 생성
          link.setAttribute('download', new Date() + '_test.xlsx') // 파일명 정하고
          document.body.appendChild(link) // 바디에 붙여넣고
          link.click() // 클릭 이벤트
          this.axiosResult = `입력값 : ${this.searchWord}, 다운 성공`
        })
        .catch((err) => {
          this.axiosResult = `입력값 : ${this.searchWord}, 다운 실패 : ' + ${err.response}`
        })
    },
    onClick() {
      this.busy = true
      this.onSearch()
      // Simulate an async request
      this.setTimeout(() => {
        this.busy = false
      })
    },
    increment() {
      this.$store.commit('example/increment')
    },
  },
}
</script>
