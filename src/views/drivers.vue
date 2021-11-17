

<template>
<div>
  <!-- Image and text -->
  <b-navbar variant="faded" type="light" >
  
<b-navbar-nav class="ml-auto">
             
</b-navbar-nav>
  </b-navbar>
   <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
      
      </b-col>

      <b-col lg="6" class="my-1">
        
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          description="Leave all unchecked to filter on all data"
          class="mb-0">
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="PhoneNum">Phone Number</b-form-checkbox>
             <b-form-checkbox value="SimNum">Sim card Number</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>

    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      ref="table"
      :busy.sync="isBusy"
      :items="myProvider"

      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      @filtered="onFiltered"
    >
      <template v-slot:cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

     <template v-slot:cell(actions)="row">
        <b-col>
             <b-icon icon="pencil-square" @click="updateUser(row)"  scale="2" ></b-icon>
             <b-icon icon="trash" variant = "danger" @click="deleteUser(row)" scale="2" style ="margin-left:30px;">  scale="2" class="bg-info"></b-icon>
         </b-col>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
<b-row>
       
      <b-col sm="5" md="6" class="my-1">
          
        
       
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
      
</b-row>

    <b-modal
      id="modal-prevent-closing" hide-footer
      ref="modal"
      title="Insert driver,s Info"
      @show="resetModal"
      @hidden="resetModal"
    >
 
    <form @submit="onSubmit"  @submit.stop.prevent @hidden="resetModal">
  
        <b-form-group
          label="Driver Name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="form.driver_name"
            placeholder="Driver full name"
            :disabled = true
          ></b-form-input>
        </b-form-group>
               <b-form-group
          id="input-group-2" 
          label="Phone number" 
          label-for="input-2"      
          :disabled = true
          >
    <b-form-input    
    type="number" 
    id="input-live"  
    v-model="form.PhoneNum"
    required
    placeholder="phone number"
    :disabled = true
      
     >     
    
    </b-form-input>
     </b-form-group> 
    
         <b-form-group
          id="input-group-2" 
          label="Driver id" 
          label-for="input-2"      
          invalid-feedback="id is required"
          >
    <b-form-input    
    type="number" 
    id="text-password"  
    v-model="form.driver_id"
    required
    placeholder="Driver id"
    :disabled = true
     >     
    </b-form-input>
      </b-form-group>
  
        <input
            type= "hidden"
    v-model="form.cardWithdrawn"
          /> 
            <input
            type= "hidden"
    v-model="form.dateOfWithdrawal"
          /> 
           <input
            type= "hidden"
            v-model="form.id"
          />
           <input
            type= "hidden"
            v-model="form.simNum"
          /> 

      </form> 
      <form  @submit="onSubmit"  @submit.stop.prevent  @hidden="resetModal" >
      <b-form-group
          id="input-group-3" 
          label="SimCard Numer" 
          label-for="input-2"      
         :invalid-feedback="invalidFeedback2"
          :valid-feedback="validFeedback2"
          :state="state2"
          >
    <b-form-input    
    type="number" 
    id="text-password3"  
    v-model="formSim.simNum"
    required
    placeholder="SimCard number"
        :state="state2"
        
     >     
    </b-form-input>
      </b-form-group>
      <center>
       <b-button id="mybtn" type="submit" style="width:250px" 
          pill block >Add Sim</b-button>
