<template>
  <div class="model">
   <el-row>
         <el-form :inline="true" class="search">
        <el-col :span="6">
               <el-form-item style="" label="执行id:">
          <el-input v-model="title" placeholder="执行id"></el-input>
                        </el-form-item>
        </el-col>
         <el-col :span="6">
               <el-form-item style="" label="流程key:">
        <el-input v-model="title" placeholder="流程key"></el-input>
                    </el-form-item>
        </el-col>

             <el-col :span="6">
               <el-form-item style="" label="实例id:">
        <el-input v-model="title" placeholder="实例id"></el-input>
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
    style="width: 100%; margin-top:50px"
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
      label="执行id"
       prop="id"
       width='320'
      >
    </el-table-column>

   <el-table-column
      label="流程key"
       prop="key"

      >
    </el-table-column>

    <el-table-column
      label="实例id"
      prop="name"
      width='320'
     >
    </el-table-column>
   <el-table-column
      label="状态"
      width='80'
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="user"
      label="发起人"
      >
    </el-table-column>

   <el-table-column
      prop="start"
      label="开始时间"
      width='180'
      >
    </el-table-column>

 <el-table-column
      fixed="right"
      label="操作"
      width="80">
      <template>
        <el-button type="text" size="small" icon="el-icon-delete">删除</el-button>
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
      tableData: [
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'Leave',
          name: '05a4f382-4502-11ec-b074-024247c4af27',
          status: '激活',
          user: '管理员',
          start: '2021-11-12 15:23:17'
        }
      ],
      currentPage: 1,
      pageSizes: [10, 20, 30, 50, 100],
      total: 1,
      pageSize: 10
    }
  }
}

</script>

<style lang="less" scoped>
  .model {
   padding: 1rem;
   background-color: #fff;
   border-radius: 2px;

     .search /deep/  .el-input__inner {
    height: 32px;
    line-height: 32px;

  }
}
</style>
