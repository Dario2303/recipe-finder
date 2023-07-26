function iniciarApp () {


    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria)


    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
        .then(resp => resp.json())    
        .then(res => mostrarCategorias(res.categories))
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria => {
            const { strCategory } = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option)
        })
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
            .then(resp => resp.json())
            .then(res => mostrarRecetas(res.meals))
    }

    function mostrarRecetas(recetas = []) {
        //iterando en los resultados
        recetas.forEach(receta => {

            const { idMeal, strMeal, strMealThumb } = receta

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4')

            const recetaCard = document.createElement('DIV')
            recetaCard.classList.add('card', 'mb-4')

            const recetaImagen = document.createElement('IMG')
            recetaImagen.classList.add('card-img-top')
            recetaImagen.alt = `Imagen de la receta ${strMeal}`
            recetaImagen.src = strMealThumb;
            
            const recetaCardBody = document.createElement('DIV')
            recetaCardBody.classList.add('card-body')
        })
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);

