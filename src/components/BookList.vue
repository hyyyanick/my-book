<template>
    <ol>
        <li v-for="(item, index) in questions" :key="item.id">
            <h4>{{item.name}} - <span class="book-title">{{item.book}}</span></h4>
        </li>
    </ol>
</template>

<script>
    
    export default {
        name: "BookList",
        props: ["questions"]
    }
</script>

<style lang="css">
    .book-title{
        font-style: italic;
    }
</style>

