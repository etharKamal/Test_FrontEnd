<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="user">Dashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="FindLocation">Find Location</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 
  <b-row>
    
    <b-col>
    <b-card
    tag="article"
    style="max-width: 28rem; margin-left:20px;"
    class="mb-1"
  >
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    <b-card-text style="font-family:Cursive; text-align:center;">
      Users
    </b-card-text>
       </b-card>
    </b-col>
   
    <b-col>
       <b-card
    style="max-width: 70rem; margin-right:100px;"
    class="mb-2"
  >
    <bar-chart></bar-chart>
<b-card-text style="font-family:Cursive; text-align:center;">
      Sales
    </b-card-text>
       </b-card>
    </b-col>
  </b-row>
  
    <drivers></drivers>
</div>
</template>

<script>
  import PieChart from "./PieChart.js";
  import BarChart from '@/components/Chart.vue'
  import drivers from './drivers'

export default {
   name: "App",
  components: {
    PieChart,
    BarChart,
    drivers
  },
  
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Active", "Suspended", "offline"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      },
};
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

}
</style>


