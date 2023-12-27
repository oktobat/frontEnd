<template>
<section>

    <div id="section_wrap">

        <div class="banners">
            <div class="large_banner">
                <a href="#none"><img src="/img/user/large_banner.jpg"></a>
            </div>
            <div class="small_banners">
                <ul>
                    <li><a href="#none"><img src="/img/user/small_banner1.png"></a></li>
                    <li><a href="#none"><img src="/img/user/small_banner2.png"></a></li>
                    <li><a href="#none"><img src="/img/user/small_banner3.png"></a></li>
                    <li><a href="#none"><img src="/img/user/small_banner4.png"></a></li>
                </ul>
            </div>

        </div>

    </div>

</section>
</template>

<script>
export default {
  name: 'HomeView',

}
</script>

<style scoped>
section {
	margin: 30px 0;
	}

#section_wrap {
	width: 1200px;
	margin: 0 auto;
	}

#section_wrap .banners .large_banner {
	width: 1024px;
	margin: 0 auto;
	}

#section_wrap .banners .small_banners {
	width: 1024px;
	margin: 0 auto;
	}

#section_wrap .banners .small_banners ul {
	overflow: hidden;
	}

#section_wrap .banners .small_banners ul li {
	width: 250px;
	margin-right: 8px;
	float: left;
	}

#section_wrap .banners .small_banners ul li:last-child {
	margin-right: 0;
	}
</style>