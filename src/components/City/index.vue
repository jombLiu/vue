<template>
  <div class="city_content">
    <div class="city_list" ref="city_letter">
      <div>
        <h3>热门城市</h3>
        <ol>
          <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
        </ol>
      </div>
      <div v-for="item in cityList" :key="item.index">
        <h2 class="index_name">{{item.index}}</h2>
        <ul>
          <li v-for="city in item.list" :key="city.id">{{city.nm}}</li>
        </ul>
      </div>
    </div>

    <div class="city_index">
      <div
        v-for="(item, index) in cityList"
        :key="item.index"
        @click="gotoIndex(index)"
      >{{item.index}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      hotList: [],
      cityList: []
    };
  },
  mounted() {
    this.axios.get("/api/cityList").then(res => {
      const msg = res.data.msg;
      if (msg === "ok") {
        const cities = res.data.data.cities;
        const { hotList, cityList } = this.formatCityList(cities);
        this.hotList = hotList;
        this.cityList = cityList;
      }
    });
  },
  methods: {
    formatCityList(cities) {
      const cityList = [];
      const hotList = [];
      cities.forEach(city => {
        let firstLetter = city.py.substring(0, 1).toUpperCase();
        if (cityList.filter(item => item.index === firstLetter).length) {
          cityList.forEach(el => {
            if (el.index === firstLetter) {
              el.list.push(city);
            }
          });
        } else {
          cityList.push({
            index: firstLetter,
            list: [city]
          });
        }

        if (city.isHot) {
          hotList.push(city);
        }
      });
      cityList.sort((a, b) => {
        return a.index > b.index ? 1 : -1;
      });
      return { hotList, cityList };
    },
    gotoIndex(index) {
      const h2 = this.$refs.city_letter.getElementsByTagName("h2");
      this.$refs.city_letter.scrollTop = h2[index].offsetTop - 85;
    }
  }
};
</script>

<style scoped>
.city_content {
  color: #333;
  flex: 1;
}
.city_list {
  height: 600px;
  overflow: auto;
}
.city_content h2,
h3 {
  line-height: 25px;
  background-color: #ffa;
  padding: 0 15px;
}
.city_content li {
  padding: 6px 12px;
}
.city_index {
  position: fixed;
  top: 80px;
  right: 0;
  background-color: #ddd;
  width: 35px;
  text-align: center;
  line-height: 25px;
  font-size: 16px;
}
ol li {
  display: inline-block;
  line-height: 30px;
  width: 100px;
  text-align: center;
  padding: 0 !important;
  background-color: #eee;
  margin: 6px 12px;
}
</style>