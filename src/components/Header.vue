<template>
<header>

    <div id="header_wrap">
        <div class="menu">
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/getHopeBooks">희망도서목록</router-link> |
            </nav>
        </div>
        <div class="title">
            <h3>한국 도서관 - 도서 대여 서비스</h3>
        </div>
        <div style="text-align:center; margin:30px; display:flex; justify-content:center; align-items:center">
            <p><span id="wicon"><img v-bind:src="src" /></span></p>
            <p style="margin:0 10px">(<span id="weather">{{ weatherText }}</span>)</p>
            <p style="margin:0 10px">최저기온: <span id="mintemp">{{ mintemp }}℃</span></p>
            <p style="margin:0 10px">최고기온: <span id="maxtemp">{{ maxtemp }}℃</span></p>
            <p style="margin:0 10px">습도 : <span id="humidity">{{ humidity }}%</span></p>
        </div>
    </div>
</header>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Header',
        data(){
            return {
               weather : "",
               weatherText : "",
               src : "",
               mintemp : "",
               maxtemp : "",
               humidity : "",
            }
        },
        created(){
            this.getData();
        },
        methods : { 
            getData() {
                axios.get("http://localhost:8090/weather/getPosition", {
                params : {address : "" },
                responseType: "text",
                headers : { Accept : "text/html; charset=utf-8" }
            })
            .then(response=>{
                console.log(response);
                const data = JSON.parse(response.data);
                this.weather = data.weather[0].main;
                console.log(this.weather);
        if (this.weather=="Clear") {
        	this.weatherText = "맑음"
        } else if (this.weather=="Clouds") {
        	this.weatherText = "구름"
        } else if (this.weather=="Mist" || this.weather=="Smoke" || this.weather=="Haze" || this.weather=="Dust" || this.weather=="Fog" || this.weather=="Sand" || this.weather=="Dust" || this.weather=="Ash" || this.weather=="Squall" || this.weather=="Tornado"){
        	this.weatherText = "안개"
        } else if (this.weather=="Rain"){
        	this.weatherText = "비"
        } else if (this.weather=="Drizzle"){
        	this.weatherText = "이슬비"
        } else if (this.weather=="Snow"){
        	this.weatherText = "눈"
        } else if (this.weather=="Thunderstorm"){
        	this.weatherText = "폭풍우"
        }
        this.src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'.png';
        this.mintemp = Math.round(data.main.temp_min - 273.15)
        this.maxtemp = Math.round(data.main.temp_max - 273.15)
        this.humidity = data.main.humidity
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });            
        }
        }
    }
</script>

<style scoped>
header {
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #d9d9d9;
	}

#header_wrap {
	max-width: 1200px;
	margin: 0 auto;
	}

#header_wrap .menu {
	height: 30px;
	line-height: 30px;
	border-bottom: 1px solid #d9d9d9;
	}

#header_wrap .menu nav {
	display:flex; justify-content:flex-end;
	}

#header_wrap .menu nav a {
	margin-right: 5px;
	margin-left: 25px;
	font-weight: bold;
      color: #2c3e50;
	}

#header_wrap .menu nav a.router-link-exact-active {
  color: #42b983;
}

#header_wrap .title {
	height: 80px;
	line-height: 80px;
	text-align: center;
	}
</style>