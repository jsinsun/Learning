<template>
  <div class="start">
    <el-row>
      <el-form :inline="true" class="search">
        <el-col :span="6">
          <el-form-item style="" label="流程分类:">
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
        <el-col :span="6">
          <el-form-item style="" label="流程名称:">
            <el-input v-model="title" placeholder="流程名称"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
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
      <el-button-group>
        <el-button
          :type="tab == 1 ? 'primary' : ''"
          size="small"
          @click="handleClick(1)"
          >通用流程</el-button
        >
        <el-button
          :type="tab == 2 ? 'primary' : ''"
          size="small"
          @click="handleClick(2)"
          >定制流程</el-button
        >
      </el-button-group>
      <div v-if="tab == 1">
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

          <el-table-column label="租户编号" prop="no"> </el-table-column>
          <el-table-column label="流程分类">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column label="流程标识" prop="key"> </el-table-column>
          <el-table-column label="流程名称" prop="name"> </el-table-column>

          <el-table-column label="流程版本">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.version }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="date" label="部署时间"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click.native="handleCreate(scope.row)"
                >发起</el-button
              >
              <el-button type="text" size="small">流程图</el-button>
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
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="total,sizes,prev, pager, next, jumper"
            :total="1"
          >
          </el-pagination>
        </div>
      </div>
      <div v-if="tab == 2">
        <el-table
          ref="multipleTable"
          border
          :data="tableData2"
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

          <el-table-column label="租户编号" prop="no"> </el-table-column>
          <el-table-column label="流程分类">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column label="流程标识" prop="key"> </el-table-column>
          <el-table-column label="流程名称" prop="name"> </el-table-column>

          <el-table-column label="流程版本">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.version }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-tag size="medium">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="date" label="部署时间"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template>
              <el-button type="text" size="small">发起</el-button>
              <el-button type="text" size="small">流程图</el-button>
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
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="total,sizes,prev, pager, next, jumper"
            :total="100"
          >
          </el-pagination>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'start',
  data() {
    return {
      title: "",
      activeName: "second",
      tab: 1,
      tableData: [
        {
          no: "11111",
          type: "请假流程",
          key: "Leave",
          name: "请假流程",
          version: "18",
          status: "激活",
          date: "2019-06-27 23:14:02",
        },
      ],
      tableData2: [
        {
          no: "22222",
          type: "请假流程",
          key: "Leave",
          name: "请假流程",
          version: "18",
          status: "激活",
          date: "2019-06-27 23:14:02",
        },
        {
          no: "33333",
          type: "请假流程",
          key: "Leave",
          name: "请假流程",
          version: "18",
          status: "激活",
          date: "2019-06-27 23:14:02",
        },
        {
          no: "44444",
          type: "请假流程",
          key: "Leave",
          name: "请假流程",
          version: "18",
          status: "激活",
          date: "2019-06-27 23:14:02",
        },
      ],
      currentPage: 1,
      pageSizes: [10, 20, 30, 50, 100],
      total: 1,
      pageSize: 10,
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
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.tab = tab;

      const label = "双皮奶王";
      this.$set((this.options[1].label = label));
    },
    handleCreate(row) {
      //https://www.jianshu.com/p/d276dcde6656
      this.$router.push({
        //name: "process",
        //params: { Leave: "18:32a17123-98ee-11e9-84b3-1adc1de1bcbc" },
        path: "/work/process/leave/form/18:32a17123-98ee-11e9-84b3-1adc1de1bcbc",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.start {
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;

  .search /deep/ .el-input__inner {
    height: 32px;
    line-height: 32px;
  }
}
</style>
