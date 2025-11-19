<template>
  <div class="class-closing">
    <!-- PHP Class Closing Brace -->
    <CodeLine v-if="isPhp">
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine v-if="isPhp">
      <span class="comment">// Usage - The Laravel way</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="variable">$pedro</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="function">app</span>
      <span class="expression">(</span>
      <span class="type class">PedroSantiago</span>
      <span class="keyword">::</span>
      <span class="keyword">class</span>
      <span class="expression">)</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="keyword">echo</span>
      <span class="white-space space"></span>
      <span class="variable">$pedro</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine />
    <CodeLine v-if="isPhp">
      <span class="keyword">if</span>
      <span class="white-space space"></span>
      <span class="expression">(</span>
      <span class="variable">$pedro</span>
      <span class="keyword">-></span>
      <span class="function">isAvailableForNewOpportunities</span>
      <span class="expression">()</span>
      <span class="expression">)</span>
      <span class="white-space space"></span>
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <Tab />
      <span class="comment">// Let's build something amazing together!</span>
    </CodeLine>
    <CodeLine v-if="isPhp">
      <span class="expression">}</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';

export default {
  components: {
    CodeLine,
    Tab,
  },
};
</script>
