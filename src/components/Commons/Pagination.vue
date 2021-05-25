<template>
    <div>
        <div class="paging">
            <div class="paging-left">
                <div>Tổng số: {{totalItem}} bản ghi</div>
            </div>
            <div class="paging-right">
                <div>
                    <combobox></combobox>
                </div>
                <div class="group-paging">
                    <div class="pre-btn">trước</div>
                    <div class="center-btn">giữa </div>
                    <div class="next-btn">sau</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Combobox from '../Commons/Combobox.vue'
export default {
components:{
Combobox
},
}
</script>
<style scoped>

</style>