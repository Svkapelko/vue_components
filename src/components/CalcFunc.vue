<script setup>

    import { ref, computed } from "vue";

    // Реактивные переменные для ввода
    const operand1 = ref(0);
    const operand2 = ref(0);

    // Переменная для результата
    const result = ref('');

    // Массив для операций
    const operations = ['+', '-', '*', '/'];

    // Переменная для ошибки
    const error = ref('');

    // Новый реактивный массив для хранения логов
    const logs = ref([]);

    // Оптимизированная версия функции фибоначчи с мемоизацией -Рекурсивная реализация неэффективна для больших чисел из-за многократных повторных вычислений. Можно добавить мемоизацию для ускорения вычислений.

    const memoFib = (() => {
        let cache = {};
        return function fib(n) {
            if (cache[n]) return cache[n];   // Проверяем кэш
            if (n <= 1) return n;           // Базовые случаи
            return cache[n] = fib(n - 1) + fib(n - 2); // Сохраняем результат в кэш
        };
    })();

    // Функции для вычисления чисел Фибоначчи
    const fib1 = computed(() => memoFib(operand1.value));
    const fib2 = computed(() => memoFib(operand2.value));

    // Метод сложения
    const add = () => {
        result.value = Number(operand1.value) + Number(operand2.value);
    };

    
    // Метод вычетания
    const subtract = () => {
        result.value = Number(operand1.value) - Number(operand2.value)   
    }

    // Метод умножения
    const multiply = () => {
        result.value = Number(operand1.value) * Number(operand2.value)     
    }

    // Метод деления
    const divide = () => {
        if(Number(operand2.value) !== 0){
            result.value = Number(operand1.value) / Number(operand2.value);
        } else{
            error.value = "Ошибка! Деление на ноль.";
        } 
    }
        
    // Общий метод для всех операций
    const performOperation = (operation) => {
        error.value = ''; //обнуляем блок с сообщением об ошибке
        switch (operation) {
            case '+': 
                add(); 
                break;
            case '-': 
                subtract(); 
                break;
            case '*': 
                multiply();
                break;
            case '/': 
                divide(); 
                break;
        }
        //logs.value[Date.now()] = `${operand1.value}${operation}${operand2.value} = ${result.value}`; // Запись в журнал - в качестве ключа объекта logs будет выступать время, в которое была сделана операция, в качестве значения - выражение и результат.
        // Заменим на более оптимальный вариант - сохранение лога
        logs.value.push({
            timestamp: Date.now(),
            expression: `${operand1.value} ${operation} ${operand2.value}`,
            result: result.value
        }); // Хранение логов: Теперь логи хранятся в виде массива объектов, где каждый объект имеет три поля: timestamp: временная отметка события. expression: само выражение вида a + b. result: итоговый результат вычисления. Обновление логов: Каждый раз при выполнении операции добавляется новый элемент в массив логов с помощью метода push, который гарантированно реактивен.
    }
</script>



<template>

    <div>
        <input type="number" placeholder="Операнд 1" v-model="operand1">
        <input type="number" placeholder="Операнд 2" v-model="operand2">
        <div style="margin-top: 10px;">{{ result }}</div>
        <div>
        <!-- заменяем на v-for
            <button @click="performOperation('+')">+</button>
            <button @click="performOperation('-')">-</button>
            <button @click="performOperation('*')">*</button>
            <button @click="performOperation('/')">/</button> 
            -->
            <button @click="performOperation(operation)" v-for="operation in operations" :key="operation">
                {{ operation }}
            </button>
        </div>
        
        <div v-show="error"> 
            {{ error }}
        </div>
     
        <div>
            <template v-if="Number(result) < 0">Получилось отрицательное число </template>
            <template v-else-if="Number(result) >= 0 && result <=100">Получилось число от 0 до 100</template>
            <template v-else="Number(result) > 100">Получилось число больше 100</template>
        </div>

        <div>
            Число Фибоначчи для первого поля ввода {{ fib1 }} <br>
            Число Фибоначчи для второго поля ввода {{ fib2 }} <br>

        </div>
        <div>
            <h3>История операций(логов):</h3>
            <!--Хранение логов: Теперь логи хранятся в виде массива объектов, где каждый объект имеет три поля: timestamp: временная отметка события. expression: само выражение вида a + b. result: итоговый результат вычисления. -->
            <ul v-if="logs.length > 0">
                <li v-for="log in logs" :key="log.timestamp">
                    {{ log.expression }} = {{ log.result }}
                </li>
            </ul>
            <p v-else>Нет истории операций.</p> 
        </div>

    </div>

</template>