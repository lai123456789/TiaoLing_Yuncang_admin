<template>
  <div class="app-container">
    <div class="top">
      <el-row >
        <el-col :span="3">
          <div class="grid-content  topButton">
            <el-button type="primary">添加shopee授权</el-button>
          </div>
          <div class="grid-content  topButton">
            <el-button type="primary">添加Lazada授权</el-button>
          </div>
          <div class="grid-content  topButton">
            <el-button type="danger" class="jiebang"> 解绑店铺 </el-button>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="grid-content topTable">
            <table>
              <tr>
                <td>shopee店铺</td>
                <td></td>
              </tr>
              <tr>
                <td>Lazada店铺</td>
                <td></td>
              </tr>
            </table>
          </div>
        </el-col>
      </el-row>

    </div>
    <div class="center">
      <el-card class="box-card">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
            <el-input
              placeholder="请输入订单号"
              v-model="formInline.rid"
              style="width:200px;"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">订单号搜索</el-button>
          </el-form-item>
          <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
            <el-input
              placeholder="请输入运单号"
              v-model="formInline.rid"
              style="width:200px;"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">运单号搜索</el-button>
          </el-form-item>
          <el-form-item :inline="true" :model="formInline" class="demo-form-inline">
            <el-input
              placeholder="请输入店铺名"
              v-model="formInline.rid"
              style="width:200px;"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">店铺名搜索</el-button>
          </el-form-item>
        </el-form>
        <el-tabs v-model="activeName">
          <el-tab-pane label="当前退件仓库存" name="first">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="scss">
  .topButton{
    button:nth-child(1){
      margin-bottom: 10px;
    }
    .jiebang{
      width: 144px;
    }
  }
  .topTable {
    table {
      width: 100%;
      border-collapse:collapse;
      tr{
        td:nth-child(1){
          width: 20%;
        }
        td{
          height: 44px;
          text-align: center;
          border: 1px solid #999999;
        }
      }
    }

  }
  .el-tabs{
    .el-tabs__header{
      .el-tabs__nav-wrap{
        .is-active{
          /*color:#E6A23C !important;*/
        }
        .el-tabs__active-bar{
          /*background-color:#E6A23C !important;*/
        }
      }
    }
  }

</style>

