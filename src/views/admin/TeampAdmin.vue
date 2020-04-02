<template>
  <b-container fluid class="bv-example-row bv-example-row-flex-cols" style="position: fixed">
    <b-row>
        <b-col cols="12" sm="12" md="2" lg="2" xl="2"
              :class="{ closeMenu: isShowMenu}"
        >
          <sidebar />
        </b-col>

      <b-col v-if= "isShowMenu === false" cols="12" sm="12" md="10" lg="10" xl="10">
        <Header
          @clickToggle = "showMenu"
        />
        <b-col cols="12" sm="12" md="10" lg="10" xl="10">
          <router-view  />
        </b-col>
      </b-col>

      <b-col v-else cols="12" sm="12" md="10" lg="12" xl="12">
        <Header
          @clickToggle = "showMenu"
        />
        <b-col cols="12" sm="12" md="12" lg="12" xl="12">
          <router-view  />
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
  },
  data: ()=>({
    isShowMenu: false,
    show: false
  }),
  methods:{
    showMenu: function(){
      this.isShowMenu = !this.isShowMenu;
    }
  }
};
</script>

<style>
  .closeMenu{
    display: none;
  }

</style>