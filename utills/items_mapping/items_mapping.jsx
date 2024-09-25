import Link from "next/link";

export const mapMenuItems = (
  menuArray,
  mainMenuUl,
  mainMenuLinks,
  closeNavModal
) => {
  const handleClick = () => {
    closeNavModal();
  };

  if (closeNavModal) {
    return (
      <ul className={`${mainMenuUl}`}>
        {menuArray.map((item, index) => (
          <li key={index} className="mx-2">
            <Link href={item.node?.uri} legacyBehavior>
              <a className={`${mainMenuLinks}`} onClick={handleClick}>
                {item.node?.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className={`${mainMenuUl}`}>
        {menuArray.map((item, index) => (
          <li key={index} className="mx-2">
            <Link className={`${mainMenuLinks}`} href={item.node?.uri}>
              {item.node?.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};

export const mapFooterMenu = (menuArray, classForUl, classForLinks) => {
  return (
    <ul className={`${classForUl}`}>
      {menuArray.map((item, index) => {
        const trimmedPath = item.link.url.split("srbobrandanas.rs")[1];
        return (
          <li className="mx-2">
            <Link key={index} className={`${classForLinks}`} href={trimmedPath}>
              {item?.link?.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
