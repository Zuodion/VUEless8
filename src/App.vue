<template>
    <div id="app">
        <div>
            <label>Email</label>
            <input type="text" v-model="user.email">
        </div>
        <div>
            <label>Username</label>
            <input type="text" v-model="user.userName">
        </div>
        <button @click="submit">Submit</button>
        <hr>
        <button @click="fetchData">Get Data</button>
        <ul>
            <li
                v-for="(theUser, index) in users"
                :key="index"
            >{{ theUser.userName }} - {{ theUser.email }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            user: {
                userName: "",
                email: ""
            },
            users: [],
        };
    },
    methods: {
        submit() {
            this.$http.post("", this.user).then(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                }
            );
        },
        fetchData() {
            this.$http.get("").then(response => {
                const resultArray = [];
                for (let key in response.data) {
                    resultArray.push(response.data[key]);
                }
                this.users = resultArray;
            });
        }
    },
};
</script>
