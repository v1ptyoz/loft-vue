<template>
  <div class="account">
    <x-header></x-header>
    <div class="container">
      <div class="account__wrapper">
        <div class="account__left">
          <h2>My profile</h2>
          <div class="account__user">
            <div class="account__avatar">
              <user :src="user.avatar_url"></user>
            </div>
            <div class="account__info">
              <div class="account__nickname">{{ user.login }}</div>
              <div class="account__stat">
                <span>{{ user.collaborators }}</span> reposts <span>{{ user.followers }}</span> <a href="#" @click.prevent="$router.push({name: 'followers'})">watchers</a>
              </div>
              <div class="account__fullname">{{ user.name }}</div>
            </div>
          </div>
        </div>
        <div class="account__right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from "../../user/user";
import xHeader from "../../x-header/x-header";
import useUser from "../../composables/useUser";
export default {
  name: "profile",
  components: {
    user,
    xHeader,
  },
  setup() {
    return {
      ...useUser(),
    };
  },
};
</script>

<style lang="scss" scoped>
.account__wrapper {
  display: flex;
  margin-top: 40px;
}
.account__left {
  width: 33%;
}
.account__right {
  flex: 1;
  position: relative;
}
.account__user {
  display: flex;
  align-items: center;
  gap: 20px;
}
.account__avatar {
  width: 90px;
  height: 90px;
}
.account__info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.account__nickname {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #262626;
}
.account__stat {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #404040;
  span {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #262626;
    font-weight: bold;
    &:last-child {
      margin-left: 10px;
    }
  }
  a {
    text-decoration-line: underline;
    color: #31ae54;
  }
}
.account__fullname {
  font-size: 14px;
  line-height: 17px;
  color: #9e9e9e;
}
</style>
