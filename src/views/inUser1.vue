<template>
    <div> this is inUser1 
        <h1> {{propsdata}} </h1>
        <button v-on:click="addEvent">click to add</button>


    </div>
</template>
<script>
export default {
    name : 'inUser1',
    props: ['propsdata'],
    methods: {
        addEvent: function(){
            this.$emit('addcount')
        }
    },
}
</script>