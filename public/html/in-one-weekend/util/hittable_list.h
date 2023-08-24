#ifndef HITTABLE_LIST_H
#define HITTABLE_LIST_H

#include "rtweekend.h"
#include "hittable.h"

#include <memory>
#include <vector>

class hittable_list : public hittable {
  public:
    hittable_list() {}
    hittable_list(std::shared_ptr<hittable> object) {add(object);}

    void clear() {
      objects.clear();
    }

    void add(std::shared_ptr<hittable> object) {
      objects.push_back(object);
    }

    virtual bool hit(const ray& r, double t_min, double t_max, hit_record& rec) const override;

  public:
    std::vector<shared_ptr<hittable>> objects;
};

bool hittable_list::hit(const ray& r, double t_min, double t_max, hit_record& rec) const {
  // probably want to distinguish between objects in front or behind
  hit_record rec_temp;
  bool is_hit = false;
  double closest_hit = t_max;
  
  for(const auto &obj : objects) {
    if (obj->hit(r, t_min, closest_hit, rec_temp)) {
      is_hit = true;
      closest_hit = rec_temp.t;
      rec = rec_temp;
    }
  }

  return is_hit;
}  


#endif
