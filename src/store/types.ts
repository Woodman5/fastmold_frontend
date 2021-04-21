export interface RootState {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: unknown;
  version?: string;
  hardScales?: HardScale[];
  colors?: Color[];
  materials?: Material[];
}

export interface HardScale {
  name?: string,
  slug?: string,
  hs_max?: number,
  hs_min?: number,
  hs_units?: string | null,
  id: number
}

export interface Color {
  name: string,
  slug: string,
  color_type: string,
  hex_code: string,
  rgb_code: string,
  id: number
}

export interface Material {
  name: string,
  slug: string,
  short_desc: string | null,
  manufacturer: Manufacturer | null,
  country: string | null,
  url: string | null,
  mat_type: MaterialType | null,
  application: any,
  matcolor: Color[] | null,
  updated: null | Date | string,
  id: number,
  created: Date | string,
  matcomponent: null,
  cust_param: null,
  type_technology: TypeTechnology[] | null,
  mat: Mat | null,
  mech: Mech | null,
  p3d: Print3D | null,
  gfrp: GFRP | null,
  filler: null,
  tech_param: TechParams | null
}

export interface TypeTechnology {
  id: number,
  description: string | null,
  short_desc: string | null,
  name: string,
  slug: string,
  technology: Technology
}

export interface Technology {
  id: number
}

export interface Manufacturer {
  id: number,
  country: string,
  url: string,
  description: string | null,
  short_desc: string | null,
  name: string,
  slug: string
}

export interface MaterialType {
  id: number,
  name: string,
  slug: string
}

export interface Mat {
  id: number,
  hardness?: number,
  viscosity?: number,
  temp_viscosity?: number,
  density?: number,
  hard_scale?: HardScale
}

export interface Mech {
  id: number,
  tensile_strength?: number,
  flexural_strength?: number,
  compres_strength?: number,
  shear_strength?: number,

  flex_str_st?: MesuringStandart,
  shear_str_st?: MesuringStandart,
  compres_str_st?: MesuringStandart,
  tens_str_st?: MesuringStandart
}

export interface MesuringStandart {
  id: number
}

export interface GFRP {
  id: number,
  resin_type?: string,
  accel?: boolean,
  pre_accel?: boolean,
  hardener_percent?: number,
  accel_percent?: number,
  styrene_percent?: number
}

export interface TechParams {
  id: number,
  mix_density?: number,
  wall_thickness_min?: number,
  wall_thickness_max?: number
}

export interface Print3D {
  id: number,
  mat_form?: string,
  supp_removing_desc?: string,
  fraction_dim?: number,
  filament_diam?: number,
  support?: boolean,
  supp_removing?: boolean,
  heat_release?: number,
}






