<template>
  <div class="pengding">
    <el-card class="box-card">
          <el-form  :inline="true" class="demo-form-inline clearfix"  :model="formInline">
            <el-form-item label="用户编号">
              <el-input placeholder="" v-model="formInline.emailID"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input placeholder="" v-model="formInline.rid"></el-input>
            </el-form-item>
            <div class="fr">
              <el-form-item>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
              <el-form-item>
                <el-button>重置</el-button>
              </el-form-item>
            </div>
          </el-form>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column  prop="create_time" label="用户编号"></el-table-column>
        <el-table-column  prop="order_text" label="用户名"></el-table-column>
        <el-table-column  prop="email_Num" label="充值订单编号"></el-table-column>
        <el-table-column  prop="order_Num" label="重置金额"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="充值时间"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="充值"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="一级分佣"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="二级分佣"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small">驳回</el-button>

            <el-button size="small" type="primary">返现</el-button>
          </template>
        </el-table-column>
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
        emailID:"",
        rid:""
      },
      //下面表格
      tableForm:[]
    }
  },
};
</script>

<style lang="scss">
.pengding {
  margin: 10px 10px 0;
  .box-card {
    margin: 30px;
    padding: 8px;
  }
}
.el-table .cell,
.el-table th>.cell{
    text-align: center;
}
</style>
