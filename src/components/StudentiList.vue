<template>
    <div>
        <StudentSingle v-for="student in studenti" 
			:key="student.id" :student="student"/>
    </div>
</template>


<script>
import StudentSingle from '@/components/StudentSingle.vue';
// import { mapActions, mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
    name: 'StudentiList',


    components: {
        StudentSingle
    },


    data() {
        return {
            studenti: []
        }
    },
   
    props: {
        studentiIDs: Array
    },
     methods: {
      ...mapActions([
        'getStudent'
      ])
    },

    watch: {
        studentiIDs(nVal) {
            this.studenti = [];
            nVal.map( obj => {
                 this.getStudent(obj.id)
              .then( student => this.studenti.push(student) );

            });
        }
    },
     mounted() {
        this.studentiIDs.map( obj => {
             this.getStudent(obj.id)
              .then( student => this.studenti.push(student) );

        });
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-family: "Gloock", serif;
  text-align: center;
}
</style>