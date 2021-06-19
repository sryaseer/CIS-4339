<template>
   <div class="HelloWorld">
      <!-- Part 1, showing all the array of Json in List form-->
      <h2>Full List</h2>
      <div>
         <ul>
            <li v-for="data of data" :key="data.string">
               {{ data.string }} {{ data.number }} {{ data.state }}
            </li>
         </ul>
      </div>
      <!-- Part 2 showing only items in array of Json which are True -->
      <h2>Only True</h2>
      <div v-for="data of data" :key="data.string">
         <p
            v-if="data.state === true"
            :class="{ trueColors: data.state === true }"
         >
            {{ data.string }} {{ data.number }}
         </p>
      </div>
      {{ trueTotal }}
      <!-- Part 2 showing only items in array of Json which are False -->
      <h2>Only False</h2>
      <div v-for="data of data" :key="data.string">
         <p
            v-if="data.state === false"
            :class="{ falseColors: data.state === false }"
         >
            {{ data.string }} {{ data.number }}
         </p>
      </div>
      {{ falseTotal }}
      <!-- Part 2 showing only items in array of Json which are False -->
      <h2>Sum of Numbers</h2>

      <div>
         {{ total() }}
      </div>
   </div>
</template>

<script>
export default {
   name: "HelloWorld",
   data() {
      return {
         data: [
            {
               string: "John",
               number: 10,
               state: true
            },
            {
               string: "Adam",
               number: 20,
               state: true
            },
            {
               string: "Liam",
               number: 30,
               state: true
            },
            {
               string: "Noah",
               number: 40,
               state: true
            },
            {
               string: "Oliver",
               number: 50,
               state: true
            },
            {
               string: "William",
               number: 60,
               state: false
            },
            {
               string: "Elijah",
               number: 70,
               state: false
            },
            {
               string: "Benjamin",
               number: 80,
               state: false
            },
            {
               string: "Lucas",
               number: 90,
               state: false
            },
            {
               string: "Mason",
               number: 100,
               state: false
            }
         ]
      };
   },
   methods: {
      total() {
         var totalNum = 0;
         for (let i = 0; i < this.data.length; i++) {
            var num = this.data[i].number;
            totalNum += num;
         }
         return totalNum;
      }
   },
   computed: {
      falseTotal() {
         var totalNum = 0;
         for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].state === true) {
               var num = this.data[i].number;
               totalNum += num;
            }
         }
         return totalNum;
      },
      trueTotal() {
         var totalNum = 0;
         for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].state === false) {
               var num = this.data[i].number;
               totalNum += num;
            }
         }
         return totalNum;
      }
   }
};
</script>

<style>
.HelloWorld {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   text-align: center;
}

ul,
p,
li {
   padding: 0;
   margin: 0;
   list-style-type: none;
}

.trueColors {
   color: rgba(52, 229, 235);
}

.falseColors {
   color: rgba(235, 54, 135);
}
</style>
