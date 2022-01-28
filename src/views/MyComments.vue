<template>
  <div class="col-md-8 col-lg-8 container-fluid">
    <div class="pt-2">
      <h4 class="text-center">
        Пьяный курсант львовской военной академии пошел в лес гулять и оказался
        в Польше
      </h4>
      <div class="comments">
        <div class="comment d-flex align-items-center" id="1">
          <div class="col-2 text-center align-items-center m-2">
            <img src="@/components/img/user-icon.png" class="user_icon" />
            User
          </div>
          <div class="col-10 comment-text ps-2 text-center align-items-center">
            Насколько я понимаю, в Гелинджике абсолютно противоположная
            ситуация, люди боятся что государство начнет выкупать землю по
            заниженным ценам.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      show: false,
    };
  },
  methods: {
    Rate(value) {
      this.count = this.count + value;
    },
  },
};
</script>
<style>
.rate_button {
  height: 50px;
  width: auto;
  border: 0;
}
.rate_image {
  width: 50px;
  height: auto;
}
.comments {
  max-height: 80px;
}
.user_icon {
  max-height: 50px;
}
</style>

