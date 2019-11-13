<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-button type="text" @click="handleAdd()">添加</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <span>
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="序号" prop="idCard">
                <el-input type="idCard" v-model.number="tableData.idCard" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注" prop="remark">
                <el-input type="remark" v-model.number="tableData.remark" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="类型" prop="type">
                <el-input type="type" v-model.number="tableData.type" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="创建时间" prop="timeD">
                <el-input type="timeD" v-model.number="tableData.timeD" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleSure()">确 定</el-button>
          </span>
        </el-dialog>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" prop="idCard"></el-table-column>
          <el-table-column label="备注" prop="remark"></el-table-column>
          <el-table-column label="类型" prop="type"></el-table-column>
          <el-table-column label="创建时间" prop="timeD"></el-table-column>
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
      tableData: [
        {
          idCard: "",
          remark: "",
          type: "",
          timeD: ""
        }
      ],
      dialogVisible: false, //添加弹框
      id: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("/api/check").then(res => {
        this.tableData = res.data.data;
      });
    },
    //删除
    handleDelete(index, row) {
      axios.get("/api/del", { params: { id: row.id } }).then(res => {
        this.getList();
      });
    },
    //修改
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.id = index;
    },
    handleAdd() {
      this.dialogVisible = true;
    },
    //添加
    handleSure() {
      let idCard = this.tableData.idCard,
        remark = this.tableData.remark,
        type = this.tableData.type,
        timeD = this.tableData.timeD;
      let id = this.id;
      // console.log(id)
      //更改
      if (this.id) {
        console.log('========',this.id);
        axios.post("/api/exit",{idCard, remark, type, timeD,id:this.id}).then(res=>{
          console.log(res)
          this.getList();
          this.dialogVisible = false;
        })
      } else {
        axios.post("/api/add", { idCard, remark, type, timeD }).then(res => {
          this.getList();
          this.dialogVisible = false;
        });
      }
      console.log(this.id);
    },
    //弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
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