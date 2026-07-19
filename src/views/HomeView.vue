<script lang="ts" setup>
import ActionCard from "@/components/ActionCard.vue";
import { useRecentStore } from "@/stores/recent-store";
import type { SheetLocation } from "@/types/persistence";
import { UseTimeAgo } from "@vueuse/components";

const recentStore = useRecentStore();

function createNew() {}

function openExisting() {}

function openRecent(sheet: SheetLocation) {
  console.log("opening", sheet.path);
}
</script>

<template>
  <div class="landing">
    <section class="hero">
      <h1 class="hero__title">Welcome to Dynamic Sheets!</h1>
      <p class="hero__subtitle">Build custom, flexible sheets — placed exactly how you want them.</p>
    </section>

    <section class="actions">
      <ActionCard variant="primary" class="actions__tile" @click="createNew">
        <div class="actions__tile-content">
          <span class="actions__tile-icon">➕</span>
          <span class="actions__tile-label">Create new</span>
          <span class="actions__tile-hint">Of to a fresh sheet</span>
        </div>
      </ActionCard>

      <ActionCard variant="default" class="actions__tile" @click="openExisting">
        <div class="actions__tile-content">
          <span class="actions__tile-icon">📂</span>
          <span class="actions__tile-label">Open existing</span>
          <span class="actions__tile-hint">Browse your saved sheets</span>
        </div>
      </ActionCard>
    </section>

    <section v-if="recentStore.recentSheets.length" class="recent">
      <h2 class="recent__title">Recently opened</h2>
      <div class="recent__list">
        <ActionCard v-for="sheet in recentStore.recentSheets" :key="sheet.path" variant="default" class="recent__card" @click="openRecent(sheet)">
          <div class="recent__card-content">
            <span class="recent__card-name">{{ sheet.name }}</span>
            <span class="recent__card-provider">{{ sheet.storageProvider }}</span>
            <UseTimeAgo v-slot="{ timeAgo }" :time="sheet.lastUpdated">
              <span class="recent__card-time">{{ timeAgo }}</span>
            </UseTimeAgo>
          </div>
        </ActionCard>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.landing {
  min-height: 100vh;
  @include flex(column, flex-start, center);
  padding: $spacing-xl $spacing-md;
  gap: $spacing-xl;
}

.hero {
  text-align: center;
  max-width: 560px;
  margin-top: $spacing-xl;

  &__title {
    font-size: $font-size-2xl;
    font-weight: 700;
    line-height: $line-height-tight;
    color: $color-text;
    margin-bottom: $spacing-sm;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: $color-text-muted;
    margin: 0;
  }
}

.actions {
  @include flex(row, center, stretch, $spacing-md);
  flex-wrap: wrap;
  width: 100%;
  max-width: 640px;

  &__tile {
    flex: 1 1 240px;
    min-height: 160px;
  }

  &__tile-content {
    @include flex(column, center, center, $spacing-xs);
    height: 100%;
    padding: $spacing-lg;
    text-align: center;
  }

  &__tile-icon {
    font-size: $font-size-2xl;
    line-height: 1;
    margin-bottom: $spacing-xs;
  }

  &__tile-label {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $color-text;
  }

  &__tile-hint {
    font-size: $font-size-sm;
    color: $color-text-muted;
  }
}

.recent {
  width: 100%;
  max-width: 640px;

  &__title {
    font-size: $font-size-sm;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: $color-text-muted;
    margin-bottom: $spacing-sm;
  }

  &__list {
    @include flex(column, flex-start, stretch, $spacing-xs);
  }

  &__card {
    width: 100%;
  }

  &__card-content {
    @include flex(row, flex-start, center, $spacing-sm);
    padding: $spacing-sm $spacing-md;
    text-align: left;
  }

  &__card-name {
    font-weight: 500;
    color: $color-text;
    @include truncate;
  }

  &__card-provider {
    font-size: $font-size-sm;
    color: $color-text-muted;
    background: $color-neutral-100;
    padding: 2px $spacing-xs;
    border-radius: $radius-sm;
    flex-shrink: 0;
  }

  &__card-time {
    margin-left: auto;
    font-size: $font-size-sm;
    color: $color-text-muted;
    flex-shrink: 0;
  }
}
</style>
