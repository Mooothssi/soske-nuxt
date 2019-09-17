<template>
      <section class="home_banner_area">
      <div class="banner_inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner_content text-center">
                <p class="text-uppercase  text-white">
                  Proudly presents
                </p>
                <h2 class="featured-heading mt-4 mb-5">
                  SOSKE for 8<sup>th</sup> SOS Camp
                </h2>
                <b-row>
                  <b-col align="right">
                    <router-link to="/howto/setup"><b-button class="primary-btn2 mb-3 mb-sm-0" variant="primary">Get started</b-button></router-link>
                  </b-col>
                  <b-col align="left">
                    <a href="/problems" no-prefetch><b-button class="primary-btn ml-sm-3 ml-0"  variant="warning">See problems</b-button></a>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  components: {
  },
  layout: 'home'
}
</script>

<style>
.featured-heading {
  color: #ECA72C !important;
}
.home_banner_area {
  z-index: 1;
  min-height: 900px;
  position: relative;
  background: url(/img/jake-banner.jpg) no-repeat center;
  background-size: cover; }
  .home_banner_area .banner_inner {
    position: absolute;
    top: 40%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 10;
    width: 100%; }
    @media (max-width: 991px) {
      .home_banner_area .banner_inner {
        top: 50%; } }
    .home_banner_area .banner_inner .banner_content h2 {
      font-size: 48px;
      font-weight: 500; }
    .home_banner_area .banner_inner .banner_content p {
      font-size: 20px;
      color: #002347;
      font-weight: 500; }

.blog_banner {
  min-height: 780px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 0px; }
  .blog_banner .banner_inner {
    background: #04091e;
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 780px;
    z-index: 1; }
    .blog_banner .banner_inner .overlay {
      background: url(/img/cat/intro.png) no-repeat center center;
      opacity: 0.5;
      height: 125%;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      z-index: -1; }
    .blog_banner .banner_inner .blog_b_text {
      max-width: 700px;
      margin: auto;
      color: #fff;
      margin-top: 40px; }
      .blog_banner .banner_inner .blog_b_text h2 {
        font-size: 60px;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
        line-height: 66px;
        margin-bottom: 15px; }
      .blog_banner .banner_inner .blog_b_text p {
        font-size: 16px;
        margin-bottom: 35px; }
      .blog_banner .banner_inner .blog_b_text #ffffff_bg_btn {
        line-height: 42px;
        padding: 0px 45px; }

.banner_area {
  position: relative;
  background: url(/img/jake-banner.jpg) no-repeat center center;
  z-index: 1;
  min-height: 392px;
  padding-top: 0 !important; }
  .banner_area .banner_inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 392px;
    z-index: 1; }
    .banner_area .banner_inner .overlay {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(177, 122, 29, 0.6); }
    .banner_area .banner_inner .banner_content {
      position: relative;
      z-index: 2;
      color: #fff; }
      .banner_area .banner_inner .banner_content h2 {
        color: #fff;
        font-size: 45px;
        margin-bottom: 0px; }
      .banner_area .banner_inner .banner_content .page_link {
        display: inline-block;
        padding: 7px 20px; }
        .banner_area .banner_inner .banner_content .page_link a {
          font-size: 15px;
          color: #fff;
          font-family: "Roboto", sans-serif;
          margin-right: 20px;
          position: relative;
          text-transform: capitalize; }
          .banner_area .banner_inner .banner_content .page_link a:before {
            content: "/";
            position: absolute;
            right: -15px;
            top: 50%;
            transform: translateY(-50%); }
          .banner_area .banner_inner .banner_content .page_link a:last-child {
            margin-right: 0px; }
            .banner_area .banner_inner .banner_content .page_link a:last-child:before {
              display: none; }
</style>
