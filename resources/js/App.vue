<template>
    <main>
        <h3 id='apps'>http://www.rrphp.com/home</h3>
        <button class="btn btn-primary" v-on:click="testClick">Click me</button>
    </main>
</template>

<script>
export default {
    methods: {
        testClick: function(){
            this.$http.get(`http://www.rrphp.com/home`)
                .then((result) => {
                    console.log(result.data);
                })
        }
    }
}
</script>

<style>

</style>