<template>
  <div class="order">
    <el-card class="box-card">
      <h3>使用教程</h3>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;height: 600px" :data="tableForm">
        <el-table-column prop="create_time" label="编号"></el-table-column>
        <el-table-column prop="pending_time" label="标题"></el-table-column>
        <el-table-column prop="shop_name" label="教程类型"></el-table-column>
        <el-table-column prop="order_text" label="发布时间"></el-table-column>
        <el-table-column prop="order_Num" label="更新时间"></el-table-column>
        <el-table-column prop="Waybill_Num" label="文件">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small" @click="look(scope.row)">查看文件</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    <el-dialog
      title="文件详情"
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
      // 上面行内表单绑定的对象
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
    look(e){
      this.dialogVisible = true
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
