#ifndef RTWEEKEND_H
#define RTWEEKEND_H

#include <cmath>
#include <limits>
#include <memory>
#include <cstdlib>

// usings
using std::shared_ptr;
using std::make_shared;
using std::sqrt;

// constants
const double infinity = std::numeric_limits<double>::infinity();
const double pi = 3.1415926535897932385;

// utility functions
inline double deg_to_rad(double degrees) {
  return degrees * pi / 180.0;
}

// random doubles
inline double random_double() {
  // Returns a random real in [0,1).
  return rand() / (RAND_MAX + 1.0);
}

inline double random_double(double min, double max) {
  return min + (max - min) * random_double();
}

// clamp a number within a range.
inline double clamp(double x, double min, double max) {
  if (x < min) return min;
  if (x > max) return max;
  return x;
}

// common headers
#include "ray.h"
#include "vec3.h"

#endif
