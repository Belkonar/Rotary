import React from 'react';
import { createRoot } from 'react-dom/client';
import {Button} from "@mui/material";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <div>hi</div>
        <Button variant="contained">Contained</Button>
    </React.StrictMode>
);
