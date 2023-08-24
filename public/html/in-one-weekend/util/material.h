#ifndef MATERIAL_H
#define MATERIAL_H

#include "ray.h"
#include "rtweekend.h"
#include "vec3.h"

struct hit_record;

class material {
public:
  virtual bool scatter(const ray &r_in, const hit_record &rec,
                       color &attenuation, ray &scattered) const = 0;
};

class lambertian : public material {
public:
  lambertian(const color &a) : albedo(a) {}

  virtual bool scatter(const ray &r_in, const hit_record &rec,
                       color &attenuation, ray &scattered) const override {
    vec3 scatter_direction = rec.norm + random_unit_vector();

    if (scatter_direction.near_zero()) {
      scatter_direction = rec.norm;
    }

    scattered = ray(rec.point, scatter_direction);
    attenuation = albedo;
    return true;
  }

public:
  color albedo;
};

class metal : public material {
public:
  metal(const color &a) : albedo(a), fuzz(0) {}
  metal(const color &a, double f) : albedo(a), fuzz(f < 1 ? f : 1) {}

  virtual bool scatter(const ray &r_in, const hit_record &rec,
                       color &attenuation, ray &scattered) const override {
    vec3 reflection_direction =
        reflect(unit_vector(r_in.direction()), rec.norm);

    attenuation = albedo;
    scattered =
        ray(rec.point, reflection_direction + fuzz * random_unit_vector());
    return (dot(scattered.direction(), rec.norm) > 0);
  }

public:
  color albedo;
  double fuzz;
};

class dielectric : public material {
public:
  dielectric(double index_of_refraction) : ir(index_of_refraction) {}

  virtual bool scatter(const ray &r_in, const hit_record &rec,
                       color &attenuation, ray &scattered) const override {
    // attenuation should always be 1 - because the sphere doesn't absorb
    // anything.
    attenuation = color(1, 1, 1);
    double refraction_ratio = rec.front_face ? (1.0 / ir) : ir;
    vec3 unit_dir = unit_vector(r_in.direction());

    double cos_theta = fmin(dot(-unit_dir, rec.norm), 1.0);
    double sin_theta = sqrt(1.0 - cos_theta * cos_theta);

    // if you cannot refract
    bool cannot_refract = refraction_ratio * sin_theta > 1.0;
    vec3 direction;
    if (cannot_refract || reflectance(cos_theta, refraction_ratio) > random_double()) {
      direction = reflect(unit_dir, rec.norm);
    } else {
      direction = refract(unit_dir, rec.norm, refraction_ratio);
    }

    scattered = ray(rec.point, direction);
    return true;
  }

public:
  double ir;

private:
  static double reflectance(double cosine, double ref_indx) {
    // use schlick approximation for reflectance
    auto r0 = (1 - ref_indx) / (1 + ref_indx);
    r0 = r0 * r0;
    return r0 + (1 - r0) * pow((1 - cosine), 5);
  }
};

#endif
