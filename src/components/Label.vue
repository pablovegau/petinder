<template>
  <span class="label" :class="{ 'label--true': trueBadge, 'label--false': falseBadge }">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Label',
  props: ['trueBadge', 'falseBadge']
}
</script>

<style lang="scss">
.label {
  display: flex;
  align-items: center;
  border-radius: var(--spacing-12);
  padding: 0 var(--spacing-8);
  height: 24px;
  background-color: var(--color-purple);
  color: var(--grayColor-white);
  font-size: var(--spacing-13);
  font-weight: 700;
  letter-spacing: 0.2px;

  &--true {
    background-color: var(--color-tag-true);
  }

  &--false{
    background-color:var(--color-tag-false);
  }
}
</style>
