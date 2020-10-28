<template>
  <div class="returning">
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="当前退件仓库存" name="first">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card box-card1">
              <el-table border style="width: 100%;" :data="tableForm">
                <el-table-column  prop="end_time"  label="退件到仓时间"></el-table-column>
                <el-table-column  prop="shop_name"  label="平台和店铺"></el-table-column>
                <el-table-column  prop="order_text"  label="订单详情"></el-table-column>
                <el-table-column  prop="Waybill_Num"  label="原运单号"></el-table-column>
                <el-table-column  prop="money"  label="收费"></el-table-column>
                <el-table-column  label="存储位置"></el-table-column>
                <el-table-column  label="操作"></el-table-column>
              </el-table>
            </el-card>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="待仓库处理订单" name="second">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                    <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary">搜索</el-button>
                    </el-form-item>
                    <!-- 下面卡片 -->
                    <el-card class="box-card box-card1">
                    <el-table border style="width: 100%;" :data="tableForm">
                        <el-table-column  prop="shop_name"  label="平台和店铺"></el-table-column>
                        <el-table-column  prop="order_text"  label="订单详情"></el-table-column>
                        <el-table-column  prop="Waybill_Num"  label="原运单号"></el-table-column>
                        <el-table-column  prop="New_Num"  label="新运单号"></el-table-column>
                        <el-table-column  prop="money"  label="收费"></el-table-column>
                        <el-table-column   label="存储位置"></el-table-column>
                        <el-table-column   label="状态"></el-table-column>
                        <el-table-column   label="操作"></el-table-column>
                    </el-table>
                    </el-card>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="已发货" name="third">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button type="primary">搜索</el-button>
                </el-form-item>
                <!-- 下面卡片 -->
                <el-card class="box-card  box-card1">
                <el-table border style="width: 100%;" :data="tableForm">
                    <el-table-column prop="end_time"  label="退件到仓时间"></el-table-column>
                    <el-table-column prop="shop_name"  label="平台和店铺"></el-table-column>
                    <el-table-column prop="order_text"  label="订单详情"></el-table-column>
                    <el-table-column prop="Waybill_Num" label="原运单号"></el-table-column>
                    <el-table-column prop="New_Num"  label="新运单号"></el-table-column>
                    <el-table-column prop="money"  label="收费"></el-table-column>
                    <el-table-column prop="send_time"  label="发货时间"></el-table-column>
                </el-table>
                </el-card>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="已销毁" name="fourth">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                    <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary">搜索</el-button>
                    </el-form-item>
                    <!-- 下面卡片 -->
                    <el-card class="box-card box-card1">
                    <el-table border style="width: 100%;" :data="tableForm">
                        <el-table-column  prop="end_time"  label="退件到仓时间"></el-table-column>
                        <el-table-column  prop="shop_name"  label="平台和店铺"></el-table-column>
                        <el-table-column  prop="order_text"  label="订单详情"></el-table-column>
                        <el-table-column  prop="Waybill_Num"  label="原运单号"></el-table-column>
                        <el-table-column  prop="money"  label="收费"></el-table-column>
                        <el-table-column  prop="ending_time"  label="销毁时间"></el-table-column>
                    </el-table>
                    </el-card>
            </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      // 上面行内表单绑定的对象
      formInline: {
        rid:"",
      },
      tableForm:[
        {
          end_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
        },
        {
          end_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
        },
        {
          end_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
        },
        {
          end_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
        },
        {
          end_time:'2020/08/16',
          shop_name:'云仓一号',
          order_text:'XXXX',
          Waybill_Num:'20200816001',
          New_Num:'20200817005',
          money:'20',
          ending_time:'2020/08/17',
          send_time:'2020/08/16',
        },
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab)
        console.log(event)
      // console.log(tab, event);
    },
  },
};
</script>

<style lang="scss">
.returning {
  margin: 10px 10px 0;

  .box-card {
    margin: 30px;
    .box-card1{
        margin: 0;
    }
  }
}
.el-table .cell,
.el-table th>.cell{
    text-align: center;
}
</style>
