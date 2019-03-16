<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form
              ref="form"
              v-model="valid"
              lazy-validation>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Add CSI Member</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                      label="Student ID"
                      type="text"
                      v-model="studentId"
                      :rules="idRules"
                      :counter="10"
                      required>
                    </v-text-field>
                    <v-text-field
                      v-model="fullName"
                      :rules="nameRules"
                      :counter="25"
                      label="Full name"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="phone"
                      :rules="phoneRules"
                      :counter="10"
                      label="Phone no."
                      required
                    ></v-text-field>
                    <v-select
                      v-model="yearSelect"
                      :items="yearList"
                      label="Year"
                    ></v-select>
                    <v-select
                      v-model="branchSelect"
                      :items="branchList"
                      label="Branch"
                    ></v-select>
                    <v-text-field
                      v-model="rollno"
                      :rules="rollRules"
                      :counter="2"
                      label="Roll no."
                      required
                    ></v-text-field>
                    <v-select
                      v-model="batchSelect"
                      :items="batchList"
                      label="Batch"
                    ></v-select>
                    <v-select
                      v-model="membershipSelect"
                      :items="membershipList"
                      label="Membership Years"
                    ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  :disabled="!valid"
                  color="primary"
                  @click="validate">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        :top="true"
      >
        {{ this.text }}
        <v-btn
          color="pink"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    name: "dashAdd",
    data() {
      return {
        //SnackBar details
        snackbar:false,
        text: '',
        //Select data
        yearSelect: '',
        yearList: [
          'FE',
          'SE',
          'TE',
          'BE'
        ],
        branchSelect: '',
        branchList: [
          'IT',
          'COMPS',
          'EXTC',
          'MECH-A',
          'MECH-B'
        ],
        batchSelect: '',
        batchList: [
          'A',
          'B',
          'C',
          'D'
        ],
        membershipSelect: '',
        membershipList: [
          'One Year',
          'Two Years',
          'Three Years',
          'Four Years'
        ],
        valid: true,
        studentId: '',
        idRules: [
          v => !!v || 'Student ID is required',
          v => v.length <= 10 || 'ID must be less than 10 characters'
        ],
        fullName: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 25 || 'Name must be less than 25 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        phone: '',
        phoneRules: [
          v => !!v || 'Phone number is required',
          v => v.length <= 25 || 'Phone must be less than 25 characters',
          v => !isNaN(v) || 'Phone number is invalid'
        ],
        rollno: '',
        rollRules: [
          v => !!v || 'Roll number is required',
          v => v.length <= 2 || 'Phone must be less than 2 characters',
          v => !isNaN(v) || 'Phone number is invalid'
        ]
      }
    },
    methods: {
      validate() {
        const studentId = this.studentId;
        const fullName = this.fullName;
        const email = this.email;
        const phone = this.phone;
        const yearSelect = this.yearSelect;
        const branchSelect = this.branchSelect;
        const rollno = this.rollno;
        const batchSelect = this.batchSelect;
        var membershipSelect;
        if(this.membershipSelect == "One Year"){
          membershipSelect = "1";
        }
        else if (this.membershipSelect == "Two Years") {
          membershipSelect = "2";
        }
        else if (this.membershipSelect == "Three Years") {
          membershipSelect = "3"
        }
        else{
          membershipSelect = "4"
        }
        axios.post('http://206.189.135.147:8081/profile/new', {
          studentId,
          fullName,
          email,
          phone,
          yearSelect,
          branchSelect,
          rollno,
          batchSelect,
          membershipSelect
        })
        .then((res) => {
          this.text = "Successfull";
        })
        .catch((error) => {
          this.text = "Unsuccessfull";
        });
        this.snackbar=true;
      }
    }
}
</script>
<style scoped>

</style>
