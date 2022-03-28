<template>
  <div id="home" class="container custom-content animated lightSpeedIn">
    <div class="col-12" style="margin-top: 15%">
      <div class="right">
        <p><i class="fa fa-home"></i> Home</p>
      </div>
      <div class="card">
        <div class="card-body">
          <div id="typed-strings">
            <p>Hi, <em>Welcome to</em></p>
            <p>Syifa Ain'nur <strong>Web Page</strong>.</p>
          </div>
          <span id="typed"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "src/assets/js/main.js"
    );
    document.head.appendChild(externalScript);
  },
};
</script>
<style>
/* content */

.custom-content {
  padding-bottom: 5px;
  max-width: 700px;
  display: flex;
  justify-content: center;
}

.custom-content .card {
  margin-top: -3px;
  justify-content: center;
  border: 3px solid black;
  background-color: #f1f0f0;
  box-shadow: 7px 7px 0px 1px rgb(20, 20, 20);
}

.custom-content .right {
  display: flex;
  justify-content: flex-end;
}

.custom-content .right p {
  font-family: "Comfortaa", cursive;
  background-color: #df548e;
  padding: 5px 20px;
  border: 3px solid black;
  border-radius: 3px;
  box-shadow: 7px 7px 0px 1px rgb(20, 20, 20);
  margin-bottom: -1px;
}

@media screen and (min-width: 1200px) {
  .custom-footer {
    padding-top: 25px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}

/* If fade out option is set */

.animated {
  padding-top: 95px;
  margin-bottom: 60px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  0% {
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }
  80% {
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }
  100% {
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

.animated.lightSpeedIn {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}
.text-p {
  font-size: 15px;
}
@media (min-width: 850px) {
  .text-p {
    font-size: 15px;
    margin-right: 177px;
  }
}
</style>