import { reactive } from 'vue'
export default {
  name: 'HelloJSX',
  props: {
    name: String
  },
  setup() {
    const data = reactive({
      title: 'HelloJSX',
      msg: 'This is JSX component sample .'
    })
    return () => (
      <div class="alert alert-warning">
        <h1>{data.title}</h1>
        <p>{data.msg}</p>
      </div>
    )
  }
}