</center>
        </form>
    </b-modal>
     <b-modal
      id="modal-prevent-closing2" hide-footer
      ref="modal"
      title="Update driver,s Info"
      @show="resetModal"
      @hidden="resetModal"
    >
    <form @submit="onSaveUpdate"  @submit.stop.prevent @hidden="resetModal">
       
        <b-form-group
          label="Driver Name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="formUdate.Driver_name"
            placeholder="Driver full name"
            :disabled = true
          ></b-form-input>
        </b-form-group>
           <b-form-group
          label="Driver id"
          label-for="name-input"
          
        >
          <b-form-input
            id="name-input"
            v-model="formUdate.Driver_id"
            placeholder="Driver id"
            :disabled = true
          ></b-form-input>
        </b-form-group>
         
             <b-form-group
          label="Driver Name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="formUdate.PhoneNum"
            placeholder="Driver Phone number"
            :disabled = true
          ></b-form-input>
        </b-form-group>
   
      <b-form-group
          id="input-group-3" 
          label="SimCard Number" 
          label-for="input-2"      
          :invalid-feedback="invalidFeedback2"
          :valid-feedback="validFeedback2"
          :state="state2"
          >
    <b-form-input    
    type="number" 
    id="text-password3"  
    v-model="formUdate.SimNum"
    required
    placeholder="SimCard number"

     >     
    </b-form-input>
      </b-form-group>
    
          <input
            type= "hidden"
            v-model="formUdate.id"
          />
        <b-form-group>
     
        <b-row>
        <label style = "font-style:bold;">Is Card Withdrawn?</label>
        </b-row>
        <b-row>
          
      <b-form-radio v-model="formUdate.cardWithdrawn" name="some-radios" value="true">Yes</b-form-radio>
      <b-form-radio  v-model="formUdate.cardWithdrawn" name="some-radios" value="false">No</b-form-radio>
             </b-row>
    </b-form-group>
      <b-row>
        <b-col>
          <b-button id="mybtn3" type="Save" size = "sm"  
          pill block @click: onSaveUpdate>save</b-button>
          </b-col>
      </b-row>
    
    </form>
     </b-modal>
<div>
   <b-overlay :show="busy" rounded="lg" opacity="0.6">
      <template v-slot:overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <b-spinner type="grow" variant="dark"></b-spinner>
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <!-- We add an SR only text for screen readers -->
          <span class="sr-only">Please wait...</span>
        </div>
        </template>
   </b-overlay>
        </div>
     
     <div>
 <!-- The modal -->
 
        
 
  <b-modal id="my-modal" 
    hide-footer
  
  >
      <form @submit="deleteUser"  @submit.stop.prevent  @hidden="resetModal">
  are you sure you want to delete user?
  <b-row>
    <b-col>
    <b-button size="sm" id="mybtn" type="delete" variant="danger" > Delete 
        </b-button>
          <b-button size="sm" id="mybtn"  style="margin-left:10px;"> cancel 
        </b-button>
    </b-col>
  </b-row>
  </form>
        </b-modal>
 </div>
  </b-container>
