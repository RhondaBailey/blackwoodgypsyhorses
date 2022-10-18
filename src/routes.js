import React from 'react';
import { Route, Routes } from "react-router-dom";
  
import {
Home,
About,
OurHorses,
Mares,
MissMe,
Nova,
Bree,
Effie,
Kima,
Geldings,
Maestro,
Sale,
Sold,
Max,
Tumblena,
Valkyrie,
Breed,
Links,
Whoops404
} from "./pages";

const NavRoutes = () => {
    
      return(
      
        <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/OurHorses" element={<OurHorses />} />
            <Route path="/Mares" element={<Mares />} />
            <Route path="/MissMe" element={<MissMe />} />
            <Route path="/Nova" element={<Nova />} />
            <Route path="/Effie" element={<Effie />} />
            <Route path="/Kima" element={<Kima />} />
            <Route path="/Geldings" element={<Geldings />} />
            <Route path="/Maestro" element={<Maestro />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Bree" element={<Bree />} />
            <Route path="/Valkyrie" element={<Valkyrie />} />
            <Route path="/Tumblena" element={<Tumblena />} />
            <Route path="/Max" element={<Max />} />
            <Route path="/Sold" element={<Sold />} />
            <Route path="/Breed" element={<Breed />}></Route>
            <Route path="/Links" element={<Links />}></Route>
            <Route path="*" element={<Whoops404 />}></Route>
        </Routes> 
      );
    };
    
    export default NavRoutes;