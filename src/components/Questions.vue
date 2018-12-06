<template>
    <ol>
        <li v-for="item in questions" :key="item.id">
            <h4>{{item.question}}</h4>
            <div v-for="(choice, index) in item.choices" :key="index">
                <input type="checkbox" :id="choice" :value="choice" v-model="item.response">
                <label :for="choice">{{choice}}</label>
            </div>

            <h4>{{item.response}}</h4>
        </li>
    </ol>
</template>

<script>
    
    export default {
        name: "Questions",
        props: ["questions"]
    }
</script>

<style lang="css">
    .book-title{
        font-style: italic;
    }
</style>

