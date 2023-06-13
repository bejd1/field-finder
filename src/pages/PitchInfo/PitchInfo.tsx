import "./PitchInfo.css";
import "../../components/PitchDataBase/PitchDataBase";
import { pitchDataBase } from "../../components/PitchDataBase/PitchDataBase";
import { X, Check2 } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export type PitchProps = {
  id: number;
  city: string;
  name: string;
  address: string;
  phoneNumber: number;
  webPage: string;
  email: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  parking: boolean;
  dressingRoom: boolean;
  toilet: boolean;
  prize: string;
  photo1: string;
  photo2: string;
  photo3: string;
};

const PitchInfo: React.FC<PitchProps> = () => {
  const [items, setItems] = useState<PitchProps[]>([...pitchDataBase]);
  const { id } = useParams();

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="vh">
        <h2>This page does not exist</h2>
        <Link to="/" className="not__exit-btn">
          BACK TO HOME
        </Link>
      </div>
    );
  }

  return (
    <div className="pitch-info-container">
      <div className="pitch-info-container-map" key={id}>
        <h4 className="pitch-info-container-title">Info</h4>
        <div className="pitch-info-container-text-top">
          <div className="pitch-info-container-text-left">
            <h4>Football pitch</h4>
            <p>City: {item.city}</p>
            <p>Name: {item.name}</p>
            <p>Adress: {item.address}</p>
            <p>Phone number: {item.phoneNumber}</p>
            <p>Web page: {item.webPage}</p>
            <p>Email: {item.email}</p>
          </div>
          <div className="pitch-info-container-text-center">
            <h4>Opening hours</h4>
            <p>Monday: {item.monday}</p>
            <p>Tuesday: {item.tuesday}</p>
            <p>Wednesday: {item.wednesday}</p>
            <p>Thursday: {item.thursday}</p>
            <p>Friday: {item.friday}</p>
            <p>Saturday: {item.saturday}</p>
            <p>Sunday: {item.sunday}</p>
          </div>
          <div className="pitch-info-container-text-right">
            <h4>More</h4>
            <p>
              Parking:
              {item.parking ? (
                <Check2 color="green" size={26} className="check-icon" />
              ) : (
                <X color="red" size={28} />
              )}
            </p>
            <p>
              Dressing room:
              {item.dressingRoom ? (
                <Check2 color="green" size={26} className="check-icon" />
              ) : (
                <X color="red" size={28} />
              )}
            </p>
            <p>
              Toilet:
              {item.toilet ? (
                <Check2 color="green" size={26} className="check-icon" />
              ) : (
                <X color="red" size={28} />
              )}
            </p>
            <p>
              Prize: {item.prize}
              <span>/h</span>
            </p>
          </div>
        </div>
        <div className="pitch-info-container-text-middle">
          <h4 className="pitch-info-container-photos-title">Photos</h4>
          <div className="pitch-info-container-photos">
            <div className="pitch-info-container-photos-1">
              <img
                className="pitch-info-container-photos-1-img"
                src={item.photo1}
                alt="basketball place."
              />
            </div>
            <div className="pitch-info-container-photos-2">
              <img
                className="pitch-info-container-photos-2-img"
                src={item.photo2}
                alt="football pitch."
              />
            </div>
            <div className="pitch-info-container-photos-3">
              <img
                className="pitch-info-container-photos-3-img"
                src={item.photo3}
                alt="football pitch with some people who plays."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchInfo;
