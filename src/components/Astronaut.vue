<template>
  <div>
    <h1>People in Space</h1>
    <p>Total: {{ data?.number }}</p>
    <ul>
      <li v-for="person in data?.people" :key="person.name">
        {{ person.name }} ({{ person.craft }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axiosInstance from "@/plugins/axios";
import { AstroApiResponse } from "@/types/AstroData";

export default defineComponent({
  setup() {
    const data = ref<AstroApiResponse | null>(null);

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<AstroApiResponse>("astros.json");
        data.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(fetchData);

    return {
      data,
    };
  },
});
</script>
