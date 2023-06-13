import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";

import Welcome from './container/Login-Signup/welcome/welcome';

import Login from './container/Login-Signup/LoginPage/login';
import SignUp from './container/Login-Signup/SignUpPage/signup';
import EventPage from "./container/EventPage/event";
import ContactUs from "./container/ContactUs/contactUs";
import Header from "./components/heading/header";
import Blog1 from "./container/blogs/blog1";
import Blog2 from "./container/blogs/blog2";
import Blog3 from "./container/blogs/blog3";
import Blog4 from "./container/blogs/blog4";
import Blog5 from "./container/blogs/blog5";
import Blog6 from "./container/blogs/blog6";


const routes = [
{
  path: "", element:(<><Header/> <LandingPage/></> )},
{
  path: "/welcome", element:(<><Header/> <Welcome/> </>)},
{
  path: "/login", element:(<><Header/> <Login/> </>)},
{
  path: "/signup", element:(<><Header/> <SignUp/> </>)},
{
  path: "/events", element:(<><Header/> <EventPage/> </>)},
{
  path: "/contact-us", element:(<><Header/> <ContactUs/> </>)},

{
  path: "/blog1", element:(<><Header/> <Blog1/></>)},

{
  path: "/blog2", element:(<><Header/> <Blog2/></>)},

{
  path: "/blog3", element:(<><Header/> <Blog3/></>)},

{
  path: "/blog4", element:(<><Header/> <Blog4/></>)},

{
  path: "/blog5", element:(<><Header/> <Blog5/></>)},

{
  path: "/blog6", element:(<><Header/> <Blog6/></>)},
]
const router = createBrowserRouter(routes);

function app () {
  return (
    <div>
    <RouterProvider router={router}>
    <Route path="/" element={<Header />} />
    </RouterProvider>
    </div>
    
   
  )
}
export default app;
/*
https://www.figma.com/file/C0uRkPaQZqDesCaNFZm6fY/Event-Reservation-System-team-library?type=design
*/
