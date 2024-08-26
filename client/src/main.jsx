import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { toast } from "react-toastify";
import App from "./App";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AuthProtected from "./services/AuthProtected";
import AdminProtected from "./services/AdminProtected";
import decodeTokenAndExtractRole from "./services/decodeToken";
import Register from "./pages/Register";
import ProfileInfo from "./components/ProfileInfo";
import ProfileContributions from "./components/ProfileContributions";
import ProfileDelete from "./components/ProfileDelete";
import EditProfile from "./pages/EditProfile";
import EditPersonalInfo from "./components/ProfileForm";
import Admin from "./pages/Admin";
import Camera from "./pages/Camera";
import {
  baseLoginUrl,
  baseRegisterUrl,
  baseArtUrl,
  baseUserUrl,
  basePictureUrl,
  baseUploadUrl,
  baseAcceptedArtUrl,
} from "./services/url";
import { fetchApi, sendData } from "./services/api.service";
import { getToken } from "./services/getToken";
import { CurrentUserProvider } from "./contexts/CurrentUserProvider";
import Score from "./pages/Score";
import AdminStreetArtPage from "./pages/AdminStreetArtPage";
import StreetArtList from "./components/StreetArtList";
import AuthProtectedCamera from "./services/AuthProtectedCamera";
import UserPage from "./pages/UserPage";
import UserList from "./components/UserList";
import Validation from "./pages/Validation";
import ValidationDetails from "./pages/ValidationDetails";
import Credits from "./pages/Credits";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: async () => {
      const [users, pictures] = await Promise.all([
        fetchApi(`${baseUserUrl}`),
        fetchApi(`${baseArtUrl}gallery`),
      ]);
      return { users, pictures };
    },
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetchApi(baseAcceptedArtUrl),
      },
      {
        path: "/camera",
        element: (
          <AuthProtectedCamera>
            <Camera />
          </AuthProtectedCamera>
        ),

        action: async ({ request }) => {
          const formData = await request.formData();
          const imageSrc = formData.get("pictureTaken");
          const userId = formData.get("userId");
          const latitude = formData.get("latitude");
          const longitude = formData.get("longitude");
          const title = formData.get("title");
          const artist = formData.get("artist");
          const information = formData.get("information");
          const blob = await fetch(imageSrc).then((res) => res.blob());
          const uploadData = new FormData();
          uploadData.append("file", blob, "pictureTaken.jpg");
          uploadData.append("user_id", userId);
          uploadData.append("latitude", latitude);
          uploadData.append("longitude", longitude);
          uploadData.append("title", title);
          uploadData.append("artist", artist);
          uploadData.append("information", information);
          const response = await sendData(
            `${baseUploadUrl}`,
            uploadData,
            "POST"
          );
          if (response.status === 201) {
            toast.success(
              "Merci pour votre contribution. Celle-ci va être examinée par un administrateur. Si elle est validée, vous gagnerez des points !"
            );
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/score",
        element: <Score />,
        loader: () => fetchApi(`${baseUserUrl}rank`),
      },
      {
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const username = formData.get("username");
          const email = formData.get("email");
          const city = formData.get("city");
          const password = formData.get("password");
          const response = await sendData(
            `${baseRegisterUrl}`,
            {
              username,
              email,
              city,
              password,
            },
            "POST"
          );
          if (response.status === 201) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "/login",
        element: <Login />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const email = formData.get("email");
          const password = formData.get("password");

          try {
            const response = await sendData(
              `${baseLoginUrl}`,
              {
                email,
                password,
              },
              "POST"
            );

            if (!response.ok) {
              const errorData = await response.json();
              return { error: errorData.message || "Erreur de connexion." };
            }

            const authData = await response.json();
            localStorage.setItem("token", authData.token);
            toast.success("Vous êtes connecté(e)");
            return redirect("/");
          } catch (error) {
            return {
              error: " Veuillez vérifier les informations saisies",
            };
          }
        },
      },
      {
        path: "/profile/:id",
        element: (
          <AuthProtected>
            <Profile />
          </AuthProtected>
        ),
        loader: async ({ params }) => {
          const [sortedUsers, userData, artData] = await Promise.all([
            fetchApi(`${baseUserUrl}rank`),
            fetchApi(`${baseUserUrl}/${params.id}`),
            fetchApi(`${baseArtUrl}/${params.id}`),
          ]);
          return { sortedUsers, userData, artData };
        },
        action: async ({ params }) => {
          const token = getToken();
          const decodedToken = decodeTokenAndExtractRole(token);
          const authId = decodedToken.id;
          const authRole = decodedToken.role;
          console.log("params.id", parseInt(params.id, 10));
          console.log("authId", parseInt(authId, 10));
          const response = await fetch(
            await fetch(
              `${import.meta.env.VITE_API_URL}${baseUserUrl}${params.id}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
          );
          // if (response.status === 204) {
          if (
            authRole !== 1 ||
            (authRole === 1 && authId === parseInt(params.id, 10))
          ) {
            localStorage.removeItem("token");
          }
          toast.success("Le profil a bien été supprimé.");
          // } else {
          //   toast.error(
          //     "Votre profil n'a pas pu être supprimé. Merci de nous contacter en utilisant le formulaire de contact."
          //   );
          // }
          return redirect("/");
        },
        children: [
          {
            path: "",
            element: <ProfileInfo />,
          },
          {
            path: "",
            element: <ProfileDelete />,
          },
          {
            path: "",
            element: <ProfileContributions />,
          },
        ],
      },
      {
        path: "/profile/:id/edit",
        element: (
          <AuthProtected>
            <EditProfile />
          </AuthProtected>
        ),
        loader: ({ params }) => fetchApi(`${baseUserUrl}/${params.id}`),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const username = formData.get("username");
          const city = formData.get("city");
          const email = formData.get("email");
          await sendData(
            `${baseUserUrl}${params.id}`,
            {
              username,
              city,
              email,
            },
            "PUT"
          );
          return redirect(`/profile/${params.id}`);
        },
        children: [
          {
            path: "",
            element: <EditPersonalInfo />,
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <AdminProtected>
            <Admin />
          </AdminProtected>
        ),
        loader: async () => {
          const [countUsers, countArts] = await Promise.all([
            fetchApi(`${baseUserUrl}count`),
            fetchApi(`${baseArtUrl}count`),
          ]);
          return { countUsers, countArts };
        },
      },
      {
        path: "/admin/users",
        element: (
          <AdminProtected>
            <UserPage />
          </AdminProtected>
        ),
        children: [
          {
            path: "",
            element: <UserList />,
          },
        ],
      },
      {
        path: "/admin/artlist",
        element: (
          <AdminProtected>
            <AdminStreetArtPage />
          </AdminProtected>
        ),
        action: async ({ request }) => {
          const formData = await request.formData();
          const artId = formData.get("artId");
          const token = getToken();
          await fetch(`${import.meta.env.VITE_API_URL}${baseArtUrl}${artId}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return redirect("/admin/artlist");
        },
        children: [
          {
            path: "",
            element: <StreetArtList />,
          },
        ],
      },
      {
        path: "/admin/validation",
        element: (
          <AdminProtected>
            <Validation />
          </AdminProtected>
        ),
        loader: () => fetchApi(`${baseArtUrl}comparedArts`),
      },
      {
        path: "/admin/validation/:id",
        element: (
          <AdminProtected>
            <ValidationDetails />
          </AdminProtected>
        ),
        loader: () => fetchApi(`${baseArtUrl}comparedArts`),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const status = formData.get("status");
          const pointNumber = formData.get("pointNumber");

          const artId = params.id;

          const updatedStatus = await sendData(
            `${baseArtUrl}${artId}`,
            {
              status,
            },
            request.method.toUpperCase()
          );

          const upgradePointNumber = await sendData(
            `${baseUserUrl}editpoint`,
            {
              pointNumber,
              artId,
            },
            request.method.toUpperCase()
          );

          if (updatedStatus && upgradePointNumber) {
            return redirect(`/admin/validation`);
          }
          return null;
        },
      },
      {
        path: "/credits",
        element: <Credits />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <RouterProvider router={router} />
    </CurrentUserProvider>
  </React.StrictMode>
);
