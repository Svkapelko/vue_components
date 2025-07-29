import { defineStore } from "pinia";
import { ref } from 'vue'

export const useArticleStore = defineStore('articlStore', () => {
    const articles = ref([
        {
            id: 1,
            title: 'Минималистичные спальни',
            text: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...». ',
            images: [
                '/public/slider_1.png',
                '/public/banner.png',
                '/public/Photobd.png'
            ]
        },
        {
            id: 2,
            title: 'Современные спальни',
            text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице',
            images: [
                '/public/kitchen.png',
                '/public/bannerbedroom.jpeg',
                '/public/Photobd.png'
            ]
        },
        {
            id: 3,
            title: 'Дизайн современных спален',
            text: 'Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице',
            images: [
                '/public/PrDetailsBanner.jpeg',
                '/public/bannerbedroom.jpeg',
                '/public/slider_1.png'
            ]
        },
        {
            id: 4,
            title: 'Тенденции в современных спальнях',
            text: 'This is another post with different content',
            images: [
                '/public/PrDetailsBanner.jpeg',
                '/public/bannerbedroom.jpeg',
                '/public/slider_1.png'
            ]
        },
        {
            id: 5,
            title: 'Спальни в стиле арт-деко',
            text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов',
            images: [
                '/public/blogphoto.jpeg',
                '/public/slider_1.png',
                '/public/Photobd.png'
            ]
        },
        {
            id: 6,
            title: 'Спальни',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? ',
            images: [
                '/public/kitchen.png',
                '/public/PrDetailsBanner.jpeg',
                '/public/bannerbedroom.jpeg'
            ]
        },
        {
            id: 7,
            title: 'Спальни в стиле барокко',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? ',
            images: [
                '/public/banner.png',
                '/public/bannerbedroom.jpeg',
                '/public/blogphoto.jpeg'
            ]
        },
        {
            id: 8,
            title: 'Lorem Ipsum',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? ',
            images: [
                '/public/slider_1.png',
                '/public/blogphoto.jpeg',
                '/public/PrDetailsBanner.jpeg'
            ]
        }
])

const getArticleById = id=> {
    return  articles.value.find(article => article.id === id);
}
return { articles, getArticleById }
})