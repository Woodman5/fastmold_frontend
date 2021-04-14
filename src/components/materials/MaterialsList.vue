<template>
  <div></div>
</template>

<script>
  export default {
    name: "MaterialsList",
    data() {
      return {
        "count": 26,
        "next": "http://localhost:8000/api/v1/materials?format=json&page=2",
        "previous": null,
        "results": [{
          "id": 1,
          "name": "ABS-M30",
          "manufacturer": {
            "id": 1,
            "name": "Stratasys",
            "country": [{
              "code": "IL",
              "name": "Израиль"
            }, {
              "code": "US",
              "name": "Соединенные Штаты Америки"
            }]
          },
          "material_type": {
            "id": 1,
            "material_type": "Пластик (нить)"
          },
          "typetechnology": [{
            "id": 2,
            "name": "FDM (Fused Deposition Modeling)",
            "technology": 1
          }, {
            "id": 10,
            "name": "FFF (Fused Filament Fabrication)",
            "technology": 1
          }],
          "country": {
            "code": "RU",
            "name": "Россия"
          },
          "application": ["Cocpit doors", "Galley carts"],
          "mat_hardness": {
            "value": 110,
            "scale": {
              "name": "Роквелл R",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.04,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 1,
            "name": "Белый",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }, {
            "id": 2,
            "name": "Слоновая кость",
            "color_type": "simple",
            "rgb_code": "255 255 240"
          }, {
            "id": 3,
            "name": "Красный",
            "color_type": "simple",
            "rgb_code": "255 0 0"
          }, {
            "id": 6,
            "name": "Синий",
            "color_type": "simple",
            "rgb_code": "0 0 255"
          }, {
            "id": 8,
            "name": "Черный",
            "color_type": "simple",
            "rgb_code": "0 0 0"
          }, {
            "id": 234,
            "name": "Темно-серый",
            "color_type": "simple",
            "rgb_code": "73 66 61"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 2,
          "name": "Nylon 12CF",
          "manufacturer": {
            "id": 1,
            "name": "Stratasys",
            "country": [{
              "code": "IL",
              "name": "Израиль"
            }, {
              "code": "US",
              "name": "Соединенные Штаты Америки"
            }]
          },
          "material_type": {
            "id": 1,
            "material_type": "Пластик (нить)"
          },
          "typetechnology": [{
            "id": 2,
            "name": "FDM (Fused Deposition Modeling)",
            "technology": 1
          }, {
            "id": 10,
            "name": "FFF (Fused Filament Fabrication)",
            "technology": 1
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": null,
            "scale": null,
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.15,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 8,
            "name": "Черный",
            "color_type": "simple",
            "rgb_code": "0 0 0"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 3,
          "name": "ABS",
          "manufacturer": {
            "id": 8,
            "name": "REC 3D",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 1,
            "material_type": "Пластик (нить)"
          },
          "typetechnology": [{
            "id": 2,
            "name": "FDM (Fused Deposition Modeling)",
            "technology": 1
          }, {
            "id": 10,
            "name": "FFF (Fused Filament Fabrication)",
            "technology": 1
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 112,
            "scale": {
              "name": "Роквелл R",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.05,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 1,
            "name": "Белый",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }, {
            "id": 3,
            "name": "Красный",
            "color_type": "simple",
            "rgb_code": "255 0 0"
          }, {
            "id": 4,
            "name": "Желтый",
            "color_type": "simple",
            "rgb_code": "255 255 0"
          }, {
            "id": 5,
            "name": "Зеленый",
            "color_type": "simple",
            "rgb_code": "0 128 0"
          }, {
            "id": 6,
            "name": "Синий",
            "color_type": "simple",
            "rgb_code": "0 0 255"
          }, {
            "id": 7,
            "name": "Фиолетовый",
            "color_type": "simple",
            "rgb_code": "139 0 255"
          }, {
            "id": 8,
            "name": "Черный",
            "color_type": "simple",
            "rgb_code": "0 0 0"
          }, {
            "id": 9,
            "name": "Серый",
            "color_type": "simple",
            "rgb_code": "128 128 128"
          }, {
            "id": 11,
            "name": "Голубой",
            "color_type": "simple",
            "rgb_code": "66 170 255"
          }, {
            "id": 12,
            "name": "Оранжевый",
            "color_type": "simple",
            "rgb_code": "255 165 0"
          }, {
            "id": 13,
            "name": "Серебристый",
            "color_type": "simple",
            "rgb_code": "192 192 192"
          }, {
            "id": 14,
            "name": "Салатовый",
            "color_type": "simple",
            "rgb_code": "153 255 153"
          }, {
            "id": 15,
            "name": "Коричневый",
            "color_type": "simple",
            "rgb_code": "150 75 0"
          }, {
            "id": 16,
            "name": "Золотистый",
            "color_type": "simple",
            "rgb_code": "255 215 0"
          }, {
            "id": 17,
            "name": "Розовый",
            "color_type": "simple",
            "rgb_code": "255 192 203"
          }],
          "components": [{
            "id": 1,
            "component": {
              "id": 2,
              "name": "Nylon 12CF"
            },
            "comp_index": "A",
            "composition": "",
            "proportions_weight": null,
            "proportions_volume": null
          }, {
            "id": 2,
            "component": {
              "id": 1,
              "name": "ABS-M30"
            },
            "comp_index": "B",
            "composition": "",
            "proportions_weight": null,
            "proportions_volume": null
          }],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": {
            "id": 1,
            "mix_density": null,
            "mix_density_st": null,
            "wall_thickness_min": "1.00",
            "wall_thickness_min_desc": "",
            "wall_thickness_max": "10.00",
            "wall_thickness_max_desc": "",
            "hole_min": "1.00",
            "fillet_min": "0.00",
            "part_volume_max": "188.0",
            "painting": "Окраска в массе пигментами, Окрашивание поверхности, Окрашивание в оснастке",
            "tool_tempr_start": null,
            "tool_tempr_start_desc": "",
            "comp_tempr_start": null,
            "comp_tempr_time": null,
            "comp_tempr_start_desc": "",
            "degasation": null,
            "degasation_time": null,
            "degasation_desc": "",
            "mixing_degasation": 1,
            "mixing_degasation_desc": "",
            "mixing_time": 90,
            "mixing_desc": "",
            "life_time": 45,
            "life_time_desc": "",
            "life_time_st": {
              "st_type": "ISO",
              "standard": "fdghr"
            },
            "life_time_temp_min": 21,
            "life_time_temp_max": 56,
            "degasation_before_molding": null,
            "degasation_before_molding_time": null,
            "degasation_before_molding_desc": "",
            "degasation_during_molding": null,
            "degasation_during_molding_time": null,
            "degasation_during_molding_desc": "",
            "curing_inmold_time": null,
            "temp_curing_inmold_min": null,
            "temp_curing_inmold_max": null,
            "curing_inmold_desc": "",
            "demold_time": 90,
            "demold_time_desc": "hjkgulgulio",
            "demold_time_temp_min": 5,
            "demold_time_temp_max": 10,
            "curing_time": 90,
            "curing_time_desc": "",
            "curing_time_temp_min": 5,
            "curing_time_temp_max": 10
          },
          "custom_params": []
        }, {
          "id": 4,
          "name": "PLA",
          "manufacturer": {
            "id": 8,
            "name": "REC 3D",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 1,
            "material_type": "Пластик (нить)"
          },
          "typetechnology": [{
            "id": 2,
            "name": "FDM (Fused Deposition Modeling)",
            "technology": 1
          }, {
            "id": 10,
            "name": "FFF (Fused Filament Fabrication)",
            "technology": 1
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": null,
            "scale": null,
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.25,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 1,
            "name": "Белый",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }, {
            "id": 3,
            "name": "Красный",
            "color_type": "simple",
            "rgb_code": "255 0 0"
          }, {
            "id": 4,
            "name": "Желтый",
            "color_type": "simple",
            "rgb_code": "255 255 0"
          }, {
            "id": 5,
            "name": "Зеленый",
            "color_type": "simple",
            "rgb_code": "0 128 0"
          }, {
            "id": 6,
            "name": "Синий",
            "color_type": "simple",
            "rgb_code": "0 0 255"
          }, {
            "id": 7,
            "name": "Фиолетовый",
            "color_type": "simple",
            "rgb_code": "139 0 255"
          }, {
            "id": 8,
            "name": "Черный",
            "color_type": "simple",
            "rgb_code": "0 0 0"
          }, {
            "id": 9,
            "name": "Серый",
            "color_type": "simple",
            "rgb_code": "128 128 128"
          }, {
            "id": 11,
            "name": "Голубой",
            "color_type": "simple",
            "rgb_code": "66 170 255"
          }, {
            "id": 12,
            "name": "Оранжевый",
            "color_type": "simple",
            "rgb_code": "255 165 0"
          }, {
            "id": 13,
            "name": "Серебристый",
            "color_type": "simple",
            "rgb_code": "192 192 192"
          }, {
            "id": 15,
            "name": "Коричневый",
            "color_type": "simple",
            "rgb_code": "150 75 0"
          }, {
            "id": 16,
            "name": "Золотистый",
            "color_type": "simple",
            "rgb_code": "255 215 0"
          }, {
            "id": 18,
            "name": "Бежевый",
            "color_type": "simple",
            "rgb_code": "245 245 220"
          }, {
            "id": 19,
            "name": "Малиновый",
            "color_type": "simple",
            "rgb_code": "220 20 60"
          }, {
            "id": 20,
            "name": "Темно-зеленый",
            "color_type": "simple",
            "rgb_code": "1 50 32"
          }, {
            "id": 235,
            "name": "Натуральный",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }, {
            "id": 236,
            "name": "Бирюзовый",
            "color_type": "simple",
            "rgb_code": "48 213 200"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 5,
          "name": "HIPS",
          "manufacturer": {
            "id": 8,
            "name": "REC 3D",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 1,
            "material_type": "Пластик (нить)"
          },
          "typetechnology": [{
            "id": 2,
            "name": "FDM (Fused Deposition Modeling)",
            "technology": 1
          }, {
            "id": 10,
            "name": "FFF (Fused Filament Fabrication)",
            "technology": 1
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 79,
            "scale": {
              "name": "Роквелл L",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.03,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 235,
            "name": "Натуральный",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 6,
          "name": "LasilCast 1 (LC1)",
          "manufacturer": {
            "id": 12,
            "name": "Лассо",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 10,
            "material_type": "Полиуретан литьевой"
          },
          "typetechnology": [{
            "id": 11,
            "name": "Литье ПУ свободное",
            "technology": 4
          }, {
            "id": 12,
            "name": "Литье ПУ под давлением",
            "technology": 4
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 75,
            "scale": {
              "name": "Шор D",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.05,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 238,
            "name": "Кремовый",
            "color_type": "simple",
            "rgb_code": "253 244 227"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 7,
          "name": "LasilCast 2 (LC2)",
          "manufacturer": {
            "id": 12,
            "name": "Лассо",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 10,
            "material_type": "Полиуретан литьевой"
          },
          "typetechnology": [{
            "id": 11,
            "name": "Литье ПУ свободное",
            "technology": 4
          }, {
            "id": 12,
            "name": "Литье ПУ под давлением",
            "technology": 4
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 75,
            "scale": {
              "name": "Шор D",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.05,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 238,
            "name": "Кремовый",
            "color_type": "simple",
            "rgb_code": "253 244 227"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 8,
          "name": "LasilCast 3 (LC3)",
          "manufacturer": {
            "id": 12,
            "name": "Лассо",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 10,
            "material_type": "Полиуретан литьевой"
          },
          "typetechnology": [{
            "id": 11,
            "name": "Литье ПУ свободное",
            "technology": 4
          }, {
            "id": 12,
            "name": "Литье ПУ под давлением",
            "technology": 4
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 70,
            "scale": {
              "name": "Шор D",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.08,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 1,
            "name": "Белый",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 9,
          "name": "LasilCast 4 (LC4)",
          "manufacturer": {
            "id": 12,
            "name": "Лассо",
            "country": [{
              "code": "RU",
              "name": "Россия"
            }]
          },
          "material_type": {
            "id": 10,
            "material_type": "Полиуретан литьевой"
          },
          "typetechnology": [{
            "id": 11,
            "name": "Литье ПУ свободное",
            "technology": 4
          }, {
            "id": 12,
            "name": "Литье ПУ под давлением",
            "technology": 4
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 70,
            "scale": {
              "name": "Шор D",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.08,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 1,
            "name": "Белый",
            "color_type": "simple",
            "rgb_code": "255 255 255"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }, {
          "id": 10,
          "name": "F 180",
          "manufacturer": {
            "id": 11,
            "name": "Sika",
            "country": [{
              "code": "CH",
              "name": "Швейцария"
            }]
          },
          "material_type": {
            "id": 10,
            "material_type": "Полиуретан литьевой"
          },
          "typetechnology": [{
            "id": 11,
            "name": "Литье ПУ свободное",
            "technology": 4
          }, {
            "id": 12,
            "name": "Литье ПУ под давлением",
            "technology": 4
          }],
          "country": "",
          "application": "",
          "mat_hardness": {
            "value": 74,
            "scale": {
              "name": "Шор D",
              "units": "-"
            },
            "standard": null,
            "simple": null
          },
          "mat_density": {
            "value": 1.06,
            "standard": null
          },
          "mat_viscosity": {
            "value": null,
            "standard": null,
            "temp": null
          },
          "color": [{
            "id": 18,
            "name": "Бежевый",
            "color_type": "simple",
            "rgb_code": "245 245 220"
          }],
          "components": [],
          "thermal_characteristics": null,
          "shock_load": null,
          "mechanical_chars": null,
          "electric_props": null,
          "burn": null,
          "printing3d": null,
          "silicone": null,
          "resin": null,
          "fiber": null,
          "prepreg": null,
          "mineral_filler": null,
          "core": null,
          "storage": null,
          "files": null,
          "process": null,
          "custom_params": []
        }]
      }

    },
  }
</script>

<style scoped>

</style>
