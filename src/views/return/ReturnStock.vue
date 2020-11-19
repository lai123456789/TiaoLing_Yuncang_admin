<template>
  <div class="pengding">
    <el-card class="box-card clearfix">
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
          <div class="fr"><el-button type="primary">创建退件上架</el-button></div>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column  prop="create_time" label="用户名"></el-table-column>
        <el-table-column  prop="order_text" label="平台"></el-table-column>
        <el-table-column  prop="email_Num" label="店铺名"></el-table-column>
        <el-table-column  prop="order_Num" label="订单信息"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="原订单号"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="原运单号"></el-table-column>
        <el-table-column  prop="sheet" label="面单"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="退件仓到仓时间"></el-table-column>
        <el-table-column  prop="ifsheet" label="退件存储位置"></el-table-column>
        <el-table-column  prop="remarks" label="收费"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small" type="primary">发货</el-button>
            <el-button size="small">销毁</el-button>
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
