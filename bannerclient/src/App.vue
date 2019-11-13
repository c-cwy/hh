<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-button type="text" @click="dialogVisible = true">添加</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <span>

            <el-form
              :model="numberValidateForm"
              ref="numberValidateForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="年龄" prop="age">
                <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
              </el-form-item>
              <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
              </el-form-item> -->
            </el-form>

          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" prop="idCard"></el-table-column>
          <el-table-column label="备注" prop="remark"></el-table-column>
          <el-table-column label="类型" prop="type"></el-table-column>
          <el-table-column label="创建时间" prop="time"></el-table-column>
          <el-table-column align="right">
            <template slot="header">操作</template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false, //添加弹框
      numberValidateForm: {
          age: ''
        }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("/api/check").then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      axios.get("/api/del", { params: { id: row.id } }).then(res => {
        this.getList();
      });
    },
    //弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //表单
  }
};
</script>

<style lang="scss">
</style>

<style>
* {
  margin: 0;
  padding: 0;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>