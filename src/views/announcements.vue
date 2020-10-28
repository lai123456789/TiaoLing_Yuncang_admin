<template>
  <div class="order">
    <el-card class="box-card">
        <el-form :inline="true" class="demo-form-inline" :model="formInline">
            <el-form-item label="开始日期" >
                <el-date-picker v-model="formInline.create_date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束日期" prop="create_date">
                <el-date-picker v-model="formInline.end_date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select placeholder="请选择" v-model="formInline.type">
                    <el-option label="不限" value="1"></el-option>
                    <el-option label="中国" value="2"></el-option>
                    <el-option label="泰国" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
            <el-form-item :inline="true" class="demo-form-inline">
              <el-input placeholder="请输入国内物流单号" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <el-form-item :inline="true" class="demo-form-inline">
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-button type="primary"  @click="dialogVisible = true"  style="margin-bottom: 20px">添加公告</el-button>
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column prop="create_time" label="公告标题"></el-table-column>
        <el-table-column prop="pending_time" label="公告内容"></el-table-column>
        <el-table-column prop="shop_name" label="添加时间"></el-table-column>
        <el-table-column prop="order_text" label="是否启用"></el-table-column>
        <el-table-column prop="order_Num" label="是否推送"></el-table-column>
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
    add(){

    }
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
