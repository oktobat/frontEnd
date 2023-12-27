<template>
    <section>
       <div id="section_wrap">
           <div class="word">
               <h3>도서 포토후기</h3>
           </div>
           <PhotoReviewList />
           <PhotoReviewCreate />
        </div>
    </section>
</template>

<script>

export default {
  name: 'PhotoReviewView',
}

</script>

<style scoped>
section {
	margin: 30px 0;
	}

#section_wrap {
	max-width: 1200px;
	margin: 0 auto;
	}

#section_wrap .word {
	max-width: 1024px;
	margin: 0 auto;
	text-align: center;
	}

</style>