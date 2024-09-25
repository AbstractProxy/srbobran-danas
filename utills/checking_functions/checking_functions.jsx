import { POSTS_QUERY } from "../queries/posts_query";
import { DESAVANJA_QUERY } from "../queries/desavanja_query";
import { JOBS_QUERY } from "../queries/jobs_query";
import { ACTIVITIES_QUERY } from "../queries/activities_query";
import { POSTS_KATEGORIJE } from "../queries/posts_kategorije";
import { POSTS_MESTA } from "../queries/posts_mesta";
import { DESAVANJA_KATEGORIJE } from "../queries/desavanja_kategorije";
import { DESAVANJA_MESTA } from "../queries/desavanja_mesta";
import { JOBS_KATEGORIJE } from "../queries/jobs_kategorije";
import { JOBS_MESTA } from "../queries/jobs_mesta";
import { FILTERED_EVENTS } from "../queries/filtered_events";
import { FILTERED_JOBS } from "../queries/filtered_jobs";
import { FILTERED_POSTS } from "../queries/filtered_posts";
import {
  isAktivnosti,
  isDesavanja,
  isJobs,
  isKategorijeDesavanja,
  isKategorijeJobs,
  isKategorijeVesti,
  isMestaDesavanja,
  isMestaJobs,
  isMestaVesti,
  isVesti,
} from "../url_config_functions/url_config_functions";

export function checkQuery(slug) {
  let query;
  if (isVesti(slug)) query = POSTS_QUERY;
  else if (isDesavanja(slug)) query = DESAVANJA_QUERY;
  else if (isJobs(slug)) query = JOBS_QUERY;
  else if (isAktivnosti(slug)) query = ACTIVITIES_QUERY;
  else if (isKategorijeDesavanja(slug) || isMestaDesavanja(slug))
    query = FILTERED_EVENTS;
  else if (isKategorijeVesti(slug) || isMestaVesti(slug))
    query = FILTERED_POSTS;
  else if (isKategorijeJobs(slug) || isMestaJobs(slug)) query = FILTERED_JOBS;
  return query;
}

export function checkTaxonomy(slug) {
  let taxonomyName;
  if (isKategorijeDesavanja(slug)) taxonomyName = `DESAVANJAKATEGORIJA`;
  else if (isMestaDesavanja(slug)) taxonomyName = `DESAVANJAMESTO`;
  else if (isKategorijeVesti(slug)) taxonomyName = `CATEGORY`;
  else if (isMestaVesti(slug)) taxonomyName = `MESTO`;
  else if (isKategorijeJobs(slug)) taxonomyName = `POSLOVNIADRESARKATEGORIJA`;
  else if (isMestaJobs(slug)) taxonomyName = `POSLOVNIADRESARMESTO`;

  return taxonomyName;
}

export function checkCategories(slug) {
  let allCategoriesQuery;

  if (
    isDesavanja(slug) ||
    isKategorijeDesavanja(slug) ||
    isMestaDesavanja(slug)
  )
    allCategoriesQuery = DESAVANJA_KATEGORIJE;
  else if (isVesti(slug) || isKategorijeVesti(slug) || isMestaVesti(slug))
    allCategoriesQuery = POSTS_KATEGORIJE;
  else if (isJobs(slug) || isKategorijeJobs(slug) || isMestaJobs(slug))
    allCategoriesQuery = JOBS_KATEGORIJE;

  return allCategoriesQuery;
}

export function checkPlaces(slug) {
  let allPlacesQuery;
  if (
    isDesavanja(slug) ||
    isKategorijeDesavanja(slug) ||
    isMestaDesavanja(slug)
  ) {
    allPlacesQuery = DESAVANJA_MESTA;
  } else if (isVesti(slug) || isKategorijeVesti(slug) || isMestaVesti(slug)) {
    allPlacesQuery = POSTS_MESTA;
  } else if (isJobs(slug) || isKategorijeJobs(slug) || isMestaJobs(slug)) {
    allPlacesQuery = JOBS_MESTA;
  }
  return allPlacesQuery;
}

export function checkAreCategoriesNull(categories) {
  if (categories === "") {
    categories = [];
  }

  return categories.map((category) => parseInt(category));
}

export function checkCategoriesNameForQuery(type) {
  let categoriesName;
  if (type === "post") {
    categoriesName = "categories";
  } else if (type === "desavanja") {
    categoriesName = "desavanjaKategorije";
  } else if (type === "poslovniAdresar") {
    categoriesName = "poslovniAdresarKategorije";
  } else if (type === "aktivnosti") {
    categoriesName = "aktivnostiKategorije";
  }
  return categoriesName;
}

export function checkPlacesNameForQuery(type) {
  let placesName;
  if (type === "post") {
    placesName = "mesta";
  } else if (type === "desavanja") {
    placesName = "desavanjaMesta";
  } else if (type === "poslovniAdresar") {
    placesName = "poslovniAdresarMesta";
  } else if (type === "aktivnosti") {
    placesName = "aktivnostiMesta";
  }
  return placesName;
}

export function checkPostsType(type) {
  let postType;
  if (type === "post") {
    postType = "vesti";
  } else if (type === "desavanja") {
    postType = "desavanja";
  } else if (type === "poslovniAdresar") {
    postType = "poslovni-adresar";
  } else if (type === "aktivnosti") {
    postType = "aktivnosti";
  }
  return postType;
}
