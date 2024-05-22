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


      }
    },

    methods: {
        deleteTodo(index){
            this.toDos.splice(index,1);
        }
    }


  }).mount('#app')