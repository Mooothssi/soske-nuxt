<template>
  <b-container-fluid>
    <b-row class="header mt-2 mb-2">
      <b-col><h2>Submit your problem</h2></b-col>
    </b-row>
    <b-row>
      <b-col md="6">
      <b-form class="pl-5 pr-5" @submit.prevent="onUpload">
      <b-form-group
        id="input-group-1"
        label="Problem Name:"
        label-for="input-1"
        description="You may make up your own fancy name but in English."
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="problemName"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Author name:"
        label-for="input-1"
        description="This will be your SOSKE-ID by default."
      >
        <b-form-input
          id="input-1"
          type="text"
           v-model="authorName"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Category:" label-for="input-3">
        <b-form-select
          id="input-3"
          :options="categories"
          v-model="selectedCategory"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-3" label="Difficulty:" label-for="input-3">
        <b-form-select
          id="input-3"
          :options="difficultyLevels"
          v-model="selectedDLevel"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
       label="Your problem markdown (.md)">
        <b-form-textarea
        id="textarea"
        v-model="markdownSubmission"
        placeholder="Enter something..."
        rows="7"
        required>
        </b-form-textarea>
         <b-form-text>
          You can hide your solution code by inserting <code>::soske:begincode hidden=True</code> next to the original <code>::soske:begincode</code> block.
        </b-form-text>
      </b-form-group>
      <b-form-group label="Tags:">
       <tags-input
        element-id="tags"
        v-model="selectedTags"
        :existing-tags="existingTags"
        :typeahead="true"/>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      </b-col>
        <b-col md="6" class="pl-5 pr-5">
          <b-row>
          <p>Your problem submissions:</p>
          <b-table
          :items="tasks"
          :busy="isBusy"
          :fields="fields"
          v-if="showTable"
          class="mt-3"
          outlined>
            <div slot="table-busy" class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Awaiting submission...</strong>
            </div>
          </b-table>
          <p class="text-center font-italic text-muted" v-else>You currently have no submissions</p>
          </b-row>
           <b-row>
         <b-input-group prepend="Task #">
          <b-form-input type="number" v-model="removeTaskId"></b-form-input>
          <b-input-group-append>
            <b-button variant="danger" @click="requestDelete">Delete</b-button>
          </b-input-group-append>
        </b-input-group>
          </b-row>
        </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'id', label: '#' },
        { key: 'name', label: 'Problem Name' },
        { key: 'category_id', label: 'Category' },
        { key: 'creator_id', label: 'Author name' },
        { key: 'date_created', label: 'Date Submitted' }
      ],
      problemName: '',
      authorName: this.$store.state.username,
      markdownSubmission: '',
      isBusy: false,
      selectedTags: '',
      selectedDLevel: '1',
      removeTaskId: 1,
      difficultyLevels: [
        { value: '1', text: 'Straightforward' },
        { value: '2', text: 'Intermediate' },
        { value: '3', text: 'Challenging' }
      ]
    }
  },
  methods: {
    requestDelete() {
      this.isBusy = true
      this.$axios.delete('/tasks/discard', { data: { id: this.removeTaskId } }).then((res) => {
        this.fetchTasks()
      })
    },
    onFileSelected(event) {
      this.currentFile = event.target.files[0]
    },
    fetchTasks() {
      this.$axios.post(`/tasks/get`, {
        staff_mode: true
      }).then((res) => { this.tasks = res.data; this.isBusy = false })
    },
    onUpload() {
      this.isBusy = true
      if (this.authorName === '') {
        this.authorName = this.$store.state.username
      }
      this.$axios.post('/tasks/submitMarkdown', {
        md_code: this.markdownSubmission,
        author: this.authorName,
        category: this.selectedCategory,
        prob_name: this.problemName,
        tags: this.selectedTags,
        difficulty: this.selectedDLevel
      })
        .then((res) => {
          this.fetchTasks()
        })
    }
  },
  computed: {
    showTable() {
      if (this.tasks) {
        return this.tasks.length > 0
      } else {
        return false
      }
    }
  },
  async asyncData({ store, redirect, $axios }) {
    const { data } = await $axios.post(`/tasks/get`, {
      staff_mode: true
    })
    const categories = (await $axios.post(`/tasks/getCategories`)).data
    const result = categories.map(x => ({ value: x.route, text: x.name }))
    const existingTags = {}
    for (const value of Object.entries(categories)) {
      existingTags[`${value.route}`] = value.name
    }
    return { tasks: data, categories: result, existingTags: existingTags, selectedCategory: result[0].value }
  }
}
</script>

<style scoped>
  .header {
    text-align: center !important;
    display: block !important;
  }
</style>
