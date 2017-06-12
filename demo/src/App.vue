<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/simple" class="nav-link">Simple Vue Component</router-link></li>
        <li>
          <router-link to="/single-file" class="nav-link">Single File Vue Component</router-link></li>
        <li>
          <router-link to="/animations" class="nav-link">Vue.js Animation / Vue Class Component</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body {
    min-width: 900px;
  }

  nav ul {
    list-style: none;
    background-color: #444;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  nav li {
    font-size: 1em;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #888;
    width: 300px;
    border-bottom: none;
    display: inline-block;
    margin-right: -4px;
  }

  nav .nav-link {
    text-decoration: none;
    color: #fff;
    display: block;
    transition: .3s background-color;
  }

  nav .nav-link:hover {
    background-color: #005f5f;
  }

  nav .nav-link.router-link-active {
    background-color: #fff;
    color: #444;
    cursor: default;
  }

  button {
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    margin: 0 0.5rem;
    height: 2.25rem;
    width: 10rem;
    font-size: 1rem;
    border: none;
    border-radius: 2px;
    letter-spacing: .5px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    display: block;
    float: left;
    vertical-align: middle;
    transition: .3s ease-out;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background-color: #2bbbad;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }

  button:active {
    background-color: #269589;
  }
</style>
