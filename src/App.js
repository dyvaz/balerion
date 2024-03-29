import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import RecuperarSenha from "./Recuperar";
import Layout from "./Components/Layout";
import { Confirm, ConfirmModal, ErrorConfirm } from "./Confirm";
import { EditProfile } from "./Components/EditProfile";

import Login from "./Login";
import New from "./NewAccount";

function App() {
  return (
    <>
      {/* colocar o x pra volter
       */}
      {/* <Login /> */}

      <Layout />

      {/* <EditProfile /> */}

      {/* <New /> */}

      {/* <RecuperarSenha /> */}

      {/* <Confirm /> */}
      {/* <ConfirmModal /> */}

      {/* <ErrorConfirm /> */}

      <GlobalStyles />
    </>
  );
}

export default App;
