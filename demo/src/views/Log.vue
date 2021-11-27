<template>
  <div id="login">
    <el-container direction="vertical">
      <el-main id="loginContent">
        <el-row>
          <div :style="{width:'400px',margin:'150px auto'}">
            <div class="logo-title">Mqtt Log List</div>
            <ul>
                <li v-for="(item2, index) in items2" :key="item2.idx">
                  <span>{{ item2.text }}</span> 
                </li>
            </ul>
          </div>
        </el-row>
      </el-main>
      <el-footer>
        
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Loglist',

  data() {
    return {
      items2: [],
      year:'2018'
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  },
  created() {
    setInterval( this.getLogData, 12000 )
  },
  methods: {
  
    getLogData() {
       this.$ajax({
         method: 'GET',
         url: 'http://www.iot-fitone.com/techware'
       })
       .then( res => {
          
          var logobj = res.data
          var time2 = logobj.datetime
          var logstr = JSON.stringify(res.data)
          console.log(logstr)
          
          if( this.items2.length > 0 ) {
            
            var lastupdateobj = this.items2[this.items2.length-1]
            
            if( lastupdateobj.datetime != time2 ) {
              logobj.idx = this.items2.length + 1
              logobj.text = logstr
              this.items2.push(logobj)
              console.log(logobj)
            }
          
          } else {
            
            logobj.idx = this.items2.length + 1
            logobj.text = logstr
            this.items2.push(logobj)
            console.log(logobj)
          }
          
          console.log(logstr)
        })
    },  
  },
}
</script>

<style lang="scss" >
#login {
  font-family: PingFangSC-Regular;
height: auto;
  .el-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('./../assets/img/background.png') no-repeat;
    background-size: 100% 100%;
  }
  .logo-title {
    margin: 25px auto;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.65);
  }
  .text-align-left {
    text-align: left;
  }
  
  .el-button,
  .el-button:active,
  .el-button:focus,
  .el-button:hover {
    width: 100%;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    line-height: 16px;
    border-radius: 2px;
    background: #00cc99;
    border: #00cc99;

    &.hoverBtn {
      background: rgba(0, 204, 153, 0.85);
      border: rgba(0, 204, 153, 0.85);
    }
    &.is-disabled,
    &.is-disabled:active,
    &.is-disabled:focus,
    &.is-disabled:hover {
      background: rgba(0, 204, 153, 0.5);
      border: rgba(0, 204, 153, 0.5);
    }
    &.pressBtn {
      background: #04b98c;
      border: #04b98c;
    }
  }
  .el-footer {
    padding: 7px 0 0;
    background: rgba(255, 255, 255, 0.6);
    .presonal {
      letter-spacing: 0;
      .presonalTitle {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0;
        text-align: left;
      }
    }
    .address {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.35);
      letter-spacing: 0;
      text-align: center;
      line-height: 18px;
    }
  }
  .returnLine {
    width: 90%;
    margin: auto;
    border-top: 1px solid #eee;
  }
  .returnBack {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    padding: 0 15px 10px;
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.54);
      cursor: pointer;
    }
  }
}

.findContent {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  line-height: 14px;
  padding-bottom: 30px;
}

.forget {
  margin: 20px auto;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #29cb97;
  line-height: 14px;
  cursor: pointer;
}
</style>