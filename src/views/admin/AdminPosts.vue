<template>
    <h1 class="mt-3">貼文頁面</h1>
    <VueLoading :active="isLoading" />
    <div class="container">
        <div class="mt-4">
            <div class="text-end">
                <button class="btn btn-primary" type="button" @click="delete_cart()">新增貼文</button>
            </div>
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th>標題</th>
                        <th>作者</th>
                        <th>描述</th>
                        <th>建立日期</th>
                        <th>是否啟用</th>
                        <th>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="coupons">
                        <tr v-for="item in coupons" :key="item.id">
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td class="text-end">
                            </td>
                            <td></td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
