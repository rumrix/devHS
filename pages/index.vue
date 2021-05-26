<template>
  <div id="app" style="padding: 50px">
    <b-card>
      <b-form @submit.prevent="onSignin" @reset="onSignout">
        <b-form-group
          label-cols-lg="3"
          label="Test Sign in"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="ID 입력"
            label-cols-sm="3"
            label-align-sm="right"
            description="TEST 로그인 ID를 입력하세요"
          >
            <b-form-input v-model="id" type="text" />
          </b-form-group>
          <b-form-group
            label="PW 입력"
            label-cols-sm="3"
            label-align-sm="right"
            description="TEST 로그인 Password를 입력하세요"
          >
            <b-form-input v-model="password" type="text" />
          </b-form-group>
          <b-form-group label-cols-sm="3" label-align-sm="right">
            <b-overlay
              :show="busy"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="dark"
              class="d-inline-block"
            >
              <b-button
                ref="button"
                v-b-tooltip.hover.bottomright="
                  'TEST ID와 Password를 Cookie에 저장합니다'
                "
                :disabled="busy"
                variant="dark"
                @click="onClick"
              >
                Sign in
              </b-button>
            </b-overlay>
            <b-button type="reset" variant="dark">Cookie Reset</b-button>
          </b-form-group>
        </b-form-group>
      </b-form>
    </b-card>
    <section class="container">
      <ul>
        <li v-for="item in todos" :key="item.id">
          <input type="checkbox" :checked="item.done" @change="toggle(item)" />
          <span :class="{ done: item.done }">{{ item.title }}</span>
          <button @click="remove(item)">지우기</button>
        </li>
      </ul>
      <p>
        <input
          v-model="todoTitle"
          type="text"
          placeholder="할 일을 입력하세요"
          @keyup.enter="addTodo"
        />
        <button @click="addTodo">입력</button>
      </p>
    </section>
    <video-player
      class="mb_-2"
      src="https://www.youtube.com/watch?v=9nhg2Y84rmY"
    />
    <video-player class="mb_-2" src="https://vimeo.com/389509769" />
    <video-player
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import VideoPlayer from '~/components/Player'
import { loading } from '~/mixins/loading.js'

export default {
  components: {
    VideoPlayer,
  },
  mixins: [loading],
  data() {
    return {
      todoTitle: '',
      id: '',
      password: '',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.list
    },
  },
  methods: {
    addTodo() {
      this.$store.commit('todo/add', this.todoTitle)
      this.todoTitle = ''
    },
    ...mapMutations({
      toggle: 'todo/toggle',
      remove: 'todo/remove',
    }),
    onSignin() {
      this.$store.commit('signin/idstored', this.id)
      this.$store.commit('signin/pwstored', this.password)
      this.busy = false
    },
    onClick() {
      this.busy = true
      this.onSignin()
      this.setTimeout(() => {
        this.busy = false
      })
    },
    onSignout() {
      this.id = null
      this.password = null
      this.$store.commit('signin/idstored', null)
      this.$store.commit('signin/pwstored', null)
    },
  },
}
</script>
<style scoped>
.mb_-2 {
  margin-bottom: 20px;
}
.done {
  text-decoration: line-through;
}
</style>
