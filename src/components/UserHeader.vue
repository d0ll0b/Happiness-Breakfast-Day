<template>
    <!-- <h1>首頁導覽列</h1>
    <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/products">產品列表</RouterLink> |
    <RouterLink to="/cart">購物車列表</RouterLink> |
    <RouterLink to="/admin">管理者登入</RouterLink> -->

    <ul class="nav narbar position-fixed w-100 bg-black text-white fw-bold px-2 justify-content-between">
        <div>
            <li class="nav-item ms-4">
                <h1>好不幸福早餐店</h1>
            </li>
        </div>
        <div class="d-flex">
            <li class="nav-item ms-4 my-auto">
                <RouterLink to="/" class="nav-link">首頁</RouterLink>
            </li>
            <li class="nav-item ms-4 my-auto">
                <RouterLink to="/products" class="nav-link">產品列表</RouterLink>
            </li>
            <li class="nav-item ms-4 my-auto">
                <RouterLink to="/cart" class="nav-link">購物車</RouterLink>
            </li>
            <li class="nav-item ms-4 my-auto">
                <RouterLink to="/admin" class="nav-link">登入</RouterLink>
            </li>
        </div>
    </ul>
</template>
