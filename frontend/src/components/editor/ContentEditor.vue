<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  BookOpen,
  FilePlus2,
  Paperclip,
  Check
} from 'lucide-vue-next'

const props = defineProps<{
  title: string
  slug: string
  content: string
}>()

const emit = defineEmits<{
  (e: 'update:title', val: string): void
  (e: 'update:slug', val: string): void
  (e: 'update:content', val: string): void
}>()

// Visual vs Code mode
const mode = ref<'visual' | 'code'>('visual')

// Slug editing state
const isEditingSlug = ref(false)
const tempSlug = ref('')

const startEditSlug = () => {
  tempSlug.value = props.slug
  isEditingSlug.value = true
}

const saveSlug = () => {
  const formatted = tempSlug.value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
  emit('update:slug', formatted || 'post-slug')
  isEditingSlug.value = false
}

const cancelEditSlug = () => {
  isEditingSlug.value = false
}

// Word & Character count computation
const wordCount = computed(() => {
  const text = props.content.replace(/<[^>]*>/g, ' ').trim()
  if (!text) return 0
  return text.split(/\s+/).filter(Boolean).length
})

const charCount = computed(() => {
  return props.content.length
})

const readingTime = computed(() => {
  const minutes = Math.ceil(wordCount.value / 200) || 1
  return `${minutes} min read`
})

// Quick Formatting Injection Helpers for Visual/Code editor
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const insertText = (before: string, after: string = '', defaultText: string = 'text') => {
  const textarea = textareaRef.value
  if (!textarea) return

  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const currentVal = props.content
  const selected = currentVal.substring(start, end) || defaultText

  const newContent =
    currentVal.substring(0, start) +
    before +
    selected +
    after +
    currentVal.substring(end)

  emit('update:content', newContent)

  // Restore cursor
  setTimeout(() => {
    textarea.focus()
    textarea.setSelectionRange(
      start + before.length,
      start + before.length + selected.length
    )
  }, 10)
}

// Special Add Buttons
const addMediaModal = () => {
  insertText('<img src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?w=1000" alt="Material Kencana" class="w-full rounded shadow-sm my-4" />\n')
}

const addFlipbookModal = () => {
  insertText('[kencana_flipbook id="katalog-baja-ringan-2026"]\n', '', '')
}

const addFormModal = () => {
  insertText('[contact-form-7 id="konsultasi-properti" title="Konsultasi Properti Kencana"]\n', '', '')
}
</script>

