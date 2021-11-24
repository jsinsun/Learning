<template>
  <div class="process">
   <el-collapse v-model="activeNames">
     <el-collapse-item name="1">
    <template slot="title">
     <i class="header-icon el-icon-info"></i> 请假基础信息
    </template>
    <el-row>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="审批人员：" prop="user">
       <el-select v-model="ruleForm.user"  placeholder="请选择审批人员" style="width:100%">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
       </el-select>
      </el-form-item>
      <el-row style="width:100%;">
        <el-col :span="12">
    <el-form-item label="开始时间：" prop="start">
     <el-date-picker type="date" placeholder="选择日期"  v-model="ruleForm.start" style="width: 100%;"></el-date-picker>
   </el-form-item>
        </el-col>
        <el-col :span="12">
         <el-form-item prop="end" label="结束时间：">
        <el-date-picker type="date" placeholder="选择日期"  v-model="ruleForm.end" style="width: 100%;"></el-date-picker>
       </el-form-item>
        </el-col>
      </el-row>
       <el-form-item prop="desc"  label="请假理由：">
         <el-input type="textarea"  :rows="5" v-model="ruleForm.desc">

         </el-input>
       </el-form-item>
     </el-form>
    </el-row>
  </el-collapse-item>
   </el-collapse>
   <el-row>
     <el-col :span="6" :offset="9" style="padding:30px 0;">
      <el-button type="primary" icon="el-icon-check">提 交</el-button>
      <el-button type="" icon="el-icon-delete">清 空</el-button>
     </el-col>
   </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNames: '1',
      options: [{
        value: 'admin',
        label: 'admin'
      },
      {
        value: 'admin1',
        label: 'admin1'
      }, {
        value: 'admin2',
        label: 'admin2'
      }, {
        value: 'admin3',
        label: 'admin3'
      }, {
        value: 'admin4',
        label: 'admin4'
      }],
      ruleForm: {
        user: '',
        start: '',
        end: '',
        desc: ''
      },
      rules: {
        user: [
          { required: true, message: '请选审批人员', trigger: 'change' }
        ],
        start: [
          { type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }
        ],
        end: [
          { type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请输入请假理由', trigger: 'blur' }]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.process {
   padding: 1rem;
   background-color: #fff;
   border-radius: 2px;
    .el-collapse {
      border-top:none;
   }
   /deep/ .el-collapse-item__header{
    height: inherit;
    border: none;
    // border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
   }
}
</style>
