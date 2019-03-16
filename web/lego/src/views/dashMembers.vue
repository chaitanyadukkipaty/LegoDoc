<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          CSI Members
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="members"
          :search="search"
        >
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>{{ props.item.phone }}</td>
            <td>{{ props.item.year }}</td>
            <td>{{ props.item.branch }}</td>
            <td>{{ props.item.rollno }}</td>
            <td>{{ props.item.batch }}</td>
            <td>{{ props.item.membership_left }}</td>
          </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'dashMembers',
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Year', value: 'year' },
        { text: 'Branch', value: 'branch' },
        { text: 'Roll no.', value: 'rollno' },
        { text: 'Batch', value: 'batch' },
        { text: 'Membership Left', value: 'years' }
      ],
      members: [
      ]
    }
  },
  mounted() {
    axios.post('http://206.189.135.147:8081/profile/view', {
    })
    .then((res) => {
      console.log(res);
      this.members = res.data;
    })
    .catch();
  }
}
</script>

<style lang="css" scoped>
</style>
