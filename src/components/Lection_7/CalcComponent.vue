<script setup>

    import { ref } from "vue";

    const nums = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

    const tabs = ref(['-', '+', '*', '/']); 

    const result = ref(''); // // Теперь result является реактивной переменной. Переменная result является строковым типом, поскольку она привязана к input через v-model, и попытка прибавить число приведет к ошибке. Нужно преобразовать строку в число перед выполнением арифметической операции. Начальное значение строки пустое.

    const addButton = (char) => {
        result.value = result.value.toString(); 
        result.value += char; 
    }
     
    const calcResult = () => {
        result.value = eval(result.value).toString(); // Выполняем операцию и преобразуем результат обратно в строку
    }

    /*const calcResult = () => {
        let validExpression = result.value.replace(/[^0-9\+\-\*\/\.]/g, ''); // Удаляем все лишние символы
        try {
            result.value = eval(validExpression).toString(); // Выполняем операцию и преобразуем результат обратно в строку
        } catch (error) {
        console.error(error);
        result.value = 'Error'; // Отображаем сообщение об ошибке
        }
}*/

    const reset = () => {
        result.value = ''; // Сбрасываем результат
    }

</script>

<template>
    <div class="calc">
        <input class="input" type="text" v-model="result" />
        <button @click="addButton(num)" v-for="num in nums" :key="num">{{ num }}</button>
        <!-- примитивных типов данных (таких как числа) нет свойств. Vue требует уникальный ключ для каждого элемента цикла v-for, чтобы оптимизировать рендеринг. В данном случае проще всего использовать сам элемент массива в качестве ключа.-->
        <button @click="addButton(tab)" v-for="tab in tabs" :key="tab">{{ tab }}</button>
        <button @click="calcResult">=</button>
        <button @click="reset" class="reset">Reset</button>

    </div>
</template>


<style scoped>
    .calc {
        display: grid;
        grid-template-columns: repeat(3, 150px);
        justify-content: center;
        padding-top: 48px;
        padding-bottom: 24px;
    }

    .input {
        grid-column: 1 / -1; /* Будем растягивать от значения 1 до -1  */ 
        text-align: right;
    }

    .reset {
        grid-column: 1 / -1; /* Будем растягивать от значения 1 до -1  */ 
    }

</style>
