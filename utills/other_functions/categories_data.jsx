import { fetchCategories } from "../queries/fetch_data";
import { DESAVANJA_KATEGORIJE } from "../queries/desavanja_kategorije";
import { DESAVANJA_MESTA } from "../queries/desavanja_mesta";
import { JOBS_KATEGORIJE } from "../queries/jobs_kategorije";
import { JOBS_MESTA } from "../queries/jobs_mesta";
import { POSTS_KATEGORIJE } from "../queries/posts_kategorije";
import { POSTS_MESTA } from "../queries/posts_mesta";

//?VESTI KATEGORIJE:

const postCategories = await fetchCategories(POSTS_KATEGORIJE);

export const postsCategoriesArray = postCategories.categories.edges.map(
  (category) => category.node.slug
);

//?-------------------------------------------------------------------------------------------------
//?VESTI MESTA:

const postPlaces = await fetchCategories(POSTS_MESTA);

export const postsPlacesArray = postPlaces.mesta.edges.map(
  (place) => place.node.slug
);

//?-------------------------------------------------------------------------------------------------
//?DESAVANJA KATEGORIJE:
const desavanjaCategories = await fetchCategories(DESAVANJA_KATEGORIJE);

export const desavanjaCategoriesArray =
  desavanjaCategories.desavanjaKategorije.edges.map(
    (category) => category.node.slug
  );

//?-------------------------------------------------------------------------------------------------
//?DESAVANJA MESTA:
const desavanjaPlaces = await fetchCategories(DESAVANJA_MESTA);

export const desavanjaPlacesArray = desavanjaPlaces.desavanjaMesta.edges.map(
  (place) => place.node.slug
);

//?-------------------------------------------------------------------------------------------------
//?POSLOVNI ADRESAR KATEGORIJE:
const jobsCategories = await fetchCategories(JOBS_KATEGORIJE);

export const jobsCategoriesArray =
  jobsCategories.poslovniAdresarKategorije.edges.map(
    (category) => category.node.slug
  );
//?-------------------------------------------------------------------------------------------------
//?POSLOVNI ADRESAR MESTA:

const jobsPlaces = await fetchCategories(JOBS_MESTA);

export const jobsPlacesArray = jobsPlaces.poslovniAdresarMesta.edges.map(
  (place) => place.node.slug
);
