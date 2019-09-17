<template>
  <b-row class="mx-2 bg-light">
    <div class="col-md-4 my-2">
      <b-list-group ref="taskListView" role="navigation">
        <b-list-group-item v-for="(task,index) in tasks" v-bind:key="task.id" action @click="selectTask(index, $event.target)" data-toggle="list"><img v-if="task.passed" src="/img/16-em-check.png"> {{ task.name }} <b-badge :variant="getBadgeColorForDiffLevel(task.difficulty)" pill>{{ getBadgeForDiffLevel(task.difficulty) }}</b-badge></b-list-group-item>
      </b-list-group>
    </div>
    <div class="col-md-8 my-2">
      <b-form @submit.prevent="submitAnswer">
        <b-tabs v-model="tabIndex" fill align="center">
          <b-tab v-for="task in tasks" :key="task.id">
            <h1>{{ task.name }} <b-badge :variant="getBadgeColorForDiffLevel(task.difficulty)">{{ getBadgeForDiffLevel(task.difficulty) }}</b-badge></h1>
            <h4 v-if="task.creator_id" class="text-muted">by {{ task.creator_id }}</h4>
            <no-ssr><div v-html="task.html_template"></div></no-ssr>
            <div class="wrapper" align="center">
            <div class="edit-window edit-window-dark window-shadow">
              <div class="window-border window-border-dark">
                <span class="close"></span>
                <span class="minimize"></span>
                <span class="maximize"></span>
                <span class="text-tab fix-line-height" :class="{ current: isActiveTab('editor') }" @click="currentTaskPadTab='editor'"><font-awesome-icon class="fix-line-height" icon="terminal"/>&nbsp; Editor</span>
                <span class="text-tab fix-line-height" :class="{ current: isActiveTab('subxn') }" @click="currentTaskPadTab='subxn'"><font-awesome-icon class="fix-line-height" icon="clock"/>&nbsp; Submission history</span>
                <span class="text-tab fix-line-height" :class="{ currentBlue: isActiveTab('howto') }" @click="currentTaskPadTab='howto'"><font-awesome-icon class="fix-line-height" icon="question-circle"/>&nbsp; SOS!&nbsp;<span class="text-muted">(Help)</span></span>
                <div class="language">
                  <a href="https://docs.python.org/3.7/" target="_blank"><font-awesome-icon class="text-muted" :icon="['fab', 'python']"/></a>&nbsp;
                  <select class="text-muted">
                      <option selected>Python 3.7.3</option>
                  </select>
                </div>
              </div>
              <transition name="fade" mode="out-in">
                <div class="mt-4" v-if="isActiveTab('editor')" key="editor">
                  <span v-if="currentResult" class="text-muted">
                    <transition name="fade" mode="out-in">
                      <span v-if="isGraderBusy"><b-spinner small variant="secondary" label="Processing"></b-spinner> Grading...</span>
                      <span v-else>Latest result: [<span :class="{ 'text-success': isCurrentSuccess }">{{currentResult}}</span>]</span>
                    </transition>
                  </span>
                  <no-ssr>
                    <b-form-group class="input-area ml-2 mr-2" align="left">
                          <textarea-autosize
                          id="textarea"
                          class="source-textarea"
                          v-model="taskpad_code"
                          rows="3"
                          autofocus>
                        </textarea-autosize>
                        <pre v-highlightjs="taskpad_code"><code class="python preview"></code></pre>
                    </b-form-group>
                  </no-ssr>
                  <hr>
                </div>
                <div class="mt-4" v-if="isActiveTab('subxn')" key="subxn">
                  <b-table
                  v-if="showTable"
                  class="text-muted"
                  striped
                  borderless
                  hover
                  dark
                  :items="task.submissions"
                  :fields="fields">
                    <template slot="actions" slot-scope="data">
                      <b-button @click="pasteToTaskpad(data.item.answer)"><font-awesome-icon icon="paste"></font-awesome-icon></b-button>
                    </template>
                  </b-table>
                  <p class="text-center font-italic text-muted mt-4" v-else>You currently have no submissions<br>
                  Please refresh this page for latest updates</p>
                </div>
                <div class="mt-4 fixed-sized-table" v-if="isActiveTab('howto')" key="showto">
                    <h2 class="text-muted">Result Legend</h2>
                    <hr>
                    <b-row class="text-muted">
                      <b-col>S</b-col>
                      <b-col>Output issue related to spacing</b-col>
                    </b-row>
                    <b-row class="text-muted">
                      <b-col class="text-success">P</b-col>
                      <b-col class="text-success">Passed! Good job!</b-col>
                    </b-row>
                    <b-row class="text-muted">
                      <b-col>C</b-col>
                      <b-col>Letter case issue</b-col>
                    </b-row>
                    <b-row class="text-muted">
                      <b-col>-</b-col>
                      <b-col><font-awesome-icon class="text-muted" icon="sad-cry"/> This is sad. If this occurs, this specific case fails</b-col>
                    </b-row>
                </div>
              </transition>
            </div>
            </div>
            <b-form-group align="center" class="mt-4">
            <b-button type="submit" variant="primary">Submit</b-button>
            </b-form-group>
          </b-tab>
        </b-tabs>

      </b-form>
    </div>
  </b-row>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML', defer: true }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/taskpad_window.css' },
      { rel: 'stylesheet', href: '/css/atom-one-dark.css' }
    ]
  },
  layout: 'nav/tasks',
  data() {
    return {
      txt: 'default',
      taskpad_code: '',
      tabIndex: 0,
      currentTaskPadTab: 'editor',
      currentTarget: null,
      currentResult: null,
      isGraderBusy: false,
      currWindow: {

      },
      fields: {
        id: {
          label: '#',
          sortable: true
        },
        results: {
          label: 'Results',
          sortable: false
        },
        compiler_messages: {
          label: 'Traceback errors',
          sortable: false
        },
        actions: {
          label: 'Copy answer to Taskpad'
        }
      }
      // tasks: [{
      //   index: 0, // ??
      //   task_id: 11,
      //   result: '',
      //   submissions: [
      //   { result:'' }
      //  ]
      // }]
    }
  },
  computed: {
    currentTask() {
      return this.tasks[this.tabIndex]
    },
    showTable() {
      if (this.tasks[this.tabIndex]) {
        return this.tasks[this.tabIndex].submissions.length > 0
      } else {
        return false
      }
    },
    isCurrentSuccess() {
      if (this.currentResult) {
        if (this.currentResult.match(/^[P]+$/g)) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  },
  methods: {
    isActiveTab(tab) {
      return tab === this.currentTaskPadTab
    },
    submitAnswer() {
      this.isGraderBusy = true
      this.currentResult = '?'
      const currTask = this.tasks[this.tabIndex]
      const data = {
        src_code: this.taskpad_code,
        task_id: currTask.id
      }
      this.$store.dispatch('submitAnswer', data)
        .then((response) => {
          this.currentResult = response.data.map(x => x.result).join('')
          this.isGraderBusy = false
        })
    },
    selectTask(index, target) {
      if (this.currentTarget) {
        this.currentTarget.classList.remove('active')
      }
      this.tabIndex = index
      target.classList.add('active')
      this.currentTarget = target
    },
    getBadgeForDiffLevel(level) {
      if (level === 1) {
        return 'Easy'
      } else if (level === 2) {
        return 'Medium'
      } else if (level === 3) {
        return 'Challenging'
      }
    },
    getBadgeColorForDiffLevel(level) {
      if (level === 1) {
        return 'success'
      } else if (level === 2) {
        return 'warning'
      } else if (level === 3) {
        return 'danger'
      }
    },
    pasteToTaskpad(prevAns) {
      this.taskpad_code = prevAns
      this.currentTaskPadTab = 'editor'
    }
  },
  watch: {
    currentResult(val) {
      this.currentTask.result = this.currentResult
      // $hljs.highlightBlock(document.getElementById("output"))
    },
    tabIndex(val) {
      this.currentResult = this.currentTask.result
    }
  },
  async fetch({ store, params, layout, $axios }) {
    const { data } = await $axios.post(`/tasks/getCategory`, {
      route: params.category
    })
    store.commit('setCategoryGrader', data.category.name)
    store.commit('setCategoryTask', null)
    return { tasks: data.tasks }
  },
  async asyncData({ store, redirect, params, $axios }) {
    const { data } = await $axios.post(`/tasks/getCategory`, {
      route: params.category
    })
    if (data.tasks.length === 0) {
      redirect('/problems')
    }
    return { tasks: data.tasks }
  },
  mounted() {
    this.currentTarget = this.$refs.taskListView.children[0]
    this.selectTask(this.tabIndex, this.currentTarget)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
  textarea {
    text-align: left !important;
    word-spacing: 0px !important;
    overflow-wrap: normal !important;
  }
  code {
    font-size: 17px;
    font-family: 'Source Code Pro', monospace;
    width: 100%;
  }
  tbody {
    border: 0;
  }
  .fixed-sized-table {
    width: 500px;
  }
  .hidden_border {
    border: 0;
  }
  .hidden_header {
    border: none;
    display: none;
  }
 .table > tbody > tr:first-child > td {
    border: none;
    color: rgb(82, 82, 82);
    background: none;
  }
  .list-group-item.active {
    background-color: #ECA72C;
    border-color: #ECA72C;
  }
  .output {
    border: 1px solid gainsboro;
    border-radius: 7px;
    padding: 1.5em;
    overflow-wrap: break-word !important;
    word-break: break-word;
    white-space: pre;
  }
  .fix-line-height {
    line-height: 1.01em;
  }
  .window-shadow {
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: 0;
  }
  .nav-tabs {
    border: 0
  }
  .input-area {
    position: relative;
    outline: none;
    padding: 0;
  }
  .source-textarea {
    font-size: 17px;
    font-family: 'Source Code Pro', monospace;
    color: gray;
    -webkit-text-fill-color: transparent;
    position: absolute;
    display: inline-block;
    padding: 16px 16px 16px 16px;
    width: 100%;
    z-index: 16;
    margin: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    min-height: 60px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .preview {
    display: inline-block;
    padding: 16px 16px 16px 16px;
    padding-right: 20px;
    bottom: 0;
    top: 0;
    width: 100%;
    min-height: 60px;
    z-index: 100 !important;
    text-align: left !important;
    word-spacing: 0px !important;
    overflow-wrap: normal !important;
  }
  .preview, .textarea, cursor {
    font-size: 17px;
    font-weight: 200;
    font-family: 'Source Code Pro', monospace;
    word-spacing: 0px !important;
  }
  .tabs .nav .nav-item {
    display: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .22s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .card-link {
    color: #ECA72C;
    text-decoration: none !important;
    -webkit-transition-duration: 0.39s;
    -moz-transition-duration: 0.27s;
    -o-transition-duration: 0.27s;
    transition-duration: 0.27s;
  }
  .card-link:hover {
    color: rgb(184, 130, 37);
    text-decoration: none !important;
  }
</style>
