<!--百度地图-->
<template>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="never" class="mapBox1">
          <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
            <el-button class="button" @click="setScreenfull" icon="el-icon-zoom-in" circle></el-button>
            <!-- 控件将定位到地图的右上角 -->
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <!-- 平移缩放组件 -->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <!-- 缩略图 -->
            <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
            <!-- 定位 -->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true"
                            :autoLocation="true"></bm-geolocation>
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
                         anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            <!-- 示例位置 -->
          </baidu-map>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
  import screenfull from 'screenfull'
  import BaiduMap from 'vue-baidu-map'
  import Vue from 'vue'

  Vue.use(BaiduMap, { 
    ak: 'gsAiEuMhdNRkSiPG89eCKNjHx6hINNNm'
    // 我自己申请的钥匙 ak 'QFgFQorrB84maOZh0pPGC8kUiP0mGIhx'
  })
  export default {
    data () {
      return {
        center: {
          lng: 0,
          lat: 0
        },
        zoom: 3
      }
    },
    methods: {
      setScreenfull () {
        const element = document.querySelector('.map')
        if (!screenfull.isEnabled) {
          // 如果不允许进入全屏，发出不允许提示
          this.$message({
            message: '暂不不支持全屏',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle(element)
      },
      // 百度地图
      handler ({
        BMap,
        map
      }) {
        map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
        this.pt = new BMap.Point(116.117, 39.909)
        // 中心点
        this.center.lng = 108.287
        this.center.lat = 22.87
        this.zoom = 16
      }
    }
  }
</script>

<style scoped>
  /* 深度作用选择器  */
  .el-card /deep/ .el-card__body {
    padding: 0px;
  }
  .mapBox1 {
    line-height: 460px;
  }
  .map {
    opacity: 0.9;
    height: 460px;
  }
  .button {
    z-index: 2;
    position: absolute;
    top: 30%;
    left: 88%;
  }
</style>
