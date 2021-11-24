<template>
  <div class="deploy">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">

  <el-form-item label="流程类型：" prop="region">
    <el-select v-model="ruleForm.region" placeholder="选择流程类型" style="width:40%">
      <el-option label="请假流程" value="shanghai"></el-option>
      <el-option label="报销流程" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="流程模式：" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="通用流程"></el-radio>
      <el-radio label="定制流程"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="所属租户：" prop="region" v-if="ruleForm.resource=='定制流程'">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:40%">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="上传附件：">
  <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">请上传 bpmn20.xml 标准格式文件</div>
  </el-upload>
  </el-form-item>
   </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '通用流程',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.deploy {
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;

  .demo-ruleForm {
    margin: 15px;
  }
}
</style>
