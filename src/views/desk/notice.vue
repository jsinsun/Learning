<template>
  <div class="notice">
    <el-row>
      <el-form class="search" label-width="100px" size="small">
        <el-col :span="6">
          <el-form-item style="" label="通知标题:">
            <el-input v-model="title" placeholder="通知标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item style="" label="通知类型:">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item style="" label="通知时间:">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item style="" label="">
            <el-button size="small" type="primary" icon="el-icon-search"
              >搜索</el-button
            >
            <el-button size="small" icon="el-icon-delete-solid">删除</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row>
      <el-button
        type="primary"
        size="small"
        @click="
          dialogVisible = true;
          forms.action = 'add';
        "
        icon="el-icon-circle-plus"
        >新增</el-button
      >
      <el-button type="danger" size="small" icon="el-icon-delete-solid"
        >删除</el-button
      >
      <el-table
        ref="multipleTable"
        border
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%; margin-top: 10px"
        height="625px"
      >
        <el-table-column label="#" align="center" type="index" width="45">
          <template slot-scope="scope">
            {{ (currentPage - 1) * pageSize + scope.$index + 1 }}
          </template>
        </el-table-column>

        <el-table-column type="selection"> </el-table-column>

        <el-table-column label="通知标题" prop="title"> </el-table-column>
        <el-table-column label="通知类型">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="通知日期"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleLook(scope.row)"
              >查看</el-button
            >
            <el-button type="text" size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
        class="block"
        style="margin-top: 15px; float: right; padding-right: 20px"
      >
        <el-pagination
          algin="right"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="1"
        >
        </el-pagination>
      </div>
    </el-row>
    <el-dialog
      :title="dialogTitle"
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      :destroy-on-close="true"
      @open="openDialog"
    >
      <noticeformVue v-bind:forms="forms"></noticeformVue>
      <div slot="footer" class="dialog-footer" v-if="forms.action != 'look'">
        <el-button
          type="primary"
          @click="dialogVisible = false"
          icon="el-icon-circle-plus-outline"
          >保 存</el-button
        >
        <el-button
          type=""
          @click="dialogVisible = false"
          icon="el-icon-circle-close"
          >取 消</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import noticeformVue from "../../components/noticeform.vue";
export default {
  components: {
    noticeformVue,
  },
  data() {
    return {
      title: "",
      tableData: [
        {
          title: "这是一个标题",
          type: "转批通知",
          date: "2021-11-01 12:00:00",
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 1,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value1: "",
      dialogVisible: false,
      dialogTitle: "新增",
      forms: {
        action: "add",
        id: "",
        title: "",
        date: "",
        region: "",
        content: "",
      },
    };
  },
  methods: {
    handleLook(row) {
      // console.log(row)
      this.forms.action = "look";
      this.dialogVisible = true;
      this.forms.title = row.title;
      this.forms.region = row.type;
      this.forms.date = row.date;
    },
    handleEdit(row) {
      this.forms.action = "edit";
      this.dialogVisible = true;
      this.forms.title = row.title;
      this.forms.region = row.type;
      this.forms.date = row.date;
    },
    openDialog() {
      this.$nextTick(() => {
        console.log(1);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.notice {
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  .el-form {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .timePick {
      .el-form-item__content {
        .el-input__inner {
          width: 100%;
        }
      }
    }
    .el-select {
      display: block;
    }
  }
}
</style>
