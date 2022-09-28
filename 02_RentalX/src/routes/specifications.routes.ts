/* eslint-disable prettier/prettier */

import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const specificationsRoutes = Router ();

specificationsRoutes.post("/", ( request, response ) => {
    
    return createSpecificationController.handle( request, response );
});

specificationsRoutes.get("/", ( request, response ) => {

    return listCategoriesController.handle( request, response );
});

export { specificationsRoutes };