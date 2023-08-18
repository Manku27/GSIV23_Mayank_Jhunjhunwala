import { MovieDetails } from "../details/MovieDetails"
import { MoviesList } from "../list/MoviesList"
import { NotFound } from "./NotFound"

export const LIST_ROUTE = {
    name: 'List',
    path: '/',
    component: MoviesList,
    exact: true,
   
  }
  export const DETAILS_ROUTE = {
    name: 'Details',
    path: '/details/:id',
    component: MovieDetails,
    exact: true,
  }

  export const NOT_FOUND_ROUTE = {
    name: 'Page not found',
    path: '*',
    exact: false,
    component: NotFound,
  }

  export const ROUTES = [
    {...LIST_ROUTE},
    {...DETAILS_ROUTE},
    // Keep it at last
    {...NOT_FOUND_ROUTE},
  ]
  

