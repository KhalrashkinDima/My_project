import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id: "1",
        title:
          "Пьяный курсант львовской военной академии пошел в лес гулять и оказался в Польше",
        src: " https://images.unian.net/photos/2021_02/1613029788-8331.jpg?0.905986083096614",
        count: "10",
        newText: `Курсант Национальной академии сухопутных войск пошел гулять в лес и
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
      заплатить Павлюху и трем гражданам Турции. `,
      },
      {
        id: "2",
        title:
          "Они были женщинами: в Каталонии помиловали казненных за колдовство 400 лет назад",
        src: " https://images.unian.net/photos/2021_06/1623332236-3575.jpg?0.4796588814834679",
        count: "20",
        newText: `Парламент Каталонии принял резолюцию о помиловании до тысячи человек,
        которых казнили за колдовство около 400 лет назад.
        Такая инициатива последовала за принятием аналогичных документов в Шотландии,
        Швейцарии и Норвегии - эти страны поддержали манифест под названием "Они не были ведьмами,
        они были женщинами", который подписали более 100 европейских историков, сообщает Би-би-си.
        Историки подсчитали, что между 1580 и 1630 годами около 50 тыс. человек по всей Европе были
        приговорены к смертной казни за колдовство. Почти 80% осужденных составляли женщины.
        Однако Каталония была исключением, и охота на ведьм там продолжалась  вплоть до XVIII века.
        А первый европейский закон против колдовства был принят в 1424 году в каталонском городе Льейда.
        Некоторые каталонские деревни даже нанимали охотников за ведьмами. Одним из таких был Иоанн Казабрухас, 
        "работавший" в деревне Сайент. Его расследования и обвинения привели к казни 33 женщин. Когда позже инквизиция 
        обнаружила, что большинство женщин были невиновны, Казабрухаса сожгли на костре.
        Самый печально известный судебный процесс в Испании по обвинению в колдовстве прошел в деревне Сугаррамурди 
        в Наварре, где утверждалось, что мужчины и женщины, в том числе священники, занимались колдовством в большой
        пещере. До начала судебного процесса в 1609 году в соседнем Логроньо под подозрение попали в общей сложности 
        7 тыс. человек - поразительное число, учитывая, что даже сегодня в Сугаррамурди - всего около 230 жителей. 
        Две тысячи подозреваемых признались в колдовстве, почти три четверти из них были дети, но почти все позже 
        отказались от своих слов. В итоге было осуждено 11 человек, из которых пятеро умерли в тюрьме, пока ждали 
        казни. Остальные шестеро - четверо женщин и двое мужчин - были сожжены на костре.`,
      },
    ],
    id: "3",
  },
  mutations: {
    ADDPOST: (state, post) => {
      state.posts.push(post);
      console.log(state.posts);
    },
  },
  actions: {
    SAVEPOST : (state, post) => {
      state.commit('ADDPOST',post)
   },
  },
  modules: {
  },
  getters: {
    POSTS: state => {
      return state.posts;
    },
    GETPOSTBYID: state => id => {
      return state.posts.find(posts => posts.id === id);
    },
    GETID: state => {
      return state.id;
      state.id ++;
    },
  },
})
