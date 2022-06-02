<template>
    <div>
        <TheHeader/>
        <nuxt/>
        <TheFooter/>
    </div>
</template>

<script>
export default {
    components :{
        TheHeader: ()=>import('@/components/header.vue'),
        TheFooter: ()=>import('@/components/footer.vue')
    }
}
</script>