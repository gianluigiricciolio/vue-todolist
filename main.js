'use strict';

const { createApp } = Vue

  createApp({

    data() {
      return {

        // my properties
        toDos: [
            {
                text: "prova",
                done: true
            },
            {
                text: "prova2",
                done: false
            },
            {
                text: "prova2",
                done: false
            },
            {
                text: "prova2",
                done: false
            },
            {
                text: "prova2",
                done: false
            },
            {
                text: "prova2",
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
            this.toDos.push({
                text: this.toDoInput,
                done: false
            })
            this.toDoInput="";
        }
    }


  }).mount('#app')