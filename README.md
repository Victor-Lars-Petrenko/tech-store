# Tech Store App

This application is a web-based shop simulation where users can browse and
manage products. Built with React and Redux, it features a user-friendly
interface for adding, viewing, editing, and deleting products, as well as
managing product comments. The app provides two primary views: the product list
view and the product detail view, and is designed with flexibility and ease of
use in mind.

## Features

### Products List View

- **Add Products**: Users can add new products by clicking the "Add" button. A
  modal window will appear with input fields for product details (e.g., name,
  count, size, and weight). Users must fill in all required fields before
  confirming the addition. An empty product cannot be added.
- **Remove Products**: A "Delete" button allows users to remove products. Before
  removal, a modal confirmation window will appear, requiring confirmation or
  cancellation of the action.
- **Sorting**: The product list is sorted alphabetically by default, and then by
  count. Users can also select sorting preferences from a dropdown menu.
- **Modal Windows**: Both adding and deleting products are handled via modals to
  ensure an intuitive and smooth user experience.

### Product View

- **View Product Details**: Users can see all the details of a specific product,
  including its name, count, size, weight, and comments.
- **Edit Product**: The "Edit" button enables users to update product details
  via a modal window with various input fields.
- **Manage Comments**: Users can add and delete comments for each product. The
  comments are displayed with timestamps for context.

## Technologies

 <ul align="left">
  <li><a href="https://nodejs.org/en" target="_blank" rel="noreferrer"> <img src="https://create-react-app.dev/img/logo.svg" alt="react" width="40" height="40"/> </a> </li>
  <li><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </li>
    <li><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> </li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a></li> </ul>

## JS libraries

<ul align="left">
<li><a href="https://www.npmjs.com/package/react-redux" target="_blank" rel="noreferrer"> react-redux </a></li>
<li><a href="https://github.com/remix-run/react-router#readme" target="_blank" rel="noreferrer"> react-router </a></li>
<li><a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer"> axios </a></li>
<li><a href="https://www.npmjs.com/package/react-loader-spinner" target="_blank" rel="noreferrer"> react-loader-spinner </a></li>
<li><a href="https://www.npmjs.com/package/notiflix/v/2.7.0" target="_blank" rel="noreferrer"> Notiflix </a></li>
</ul>

## Installation and Running

1. Clone the repository: git clone
   https://github.com/yourusername/tech-store.git
2. Navigate to the project directory: cd tech-store
3. Install dependencies: npm install
4. Start the development server: npm start

## Future Enhancements

This app is designed as a test task and does not aim to cover all use cases. For
future improvements:

- **Implement more complex validation** for product inputs.
- **Add user authentication** for product and comment management.
- **Enhance the UI** with better accessibility and responsive design.
- **Optimize performance** for larger datasets.
