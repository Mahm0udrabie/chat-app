<template>
  <!-- <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group" width="auto">
          <li class="list-group-item" v-for="(user, idx) in users" :key="idx">
            <router-link :to="{ name: 'Chat', params: { userId: user.id }}">{{user.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
<div class="container mt-5 bootstrap snippets bootdey">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="row">
        <div class="col-md-4"  v-for="(user, idx) in users" :key="idx">
            <!-- START widget-->
            <div class="panel widget">
                <div style="background-image: url('https://bootdey.com/img/Content/bg1.jpg')"
                    class="panel-body text-center bg-center">
                    <div class="row row-table">
                        <div class="col-xs-12 text-white">
                             <!-- eslint-disable-next-line max-len -->
                            <img v-if="user.avatar"  :src="user.avatar" alt="Image"
                                class="img-thumbnail rounded-circle thumb128">
                             <!-- eslint-disable-next-line max-len -->
                            <img v-else-if="!user.avatar" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image"
                            class="img-thumbnail rounded-circle thumb128">
                            <h4 class="m0">
                          <router-link :to="{ name: 'Chat', params: { userId: user.id }}">{{user.name}}</router-link>
                            </h4>
                            <p class="m0">
                                <em class="fa fa-twitter fa-fw"></em>@chris
                            </p>
                        </div>
                    </div>
                </div>
                <div class="panel-body text-center bg-gray-darker">
                    <div class="row row-table">
                        <div class="col-xs-4">
                            <a href="#" class="text-white">
                                <em class="fa fa-twitter fa-2x"></em>
                            </a>
                        </div>
                        <div class="col-xs-4">
                            <a href="#" class="text-white">
                                <em class="fa fa-facebook fa-2x"></em>
                            </a>
                        </div>
                        <div class="col-xs-4">
                            <a href="#" class="text-white">
                                <em class="fa fa-comments fa-2x"></em>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item">
                        <span class="label label-primary pull-right">15</span>
                        <em class="fa fa-fw fa-clock-o text-muted"></em>Recent Activity</a>
                    <a href="#" class="list-group-item">
                        <span class="label label-primary pull-right">100</span>
                        <em class="fa fa-fw fa-user text-muted"></em>Following</a>
                    <a href="#" class="list-group-item">
                        <span class="label label-primary pull-right">300</span>
                        <em class="fa fa-fw fa-folder-open-o text-muted"></em>Photos</a>
                </div>
            </div>
            <!-- END widget-->
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get('http://127.0.0.1:8000/users').then((response) => {
        this.users = response.data.data;
        console.log(response.data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.52857143;
    color: #515253;
    background-color: #f5f7fa;
    margin-top:20px;
  }

  .widget .panel, .widget.panel {
    overflow: hidden;
  }

  .widget {
    margin-bottom: 20px;
    border: 0;
  }

  .bg-gray-darker {
    background-color: #232735;
    color: #fff!important;
  }

  .row-table {
    display: table;
    table-layout: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
  }

  .row-table>[class*=col-] {
    display: table-cell;
    float: none;
    table-layout: fixed;
    vertical-align: middle;
  }

  .text-white {
    color: #fff;
  }

  .thumb128 {
    width: 128px!important;
    height: 128px!important;
  }

  .m0 {
    margin: 0!important;
  }

  .bg-gray-darker {
    background-color: #232735;
    color: #fff!important;
  }

  .list-group {
    line-height: 1.3;
  }

  .panel>.list-group .list-group-item {
    border-top: 0;
  }

</style>
