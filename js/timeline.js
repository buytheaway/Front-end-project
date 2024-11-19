document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("range-slider");
    const rangeTitle = document.getElementById("range-title");
    const rangeImage = document.getElementById("range-image");
    const rangeText = document.getElementById("range-text");

    const timelineData = [
        {
            year: "1905 год",
            title: "Образование группы казахов в партии кадетов",
            image: "../img/1905.webp",
            description: "Образована группа этнических казахов, членов Конституционно-демократической партии (кадетов), которые объединяются на фоне событий Революции 1905 года."
        },
        {
            year: "21–28 июля 1917 года",
            title: "Первый Всекиргизский съезд в Оренбурге",
            image: "../img/1917-1.webp",
            description: "Официальное оформление партии \"Алаш\". Приняты решения по 14 вопросам, включая парламентскую федеративную республику, республику казахских областей, землеустройство и права женщин."
        },
        {
            year: "Осень 1917 года",
            title: "Публикация проекта программы партии \"Алаш\"",
            image: "../img/1917-2.webp",
            description: "Основные задачи программы: всеобщее избирательное право, национальное представительство, демократическая федерация, свободы и равенство языков."
        },
        {
            year: "Ноябрь 1917 года",
            title: "Выборы в Учредительное собрание",
            image: "../img/1917-3.webp",
            description: "Партия \"Алаш\" получает большинство голосов, завоёвывая 43 депутатских места и занимая 8-е место среди партий России."
        },
        {
            year: "Декабрь 1917 года",
            title: "Второй Всеказахский съезд: Провозглашение Алашской республики",
            image: "../img/1917-4.webp",
            description: "Провозглашена Алашская республика и сформирован временный Народный Совет \"Алаш-Орда\"."
        }
    ];

    slider.addEventListener("input", () => {
        const index = parseInt(slider.value);
        rangeTitle.textContent = `${timelineData[index].year}: ${timelineData[index].title}`;
        rangeImage.src = timelineData[index].image;
        rangeText.textContent = timelineData[index].description;

        rangeImage.classList.add("faded");
        setTimeout(() => {
            rangeImage.classList.remove("faded");
        }, 100);
    });
});
