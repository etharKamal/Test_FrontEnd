<template>
  <div>
    
<b-container class="bv-example-row">
<div>
  <!-- Image and text -->
  <b-navbar variant="faded" type="light" >
    <b-navbar-brand href="#">
    </b-navbar-brand>
<b-navbar-nav class="ml-auto">
       
        
</b-navbar-nav>
  </b-navbar>


  <b-row class="text-center">
    <b-col>   
      
    <b-card position: sticky title="Hello Admin" header-tag="header" footer-tag="footer" b-icon icon="power" aria-hidden="true">
                  <b-icon icon="emoji-laughing" aria-hidden="true"></b-icon> 

      
      <b-card-text>
</b-card-text>
<b-form @submit="onSubmit"  v-if="show" @submit.stop.prevent >  
      <b-form-group id="input-group-2" label="Enter Your User Name:" label-for="input-2">
             <b-row>
<b-col>

        <b-form-input
          id="input-2"
          v-model="form.UserName"
          required
          placeholder="User Name"
        >
        </b-form-input>
</b-col>
             </b-row>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter Your Password:" label-for="input-2">
             <b-row>
<b-col>
    <b-form-input 
    
    type="password" 
    id="text-password" 
    aria-describedby="password-help-block" 
    v-model="form.password"
    required
    placeholder="password"
     >
       
    </b-form-input>
             <!-- <b-icon icon="  eye-slash" aria-hidden="true" @click="hidePassword()" ></b-icon>  -->

    </b-col>
  </b-row>
  <b-row>
    
      <!-- <b-link href="forgetPassword"> Forget Password?</b-link>-->
    
     </b-row>
             
      </b-form-group>
            <b-button type="submit" style="background:#f05623; width:150px;" pill block >Login</b-button>

</b-form>
    </b-card>
    </b-col>
    <b-col cols="7">     
       <img src ="../assets/img.jpg" fluid alt="Kitten" position: sticky/>
</b-col>
  </b-row>
</div>
</b-container>
  </div>
  
</template>

<script> 
import img from '../assets/img.jpg'

import axios from "axios";
import VueRouter from 'vue-router';
import store from "@/store";
 export default {
  data() {
      return {
        
        form: {
          UserName: '',
          password:'',
          checked: []
        },
        show: true
      }
        
    },
    routes: [
  {
    name: 'user' ,
     meta: {
      requiresAuth: true
    }
  }],
  
    methods: {
    
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
       
        var form_data = new FormData()
        for(var key in this.form) {
          form_data.append(key, this.form[key])
        }

       axios.post('http://localhost:8081/api/admin', form_data/*, 
       {
         headers:{
         'content-type': 'multipart/form_data'
         }
       }*/
       )
      
        .then((response)=> {
       
      if ((response.data) == "Admintruetrue"  && this.$router.path !== '/') {
              //this.$store.user =  (this.UserName && this.password);
                          this.$router.push('/user')

               // this.$router.push("/")
           //  window.location.href = 'user'

                  
         }
         else 
        if ((response.data) == "usertruefalse"  ) {
          //  this.$store.user = (this.UserName && this.password);
               this.$router.push("drivers")
              //window.location.href= 'drivers'
          
         }
        
        })
        
        .catch( error=> {
          this.makeToast("danger","Wrong user name or password")
        });
       
      },
           makeToast(variant = "null", massage = "null") {
        
        this.$bvToast.toast( massage, {
          title: ` ${variant || 'Message'}`,
          variant: variant,
          solid: true
        })
      },
       noteMsg(color, msg) {
        this.$bvToast.toast(msg, {
          title: 'System message',
          variant: color,
          solid: true
        })
      },
      toFormData(obj) {
        var form_data = new FormData()
        for(var key in obj) {
          form_data.append(key, obj[key])
        }
        return form_data
      }
    }
 }

  </script>