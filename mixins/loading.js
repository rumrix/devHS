export const loading = {
  data() {
    return {
      busy: false,
      timeout: null,
    }
  },
  beforeDestroy() {
    this.clearTimeout()
  },
  methods: {
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
    },
    setTimeout(callback) {
      this.clearTimeout()
      this.timeout = setTimeout(() => {
        this.clearTimeout()
        callback()
      }, 5000)
    },
  },
}
