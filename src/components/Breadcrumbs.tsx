import { Link, useLocation } from "react-router-dom";

const pathToBreadcrumbName: any = {
  // ... other path segments
  home: "Home",
  newPiece: "New Piece",
  piece: "Piece",
  comments: "Comments",
};

const Breadcrumbs = () => {
  const location = useLocation();
  // Split the pathname and filter out any empty strings or the initial home segment

  const breadcrumbStyle = {
    backgroundColor: "#1f2129",
    padding: "0 15px", // Reduced padding to fit the height requirement
    position: "fixed",
    top: "5px", // Align to the top of the viewport
    left: 0, // Align to the left of the viewport
    width: "100%", // Full width
    height: "15px", // Exact height
    zIndex: 1000, // High z-index to ensure it's above other elements
  } as React.CSSProperties;

  const breadcrumbListStyle = {
    listStyle: "none",
    display: "flex",
    // flexDirection: "row",
    padding: 0,
    margin: 0,
  };

  const breadcrumbItemStyle = {
    marginRight: "8px", // Spacing between breadcrumbs
    color: "#7800ff",
  };

  const breadcrumbLinkStyle = {
    textDecoration: "underline",
    color: "#7800ff", // Example link color
  };

  const pathnames = location.pathname
    .split("/")
    .filter(
      (x, i) =>
        x && !["signup", "register"].includes(x) && (i !== 0 || x !== "home")
    );

  return (
    <nav style={breadcrumbStyle}>
      <ul style={breadcrumbListStyle}>
        <li>{/* <Link to="/home">Home</Link> */}</li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const breadcrumbName = pathToBreadcrumbName[name] || name;

          return (
            <li key={name} style={breadcrumbItemStyle}>
              {isLast ? (
                breadcrumbName
              ) : (
                <Link to={routeTo} style={breadcrumbLinkStyle}>
                  {breadcrumbName}
                </Link>
              )}
              {!isLast && <span style={{ margin: "0 5px" }}>{">"}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