</div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
import axios from "axios";
import store from "@/store";
import VueRouter from 'vue-router';
  export default {
    data() {
      return {
      formSim: {
       simNum:''
      },

        formUdate: {
          Id:'',
          Driver_name: '',
          Driver_id: '',
          PhoneNum:  '',
          SimNum: '',
          dateOfInsertion:'',
          cardWithdrawn: false,
          dateOfWithdrawal:'',
  
          },

        

        form: {
          id:'',
          driver_name: '',
          driver_id:'',
          PhoneNum: '',
          simNum:  '',
          dateOfInsertion:'',
          cardWithdrawn: false,
          dateOfWithdrawal:'',
        
        },
        show: false,
      
        name: '',
        items: [],
        fields: [
          { key: 'driver_name', label: 'Driver full name', sortable: true},
          { key: 'driver_id', label: 'Driver_id', sortable: true},
           { key: 'phoneNum', label: 'Phone Number', sortable: true},
            { key: 'simNum', label: 'SimCard Number', sortable: true},
            { key: 'dateOfInsertion', label: 'Date Of Insertion', sortable: true},
            { key: 'lastWithdrawal', label: 'Last Withdrawal', sortable: true},
            {
            key: 'cardWithdrawn',
            label: 'withdrawal Status',
            formatter: (value, key, item) => {
              return value ? 'Yes' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
            { key: 'dateOfWithdrawal', label: 'date of Withdrawal', sortable: true},
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        sortBy: '',
        isBusy: false,
        filter: null,
        filterOn: [],
       options: [
          { text: 'Name', value: 'Driver_name' },
          { text: 'Phone Number', value: 'PhoneNum' },
          { text: 'Sim card Number', value: 'simNum' },
        ],
         busy: false,
        timeout: null
      }
      
    },

    computed: {
         //...mapGetters(['users']),
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
     state() {
        return this.form.phoneNum.length == 10 ? true : false
      },
       state2() {
        return this.formUdate.SimNum.length == 9 ? true : false
      },
      invalidFeedback() {
        if (this.form.phoneNum.length > 10) {
          return 'number you entered is bigger than  10 digets'
        } else if (this.form.phoneNum.length > 10) {
          return 'Enter at least 10 digits'
        } else
         if (this.formUdate.SimNum.length > 9) {
          return ''
        } else if (this.formUdate.SimNum.length > 9) {
          return 'Enter  9 digits'
        } else {
          return 'Phone number must be 9 digits'
        }
      },
        invalidFeedback2() {
         if (this.formUdate.SimNum.length > 9) {
          return 'number is larg, should be at most 9 digits'
        } else if (this.formUdate.SimNum.length > 9) {
          return 'Enter valid number digits'
        } else {
          return 'Phone number must be 9 digits'
        }
      },
      validFeedback() {
        return this.state === true ? 'valid phone number' : ''
      },
      validFeedback2() {
        return this.state2 === true ? 'valid phone number' : ''
      }
    },
    
    methods: {
          logOut() {
        store.user = null;
        this.$router.push ("/")
    },
        makeToast(variant = "null", massage = "null") {
        
        this.$bvToast.toast( massage, {
          title: ` ${variant || 'Message'}`,
          variant: variant,
          solid: true
        })
      
         this.onOk();
      },
       onOk() {
          
     this.$refs.table.refresh();
     this.resetModal();
    },
/*     onEtharSubmit(){

      document.getElementById('mybtn').click();
  
    }, */
 onSubmit(evt) {
        evt.preventDefault()
       // this.handleSubmit()
        var form_data = new FormData()
        for(var key in this.form) {
        form_data.append(key, this.form[key])
        }

        console.log(form_data)
    if (this.state === true && this.state2 === true){
        this.busy = true
       axios.post('http://localhost:8081/driverapi/addDriver', form_data)
        .then( response=> {
          console.log(response)
         this.busy = false
         
         if (response.data == "Driver,s info Saved") {
           this.makeToast("success", "Driver,s info Saved");
            this.resetModal()}
                  else if (response.data = "Driver id is already exists"){
           this.makeToast("danger","This Driver id already exist")
         }
         else if (response.data = "Driver id is already exists"){
                      this.makeToast("danger","This phone number is already exist")}
           else if ( response.data = ""){
                        this.makeToast("danger","This sim card number is already exist")}
        else {
          this.makeToast("danger","Something went wrong! user not added")
           this.resetModal()
           
         }
 
        })
        .catch( error=> {
          this.busy = false
          console.log(error)
         // alert(error)
   });
    }
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
      },
myProvider (ctx) {
  
        //console.log(ctx)

         this.isBusy = true
        let promise = axios.get("http://localhost:8081/driverapi/Driverspagination?page="+ctx.currentPage+"&pagesize="+ctx.perPage+"&filter="+ ctx.filter )

        return promise.then((data) => {
            console.log(data);
          const items = data.data.items
            this.totalRows = data.data.pagination.total;
           // this.count= data.data.pagination.count;
           // this.perPage = data.data.pagination.per_page;
           // this.currentPage= data.data.pagination.current_page;
           // this.total_pages = data.data.pagination.total_pages;

          // Here we could override the busy state, setting isBusy to false
           this.isBusy = false
          return(items)
        }).catch(error => {
             console.log(error);
          // Here we could override the busy state, setting isBusy to false
           this.isBusy = false
          // Returning an empty array, allows table to correctly handle
          // internal busy state in case of error
          return []
        })
      },


      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
     
   
      //  this.currentPage = 1
      },
      resetModal() {
        this.form.Driver_name = ''
         this.form.Driver_id = ''
         this.form.phoneNum = ''
         this.form.SimNum = ''
           this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
       resetModalUpate() {
        this.form.Driver_name = ''
         this.form.Driver_id = ''
         this.form.phoneNum = ''
         this.form.SimNum = ''
           this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing2')
        })
      },

   updateUser:  function(row){

      this.formUdate.id = row.item.id
      this.formUdate.Driver_name = row.item.driver_name
      this.formUdate.Driver_id = row.item.driver_id
      this.formUdate.PhoneNum = row.item.phoneNum
      this.formUdate.SimNum = row.item.simNum
      this.formUdate.cardWithdrawn = row.item.cardWithdrawn

     this.$bvModal.show('modal-prevent-closing2')
   },
   
   AddSim:  function(row){

this.formUdate.id = row.item.id
      this.form.driver_name = row.item.driver_name
      this.form.driver_id = row.item.driver_id
      this.form.PhoneNum = row.item.phoneNum
      this.form.simNum = row.item.simNum
      this.form.dateOfInsertion = row.item.dateOfInsertion
      this.form.dateOfWithdrawal = row.item.dateOfWithdrawal
      this.form.cardWithdrawn = row.item.cardWithdrawn

     this.$bvModal.show('modal-prevent-closing')
   },
     
     onSaveUpdate(evt) {
        evt.preventDefault()
       // this.handleSubmit()
        var form_data = new FormData()
        for(var key in this.formUdate) {
        form_data.append(key, this.formUdate[key])
        }

        console.log(form_data)

        this.busy = true
       axios.put("http://localhost:8081/driverapi/UpdateDriver?Id=", form_data)
        .then( response=> {
          console.log(response)
         this.busy = false
         
         if (response.data == "Record updated successfully") {
           this.makeToast("success", "Record updated successfully");
            this.resetModalUpate()
         } else {
          this.makeToastdanger("danger","Something went wrong! user info does not update");
           this.resetModalUpate()
           
         }
 
        })
        .catch( error=> {
          this.busy = false
          console.log(error)
         // alert(error)
        });
        
    },
      noteMsg(color, msg) {
        this.$bvToast.toast(msg, {
          title: 'System message',
          variant: color,
          solid: true
        })
      },
     deleteConfirmation (row) {
         this.id = row.item.id
      this.Driver_name = row.item.Driver_name
      this.Driver_id = row.item.Driver_id
      this.PhoneNum = row.item.PhoneNum
      this.SimNum = row.item.SimNum
             this.$bvModal.show('my-modal')

      },
      toFormData(obj) {
        var form_data = new FormData()
        for(var key in obj) {
          form_data.append(key, obj[key])
        }
        return form_data
      },
   
  deleteUser: async function (role) {

if(confirm("are you sure you want to delete "+role.item.Driver_name+"?")){
      this.busy = true
 await axios.delete("http://tn.tirhal.net:443/ethwork/driverapi/deleteDriver?Id=" + role.item.id)
   .then( response=> {
          console.log(response)
         this.busy = false
          
         if (response.data == ("driver was deleted with id:" + role.item.id) ){
           this.makeToast("success", "driver deleted successfully!");
           // resetModal()
         } else {
          this.makeToastdanger("danger", "Something went wrong! user not deleted");
           //this.resetModal()
           
         }
 
        })
        .catch( error=> {
          this.busy = false
          console.log(error)
         // alert(error)
        }); 
  

}
               
        }
     
    }
    
  }
</script>
