<template>
  <div class="manager">
    <el-row>
      <!-- <el-col :span="6">
        流程分类:<el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
      </el-col> -->
          <el-form :inline="true" class="search">
        <el-col :span="6">
               <el-form-item style="" label="模型标识:">
          <el-input v-model="title" placeholder="模型标识"></el-input>
                        </el-form-item>
        </el-col>
         <el-col :span="6">
               <el-form-item style="" label="模型流程:">
            <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                    </el-form-item>
        </el-col>

         <el-col :span="6">
               <el-form-item style="" label="">
                      <el-button  size="small" type="primary" icon="el-icon-search">搜索</el-button>
                      <el-button  size="small" icon="el-icon-delete-solid">删除</el-button>
               </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row>
<el-button-group>
  <el-button :type="tab==1?'primary':''" size="small" @click="handleClick(1)">通用流程</el-button>
  <el-button :type="tab==2?'primary':''" size="small" @click="handleClick(2)">定制流程</el-button>
</el-button-group>
 <div v-if="tab==1">
<el-table
    ref="multipleTable"
     border
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%;margin-top:10px;"
    height="625px"
    >
     <el-table-column
      label="#"
      align="center"
      type="index"
      width="45"
     >
      <template slot-scope="scope">
       {{(currentPage-1)*pageSize+scope.$index+1}}
      </template>
    </el-table-column>

    <el-table-column
      type="selection"
      >
    </el-table-column>

    <el-table-column
      label="租户编号"
       prop="no"
      >
    </el-table-column>
    <el-table-column
      label="流程分类"
     >
      <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.type }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      label="流程标识"
       prop="key"
      >
    </el-table-column>
    <el-table-column
      label="流程名称"
       prop="name"
      >
    </el-table-column>

   <el-table-column
      label="流程版本"
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.version }}</el-tag>
      </template>
    </el-table-column>

       <el-table-column
      label="状态"
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="date"
      label="部署时间"
      >
    </el-table-column>
 <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button  type="text" size="small" @click.native="handleChange(scope.row)">状态变更</el-button>
        <el-button type="text" size="small">流程图</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="margin-top:15px; float:right; padding-right:20px;">
  <el-pagination
       algin='right'
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total,sizes,prev, pager, next, jumper"
      :total="1">
  </el-pagination>
</div>
 </div>
 <div v-if="tab==2">
<el-table
    ref="multipleTable"
     border
    :data="tableData2"
    tooltip-effect="dark"
    style="width: 100%;margin-top:10px;"
    height="625px"
    >
      <el-table-column
      label="#"
      align="center"
      type="index"
      width="45"
     >
      <template slot-scope="scope">
       {{(currentPage-1)*pageSize+scope.$index+1}}
      </template>
    </el-table-column>

    <el-table-column
      type="selection"
      >
    </el-table-column>

    <el-table-column
      label="租户编号"
       prop="no"
      >
    </el-table-column>
    <el-table-column
      label="流程分类"
     >
      <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.type }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      label="流程标识"
       prop="key"
      >
    </el-table-column>
    <el-table-column
      label="流程名称"
       prop="name"
      >
    </el-table-column>

   <el-table-column
      label="流程版本"
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.version }}</el-tag>
      </template>
    </el-table-column>

       <el-table-column
      label="状态"
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="date"
      label="部署时间"
      >
    </el-table-column>
 <el-table-column
      fixed="right"
      label="操作">
      <template>
        <el-button  type="text" size="small">状态变更</el-button>
        <el-button type="text" size="small">流程图</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="margin-top:15px; float:right; padding-right:20px;">
  <el-pagination
      algin='right'
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total,sizes,prev, pager, next, jumper"
      :total="100">
  </el-pagination>
</div>
 </div>
    </el-row>
      <el-dialog  title="流程变更"  width="25%" :visible.sync="dialogVisible">
      <el-row>
        <el-col :span="6" style="line-height:40px; text-align:center;">流程状态</el-col>
        <el-col :span="12">
         <el-select v-model="value1" placeholder="请选择">
            <el-option label="激活" value="激活"></el-option>
           <el-option label="挂起" value="挂起"></el-option>
         </el-select>
        </el-col>
      </el-row>
    <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false" icon="el-icon-circle-plus-outline">保 存</el-button>
    <el-button type="" @click="dialogVisible = false" icon="el-icon-circle-close">取 消</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      activeName: 'second',
      tab: 1,
      tableData: [{
        no: '11111',
        type: '请假流程',
        key: 'Leave',
        name: '请假流程',
        version: '18',
        status: '激活',
        date: '2019-06-27 23:14:02'
      }],
      tableData2: [{
        no: '22222',
        type: '请假流程',
        key: 'Leave',
        name: '请假流程',
        version: '18',
        status: '激活',
        date: '2019-06-27 23:14:02'
      },
      {
        no: '33333',
        type: '请假流程',
        key: 'Leave',
        name: '请假流程',
        version: '18',
        status: '激活',
        date: '2019-06-27 23:14:02'
      },
      {
        no: '44444',
        type: '请假流程',
        key: 'Leave',
        name: '请假流程',
        version: '18',
        status: '激活',
        date: '2019-06-27 23:14:02'
      }],
      currentPage: 1,
      pageSizes: [10, 20, 30, 50, 100],
      total: 1,
      pageSize: 10,
      options: [{
        value: '请假流程',
        label: '请假流程'
      },
      {
        value: '报销流程',
        label: '报销流程'
      }],
      value: '',
      dialogVisible: false,
      value1: ''

    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
      this.tab = tab
    },
    handleChange (row) {
      this.dialogVisible = true
      this.value1 = row.status
    }
  }
}
</script>

<style lang="less" scoped>
.manager {
   padding: 1rem;
   background-color: #fff;
   border-radius: 2px;

     .search /deep/  .el-input__inner {
    height: 32px;
    line-height: 32px;

  }
}
</style>
