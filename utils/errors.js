// Bad Request — invalid data or invalid ID
const BAD_REQUEST = 400;

// Not Found — user/item not found, or non-existent address
const NOT_FOUND = 404;

// Internal Server Error — default fallback
const INTERNAL_SERVER_ERROR = 500;

module.exports = {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
};
