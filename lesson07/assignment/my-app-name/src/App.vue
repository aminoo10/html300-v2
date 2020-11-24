<template>
  <nav class= "nav navbar navbar-expand-sm navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">Navbar</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>            
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li><router-link exact-active-class="active" class="nav-link" to="/">Home</router-link></li>
            <li><router-link exact-active-class="active" class="nav-link" to="/images">Images</router-link></li>
            <li><router-link exact-active-class="active" class="nav-link" to="/grids">Grids</router-link></li>
            <li><router-link exact-active-class="active" class="nav-link" to="/accordion">Accordion</router-link></li>
        </ul>
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
  margin-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
