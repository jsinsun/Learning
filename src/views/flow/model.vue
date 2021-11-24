<template>
  <div class="model">
   <el-row>
           <el-form :inline="true" class="search">
        <el-col :span="6">
               <el-form-item style="" label="模型标识:">
          <el-input v-model="title" placeholder="模型标识"></el-input>
                        </el-form-item>
        </el-col>
         <el-col :span="6">
               <el-form-item style="" label="模型流程:">
        <el-input v-model="title" placeholder="模型流程"></el-input>
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
  <el-button type="primary" size="small" icon="el-icon-circle-plus">新增</el-button>
  <el-button type="danger" size="small" icon="el-icon-delete-solid">删除</el-button>
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
      label="模型主键"
       prop="id"
      >
    </el-table-column>

   <el-table-column
      label="模型标识"
       prop="key"
       width='150'
      >
    </el-table-column>

    <el-table-column
      label="模型名称"
      prop="name"
      width='150'
     >
    </el-table-column>
   <el-table-column
      label="流程版本"
      width='80'
     >
     <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.version }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="create"
      label="创建时间"
      width='180'
      >
    </el-table-column>

   <el-table-column
      prop="update"
      label="更新时间"
      width='180'
      >
    </el-table-column>

 <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button  type="text" size="small">配置</el-button>
        <el-button type="text" size="small" @click.native="handleDeploy(scope.row)">部署</el-button>
        <el-button type="text" size="small">下载</el-button>
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
   </el-row>
        <el-dialog  title="流程部署"  width="25%" :visible.sync="dialogVisible">
      <el-row>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="流程类型：" prop="region">
    <el-select v-model="ruleForm.region" placeholder="选择流程类型" style="width:80%">
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

  <el-form-item label="所属租户：" prop="users"   v-if="ruleForm.resource=='定制流程'">
    <el-select v-model="ruleForm.users" multiple placeholder="请选择活动区域" style="width:80%">
      <el-option label="管理组" value="管理组"></el-option>
      <el-option label="用户组" value="用户组"></el-option>
      <el-option label="测试组" value="测试组"></el-option>
    </el-select>
   </el-form-item>
   </el-form>
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
      input: '',
      tableData: [
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        },
        {
          id: '0030dac5-4130-11ec-8d16-024247c4af27',
          key: 'a1233211',
          name: 'a1233211',
          version: '1',
          create: '2021-11-09 15:38:15',
          update: '2021-11-12 15:23:17'
        }
      ],
      currentPage: 1,
      pageSizes: [10, 20, 30, 50, 100],
      total: 1,
      pageSize: 10,
      dialogVisible: false,
      ruleForm: {
        region: '',
        resource: '通用流程',
        users: []
      },
      rules: {
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        users: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleDeploy (row) {
      this.dialogVisible = true
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
