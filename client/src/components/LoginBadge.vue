<script setup lang="ts">
  import { getSession, useLogin } from '@/model/session'

  const session = getSession()
  const { logout } = useLogin()

  const doLogout = () => {
    logout();
  }

</script>

<template>
  <div class="has-text-right" v-if="session.user">
    Welcome, {{ session.user.firstName }} {{ session.user.lastName }} <br>
    <small>
      {{ session.user.email }}
      <a class="button is-small is-light is-warning" @click.prevent="doLogout">
        <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
      </a>
    </small>
  </div>
  
  <div class="buttons" v-else>
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
    <a class="button is-light" href="/">
      Log in
    </a>
  </div>
</template>


<style scoped>

</style>