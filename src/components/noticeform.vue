<template>
  <div class="noticeForm">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="流程标题：" prop="title">
          <el-input v-model="ruleForm.title" v-if="action!='look'"></el-input>
           <div v-else>{{ruleForm.title}}</div>
      </el-form-item>
      <el-row style="width:100%;">
        <el-col :span="12">
    <el-form-item label="通知类型：" prop="region">
      <el-select v-model="ruleForm.region" placeholder="选择流程类型" v-if="action!='look'" style="width:100%">
      <el-option label="请假流程" value="shanghai"></el-option>
      <el-option label="报销流程" value="beijing"></el-option>
    </el-select>
    <div v-else>{{ruleForm.region}}</div>
   </el-form-item>
        </el-col>
        <el-col :span="12">
         <el-form-item prop="date" label="通知日期：">
        <!-- <el-date-picker type="date" placeholder="选择日期" v-if="action!='look'" v-model="ruleForm.date" style="width: 100%;"></el-date-picker> -->
         <div> <i class="el-icon-date"></i> {{ruleForm.date}}</div>
       </el-form-item>
        </el-col>
      </el-row>
       <el-form-item label="通知内容：">
          <quill-editor ref="text" v-model="content" class="myQuillEditor"  :options="editorOption"/>
       </el-form-item>
     </el-form>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    quillEditor
  },
  props: ['forms'],
  data () {
    return {
      action: 'add',
      content: '111111',
      editorOption: {},
      ruleForm: {
        title: '',
        region: '',
        date: ''
      },
      rules: {
        title: [{ required: true, message: '通知标题', trigger: 'blur' }],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    // 'forms' (newData, prevData) {
    //   console.log(newData)
    //   // var _this = this
    //   // var props = { ..._this._props }
    //   // this.action = props.forms.action
    //   // this.ruleForm.title = props.forms.title
    //   // this.ruleForm.region = props.forms.region
    //   // this.ruleForm.date = props.forms.date
    // },
    forms: {
      handler (newValue, oldValue) {
        console.log(newValue)
        var _this = this
        _this.action = newValue.action
        if (newValue.action !== 'add') {
          _this.ruleForm.title = newValue.title
          _this.ruleForm.region = newValue.region
          if (newValue.action === 'look') {
            _this.ruleForm.date = newValue.date
          } else {
            _this.ruleForm.date = ''
          }
        } else {
          _this.ruleForm.title = ''
          _this.ruleForm.region = ''
          _this.ruleForm.date = ''
        }
        // _this.ruleForm.date = newValue.date
      },
      deep: true
    }
  },
  mounted () {
    var _this = this
    var props = { ..._this._props }
    console.log(props.forms)
    this.action = props.forms.action
    this.ruleForm.title = props.forms.title
    this.ruleForm.region = props.forms.region
    this.ruleForm.date = props.forms.date
  }
}
</script>
<style lang="less" scoped>
  .noticeForm{
    // padding: 20px;
    width: 100%;

    /deep/ .ql-editor{
      height: 300px;
    }
  }
</style>
