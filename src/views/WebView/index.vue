<template>
    <n-space>
        <n-card title="创建WebView" hoverable>
            <n-button @click="handleCreateWebview">open</n-button>
        </n-card>
        <n-card title="关闭WebView" hoverable>
            <n-button @click="handleCloseWebview">close</n-button>
        </n-card>
    </n-space>
    
</template>

<script lang="ts">
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
export default {
    /** 组件 */
    components: {},
    props: {},
    watch: {},
    computed: {},
    /** 数据属性所在地 */
    data() {
        return {
        }
    },
    /** 方法所在地 */
    methods: {
        handleCreateWebview(){
            console.log('创建 webview');
            window.open();
        },
        handleCloseWebview(){
            console.log('关闭 webview');
            window.close();
        }
    },
    setup() {},
    /** 生命周期 */
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    errorCaptured() {},
    renderTracked() {},
    renderTriggered() {},
    activated() {},
    deactivated() {},

};
</script>
