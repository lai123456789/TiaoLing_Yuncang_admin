<template>
  <div class="pengding">
    <el-card class="box-card clearfix">
          <el-form  :inline="true" class="demo-form-inline clearfix"  :model="formInline">
            <el-form-item label="店铺">
                <el-select placeholder="请选择" v-model="formInline.type">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="Shopee" value="2"></el-option>
                    <el-option label="Lazada" value="3"></el-option>
                </el-select>
            </el-form-item>
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
          <div class="fr"><el-button type="primary">扫描收货</el-button></div>
    </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column  prop="create_time" label="用户名"></el-table-column>
        <el-table-column  prop="shop_name" label="系统订单ID"></el-table-column>
        <el-table-column  prop="order_text" label="平台"></el-table-column>
        <el-table-column  prop="email_Num" label="店铺名"></el-table-column>
        <el-table-column  prop="order_Num" label="订单商品信息"></el-table-column>
        <el-table-column  prop="Waybill_Num" label="订单号"></el-table-column>
        <el-table-column  prop="sheet" label="订单创建时间"></el-table-column>
        <el-table-column  prop="ifsheet" label="运单号"></el-table-column>
        <el-table-column  prop="remarks" label="国内物流单号"></el-table-column>
        <el-table-column  prop="sheet" label="面单"></el-table-column>
        <el-table-column  prop="ifsheet" label="备注"></el-table-column>
        <el-table-column  prop="remarks" label="详情"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small">确认出货</el-button>
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
