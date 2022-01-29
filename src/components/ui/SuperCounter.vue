   <template>
  <div class="d-block text-center pt-2 pb-4">
    Оценить новость
    <button @click="count--" class="rate_button">
      <img src="@/components/img/dislike.png" class="rate_image" />
    </button>
    {{ count }}
    <button @click="count++" class="rate_button">
      <img src="@/components/img/like.png" class="rate_image" />
    </button>
  </div>
</template>     
        

<script>
export default {
  data () {
    return {
      count:"0",
    }
  },
/*   name: "SuperCounter",
  methods: {
    Dec() {
      this.$store.commit('counter/DecCounter');
    },
    Inc() {
      this.$store.commit('counter/IncCounter');
    },
  },
  computed: {
    ShowCounter() {
      return this.$store.getters['counter/GetCount'];
    },
  },
    mounted: function() {
    this.count();
  }, */
};
</script>
