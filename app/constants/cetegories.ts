import { BsSnow } from "react-icons/bs";
import { FaBuilding, FaCouch, FaHome, FaHouseUser, FaRegClock, FaSkiing, FaUserFriends } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdApartment, MdBedroomBaby, MdBedroomParent, MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { Category } from "../types/categories";

export const categories = [
  {
    label: "Garsoniera",
    icon: FaCouch,
    description: "This property have only a room!",
  },
  {
    label: "Camera in chirie",
    icon: FaUserFriends,
    description: "This property is only a room!",
  },
  {
    label: "Camin privat",
    icon: FaBuilding,
    description: "This property is private student residence!",
  },
  {
    label: "Cazare temporara",
    icon: FaRegClock,
    description: "This property is only for a short period of time!",
  },
  {
    label: "In gazda",
    icon: FaHome,
    description: "This property is owner-occupied!",
  },
  {
    label: "Apartament",
    icon: MdApartment,
    description: "This property is an apartament!",
  },
] as Category[];
