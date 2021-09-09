document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const questions = {
        question: 'Какого цвета бургер Вы хотите?',
        answers: [
            {
                title: 'Стандарт',
            },
            {
                title: 'Черный',
            }
        ],
    };

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block'); // аналог display block
        playTest();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })

    const playTest = () => {
        const renderTest = () => {
            questionTitle.textContent = 'Какого цвета бургер Вы хотите?';
            formAnswers.innerHTML = `<div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/burger.png" alt="burger">
                  <span>Стандарт</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/burgerBlack.png" alt="burger">
                  <span>Черный</span>
                </label>
              </div>`;
        };
        renderTest();
    };
});


//console.dir - вывести элемент в качестве объекта
//elem.classList – это специальный объект с методами для добавления/удаления одного класса.
//textContent - меняет текст на содержимое элемента в котром мы его применили на то что мы укажем
//innerHtml - встраивает верстку в блок, который мы укажем