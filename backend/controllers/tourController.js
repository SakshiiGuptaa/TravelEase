import Tour from "../models/Tour.js";

// create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully created",
        data: savedTour,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create, Try again" });
  }
};

//update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        data: updateTour,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update, Try again" });
  }
};

//delete tour

export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

//getSingleTour tour

export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);

    res
      .status(200)
      .json({ success: true, message: "Successfully data found", data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: "Not Found" });
  }
};

//getAllTour tour

export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res
      .status(200)
      .json({
        success: true,
        count : tours.length,
        message: "Successfully found all data",
        data: tours,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Not Found" });
  }
};


//get tour by search 

export const getTourBySearch = async(req, res)=>{

    //i here means case sensitive
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try{

        //gte means greater than equal
        const tours = await Tour.find({ city , distance:{$gte:distance},
        maxGroupSize:{$gte : maxGroupSize}})

        res
        .status(200)
        .json({
          success: true,
          message: "Successful",
          data: tours,
        });

    }
    catch(err){
        res.status(500).json({ success: false, message: "Not Found" });
    }

}