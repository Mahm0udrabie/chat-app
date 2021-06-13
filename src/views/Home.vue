<!-- eslint-disable max-len -->
<template>
<div class="container">
    <!--- \\\\\\\Post-->
<div class="card social-timeline-card">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            <li class="nav-item">
                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Share your insights</a>
            </li>
        </ul>
    </div>
    <div class="card-body">
        <div class="tab-content" id="myTabContent">
            <div class="form-group">
                <label class="sr-only" for="message">post</label>
                <textarea name="post_content" v-model="body" class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
            </div>
        </div>
        <div class="btn-group">
                <b-button variant="primary" @click="addPost">Post</b-button>
        </div>
    </div>
</div>
<!-- Post /////-->
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
   <ul class="timeline" v-if="user">
      <li v-for="(post , idX) in posts" :key="idX">
         <!-- begin timeline-time -->
         <div class="timeline-time">
            <span class="date">{{ post.date }}</span>
            <span class="time">{{ post.time }}</span>
         </div>
         <!-- end timeline-time -->
         <!-- begin timeline-icon -->
         <div class="timeline-icon">
            <a href="javascript:;">&nbsp;</a>
         </div>
         <!-- end timeline-icon -->
         <!-- begin timeline-body -->
         <div class="timeline-body">
            <div class="timeline-header">
               <span class="userimage"><img :src="post.avatar" alt=""></span>
               <span class="username"><a href="javascript:;">{{ post.name }}</a> <small></small></span>
               <span class="pull-right text-muted">0 Views</span>
            </div>
            <div class="timeline-content">
               <p>
                  {{post.body}}
               </p>
            </div>
            <div class="timeline-likes">
               <div class="stats-right">
                  <span class="stats-text">259 Shares</span>
                  <span class="stats-text"> {{ post.comments_count }} </span>
               </div>
               <div class="stats">
                  <span class="fa-stack fa-fw stats-icon">
                  <i class="fa fa-circle fa-stack-2x text-danger"></i>
                  <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                  </span>
                  <span class="fa-stack fa-fw stats-icon">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                  </span>
                  <span class="stats-total">4.3k</span>
               </div>
            </div>
            <div class="timeline-footer">
              <a href="javascript:;" :class="{ 'text-primary': post.like }" @click="likePost(post)" class="m-r-15" style="text-decoration: none;">
                 <i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
               </a>
               <a href="javascript:;" class="m-r-15 text-inverse-lighter" style="text-decoration: none;"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a>
               <a href="javascript:;" class="m-r-15 text-inverse-lighter" style="text-decoration: none;">
                   <i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                </a>
            </div>
            <div class="timeline-comment-box">
               <div class="user"><img src="https://bootdey.com/img/Content/avatar/avatar6.png"></div>
               <div class="input">
                  <form action="">
                     <div class="input-group">
                        <input type="text"  v-model="post.comment" class="form-control rounded-corner" placeholder="Write a comment...">
                        <span class="input-group-btn p-l-10">
                        <button class="btn btn-primary f-s-12 rounded-corner" @click="addComment(post)"  type="button">Comment</button>
                        </span>
                     </div>
                  </form>
               </div>
            </div>
            <div v-for="(comment, opps) in post.comments"  :key="'x' + opps">
            <div class="timeline-header">
               <span class="userimage"><img :src="comment.avatar" alt=""></span>
               <span class="username"><a href="javascript:;">{{ comment.username }}</a></span>
               <span class="pull-right text-muted">{{ comment.date }} {{ comment.time }}</span>
            </div>
            <div class="timeline-content timeline-comment-box">
               <p>
                  {{ comment.comment}}
               </p>
            </div>
            </div>
         </div>
         <!-- end timeline-body -->
      </li>
      <!--  eslint-disable-next-line vue/valid-v-else -->
   </ul>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue Learning management system';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      user: false,
      body: null,
      title: 'default',
      active: false,
    };
  },
  async created() {
    this.getPosts();
    // this.getComments();
    // this.getComments();
  },
  methods: {
    getPosts() {
      axios.get('https://secret-tundra-43792.herokuapp.com/api/index').then((response) => {
        this.posts = response.data.data;
        // console.log(this.posts);
        this.user = true;
      });
    },
    addPost() {
      axios.post('https://secret-tundra-43792.herokuapp.com/api/posts/add_post', {
        body: this.body,
        title: this.title,
      }).then((response) => {
        console.log(response);
        this.posts.unshift(response.data.data);
        this.body = null;
      });
    },
    addComment(post) {
      axios.post('https://secret-tundra-43792.herokuapp.com/api/post/comment/add_comment', {
        comment: post.comment,
        article_id: post.id,
      }).then((response) => {
        this.posts.forEach((e) => {
          e.comments.unshift(response.data.data);
        });
        console.log(response.data.data);
      });
      console.log('new comment', post);
    },
    getComments() {
      axios.get('https://secret-tundra-43792.herokuapp.com/api/post/comments').then((response) => {
        console.log(response.data.data);
      });
    },
    likePost(post) {
      console.log(post);
    },
  },
};
</script>
<style lang="css" scoped>
body{
    margin-top:20px;
    background:#eee;
}

