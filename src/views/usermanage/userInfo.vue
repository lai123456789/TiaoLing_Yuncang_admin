<template>
  <div class="order">
        <el-card class="box-card">
          <el-form :inline="true" class="demo-form-inline" :model="formInline">
            <el-form-item label="用户编号">
              <el-input placeholder="请输入用户编号" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input placeholder="请输入用户名" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="是否开通邀请返现">
              <el-select placeholder="请选择" v-model="formInline.type">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input placeholder="请输入手机号码" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="微信号">
              <el-input placeholder="请输入微信号" v-model="formInline.emailID" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="注册时间段">
              <el-date-picker
                v-model="formInline.create_date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>

        </el-card>
    <!-- 下面卡片 -->
    <el-card class="box-card">
      <el-table border style="width: 100%;" :data="tableForm">
        <el-table-column prop="create_time" label="用户编号"></el-table-column>
        <el-table-column prop="pending_time" label="用户名"></el-table-column>
        <el-table-column prop="shop_name" label="头像"></el-table-column>
        <el-table-column prop="order_text" label="手机号码"></el-table-column>
        <el-table-column prop="order_Num" label="微信号"></el-table-column>
        <el-table-column prop="order_Num" label="当前余额"></el-table-column>
        <el-table-column prop="order_Num" label="是否开通邀请返现"></el-table-column>
        <el-table-column prop="order_Num" label="分佣余额"></el-table-column>
        <el-table-column prop="order_Num" label="注册时间"></el-table-column>
        <el-table-column prop="order_Num" label="最近一次登录时间"></el-table-column>
        <el-table-column prop="Waybill_Num" label="查看下家分佣">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <el-button size="small" @click="look(scope.row)">查看</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    <el-dialog
      title="下级分佣信息"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段的信息</span>
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
        isFlat:false,
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
      handleEdit(e){},
      handleDelete(e){
        this.$confirm('确认删除？')
          .then(_ => {
            // done();
          })
          .catch(_ => {});
      },
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
