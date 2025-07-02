// stores/payment.js

import { defineStore } from "pinia";
import { ref } from 'vue';

export const usePaymentStore = defineStore('payments', () => {

    // Реактивное состояние - данные о платежах
    const paymentList = ref([]);
    
    // Геттер для получения количества платежей
    const countPayments = () => paymentList.value.length; // считаем количество платежей в массиве.

    // Метод для получения суммы всех платежей
    const getFullPaymentValue = () =>
        paymentList.value.reduce((res, cur) => res + cur.value, 0);

    // Action для добавления платежа
    const addNewPayment = (payment) => {
        paymentList.value.push(payment); //Позволяет добавить новый платёж в список.
    };

    // Action для очистки списка платежей
    const resetPayments = () => {
        paymentList.value = []; // Очищает список платежей.
    };

    // Action для установки данных платежей
    const setPaymentsListData = (payload) => {
        paymentList.value = payload;
    };

     

     // Метод для загрузки начальных данных (асинхронно)
    async function loadInitialData() {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Симуляция задержки

        setPaymentsListData([
            {
                date: '28.03.2020',
                category: 'Food',
                value: 169,
            },
            {
                date: '24.03.2020',
                category: 'Transport',
                value: 360,
            },
            {
                date: '24.03.2020',
                category: 'Food',
                value: 532,
            },
        ]);
    }

  // Возврат объектов с state, getters и actions
  return { paymentList, countPayments, addNewPayment, resetPayments, setPaymentsListData, getFullPaymentValue, loadInitialData };
});
