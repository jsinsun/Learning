<template>
  <div class="audit">
    <el-row>
      <el-col
        :span="24"
        style="padding-bottom: 15px; display: flex; justify-content: flex-end"
      >
        <el-button type="primary" icon="el-icon-check">同意</el-button>
        <el-button type="danger" icon="el-icon-delete">驳回</el-button>
        <el-button type="" icon="el-icon-close">关闭</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>审批信息</span>
      </div>
      <el-row>
        <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="审批人员：">
            <el-input v-model="ruleForm.user" disabled> </el-input>
          </el-form-item>
          <el-row style="width: 100%">
            <el-col :span="12">
              <el-form-item label="开始时间：">
                <el-input v-model="ruleForm.start" disabled> </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="结束时间：">
                <el-input v-model="ruleForm.end" disabled> </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="请假理由：">
            <el-input
              type="textarea"
              :rows="3"
              v-model="ruleForm.desc"
              disabled
            >
            </el-input>
          </el-form-item>
          <el-form-item label="复批意见">
            <el-input type="textarea" :rows="3" v-model="ruleForm.opinion">
            </el-input>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>流程信息</span>
      </div>
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2021-11-19 09:28:12" placement="top">
            <el-card style="width: 30%">
              <!-- <h4>更新 Github 模板</h4> -->
              <p>管理员 在 [2021-11-19 09:28:12] 开始处理 [人事审批] 环节</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2021-11-19 09:28:12" placement="top">
            <el-card style="width: 30%">
              <!-- <h4>更新 Github 模板</h4> -->
              <p>
                管理员 在 [2021-11-19 09:28:12] 开始处理 [开始] 环节 结束时间:
                [2021-11-19 09:28:12]
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2021-11-19 09:28:12" placement="top">
            <el-card style="width: 30%">
              <!-- <h4>更新 Github 模板</h4> -->
              <p>
                管理员 在 [2021-11-19 09:28:12] 开始处理 [开始] 环节 结束时间:
                [2021-11-19 09:28:12]
              </p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        user: "jsin",
        start: "2021-11-25 00:00:00",
        end: "2021-11-30 00:00:00",
        desc: "热污染v",
        opinion: "",
      },
    };
  },
};
</script>
<style lang="less" scoped>
.audit {
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  height: 780px;
  overflow: hidden auto !important;
}
</style>
