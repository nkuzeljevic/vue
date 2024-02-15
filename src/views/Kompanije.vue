<template>
    <div>
        <Header title="Kompanije u kojima rade naši diplomci"/>

        
        <b-pagination
          v-model="currentPage"
          :total-rows="this.kompanije.length"
          :per-page="perPage"
          aria-controls="tabelaKompanije"
        ></b-pagination>

        <b-table
        v-if="kompanije"
          striped
          hover
          :items="this.kompanije"
          :fields="fields"    
          :per-page="perPage"
          :current-page="currentPage"
          id="tabelaKompanije">
            <template #cell(logo)="data">
              <img v-if="data.value" :src="`${data.value}`" />
            </template>
        </b-table>

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex';


export default {
  name: 'Kompanije',
  components: {
    Header
  },
  data(){
    return{
      perPage:10,
      currentPage: 1,
      fields: [
        {
          key: "naziv",
          sortable: true,
          label: "Kompanija"
        },
        {
          key: "logo",
          label:"",
          formatter: value=>{
            if(value)
              return "http://alumni.raf.edu.rs/images/kompanije/"+value;
		else return null;
          }
        }

      ]

    }
  },
  computed:{
   ...mapState([
      'kompanije'
    ])

  },
   methods: {
      ...mapActions([
        'fetchKompanije'
      ])
  },

  mounted(){
    this.fetchKompanije();
  }
}
</script>


<style scoped>
.table{
    text-align:left;
}

</style>