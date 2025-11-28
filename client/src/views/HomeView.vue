<template>
  <div class="container">
    <h1 class="title">Нагрузочный тест</h1>

    <div class="form-block">
      <label>Количество запросов:</label>
      <input v-model.number="requestsCount" type="number" class="input" />

      <label class="mt">Задержка между запросами (мс):</label>
      <input v-model.number="delayMs" type="number" class="input" />
    </div>

    <button @click="startTest" class="btn">Старт нагрузочного теста</button>

    <div v-if="isRunning" class="stats">
      <p>Отправлено запросов: {{ sent }}</p>
      <p>Успешно: {{ success }}</p>
      <p>Ошибок: {{ errors }}</p>
      <p v-if="elapsedTime">Время выполнения: {{ elapsedTime }} мс</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const requestsCount = ref(10)
const delayMs = ref(200)

const sent = ref(0)
const success = ref(0)
const errors = ref(0)

const isRunning = ref(false)
const startTime = ref(0)
const elapsedTime = ref<null | number>(null)

async function startTest() {
  sent.value = 0
  success.value = 0
  errors.value = 0
  isRunning.value = true
  elapsedTime.value = 0
  startTime.value = Date.now()

  for (let i = 0; i < requestsCount.value; i++) {
    sent.value++
    sendRequest()
    await new Promise((res) => setTimeout(res, delayMs.value))
  }
  elapsedTime.value = Date.now() - startTime.value
}

async function sendRequest() {
  try {
    const res = await fetch('/items')
    if (!res.ok) throw new Error(res.statusText)
    success.value++
  } catch (error) {
    console.error(error)
    errors.value++
  }
}
</script>

<style>
.container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  font-family: sans-serif;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.form-block {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.input {
  border: 1px solid #ccc;
  padding: 6px;
  width: 100%;
  margin-top: 4px;
  border-radius: 4px;
}

.mt {
  margin-top: 12px;
}

.btn {
  margin-top: 16px;
  background: #1976d2;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background: #115a9c;
}

.stats {
  margin-top: 20px;
}
</style>
