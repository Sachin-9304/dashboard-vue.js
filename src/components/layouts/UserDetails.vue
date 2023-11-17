<template>
    <div>
    <base-header title="User Details"></base-header>
    <div class=container>
    <button @click="loadDetails">Click To Load Details</button>
    </div>
    <ul>
    <base-card
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :email="result.email"
        ></base-card>
        </ul>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            results: []
        };
    },
    methods:{
        loadDetails(){
            fetch('https://dashboard-4835d-default-rtdb.firebaseio.com/users.json')
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
            }).then((data)=>{
                const results = [];
                for (const id in data){
                    results.push({id: id,name: data[id].name,email:data[id].email});
                }
                this.results=results;
                
            })
        }
        
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
button {
  text-align: center; 
  /* float: center; */
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
.container{
    text-align: center; 
    padding-top: 100px;
}
</style>