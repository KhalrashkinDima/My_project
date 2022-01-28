<template>
  <div class=" col-10 col-md-8 col-lg-8 container-fluid">
    <div class="pt-2">
      <h4 class="text-center">
        Пьяный курсант львовской военной академии пошел в лес гулять и оказался
        в Польше
      </h4>
      <div class="h5 text-center">Рейтинг статьи:{{ count }}</div>
      <img src="@/components/img/new_1.jpg" class="d-block adv_pic img-fluid" />
      <span>
        Курсант Национальной академии сухопутных войск пошел гулять в лес и
        попал в Польшу. На момент инцидента 20-летний парень был пьян.
        Отмечается, что инцидент произошел 7 января возле села Лопушанка
        Самборского района. Украинским пограничникам сообщили, что пять человек
        незаконно перешли границу из Украины в Польшу. При этом троих
        нарушителей задержали польские пограничники. Нарушителями оказались
        граждане Турции. При этом еще двум мужчинам удалось сбежать в Украину. В
        связи с этим украинские пограничники с собаками отправились на поиски.
        Двух мужчин задержали на окраине села Лопушанка, они были без
        документов. В то же время один из мужчин был в военной форме и берцах.
        Им оказался бывший пограничник, 25-летний Марьян Павлюх. Вторым
        нарушителем оказался курсант 3 курса Национальной академии сухопутных
        войск Львова Василий Макар. В суде Макар рассказал, что 6 января вместе
        с Павлюхом всю ночь пили, а к утру решили прогуляться по лесу. По его
        словам, он был настолько пьян, что не помнит, где именно они гуляли и
        переходили ли границу, а помнит лишь, как их задержали пограничники
        возле церкви в селе Лопушанка, "при этом спустили собак". Офицер
        пресс-службы Львовского пограничного отряда Александра Кучковская
        заявил, что следствие еще должно установить, были ли двое украинцев
        организаторами переправки иностранцев в Польшу По решению судьи Оксаны
        Кшик, Макара признали виновным в незаконном пересечении границы и
        оштрафовал на 8500 гривень. Кроме того, такой же штраф придется
        заплатить Павлюху и трем гражданам Турции.
      </span>
      <div>
        Оценить новость
        <button @click="Rate(-1)" class="rate_button">
          <img src="@/components/img/dislike.png" class="rate_image" />
        </button>
        {{ count }}
        <button @click="Rate(+1)" class="rate_button">
          <img src="@/components/img/like.png" class="rate_image" />
        </button>
      </div>
      <div class="h5" id="Comment">
        <img
          src="@/components/img/comment.png"
          class="comments img-fluid"
          @click="show = !show"
        />
        <transition>
          <div class="comments" v-if="show">
            <div class="comment d-flex align-items-center" id="1">
              <div class="col-2 text-center align-items-center m-2">
                <img src="@/components/img/user-icon.png" class="user_icon" />
                User
              </div>
              <div
                class="col-10 comment-text ps-2 text-center align-items-center"
              >
                Насколько я понимаю, в Гелинджике абсолютно противоположная
                ситуация, люди боятся что государство начнет выкупать землю по
                заниженным ценам.
              </div>
            </div>
            <div class="comment d-flex align-items-center" id="1">
              <div class="col-2 text-center align-items-center m-2">
                <img src="@/components/img/user-icon.png" class="user_icon" />
                User 1
              </div>
              <div
                class="col-10 comment-text ps-2 text-center align-items-center"
              >
                Насколько я понимаю, в Гелинджике абсолютно противоположная
                ситуация, люди боятся что государство начнет выкупать землю по
                заниженным ценам.
              </div>
            </div>
            <div class="comment d-flex align-items-center" id="1">
              <div class="col-2 text-center align-items-center m-2">
                <img src="@/components/img/user-icon.png" class="user_icon" />
                User 2
              </div>
              <div
                class="col-10 comment-text ps-2 text-center align-items-center"
              >
                Насколько я понимаю, в Гелинджике абсолютно противоположная
                ситуация, люди боятся что государство начнет выкупать землю по
                заниженным ценам.
              </div>
            </div>
          </div>
          
        </transition>
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

