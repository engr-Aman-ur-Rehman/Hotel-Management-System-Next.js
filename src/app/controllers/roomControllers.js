import Room from '../../../models/room';

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
};

const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: 'Room  not found with this ID',
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
};
export { allRooms, newRoom, getSingleRoom };
