<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Aside></Aside>
        <main role="main" class="col-md-10 ml-sm-auto px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './BackComponents/Navbar';
import Aside from './BackComponents/Aside';
import Alert from './Alert';

export default {
  components: {
    Navbar,
    Aside,
    Alert,
  }
}
</script>