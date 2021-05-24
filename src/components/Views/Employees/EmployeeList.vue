<template>
  <div>
    <div class="employee-content">
      <div class="employee-header">
        <div class="employee-header-title">Nhân viên</div>
        <div class="employee-header-button-right">
          <button class="btn-default btn-add">Thêm mới nhân viên</button>
        </div>
      </div>
      <div class="grid">
        <div class="grid-bar-search">
          <div class="input-search-list">
            <input type="text" placeholder="Tìm theo mã, tên nhân viên" />
            <div class="icon-svg icon-search-input"></div>
          </div>
          <div class="icon-svg icon-refresh-data"></div>
        </div>
        <div class="grid-table">
          <table class="table-employee">
            <thead>
              <tr>
                <th style="min-width: 40px">
                  <div class="input-checkbox">X</div>
                </th>
                <th style="min-width: 150px">MÃ NHÂN VIÊN</th>
                <th style="min-width: 250px">TÊN NHÂN VIÊN</th>
                <th style="min-width: 120px">GIỚI TÍNH</th>
                <th style="min-width: 150px">NGÀY SINH</th>
                <th style="min-width: 200px">SỐ CMND</th>
                <th style="min-width: 250px">CHỨC DANH</th>
                <th style="min-width: 250px">TÊN ĐƠN VỊ</th>
                <th style="min-width: 250px">SỐ TÀI KHOẢN</th>
                <th style="min-width: 250px">TÊN NGÂN HÀNG</th>
                <th style="min-width: 250px">CHI NHÁNH TK NGÂN HÀNG</th>
                <th class="td-change" style="min-width: 150px">CHỨC NĂNG</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in employee" :key="item.employeeCode">
                <td>x</td>
                <td>{{ item.employeeCode }}</td>
                <td>{{ item.name }}</td>
                <td>1234567</td>
                <td>{{ item.dob }}</td>
                <td>{{ item.identity }}</td>
                <td>{{ item.position }}</td>
                <td>{{ item.department }}</td>
                <td>1234567</td>
                <td>{{ item.bankName }}</td>
                <td>CHI NHÁNH TK NGÂN HÀNG</td>
                <td class="td-change">CHỨC NĂNG</td>
              </tr>
            </tbody>
          </table>
          <div class="table-footer">
              <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dataEmployees from "../../../assets/Data/employee.json";
import Pagination from '../../Commons/Pagination.vue'
export default {
  components: {
      Pagination,
  },
  created() {
    this.employees = dataEmployees;
    this.employee = this.employees.items;
  },
  data() {
    return {
      employees: [],
      employee: {},
    };
  },
};
</script>
<style scoped>
@import url("./employeeList.css");
</style>