<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <router-view />

  <nav
    class="navbar navbar-expand-lg navbar-light bg-danger fixed-top flex-grow-0"
  >
    <div class="container">
      <a class="navbar-brand font-weight-bold home">Syifa Ain'nur</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-4">
          <li class="nav-item">
            <router-link to="/home" class="btn btn-pink home">
              <i class="fa fa-home home"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="btn btn-blue About"
              ><i class="fa fa-user"></i> About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--Tutup Navbar-->
  <div id="content"></div>
  <!-- footer -->
  <div class="custom-footer text-center">
    <div class="col-12">
      <a class="btn btn-pink mb-2" href="https://www.instagram.com/syifa_a.m/"
        ><i class="fa fa-instagram"></i
      ></a>
      <a class="btn btn-white mb-2" href="https://github.com/SyifaAinnur"
        ><i class="fa fa-github"></i
      ></a>
      <a
        class="btn btn-blue mb-2"
        href="https://www.linkedin.com/in/syifa-ain-nur-manzila-32b6a3152"
        ><i class="fab fa-linkedin"></i
      ></a>
      <p class="mt-2">© Syifa Ain'nur</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.body {
  background-color: #17a2b8 !important;
}
.btn-pink {
  background-color: #df548e;
  padding: 10px 30px;
  border: 2px solid black;
  margin: 0px 10px;
  color: black;
  border-radius: 5px;
  /* bs: left top ambyar */
  box-shadow: 2px 4px 0px 1px rgb(20 20 20);
}
.btn-blue {
  background-color: #3cc4ce;
  padding: 10px 30px;
  border: 2px solid black;
  margin: 0px 10px;
  color: black;
  border-radius: 5px;
  /* bs: left top ambyar */
  box-shadow: 2px 4px 0px 1px rgb(20 20 20);
}
.btn-white {
  background-color: #f1f0f0;
  padding: 10px 30px;
  border: 2px solid black;
  margin: 0px 10px;
  color: black;
  border-radius: 5px;
  /* bs: left top ambyar */
  box-shadow: 2px 4px 0px 1px rgb(20 20 20);
}
</style>
