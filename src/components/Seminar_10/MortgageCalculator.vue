<script setup>
    /* Вам необходимо создать компонент ипотечного калькулятора, который позволяет пользователю вводить сумму кредита, процентную ставку и срок кредита. Компонент должен автоматически вычислять ежемесячный платеж и общую сумму выплаты по кредиту.
    1.Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
    2. В шаблоне компонента разместите поля ввода для суммы кредита, процентной ставки и срока кредита, а также элементы для отображения ежемесячного платежа и общей суммы выплаты.
    3. Используйте директиву v-model для связывания введенных пользователем
    значений с соответствующими свойствами в компоненте.
    4. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять
    ежемесячный платеж на основе введенных значений суммы кредита, процентной
    ставки и срока кредита.
    5. Создайте вычисляемое свойство totalPayment, которое будет вычислять общую
     сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
    6. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах шаблона. */

    import { ref, computed } from 'vue';

    const loanAmount = ref(1000000); // Начальная сумма кредита
    const interestRate = ref(10); // Процентная ставка (%)
    const loanTerm = ref(120); // Срок кредита в месяцах

    // Вычисление ежемесячного платежа
    const monthlyPayment = computed(() => {
        if (!loanAmount.value || !interestRate.value || !loanTerm.value) return '';
        const rate = interestRate.value / 100 / 12; // Месячная процентная ставка
        const term = loanTerm.value; // Количество платежей -  nPayments
        const principal = loanAmount.value; // Сумма кредита
        const numerator = rate * Math.pow(1 + rate, term);
        const denominator = rate * Math.pow(1 + rate, term) - 1;
        const payment = principal * (numerator / denominator);
        return payment.toFixed(2);
    });

    // Общая сумма выплат
    const totalPayment = computed(() => {
        if (!monthlyPayment.value || !loanTerm.value) return '';
        const term = loanTerm.value;
        const payment = parseFloat(monthlyPayment.value);
        return (term * payment).toFixed(2);
    })


</script>

<template>
     <div class="mortgage-calculator">
        <h2>Ипотечный калькулятор</h2>

        <!-- Поля ввода -->
        <form @submit.prevent action="#">
            <label for="loanAmount">Сумма кредита:</label>
            <input type="number" v-model.number="loanAmount" id="loanAmount" placeholder="Например, 1000000" required> <br>

            <label for="interestRate">Годовая процентная ставка (%):</label> 
            <input type="number" step="0.01" v-model.number="interestRate" id="interestRate" placeholder="Например, 8.5" required> <br>

            <label for="loanTerm">Срок кредита (месяцы):</label>
            <input type="number" v-model.number="loanTerm" id="loanTerm" placeholder="Например, 120" required>  
        </form>

        <!-- Результаты расчета -->
        <div class="results">
            <strong>Ежемесячный платёж:</strong> {{ monthlyPayment }} ₽<br>
            <strong>Общая сумма выплат:</strong> {{ totalPayment }} ₽
        </div>
    </div>

</template>

<style scoped>
    .mortgage-calculator {
        padding: 20px;
    }
    .results strong {
        font-size: 18px;
    }
</style>