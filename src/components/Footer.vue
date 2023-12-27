<template>

<footer>

    <div id="footer_wrap">

        <div class="office_info">
            Copyright ©OFFICE Corp.All Rights Reserved.
        </div>

    </div>

</footer>

</template>

<script>

export default {
  name: 'Footer',
}

</script>

<style scoped>
footer {
	width: 100%;
	background-color: #2e2e2e;
	border-top: 1px solid #d9d9d9;
	}

#footer_wrap {
	max-width: 1200px;
	margin: 0 auto;
	}

#footer_wrap .office_info {
	height: 100px;
	line-height: 100px;
	text-align: center;
	color: #f2f2f2;
	font-size: .9em;
	}
</style>