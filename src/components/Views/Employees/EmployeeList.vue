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
        <div class="grid-content-table">
          <div class="grid-table">
            <table class="table-employee">
              <thead>
                <tr>
                  <th
                    style="min-width: 40px; background: #eceef1; z-index: 10"
                    class="check-box-sticky"
                  >
                    <div class="input-checkbox">X</div>
                    <div class="border-right-checkbox"></div>
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 150px">
                    MÃ NHÂN VIÊN
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 250px">
                    TÊN NHÂN VIÊN
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 120px">
                    GIỚI TÍNH
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 150px">
                    NGÀY SINH
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 200px">
                    SỐ CMND
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 250px">
                    CHỨC DANH
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 250px">
                    TÊN ĐƠN VỊ
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 250px">
                    SỐ TÀI KHOẢN
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 250px">
                    TÊN NGÂN HÀNG
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th style="min-width: 250px; border-right: none">
                    CHI NHÁNH TK NGÂN HÀNG
                    <div class="border-bottom-tr"></div>
                  </th>
                  <th
                    class="sticky-function-th sticky-function-table"
                    style="min-width: 150px; background: #eceef1; z-index: 10"
                  >
                    <div class="border-left-checkbox"></div>
                    CHỨC NĂNG
                    <div class="border-bottom-tr"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in employee" :key="item.employeeCode">
                  <td class="check-box-sticky" style="background: #fff">
                    x
                    <div class="border-right-checkbox"></div>
                  </td>
                  <td>{{ item.employeeCode }}</td>
                  <td>{{ item.name }}</td>
                  <td>1234567</td>
                  <td>{{ item.dob }}</td>
                  <td>{{ item.identity }}</td>
                  <td>{{ item.position }}</td>
                  <td>{{ item.department }}</td>
                  <td>1234567</td>
                  <td>{{ item.bankName }}</td>
                  <td style="border-right: none">CHI NHÁNH TK NGÂN HÀNG</td>
                  <td class="sticky-function-th sticky-function-table">
                    <div class="border-left-checkbox"></div>
                    CHỨC NĂNG
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
import Pagination from "../../Commons/Pagination.vue";
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