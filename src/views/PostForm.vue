<template>
  <div>
    <div class="container-fluid align-items-center">
      <div class="pt-2 pb-2">
        <h4 class="text-center">
          {{ ThisId.title }}
        </h4>
        <span>
          <img :src="ThisId.url" class="d-block adv_pic img-fluid" />
        </span>
        <div>
          {{ ThisId.newsText }}
        </div>
        Оценить новость
        <button @click="Dec" class="rate_button">
          <img src="@/components/img/dislike.png" class="rate_image" />
        </button>
        {{ ThisId.count }}
        <button @click="Inc" class="rate_button">
          <img src="@/components/img/like.png" class="rate_image" />
        </button>
      </div>
      <div class="text-center p-3">
        <button
          class="btn btn-secondary"
          @click="OpenModal"
          :id="ThisId.id"
          v-if="AdminTrue"
        >
          Редактировать пост
        </button>
      </div>
      <modal-redact
        v-if="moduleRedactShown"
        @close="CloseRedact"
        v-bind:postRedact="ThisId.id"
      />
<!--       <div class="p-2"  v-for="comment in CommentsList">
        <div class="h5 text-center">Комментарии</div>
        <div class="comments">
          <div class="comment d-flex align-items-center">
            <div class="col-2 text-center align-items-center m-2">{{comment.author}}</div>
            <div
              class="col-10 comment-text ps-2 text-center align-items-center"
            >
              {{comment.text}}
            </div>
          </div>
        </div>
      </div> -->
      <div class="comment_form p-2 text-center mb-2 text-light">
        <my-input label="Желаете оставить комментарий?" v-model="commentText" />
        <button class="btn btn-secondary mt-4" @click="CommentSend">
          Оставить комментарий
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import ModalRedact from "../components/ModalRedact.vue";
export default {
  components: { ModalRedact },
  data() {
    return {
      moduleRedactShown: false,
      show: false,
      commentText: "",
      authorName: "",
      commentDate: "",
      postId: "",
    };
  },
  computed: {
    ...mapGetters({
      GetPostById: "posts/GetPostById",
      GetCommentId: "comments/GetCommentId",
      ReturnName: "users/ReturnName",
      GetPostComments: "comments/GetPostComments",
    }),
    ThisId() {
      return this.GetPostById(this.$route.params.id);
    },
    ThisCommentId() {
       return this.GetCommentId(this.$route.params.id);
    },
    AdminTrue() {
      return this.$store.getters["users/isAdmin"];
    },
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
    },
/*     WhatYourName() {
      return this.ReturnName;
    }, */
      CommentsList() {
      return this.GetPostComments(this.$route.params.id);
    },
  },

  methods: {
    Inc() {
      if (this.AuthTrue !== true) {
        alert("Зарегистрируйтесь чтобы иметь возможность оценивать новости!");
        return null;
      }
      console.log(this.$route.params.id);
      this.$store.dispatch("posts/IncreaseCount", this.$route.params.id);
    },
    Dec() {
      if (this.AuthTrue !== true) {
        alert("Зарегистрируйтесь чтобы иметь возможность оценивать новости!");
        return null;
      }
      this.$store.dispatch("posts/DecreaseCount", this.$route.params.id);
    },
    CloseRedact() {
      this.moduleRedactShown = false;
    },
    OpenModal() {
      this.moduleRedactShown = true;
    },
    CommentSend() {
      if (this.AuthTrue !== true) {
        this.$router.push("/RegistrationForm");
        return null;
      }
      this.$store.dispatch("comments/CreateComment", {
        authorName: "admin",
        commentText: this.commentText,
        date: new Date().toString(),
        postId: this.ThisId.id,
        commentId: this.ThisCommentId,
      });
    },
  },
};
</script>
<style>
.comments {
  max-height: 80px;
}
.user_icon {
  max-height: 50px;
}
.comment_form {
  background: linear-gradient(#747677, #3f5062);
}
.comment_form {
  border-radius: 10px;
}
</style>

