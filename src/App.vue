<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img src="./assets/pictures/luffy.jpg" width="50" height="50" alt="hihi"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <router-link class="nav-link active" to="/">Home
                    <span class="visually-hidden">(current)</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/categories">Categories</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/upload">Upload</router-link>
                </li>
                <li class="nav-item dropdown">
                  <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/whoarewe" role="button" aria-haspopup="true" aria-expanded="false">Who are we?</router-link>
                  <div class="dropdown-menu">
                    <router-link class="dropdown-item" to="/futureplans">Future plans</router-link>
                    <router-link class="dropdown-item" to="/bugfixes">Bug fixes</router-link>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item" to="/aboutus">About us</router-link>
                  </div>
                </li>
              </ul>
            </div>
            <div class="text-end">
                <router-link to="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></router-link>
                <router-link to="/sign-up"><button type="button" class="btn btn-warning">Sign-up</button></router-link>
              </div>
          </div>
          </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
