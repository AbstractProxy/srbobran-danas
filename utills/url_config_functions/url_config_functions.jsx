export function IsYear(slug) {
  if (/^\d{4}$/.test(slug)) {
    if (slug >= 2000 && slug <= 2050) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

export function isVesti(slug) {
  if (slug == `vesti`) {
    return true;
  }
}

export function isDesavanja(slug) {
  if (slug == `desavanja`) {
    return true;
  }
}

export function isJobs(slug) {
  if (slug == `poslovni-adresar`) {
    return true;
  }
}

export function isAktivnosti(slug) {
  if (slug == `aktivnosti`) {
    return true;
  }
}

export function isKategorijeOrMesta(slug) {
  if (
    slug == `kategorija-desavanja` ||
    slug == `mesto-desavanja` ||
    slug == `category` ||
    slug == `mesto` ||
    slug == `poslovni-adresar-kategorija` ||
    slug == `poslovni-adresar-mesto`
  ) {
    return true;
  }
}

export function isKategorijeDesavanja(slug) {
  if (slug == `kategorija-desavanja`) {
    return true;
  }
}

export function isMestaDesavanja(slug) {
  if (slug == `mesto-desavanja`) {
    return true;
  }
}

export function isKategorijeVesti(slug) {
  if (slug == `category`) {
    return true;
  }
}

export function isMestaVesti(slug) {
  if (slug == `mesto`) {
    return true;
  }
}

export function isKategorijeJobs(slug) {
  if (slug == `poslovni-adresar-kategorija`) {
    return true;
  }
}

export function isMestaJobs(slug) {
  if (slug == `poslovni-adresar-mesto`) {
    return true;
  }
}
