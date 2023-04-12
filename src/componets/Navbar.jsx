import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../componets/css/navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShopIcon from "@mui/icons-material/Shop";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import logo from "../logo/M-red.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";

let pages = [
  {
    title: "home",
    link: "/",
  },
];

const adminPages = {
  title: "add",
  link: "/add",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const { cartLength, getCart } = useCartContext();
  const { user, logout, isAdmin } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [navbar, setNavbar] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNavOpen = Boolean(anchorElNav);
  React.useEffect(() => {
    getCart();
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      // sx={{ backgroundColor: "black" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem sx={{ backgroundColor: "black" }} onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem sx={{ backgroundColor: "black" }} onClick={handleMenuClose}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      // sx={{ backgroundColor: "black" }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      {/* <MenuItem sx={{ backgroundColor: "black" }}>
        <IconButton size="large" aria-label="show favorites" color="inherit">
          <Badge badgeContent={1} color="error">
            <GradeIcon />
          </Badge>
        </IconButton>
        <p> Favorites</p>
      </MenuItem> */}
      <MenuItem
        sx={{ backgroundColor: "black" }}
        onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const navMenuId = "primary-search-account-menu-mobile";
  const renderNavMenu = (
    <Menu
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={navMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isNavOpen}
      onClose={handleCloseNavMenu}>
      <Box sx={{ width: "230px", backgroundColor: "#14213d" }}>
        <MenuItem sx={{ backgroundColor: "#14213d" }}>
          {isAdmin()
            ? pages.concat(adminPages).map((page) => (
                <Accordion sx={{ width: "230px", color: "#fca311" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography> Pages</Typography>
                  </AccordionSummary>
                  <Box>
                    <AccordionDetails>
                      <IconButton
                        component={Link}
                        to={page.link}
                        sx={{ fontSize: "16px", color: "#000000" }}>
                        {page.title}
                      </IconButton>
                    </AccordionDetails>
                  </Box>
                </Accordion>
              ))
            : pages.map((page) => (
                <Accordion sx={{ width: "230px", color: "#fca311" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography> Pages</Typography>
                  </AccordionSummary>
                  <Box>
                    <AccordionDetails>
                      <IconButton
                        component={Link}
                        to={page.link}
                        sx={{ fontSize: "16px", color: "#000000" }}>
                        {page.title}
                      </IconButton>
                    </AccordionDetails>
                  </Box>
                </Accordion>
              ))}
          {/* <Accordion sx={{ width: "230px", color: "#fca311" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography> Category</Typography>
            </AccordionSummary>
            <Box>
              <AccordionDetails>
                <IconButton sx={{ fontSize: "16px", color: "#000000" }}>
                  fantasy
                </IconButton>
              </AccordionDetails>
              <AccordionDetails>
                <IconButton sx={{ fontSize: "16px", color: "#000000" }}>
                  comedy
                </IconButton>
              </AccordionDetails>
            </Box>
          </Accordion> */}
        </MenuItem>
        <MenuItem>
          {/* <Accordion sx={{ width: "230px", color: "#fca311" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography> Category</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion> */}
        </MenuItem>
      </Box>
    </Menu>
  );

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "-10px",
          marginLeft: "-8px",
          marginRight: "-8px",
        }}>
        <AppBar
          style={{
            color: "#e5e5e5",
            background: "transparent",
          }}
          position="static">
          <Toolbar>
            <IconButton
              style={{ color: "#fca311" }}
              onClick={handleOpenNavMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <div>
              <img style={{ width: "40px" }} src={logo} alt="" srcset="" />
            </div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon style={{ color: "#fca311" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show favorites"
                color="inherit">
                <Badge badgeContent={1} color="error">
                  <BookmarkIcon style={{ color: "#fca311" }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show favorites"
                color="inherit">
                <Badge
                  component={Link}
                  to="/cart"
                  badgeContent={1}
                  color="error">
                  <ShopIcon style={{ color: "#fca311" }} />
                </Badge>
              </IconButton>
              {user ? (
                // <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
              ) : (
                // </Tooltip>
                <Button component={Link} to="/auth" color="inherit">
                  login
                </Button>
              )}{" "}
              <Button onClick={logout}>
                <Typography textAlign="center">logout</Typography>
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {renderNavMenu}
      </Box>
    </nav>
  );
}
