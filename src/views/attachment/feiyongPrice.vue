<template>
  <div class="order">
    <!--    <el-card class="box-card">-->
    <!--    </el-card>-->
    <el-card class="box-card">
      <h3>物流费用报价</h3>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column prop="create_time" label="编号"></el-table-column>
        <el-table-column prop="pending_time" label="标题"></el-table-column>
        <el-table-column prop="shop_name" label="发布时间"></el-table-column>
        <el-table-column prop="order_text" label="更新时间"></el-table-column>
        <el-table-column prop="order_Num" label="文件">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small" @click="look(scope.row)">查看文件</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="order_Num" label="是否启用">
          <template slot-scope="scope">
            <el-switch
              v-model="isFlat">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="Waybill_Num" label="操作">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      title="添加公告"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段添加公告的信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isFlat:true,
        dialogVisible:false,
        // 下面行内表单绑定的对象
        formInline: {
          create_date:"",
          end_date:"",
          type:"",
          emailID:"",
          rid:""
        },
        tableForm:[
          {
            create_time:'2020/08/16',
            pending_time:'2020/08/16',
            shop_name:'云仓一号',
            order_text:'XXXX',
            order_Num:'001',
            Waybill_Num:'20200816001',
            email_Num:'20200816000001',
            sheet:'面单',
            money:'$24',
            state:'已完成',
            intimidate:'是'
          },
          {
            create_time:'2020/08/16',
            pending_time:'2020/08/16',
            shop_name:'云仓一号',
            order_text:'XXXX',
            order_Num:'001',
            Waybill_Num:'20200816001',
            email_Num:'20200816000001',
            sheet:'面单',
            money:'$24',
            state:'已完成',
            intimidate:'是'
          },
          {
            create_time:'2020/08/16',
            pending_time:'2020/08/16',
            shop_name:'云仓一号',
            order_text:'XXXX',
            order_Num:'001',
            Waybill_Num:'20200816001',
            email_Num:'20200816000001',
            sheet:'面单',
            money:'$24',
            state:'已完成',
            intimidate:'是'
          },
          {
            create_time:'2020/08/16',
            pending_time:'2020/08/16',
            shop_name:'云仓一号',
            order_text:'XXXX',
            order_Num:'001',
            Waybill_Num:'20200816001',
            email_Num:'20200816000001',
            sheet:'面单',
            money:'$24',
            state:'已完成',
            intimidate:'是'
          },
        ]
      }
    },
    methods:{
      handleEdit(e){},
      handleDelete(e){
        this.$confirm('确认删除？')
          .then(_ => {
            // done();
          })
          .catch(_ => {});
      },
      look(){}
    },

  };
</script>

<style lang="scss">
  .order {
    margin: 10px 10px 0;

    .box-card {
      margin: 10px 30px;

    }
  }
  .el-table .cell,
  .el-table th>.cell{
    text-align: center;
  }
</style>
