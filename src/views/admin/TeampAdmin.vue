<template>
  <b-container fluid class="bv-example-row bv-example-row-flex-cols" style="position: fixed">
    <b-row>
      <b-col cols="12" sm="12" md="2" lg="2" xl="2">
        <sidebar />
      </b-col>
      <b-col cols="12" sm="12" md="10" lg="10" xl="10">
        <Header />
        <b-col cols="12" sm="12" md="10" lg="10" xl="10">
          <router-view />
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from "../../components/blocks/admin/Sidebar.vue";
import Header from "../../components/blocks/admin/Header.vue";
export default {
  name: "TeampAdmin",
  components: {
    Sidebar,
    Header
  }
};
</script>

<style>
</style>