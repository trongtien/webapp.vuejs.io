<template>
  <b-nav>
    <b-card >
      <b-card-text>Administrator</b-card-text>
    </b-card>
    <b-nav vertical class="w-36" v-for="link in links" :key="link.text">
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

<style lang="scss">
.nav {
  display: block;
}
.card{
  border: none;

  .card-body{
    display: flex;

    .card-text{
      font-weight: bold;
      font-size: 26px;
      color: #0056b3;
    }
  }
}
</style>