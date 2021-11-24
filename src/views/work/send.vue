<template>
  <div class="send">
   <el-row>
        <el-form :inline="true" class="search">
        <el-col :span="6">
               <el-form-item style="" label="流程分类:">
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
               <el-form-item style="" label="流程名称:">
        <el-input v-model="title" placeholder="流程名称"></el-input>
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
  <!-- <el-button>新增</el-button>
  <el-button>删除</el-button> -->
<el-table
    ref="multipleTable"
     border
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%;margin-top:50px"
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
      label="流程名称"
       prop="name"
      >
    </el-table-column>
    <el-table-column
      label="当前步骤"
      prop="step"
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
      label="流程进度"
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.plan }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="date"
      label="申请时间"
      >
    </el-table-column>
 <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template>
        <el-button  type="text" size="small">处理</el-button>
        <el-button type="text" size="small">详情</el-button>
         <el-button type="text" size="small">跟踪</el-button>
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
   </el-row>
  </div>
</template>
<script>

export default {
  data () {
    return {
      title: '',
      tableData: [{
        name: '流程测试',
        step: '步骤一',
        version: '1.0',
        plan: '未完成',
        date: '2021-11-01 12:00:00'

      }],
      currentPage: 1,
      pageSizes: [10, 20, 30, 50, 100],
      total: 1,
      pageSize: 10,
      options: [{
        value: '选项1',
        label: '黄金糕'
      },
      {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}

</script>

<style lang="less" scoped>
  .send {
   padding: 1rem;
   background-color: #fff;
   border-radius: 2px;

     .search /deep/  .el-input__inner {
    height: 32px;
    line-height: 32px;

  }
 }
</style>
