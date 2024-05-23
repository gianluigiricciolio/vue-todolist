'use strict';

const { createApp } = Vue

  createApp({

    data() {
      return {

        // my properties
        toDos: [
            {
                text: "Prova task done",
                done: true
            },
            {
                text: "Prova 2",
                done: false
            },
            {
                text: "Prova 3",
                done: false
            },
            {
                text: "Prova 4",
                done: false
            },
            {
                text: "Prova 5",
                done: false
            },
            {
                text: "Prova 6",
                done: false
            },
           
        ],
        toDoInput: ""

      }
    },

    methods: {
        deleteTodo(index){
            this.toDos.splice(index,1);
        },

        addTodo() {
            if(this.toDoInput){
                this.toDos.push({
                    text: this.toDoInput.trim(),
                    done: false
                })
                this.toDoInput="";
            }
            
        },

        invertDone(i){
            this.toDos[i].done=!this.toDos[i].done;
        }
    }


  }).mount('#app')