.timeline {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative
}

.timeline:before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    width: 5px;
    background: #2d353c;
    left: 20%;
    margin-left: -2.5px
}

.timeline>li {
    position: relative;
    min-height: 50px;
    padding: 20px 0
}

.timeline .timeline-time {
    position: absolute;
    left: 0;
    width: 18%;
    text-align: right;
    top: 30px
}

.timeline .timeline-time .date,
.timeline .timeline-time .time {
    display: block;
    font-weight: 600
}

.timeline .timeline-time .date {
    line-height: 16px;
    font-size: 12px
}

.timeline .timeline-time .time {
    line-height: 24px;
    font-size: 20px;
    color: #242a30;
}

.timeline .timeline-icon {
    left: 15%;
    position: absolute;
    width: 10%;
    text-align: center;
    top: 40px
}

.timeline .timeline-icon a {
    text-decoration: none;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 20px;
    background: #d9e0e7;
    line-height: 10px;
    color: #fff;
    font-size: 14px;
    border: 5px solid #2d353c;
    transition: border-color .2s linear
}

.timeline .timeline-body {
    margin-left: 23%;
    margin-right: 17%;
    background: #fff;
    position: relative;
    padding: 20px 25px;
    border-radius: 6px
}

.timeline .timeline-body:before {
    content: '';
    display: block;
    position: absolute;
    border: 10px solid transparent;
    border-right-color: #fff;
    left: -20px;
    top: 20px
}

.timeline .timeline-body>div+div {
    margin-top: 15px
}

.timeline .timeline-body>div+div:last-child {
    margin-bottom: -20px;
    padding-bottom: 20px;
    border-radius: 0 0 6px 6px
}

.timeline-header {
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e7eb;
    line-height: 30px
}

.timeline-header .userimage {
    float: left;
    width: 34px;
    height: 34px;
    border-radius: 40px;
    overflow: hidden;
    margin: -2px 10px -2px 0
}

.timeline-header .username {
    font-size: 16px;
    font-weight: 600
}

.timeline-header .username,
.timeline-header .username a {
    color: #2d353c
}

.timeline img {
    max-width: 100%;
    display: block
}

.timeline-content {
    letter-spacing: .25px;
    line-height: 18px;
    font-size: 13px
}

.timeline-content:after,
.timeline-content:before {
    content: '';
    display: table;
    clear: both
}

.timeline-title {
    margin-top: 0
}

.timeline-footer {
    background: #fff;
    border-top: 1px solid #e2e7ec;
    padding-top: 15px
}

.timeline-footer a:not(.btn) {
    color: #575d63
}

.timeline-footer a:not(.btn):focus,
.timeline-footer a:not(.btn):hover {
    color: #2d353c
}

.timeline-likes {
    color: #6d767f;
    font-weight: 600;
    font-size: 12px
}

.timeline-likes .stats-right {
    float: right
}

.timeline-likes .stats-total {
    display: inline-block;
    line-height: 20px
}

.timeline-likes .stats-icon {
    float: left;
    margin-right: 5px;
    font-size: 9px
}

.timeline-likes .stats-icon+.stats-icon {
    margin-left: -2px
}

.timeline-likes .stats-text {
    line-height: 20px
}

.timeline-likes .stats-text+.stats-text {
    margin-left: 15px
}

.timeline-comment-box {
    background: #f2f3f4;
    margin-left: -25px;
    margin-right: -25px;
    padding: 20px 25px
}

.timeline-comment-box .user {
    float: left;
    width: 34px;
    height: 34px;
    overflow: hidden;
    border-radius: 30px
}

.timeline-comment-box .user img {
    max-width: 100%;
    max-height: 100%
}

.timeline-comment-box .user+.input {
    margin-left: 44px
}

.lead {
    margin-bottom: 20px;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.4;
}

.text-danger, .text-red {
    color: #ff5b57!important;
}
</style>
