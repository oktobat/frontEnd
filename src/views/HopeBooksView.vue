<template>
<div>
<section>
  <div id="section_wrap">
      <div class="word">
          <h3>HOPE BOOKS</h3>
      </div>
      <div class="book_list">
          <table>
              <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
              </colgroup>
              <thead>
              <tr>
                  <th>요청회원(아이디)</th>
                  <th>도서명</th>
                  <th>저자</th>
                  <th>발행처</th>
                  <th>발행연도</th>
                  <th>입고</th>
                  <th>삭제</th>
              </tr>
              </thead>
              <tbody>
                  <tr v-for="item in result" v-bind:key="item.hb_no">
                      <td>{{item.u_m_name}}</td>
                      <td>{{item.hb_name}}</td>
                      <td>{{item.hb_author}}</td>
                      <td>{{item.hb_publisher}}</td>
                      <td>{{item.hb_publish_year}}</td>
                      <td>{{item.hb_result}}</td>
                      <td><button type="type" @click="fnDeleteItem(item.hb_no)">삭제</button></td>
                  </tr>
              </tbody>

          </table>
      </div>
      <div class="btn">
        <router-link to="/getHopeBookForm">글쓰기</router-link>
      </div>
  </div>

</section>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HopeBooksView',
  data(){
    return {
      result:[ ],
      answer : false, 
    }
  },
  mounted(){
    this.getData();
  },
  watch : {
    
  },
  methods:{
    getData(){
      axios.get('http://localhost:8090/api/getHopeBooks')
      .then((response)=>{
          console.log(response)
          this.result = response.data
      })
      .catch((error)=>{
          console.log('Error fetching data:', error);
      })
    },
    fnDeleteItem(hbNo){
        this.answer = confirm("정말로 삭제하시겠습니까?")
        if (this.answer) {
            axios.get('http://localhost:8090/api/deleteHopeBook',{
        params : {hbNo : hbNo },
        responseType: "text",
        headers : { Accept : "text/html; charset=utf-8" }
      })
        .then((response) => {
          console.log(response);
          if (response) {
              this.getData();
          }
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
        } else {
          return false;
        }
    }
  }
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
	text-align: center;
	}

#section_wrap .book_list table {
	width: 100%;
	border-collapse: collapse;
	font-size: .9em;
	}

#section_wrap .book_list table thead tr th {
	border: 1px solid #e1e1e1;
	padding: 10px 3px;
	text-align: center;
	color: #fff;
	background-color: #a5a5a5;
	}

#section_wrap .book_list table col:nth-child(1) { width:150px }
#section_wrap .book_list table col:nth-child(2) { width:auto }
#section_wrap .book_list table col:nth-child(3) { width:150px }
#section_wrap .book_list table col:nth-child(4) { width:150px }
#section_wrap .book_list table col:nth-child(5) { width:150px }
#section_wrap .book_list table col:nth-child(6) { width:150px }
#section_wrap .book_list table col:nth-child(7) { width:150px }

#section_wrap .book_list table tbody tr:nth-child(2n-1) {
	background-color: #f3f3f3;
}

#section_wrap .book_list table tbody tr td {
	border: 1px solid #e1e1e1;
	padding: 10px 3px;
	text-align: center;
	}
.btn { text-align:center; margin:20px 0 }
</style>