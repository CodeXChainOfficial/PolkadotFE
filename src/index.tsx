/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"

import * as ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { history } from "utils/history"
// Initialize languages
import "./locales/i18n"

import { App } from "app"
import { HelmetProvider } from "react-helmet-async"
import { ToastContainer, Flip } from "react-toastify"
import { configureAppStore } from "store/configureStore"
import { BrowserRouter } from "react-router-dom"
import { MvxAxiosContext, MvxDappContext } from "libs/mvx"
import React from "react"

// @ts-ignore
window.global = window

export const store = configureAppStore({}, history)
const MOUNT_NODE = document.getElementById("MultiversX") as HTMLElement

interface Props {
  Component: typeof App
}

const ConnectedApp = ({ Component }: Props) => (
  <>
    <MvxAxiosContext>
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <MvxDappContext>
              <Component />
            </MvxDappContext>
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
    </MvxAxiosContext>

    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
      limit={5}
    />
  </>
)

const render = (Component: typeof App) => {
  const root = ReactDOM.createRoot(MOUNT_NODE)
  root.render(
    <React.StrictMode>
      <ConnectedApp Component={Component} />
    </React.StrictMode>,
  )
}

render(App)
