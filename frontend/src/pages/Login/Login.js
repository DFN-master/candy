import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png";
import { useStyles } from ".";

export const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <div className={"container"}>
        <div className={"container-img"}>
          <img alt={"Logo"} src={logo}></img>
        </div>
      </div>
      <div className={"container-right"}>
        <div className={"container-box"}>
          <div className={"box"}>
            <div className={"container-header-box"}>
              <Link
                // variant="body2"
                component={RouterLink}
                className={"link-create-count"}
                tabIndex={0}
                role={"button"}
                aria-disabled={"false"}
                to="/signup"
                style={{ textDecoration: "none" }}
              >
                <span className={"label-text"}>Criar conta</span>
              </Link>
              <a
                className={"link-enter"}
                tabIndex={0}
                role={"button"}
                aria-disabled={"false"}
                to="/login"
                style={{ textDecoration: "none" }}
              >
                <span>Entrar</span>
              </a>
            </div>
            <form className={classes.form} noValidate onSubmit={handlSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={i18n.t("login.form.email")}
                name="email"
                value={user.email}
                onChange={handleChangeInput}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={i18n.t("login.form.password")}
                type="password"
                id="password"
                value={user.password}
                onChange={handleChangeInput}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {i18n.t("login.buttons.submit")}
              </Button>
            </form>
            <div
              style={{
                blockSize: "44.9219px",
                borderBlockEndColor: "rgba(0, 0, 0, 0.87)",
                borderBlockStartColor: "rgba(0, 0, 0, 0.87)",
                borderBottomColor: "rgba(0, 0, 0, 0.87)",
                borderInlineEndColor: "rgba(0, 0, 0, 0.87)",
                borderInlineStartColor: "rgba(0, 0, 0, 0.87)",
                borderLeftColor: "rgba(0, 0, 0, 0.87)",
                borderRightColor: "rgba(0, 0, 0, 0.87)",
                borderTopColor: "rgba(0, 0, 0, 0.87)",
                boxSizing: "border-box",
                caretColor: "rgba(0, 0, 0, 0.87)",
                color: "rgba(0, 0, 0, 0.87)",
                columnRuleColor: "rgba(0, 0, 0, 0.87)",
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "14px",
                inlineSize: "382px",
                lineHeight: "20.02px",
                marginInlineEnd: "40px",
                marginInlineStart: "40px",
                marginLeft: "40px",
                marginRight: "40px",
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                outlineColor: "rgba(0, 0, 0, 0.87)",
                textDecoration: "none solid rgba(0, 0, 0, 0.87)",
                textDecorationColor: "rgba(0, 0, 0, 0.87)",
                textEmphasisColor: "rgba(0, 0, 0, 0.87)",
                WebkitFontSmoothing: "antialiased",
                WebkitTextFillColor: "rgba(0, 0, 0, 0.87)",
                WebkitTextStrokeColor: "rgba(0, 0, 0, 0.87)",
              }}
              className={"MuiBox-root jss136"}
            >
              <p
                style={{
                  blockSize: "40.0312px",
                  borderBlockEndColor: "rgba(0, 0, 0, 0.54)",
                  borderBlockStartColor: "rgba(0, 0, 0, 0.54)",
                  borderBottomColor: "rgba(0, 0, 0, 0.54)",
                  borderInlineEndColor: "rgba(0, 0, 0, 0.54)",
                  borderInlineStartColor: "rgba(0, 0, 0, 0.54)",
                  borderLeftColor: "rgba(0, 0, 0, 0.54)",
                  borderRightColor: "rgba(0, 0, 0, 0.54)",
                  borderTopColor: "rgba(0, 0, 0, 0.54)",
                  boxSizing: "border-box",
                  caretColor: "rgba(0, 0, 0, 0.54)",
                  color: "rgba(0, 0, 0, 0.54)",
                  columnRuleColor: "rgba(0, 0, 0, 0.54)",
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  fontSize: "14px",
                  inlineSize: "382px",
                  lineHeight: "20.02px",
                  marginBlockEnd: "4.9px",
                  marginBlockStart: "0px",
                  marginBottom: "0.35em",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: "0px",
                  outlineColor: "rgba(0, 0, 0, 0.54)",
                  textAlign: "center",
                  textDecoration: "none solid rgba(0, 0, 0, 0.54)",
                  textDecorationColor: "rgba(0, 0, 0, 0.54)",
                  textEmphasisColor: "rgba(0, 0, 0, 0.54)",
                  WebkitFontSmoothing: "antialiased",
                  WebkitTextFillColor: "rgba(0, 0, 0, 0.54)",
                  WebkitTextStrokeColor: "rgba(0, 0, 0, 0.54)",
                }}
                className={
                  "MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-gutterBottom MuiTypography-alignCenter"
                }
              >
                Ao prosseguir, você concorda com nossos{" "}
                <a
                  style={{
                    borderBlockEndColor: "rgb(52, 137, 255)",
                    borderBlockStartColor: "rgb(52, 137, 255)",
                    borderBottomColor: "rgb(52, 137, 255)",
                    borderInlineEndColor: "rgb(52, 137, 255)",
                    borderInlineStartColor: "rgb(52, 137, 255)",
                    borderLeftColor: "rgb(52, 137, 255)",
                    borderRightColor: "rgb(52, 137, 255)",
                    borderTopColor: "rgb(52, 137, 255)",
                    boxSizing: "border-box",
                    caretColor: "rgb(52, 137, 255)",
                    color: "rgb(52, 137, 255)",
                    columnRuleColor: "rgb(52, 137, 255)",
                    cursor: "pointer",
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20.02px",
                    marginLeft: 0,
                    marginRight: 0,
                    outlineColor: "rgb(52, 137, 255)",
                    textAlign: "center",
                    textDecoration: "none",
                    textDecorationColor: "rgb(52, 137, 255)",
                    textEmphasisColor: "rgb(52, 137, 255)",
                    WebkitFontSmoothing: "antialiased",
                    WebkitTextFillColor: "rgb(52, 137, 255)",
                    WebkitTextStrokeColor: "rgb(52, 137, 255)",
                  }}
                  className={
                    "MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  }
                  href={"https://app.whaticket.com/terms"}
                  target={"_blank"}
                >
                  Termos de Serviço{" "}
                </a>{" "}
                e{" "}
                <a
                  style={{
                    borderBlockEndColor: "rgb(52, 137, 255)",
                    borderBlockStartColor: "rgb(52, 137, 255)",
                    borderBottomColor: "rgb(52, 137, 255)",
                    borderInlineEndColor: "rgb(52, 137, 255)",
                    borderInlineStartColor: "rgb(52, 137, 255)",
                    borderLeftColor: "rgb(52, 137, 255)",
                    borderRightColor: "rgb(52, 137, 255)",
                    borderTopColor: "rgb(52, 137, 255)",
                    boxSizing: "border-box",
                    caretColor: "rgb(52, 137, 255)",
                    color: "rgb(52, 137, 255)",
                    columnRuleColor: "rgb(52, 137, 255)",
                    cursor: "pointer",
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20.02px",
                    marginLeft: 0,
                    marginRight: 0,
                    outlineColor: "rgb(52, 137, 255)",
                    textAlign: "center",
                    textDecoration: "none",
                    textDecorationColor: "rgb(52, 137, 255)",
                    textEmphasisColor: "rgb(52, 137, 255)",
                    WebkitFontSmoothing: "antialiased",
                    WebkitTextFillColor: "rgb(52, 137, 255)",
                    WebkitTextStrokeColor: "rgb(52, 137, 255)",
                  }}
                  className={
                    "MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  }
                  href={"https://app.whaticket.com/privacy"}
                  target={"_blank"}
                >
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
