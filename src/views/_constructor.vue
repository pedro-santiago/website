<template>
  <div class="constructor">
    <CodeLine />
    <CodeLine>
      <Tab />
      <span class="keyword">public</span>
      <span class="white-space space"></span>
      <span class="keyword">function</span>
      <span class="white-space space"></span>
      <span class="function">__construct</span>
      <span class="expression">()</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="expression">{</span>
    </CodeLine>
    <CodeLine>
      <Tab /><Tab />
      <span class="variable">$this</span>
      <span class="keyword">-></span>
      <span class="variable">careerStart</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="keyword">new</span>
      <span class="white-space space"></span>
      <span class="type class">DateTime</span>
      <span class="expression">(</span>
      <String value="2009-01-01"></String>
      <span class="expression">)</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab /><Tab />
      <span class="variable">$this</span>
      <span class="keyword">-></span>
      <span class="function">initialize</span>
      <span class="expression">()</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab /><Tab />
      <span class="variable">$this</span>
      <span class="keyword">-></span>
      <span class="function">loadLatestTechStack</span>
      <span class="expression">()</span>
      <span class="expression">;</span>
    </CodeLine>
    <CodeLine>
      <Tab />
      <span class="expression">}</span>
    </CodeLine>
    <CodeLine />
  </div>
</template>

<script lang="ts">
import CodeLine from './_code_line.vue';
import Tab from './_tab.vue';
import String from './_string.vue';

export default {
  props: {
    yearsOfExperience: {
      type: Number,
      required: true
    }
  },
  components: {
    CodeLine,
    Tab,
    String,
  },
};
</script>
