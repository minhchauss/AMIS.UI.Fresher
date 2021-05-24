<template>
    <div>
        <div class="navbar">
            <!-------------------- Logo navbar -------------------------------------->
            <div class="logo-navbar">
                <div class="navbar-toggle"></div>
                <div class="navbar-logo-text"><img src="../../assets/Imgs/Logo_Module_TiengViet_White.66947422.svg" class="logo" alt=""></div>
            </div>
            <!---------------------Menu navbar --------------------------------------->
            <div class="menu-navbar">
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-dashboard"></div>
                    <div class="navbar-item-text">Tổng quan</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-cash"></div>
                    <div class="navbar-item-text">Tiền mặt</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-save-money"></div>
                    <div class="navbar-item-text">Tiền gửi</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-buy"></div>
                    <div class="navbar-item-text">Mua hàng</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-sell"></div>
                    <div class="navbar-item-text">Bán hàng</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-manager-bill"></div>
                    <div class="navbar-item-text">Quản lý hóa đơn</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-repos"></div>
                    <div class="navbar-item-text">Kho</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-tools"></div>
                    <div class="navbar-item-text">Công cụ dụng cụ</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-static-asset"></div>
                    <div class="navbar-item-text">Tài sản cố định</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-vat"></div>
                    <div class="navbar-item-text">Thuế</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-price"></div>
                    <div class="navbar-item-text">Giá thành</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-general"></div>
                    <div class="navbar-item-text">Tổng hợp</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-budget"></div>
                    <div class="navbar-item-text">Ngân sách</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-report"></div>
                    <div class="navbar-item-text">Báo cáo</div>
                </a>
                <a href="#" class="navbar-item">
                    <div class="icon-svg amis-icon-financial"></div>
                    <div class="navbar-item-text">Phân tích tài chính</div>
                </a>
                <router-link to="/nhan-vien" class="navbar-item">
                    <div class="icon-svg amis-icon-employee"></div>
                    <div class="navbar-item-text">Nhân viên</div>
                </router-link>
                <router-link to="/khach-hang" class="navbar-item">
                    <div class="icon-svg amis-icon-employee"></div>
                    <div class="navbar-item-text">Khách hàng</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url('./navbar.css');
/**Icon tổng quan */
.amis-icon-dashboard{
    background-position: -33px -1630px;
    width: 20px;
    height: 20px;
}
/* Icon tiền mặt */
.amis-icon-cash{
    background-position: -78px -1631px;
    width: 20px;
    height: 20px;
}
/* Icon tiền gửi */
.amis-icon-save-money{
    background-position: -121px -1633px;
    width: 20px;
    height: 20px;
}
/* Icon mua hàng */
.amis-icon-buy{
    background-position: -165px -1632px;
    width: 20px;
    height: 20px;
}
/* Icon bán hàng */
.amis-icon-sell{
    background-position: -206px -1631px;
    width: 20px;
    height: 20px;
}
/* Icon quản lý hóa đơn */
.amis-icon-manager-bill{
    background-position: -254px -1632px;
    width: 20px;
    height: 20px;
}
/* Icon kho */
.amis-icon-repos{
    background-position: -294px -1632px;
    width: 20px;
    height: 20px;
}
/* Icon công cụ dụng cụ */
.amis-icon-tools{
    background-position: -339px -1633px;
    width: 20px;
    height: 20px;
}
/* Icon tài sản cố định */
.amis-icon-static-asset{
    background-position: -382px -1632px;
    width: 20px;
    height: 20px;
}
/* Icon thuế */
.amis-icon-vat{
    background-position: -427px -1634px;
    width: 20px;
    height: 20px;
}
/* Icon giá thành */
.amis-icon-price{
    background-position: -471px -1633px;
    width: 20px;
    height: 20px;
}
/* Icon tổng hợp */
.amis-icon-general{
    background-position: -514px -1632px;
    width: 20px;
    height: 20px;
}
/* Icon Ngân sách */
.amis-icon-budget{
    background-position: -382px -1664px;
    width: 20px;
    height: 20px;
}
/* Icon báo cáo */
.amis-icon-report{
    background-position: -552px -1636px;
    width: 20px;
    height: 20px;
}
/* Icon phân tích tài chính */
.amis-icon-financial{
    background-position: -207px -1667px;
    width: 20px;
    height: 20px;
}
/* Icon nhân viên */
.amis-icon-employee{
    background-position: -120px -1664px;
    width: 20px;
    height: 20px;
}

</style>