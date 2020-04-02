<template>
  <b-navbar>
    <b-navbar-brand href="#" @click="toggle" >Click</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <div class="mb-2">
            <b-avatar text="BV" size="4rem"></b-avatar>
          </div>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",

  methods: {
  	toggle: function(){
  		this.$emit('clickToggle');
  	}
  }
};
</script>

<style>

</style>