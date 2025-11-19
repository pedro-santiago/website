<template>
  <div class="customers">
    <!-- PHP Method Signature -->
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="expression">getCustomers</span>
      <span class="expression">()</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="keyword">array</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab /><Tab />
      <span class="keyword">return</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>

    <!-- JavaScript/TypeScript -->
    <CodeLine v-if="!isPhp">
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <span class="variable">customers</span>
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="type class" v-if="isTs">Customer[]</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>

    <template v-for="(entry, index) in data" :key="`customer-${index}`">
      <Customer
        :data="entry"
        :isLast="index === data.length - 1"
      />
    </template>

    <!-- PHP Closing -->
    <CodeLine v-if="isPhp">
      <Tab /><Tab />
      <span class="expression">]</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="expression">}</span>
    </CodeLine>

    <!-- JavaScript/TypeScript Closing -->
    <CodeLine v-if="!isPhp">
      <span class="expression">]</span>
      <span class="expression" v-if="isJs">;</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';
import Customer from './_customer.vue';

export default {
  props: ['data'],
  components: {
    CodeLine,
    Tab,
    Customer,
  },
};
</script>
