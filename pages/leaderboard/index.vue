<template>
    <div align="center">
        <div class="leaderboard" align="left">
        <h1 class="trophy">
            <span>Top 5</span> <font-awesome-icon class="trophy" icon="trophy"/> Leaderboard
        </h1>
        <ol>
            <li v-for="score in scores" :key="score.id">
                <mark>{{score.display_name}}</mark>
                <small>{{score.score}}</small>
            </li>
        </ol>
        </div>
    </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.post(`/tasks/getLeaderboard`)
    return { scores: data }
  }
}
</script>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
}
.trophy {
    color: #ECA72C !important;
}

.leaderboard {
  position: relative;
  margin: 8px;
  width: 65%;
  height: 308px;
  background: linear-gradient(to bottom, #3a404d, #181c26);
  border-radius: 10px;
  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);
}
.leaderboard h1 {
  font-size: 24px;
  color: #e1e1e1;
  padding: 12px 13px 6px;
}

.leaderboard h1 svg {
  width: 25px;
  height: 26px;
  position: relative;
  top: 3px;
  margin-right: 6px;
  vertical-align: baseline;
}
.leaderboard ol {
  padding-left: 5px;
  /* counter-reset: leaderboard; */
}
.leaderboard ol li {
  position: relative;
  z-index: 1;
  font-size: 14px;
  list-style-type: none;
  counter-increment: leaderboard;
  padding: 12px 10px 12px 50px;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1, 1);
          transform: translateZ(0) scale(1, 1);
}
.leaderboard ol li::before {
  content: counter(leaderboard);
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: rgb(165, 116, 32);
  background: #fff;
  border-radius: 20px;
  text-align: center;
}
.leaderboard ol li mark {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px 8px 10px 50px;
  margin: 0;
  background: none;
  color: #fff;
}
.leaderboard ol li mark::after {
  left: auto;
  right: -9px;
  border-left: none;
  border-right: 10px solid transparent;
}
.leaderboard ol li small {
  font-size: 15px;
  position: relative;
  z-index: 2;
  display: block;
  text-align: right;
  color: rgb(148, 147, 147);
}
.leaderboard ol li::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(201, 141, 38);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);
  transition: all .3s ease-in-out;
  opacity: 0;
}
.leaderboard ol li:nth-child(1) small {
  font-size: 21px;
  color: rgb(194, 194, 194);
}
.leaderboard ol li:nth-child(1):hover small {
  color: rgb(248, 248, 248);
}
.leaderboard ol li:nth-child(1):hover::after small {
  color: rgb(225, 225, 225) !important;
}
.leaderboard ol li:nth-child(1) mark {
  font-size: 21px;
  padding: 12px 10px 12px 50px;
}
.leaderboard ol li:hover {
  z-index: 2;
  overflow: visible;
}
.leaderboard ol li:hover small {
  color: rgb(225, 225, 225);
}
.leaderboard ol li:hover::after {
  opacity: 1;
  -webkit-transform: scaleX(1.02) scaleY(1);
          transform: scaleX(1.02) scaleY(1);
}
.leaderboard ol li:hover mark::before, .leaderboard ol li:hover mark::after {
  opacity: 1;
  transition: all .35s ease-in-out;
}

.the-most {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 50vw;
  max-width: 200px;
  padding: 10px;
}
.the-most img {
  max-width: 100%;
}
</style>
