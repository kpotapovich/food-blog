const container = document.getElementById('recipes-container');

let pavel = {name: 'паша', age: 2};
let kris = {name: 'крис', age: 3};
let dug = {color: 'white', golos: 'кря-кря'}


const items = [
    {
        imgSrc: 'img/menu/zavtrak.png',
        title: 'Время завтрака',
    },
    {
        imgSrc: 'img/menu/spaghetti.jpg',
        title: 'Спагетти болоньезе'
    },
    {
        imgSrc: 'img/menu/cake.jpg',
        title: 'Мраморный кекс'
    },
    {
        imgSrc: 'img/menu/borsch.jpg',
        title: 'Свекольник с креветкой и<br> кольцами кальмара'
    },
    {
        imgSrc: 'img/menu/smoothies.jpg',
        title: 'Смузи'
    },
    {
        imgSrc: 'img/menu/pancakes.jpg',
        title: 'Панкейки (американские блинчики)'
    }
];

for (let i = 0; i < items.length; i++) {
    const div = document.createElement('div');
    div.className = 'recipes-menu'
    container.append(div);

    const imageRecipe = document.createElement('img');
    imageRecipe.src = items[i].imgSrc;
    imageRecipe.className = 'breakfast';
    imageRecipe.alt = 'breakfast';
    div.append(imageRecipe);

    const divTitle = document.createElement('div');
    divTitle.className = 'recipes-title';
    div.append(divTitle);

    const h3Text = document.createElement('h3');
    h3Text.className = 'recipes-text';


    if (items[i].title != 'Смузи' && items[i].title != 'Спагетти болоньезе'){
        h3Text.innerHTML = 'Говно';
    }else{
        h3Text.innerHTML = items[i].title;
    }

    // if (i%2==0){
    //     h3Text.innerHTML = kris.name + ', ' +  pavel.age;
    // }else {
    //
    //     if (i == 3) {
    //         h3Text.innerHTML = kris.name + ' говорит ' + dug.golos;
    //     } else {
    //         h3Text.innerHTML = pavel.name + ', ' + kris.age;
    //     }
    // }
    divTitle.append(h3Text);
}






function a() {
    console.log(this.name);
}


//
// const divMenu = document.createElement('div');
// divMenu.className = 'recipes-menu';
// container.append(divMenu);
//
// const imgSpaghetti = document.createElement('img');
// imgSpaghetti.src = 'img/menu/spaghetti.jpg';
// imgSpaghetti.className = 'breakfast';
// imgSpaghetti.alt = 'breakfast';
// divMenu.append(imgSpaghetti);
//
// const divEl = document.createElement('div');
// divEl.className = 'recipes-title';
// divMenu.append(divEl);
//
// const h3 = document.createElement('h3');
// h3.className = 'recipes-text';
// h3.innerHTML = 'Мраморный кекс';
// divEl.append(h3);

