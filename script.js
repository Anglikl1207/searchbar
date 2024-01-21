function changePlaceholder(category) {
    const input = document.getElementById('searchInput');
    if (category === 'Familias' || category === 'Especies') {
      input.placeholder = `Busca en la categoria de ${category}`;
    } else {
      input.placeholder = 'Search Your Item';
    }
  }