<template>
  <div class="pengding">
    <el-card class="box-card">
          <el-form  :inline="true" class="demo-form-inline clearfix"  :model="formInline">
            <el-form-item label="用户名">
              <el-input placeholder="" v-model="formInline.emailID"></el-input>
            </el-form-item>
            <el-form-item label="国内物流单号">
              <el-input placeholder="" v-model="formInline.rid"></el-input>
            </el-form-item>
            <el-form-item label="店铺名称">
              <el-input placeholder="" v-model="formInline.rid"></el-input>
            </el-form-item>
            <el-form-item label="平台运单号">
              <el-input placeholder="" v-model="formInline.rid"></el-input>
            </el-form-item>
            <el-form-item label="平台订单号">
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
        <el-table-column  prop="create_time" label="用户名"></el-table-column>
        <el-table-column  prop="order_text" label="平台"></el-table-column>
        <el-table-column  prop="email_Num" label="店铺名"></el-table-column>
        <el-table-column  prop="order_Num" label="订单信息"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="订单号"></el-table-column>
        <el-table-column  prop="ifsheet" label="运单号"></el-table-column>
        <el-table-column  prop="sheet" label="面单"></el-table-column>
        <el-table-column  prop="ifsheet" label="退件上仓上架时间"></el-table-column>
        <el-table-column  prop="remarks" label="收货"></el-table-column>
        <el-table-column  prop="remarks" label="状态"></el-table-column>

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
