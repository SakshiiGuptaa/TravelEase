
import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, getTourBySearch, updateTour } from '../controllers/tourController.js';

const router = express.Router();

//create new tour
router.post('/',createTour);

//update new tour
router.put('/:id',updateTour);

//delete tour
router.delete('/:id',deleteTour);

//get single tour
router.get('/:id',getSingleTour);

//get all tours
router.get('/',getAllTour);

//get tour by search
router.get('/search/getTourBySearch',getTourBySearch);


export default router;