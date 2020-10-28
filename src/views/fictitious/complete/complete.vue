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
              <el-button type="warning">搜索</el-button>
            </el-form-item>
            <el-form-item :inline="true" class="demo-form-inline">
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="warning">搜索</el-button>
            </el-form-item>
          </el-form>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column prop="create_time" label="虚拟仓订单创建时间"></el-table-column>
        <el-table-column prop="pending_time" label="处理时间"></el-table-column>
        <el-table-column prop="shop_name" label="平台和店铺"></el-table-column>
        <el-table-column prop="order_text" label="订单详情"></el-table-column>
        <el-table-column prop="order_Num" label="订单号"></el-table-column>
        <el-table-column prop="Waybill_Num" label="运单号"></el-table-column>
        <el-table-column prop="email_Num" label="国内物流单号"></el-table-column>
        <el-table-column prop="sheet" label="面单"></el-table-column>
        <el-table-column prop="money" label="收费"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="intimidate" label="是否代打单"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
 data() {
    return {
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