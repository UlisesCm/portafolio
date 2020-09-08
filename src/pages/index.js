import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import Profile from "../components/Profile"
import AboutMe from "../components/AboutMe"
import "./index.scss"

export default function index() {
  return (
    <BasicLayout>
      <Profile />
      <AboutMe />
    </BasicLayout>
  )
}