<template>
  <div class="space-y-4">
    <!-- Title Input -->
    <div>
      <input
        type="text"
        :value="title"
        @input="emit('update:title', ($event.target as HTMLInputElement).value)"
        placeholder="Add title"
        class="w-full text-xl sm:text-2xl font-bold px-3 py-2 bg-white border border-wp-border rounded shadow-xs focus:outline-none focus:border-wp-blue focus:ring-1 focus:ring-wp-blue placeholder-gray-400"
      />
    </div>

    <!-- Permalink (Slug) row -->
    <div class="flex items-center flex-wrap gap-1 text-xs text-wp-textMuted bg-gray-50/80 px-3 py-1.5 rounded border border-gray-200">
      <span class="font-semibold text-gray-700">Permalink:</span>
      <span class="text-gray-500">https://kencana.id/posts/</span>

      <!-- Display or Edit mode for slug -->
      <template v-if="!isEditingSlug">
        <span class="font-medium text-gray-800 bg-white px-1.5 py-0.5 border border-gray-300 rounded">
          {{ slug || 'your-slug-here' }}
        </span>
        <button
          @click="startEditSlug"
          class="wp-btn py-0.5 px-2 ml-1 text-[11px]"
        >
          Edit
        </button>
      </template>

      <template v-else>
        <div class="flex items-center space-x-1">
          <input
            type="text"
            v-model="tempSlug"
            @keyup.enter="saveSlug"
            class="text-xs px-2 py-0.5 border border-wp-blue rounded focus:outline-none"
          />
          <button @click="saveSlug" class="wp-btn-primary py-0.5 px-2 text-[11px]">
            OK
          </button>
          <button @click="cancelEditSlug" class="wp-btn py-0.5 px-2 text-[11px]">
            Cancel
          </button>
        </div>
      </template>
    </div>

    <!-- WordPress Action Toolbar: Add Media, Flipbook, Form -->
    <div class="flex items-center flex-wrap gap-2 pt-1">
      <button
        @click="addMediaModal"
        type="button"
        class="wp-btn flex items-center space-x-1 text-xs py-1 px-2.5 font-medium"
      >
        <Paperclip class="w-3.5 h-3.5 text-wp-blue" />
        <span>Add Media</span>
      </button>

      <button
        @click="addFlipbookModal"
        type="button"
        class="wp-btn flex items-center space-x-1 text-xs py-1 px-2.5 font-medium"
      >
        <BookOpen class="w-3.5 h-3.5 text-purple-600" />
        <span>Add Flipbook</span>
      </button>

      <button
        @click="addFormModal"
        type="button"
        class="wp-btn flex items-center space-x-1 text-xs py-1 px-2.5 font-medium"
      >
        <FilePlus2 class="w-3.5 h-3.5 text-emerald-600" />
        <span>Add Form</span>
      </button>
    </div>

    <!-- Content Editor Container -->
    <div class="bg-white border border-wp-border rounded shadow-xs overflow-hidden">
      <!-- Editor Mode Tabs & Toolbar -->
      <div class="bg-gray-50 border-b border-wp-border px-3 py-1.5 flex items-center justify-between flex-wrap gap-2">
        <!-- Formatting Toolbar -->
        <div class="flex items-center flex-wrap gap-1">
          <button
            type="button"
            @click="insertText('<strong>', '</strong>', 'Bold Text')"
            title="Bold"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <Bold class="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="insertText('<em>', '</em>', 'Italic Text')"
            title="Italic"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <Italic class="w-4 h-4" />
          </button>

          <span class="w-[1px] h-4 bg-gray-300 mx-1"></span>

          <button
            type="button"
            @click="insertText('\n<h2>', '</h2>\n', 'Subheading Title')"
            title="Heading 2"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <Heading2 class="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="insertText('\n<h3>', '</h3>\n', 'Section Title')"
            title="Heading 3"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <Heading3 class="w-4 h-4" />
          </button>

          <span class="w-[1px] h-4 bg-gray-300 mx-1"></span>

          <button
            type="button"
            @click="insertText('<a href=&quot;https://kencana.id&quot;>', '</a>', 'Link Text')"
            title="Insert Link"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <LinkIcon class="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="insertText('<img src=&quot;https://images.unsplash.com/photo-1600585154340-be6161a56a0c&quot; alt=&quot;', '&quot; />', 'Kencana Hills Properti')"
            title="Insert Image"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <ImageIcon class="w-4 h-4" />
          </button>

          <span class="w-[1px] h-4 bg-gray-300 mx-1"></span>

          <button
            type="button"
            @click="insertText('\n<ul>\n  <li>', '</li>\n</ul>\n', 'Bullet Item')"
            title="Unordered List"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <List class="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="insertText('\n<ol>\n  <li>', '</li>\n</ol>\n', 'Numbered Item')"
            title="Ordered List"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <ListOrdered class="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="insertText('\n<blockquote>', '</blockquote>\n', 'Quote text here')"
            title="Blockquote"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <Quote class="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="insertText('<code>', '</code>', 'snippet')"
            title="Code"
            class="p-1 rounded text-gray-700 hover:bg-gray-200"
          >
            <Code class="w-4 h-4" />
          </button>
        </div>

        <!-- Mode Toggle: Visual vs Code -->
        <div class="flex items-center space-x-1 border border-gray-300 rounded bg-white p-0.5 text-xs">
          <button
            type="button"
            @click="mode = 'visual'"
            class="px-2.5 py-1 rounded transition-colors"
            :class="mode === 'visual' ? 'bg-wp-blue text-white font-medium' : 'text-gray-600 hover:text-gray-900'"
          >
            Visual
          </button>
          <button
            type="button"
            @click="mode = 'code'"
            class="px-2.5 py-1 rounded transition-colors"
            :class="mode === 'code' ? 'bg-wp-blue text-white font-medium' : 'text-gray-600 hover:text-gray-900'"
          >
            Code (HTML)
          </button>
        </div>
      </div>

      <!-- Textarea Editor -->
      <div class="relative">
        <textarea
          ref="textareaRef"
          :value="content"
          @input="emit('update:content', ($event.target as HTMLTextAreaElement).value)"
          rows="16"
          placeholder="Mulai tulis artikel atau konten seputar properti dan baja ringan Kencana di sini..."
          class="w-full p-4 text-sm font-sans focus:outline-none resize-y min-h-[320px] leading-relaxed text-gray-800"
          :class="{ 'font-mono text-xs bg-slate-900 text-slate-100 selection:bg-blue-600': mode === 'code' }"
        ></textarea>
      </div>

      <!-- Editor Footer: Word Count, Char Count, Reading Time -->
      <div class="bg-gray-50 border-t border-wp-border px-4 py-2 flex items-center justify-between text-xs text-wp-textMuted select-none">
        <div class="flex items-center space-x-4">
          <span>Word count: <strong class="text-gray-800 font-semibold">{{ wordCount }}</strong></span>
          <span>Characters: <strong class="text-gray-800 font-semibold">{{ charCount }}</strong></span>
        </div>
        <div class="text-gray-500 font-medium">
          Reading time: <strong class="text-gray-700">{{ readingTime }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
