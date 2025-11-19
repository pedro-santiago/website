<template>
  <Stage
    class="customer"
    className="Customer"
    :abbreviation="`${startYear}-${endYear} - ${data.client} - ${data.project}`"
    :data="data"
    :isLast="isLast"
  >
    <CodeLine>
      <Tab /><Tab /><Tab /><Tab />
      <span class="variable">client</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.client"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab /><Tab /><Tab /><Tab />
      <span class="variable">project</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.project"></String>
      <span class="expression">,</span>
    </CodeLine>
  </Stage>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';
import String from './_string.vue';
import Stage from './_stage.vue';

export default {
  props: ['data', 'isLast'],
  components: {
    CodeLine,
    Tab,
    String,
    Stage,
  },
  computed: {
    startYear() {
      return this.data.startsAt.getFullYear();
    },
    endYear() {
      return this.data.endsAt ? this.data.endsAt.getFullYear() : ' now';
    },
  },
};
</script>
