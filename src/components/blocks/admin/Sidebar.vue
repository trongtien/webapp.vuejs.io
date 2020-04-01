<template>
  <b-nav>
    <b-nav vertical class="w-36" v-for="link in links" :key="link.id">
      <b-nav-item>{{link.text}}</b-nav-item>
    </b-nav>
  </b-nav>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    drawer: true,
    links: [
      { text: "Dashboare", route: "/" },
      { text: "User", route: "/user" }
    ]
  })
};
</script>

<style>
.nav {
  display: block;
}
</style>