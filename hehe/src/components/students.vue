<template>
  <div class="h-50 w-100 mx-16" style="">
    <div class="d-flex justify-end">
      <v-btn depressed color="primary mt-8" @click="dialog = !dialog">
        Add Student
      </v-btn>
    </div>
    <v-data-table :headers="headers" :items="data" class="elevation-1 mt-8">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Student</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Student Name"
                    v-model="name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-select
                    :items="['Present', 'Absent']"
                    label="Status"
                    required
                    v-model="status"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :disabled="name.length < 1"
              @click="
                dialog = false;
                addStudent();
              "
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      status: "present",
      name: "",
      headers: [
        {
          text: "Student Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Status", value: "status" },
      ],
      data: [
        {
          name: "saud saleem",
          status: "present",
        },
        {
          name: "khan Paaattay Alam",
          status: "absent",
        },
        {
          name: "Sirf Alam",
          status: "present",
        },
        {
          name: "Ali Raza",
          status: "absent",
        },
        {
          name: "Mahnoor Safdar",
          status: "present",
        },
        {
          name: "Jelly bean",
          status: "present",
        },
        {
          name: "Lollipop",
          status: "absent",
        },
      ],
    };
  },
  methods: {
    getColor(status) {
      if (status == "absent") return "red";
      else return "green";
    },
    addStudent() {
      let obj = {
        status: this.status,
        name: this.name,
      };
      this.data.push(obj);
    },
  },
  watch: {
    dialog() {
      this.name = "";
      this.status = "present";
    },
  },
};
</script>
<style></style>
